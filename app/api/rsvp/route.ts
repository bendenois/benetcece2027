// app/api/rsvp/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const RsvpSchema = z.object({
  firstName:        z.string().min(1),
  lastName:         z.string().min(1),
  email:            z.string().email(),
  attending:        z.boolean(),
  attendingBrunch:  z.boolean().default(false),
  arrivalDay:       z.enum(["FRIDAY", "SATURDAY"]).nullable().optional(),
  menuChoice:       z.enum(["STANDARD", "VEGETARIAN"]).default("STANDARD"),
  allergies:        z.string().optional(),
  hasPlusOne:       z.boolean().default(false),
  plusOneFirstName: z.string().optional(),
  plusOneLastName:  z.string().optional(),
  plusOneMenu:      z.enum(["STANDARD", "VEGETARIAN"]).optional(),
  plusOneAllergies: z.string().optional(),
  childrenCount:    z.number().int().min(0).default(0),
});

// GET : récupère un RSVP existant par email (pour préremplir le formulaire)
export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email) return NextResponse.json({ error: "Email manquant" }, { status: 400 });

  const rsvp = await prisma.rsvp.findUnique({ where: { email } });
  if (!rsvp) return NextResponse.json(null, { status: 404 });

  return NextResponse.json(rsvp);
}

// POST : crée ou met à jour un RSVP (upsert sur l'email)
export async function POST(req: NextRequest) {
  const body = await req.json();
  const parsed = RsvpSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
  }

  const { email, ...data } = parsed.data;

  const rsvp = await prisma.rsvp.upsert({
    where:  { email },
    update: { ...data, updatedAt: new Date() },
    create: { email, ...data },
  });

  return NextResponse.json(rsvp, { status: 201 });
}