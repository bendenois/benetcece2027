// =====================
// app/page.tsx (Home)
// =====================
import TopBar from '@/components/TopBar'
import Countdown from '@/components/Countdown'

export default function Home() {
    return (
        <div className="flex flex-col">
            <TopBar imageSrc="/images/mariage-banner.jpeg" />
            <div className="text-center space-y-6 py-12 px-6 bg-background">
                <p className="text-xl md:text-2xl text-primary">
                    Bienvenue sur notre site de mariage. Nous avons hâte de célébrer ce moment avec vous.
                </p>
                <Countdown targetDate="2027-07-24T15:00:00" />
            </div>
        </div>
    )
}