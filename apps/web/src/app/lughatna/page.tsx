import { LeaderboardShowcase } from "@/components/leaderboard-showcase"
import { LughatnaMap } from "@/components/lughatna-map"
import { LughatnaFeatures } from "@/components/lughatna-features"

export const metadata = {
  title: "Lughatna App - LocaleNLP",
  description: "Join our community in preserving African languages",
}

export default function LughatnaPage() {
  return (
    <div className="relative">
      {/* Hero section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Lughatna App
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Join our community in preserving and digitizing African languages
          </p>
        </div>
        <LughatnaMap />
      </section>

      {/* Features section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            App Features
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Discover how you can contribute to language preservation
          </p>
        </div>
        <LughatnaFeatures />
      </section>

      {/* Leaderboard section */}
      <section className="container py-24 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Top Contributors
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Meet our community champions
          </p>
        </div>
        <LeaderboardShowcase />
      </section>
    </div>
  )
}
