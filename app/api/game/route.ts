// app/api/game/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const GameSchema = z.object({
    playerName: z.string().min(1),
    answers:    z.record(z.string(), z.string()),
});

// POST : enregistre les réponses d'un participant
export async function POST(req: NextRequest) {
    const body   = await req.json();
    const parsed = GameSchema.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
    }

    const entry = await prisma.gameEntry.create({
        data: {
            playerName: parsed.data.playerName,
            answers:    parsed.data.answers,
        },
    });

    return NextResponse.json(entry, { status: 201 });
}

// GET : liste toutes les participations (page admin)
export async function GET() {
    const entries = await prisma.gameEntry.findMany({
        orderBy: { submittedAt: "desc" },
    });
    return NextResponse.json(entries);
}