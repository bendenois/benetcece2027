// =====================
// app/page.tsx (Home)
// =====================
import TopBar from '@/components/TopBar'
import Countdown from '@/components/Countdown'
import IconLine from '@/components/IconLine'
import PolaroidGallery from "@/components/PolaroidGallery";

export default function Home() {
    return (
        <div className="flex flex-col">
            <div className="countdown"><Countdown targetDate="2027-07-24T15:00:00"/></div>
            <div className="wedding-title">Benjamin & Céline</div>
            <IconLine />
            <PolaroidGallery />
        </div>
    )
}