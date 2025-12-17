import { Header } from "@/components/header"
import { MeepleIcon } from "@/components/meeple-icon"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import texts from "@/texts.json"
import { SPACING } from "@/lib/constants"

export default function ClubPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className={`${SPACING.section} bg-secondary text-background opacity-100`}>
          <div className={`${SPACING.container} text-center`}>
            <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight font-display lg:text-6xl">
              {texts.club.hero.title}
            </h1>
          </div>
        </section>

        {/* Club Features */}
        <section className={`${SPACING.section} bg-muted/50`}>
          <div className={SPACING.container}>
            <p
              className={`text-3xl text-center text-balance ${SPACING.headingMargin} ${SPACING.maxWidthNarrow} leading-relaxed`}
            >
              {texts.club.features.text1}
            </p>
            <p
              className={`text-3xl text-center text-balance ${SPACING.headingMargin} ${SPACING.maxWidthNarrow} leading-relaxed`}
            >
              {texts.club.features.text2}
            </p>
            <h2
              className={`text-6xl md:text-7xl font-bold ${SPACING.headingMargin} text-center text-balance font-display mb-8`}
            >
              {texts.club.features.title}
            </h2>

            <div className={`grid md:grid-cols-2 ${SPACING.itemsGap} ${SPACING.maxWidthWide} mt-16`}>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MeepleIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-4xl font-bold font-display mb-6">{texts.club.rules.voluntariado.title}</h3>
                </div>
                <p className="text-xl font-medium">{texts.club.rules.voluntariado.subtitle}</p>
                <ul className="space-y-2">
                  {texts.club.rules.voluntariado.items.map((item: string, i: number) => (
                    <li key={i} className="text-lg text-balance flex gap-2">
                      <span>-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MeepleIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-4xl font-bold font-display mb-6">{texts.club.rules.convivencia.title}</h3>
                </div>
                <p className="text-xl font-medium">{texts.club.rules.convivencia.subtitle}</p>
                <ul className="space-y-2">
                  {texts.club.rules.convivencia.items.map((item: string, i: number) => (
                    <li key={i} className="text-lg text-balance flex gap-2">
                      <span>-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Local Section */}
        <section className={`${SPACING.section} bg-accent`}>
          <div className={SPACING.container}>
            <h2
              className={`text-6xl text-primary md:text-7xl font-bold ${SPACING.subheadingMargin} text-center text-balance font-display mb-8`}
            >
              {texts.club.local.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/empty-board-game-club-with-shelves-and-spacious-ro.jpg"
                  alt="Nuestro local"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-8">
                <p className="text-3xl leading-tight">{texts.club.local.subtitle}</p>
                <ul className="space-y-4">
                  {texts.club.local.items.map((item: string, i: number) => (
                    <li key={i} className="flex gap-3 items-center text-xl font-bold">
                      <MeepleIcon className="h-6 w-6 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className={`${SPACING.section} bg-secondary text-primary-foreground`}>
          <div className={SPACING.container}>
            <h2
              className={`text-6xl md:text-7xl font-bold ${SPACING.subheadingMargin} text-center text-balance font-display mb-8`}
            >
              {texts.club.location.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              {/* Map */}
              <div className="aspect-video bg-muted rounded-xl overflow-hidden border-2 border-primary-foreground/20 shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.089!2d-3.614!3d37.177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDEwJzM3LjIiTiAzwrAzNic1MC40Ilc!5e0!3m2!1ses!2ses!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                <div className="space-y-2">
                  <p className="text-3xl opacity-90">{texts.club.location.postalTitle}</p>
                  <p className="text-3xl">{texts.common.clubName}</p>
                  <p className="text-3xl">{texts.common.address.street}</p>
                  <p className="text-3xl">{texts.common.address.city}</p>
                </div>

                <Button
                  size="lg"
                  asChild
                  className="text-2xl bg-background text-secondary rounded-full border-0 p-6 font-display "
                >
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Pepita+Serrador+3,+Granada"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {texts.club.location.button}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Ludoteca Section */}
        <section className={SPACING.section}>
          <div className={`${SPACING.container} flex flex-col items-center`}>
            <h2 className={`text-6xl md:text-7xl ${SPACING.paragraphMargin}  font-display mb-8`}>
              {texts.club.library.title}
            </h2>
            <div className={`${SPACING.maxWidthNarrow} space-y-4 mb-12`}>
              <p className="text-xl leading-relaxed">{texts.club.library.subtitle}</p>
              <p className="text-xl leading-relaxed">{texts.club.library.description}</p>
              <p className="text-xl font-medium mt-8">{texts.club.library.tableNote}</p>
            </div>

            {/* Table Placeholder */}
            <div className="w-full max-w-5xl border-2 border-muted rounded-lg h-[600px] bg-muted/10 mb-16 relative overflow-hidden">
              <div className="absolute inset-0 flex flex-col">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="flex-1 border-b border-muted/50 w-full" />
                ))}
              </div>
            </div>

            <div className={`${SPACING.maxWidthNarrow}`}>
              <h3 className={`text-4xl font-bold ${SPACING.smallMargin} text-balance mb-6`}>
                {texts.club.library.moreGames.title}
              </h3>
              <p className={`text-xl ${SPACING.paragraphMargin} leading-relaxed`}>
                {texts.club.library.moreGames.description}
              </p>
              <Button
                size="lg"
                asChild
                className="font-display bg-secondary text-white hover:bg-secondary/90 text-2xl px-10 py-7 rounded-full shadow-lg transition-transform hover:scale-105"
              >
                <a href="https://chat.whatsapp.com/G9Q7y7y7y7y7y7y7y7y7y7" target="_blank" rel="noopener noreferrer">
                  {texts.common.whatsappGroup}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${SPACING.section} bg-muted/50 bg-secondary`}>
          <div className={`${SPACING.container} text-center`}>
            <h2
              className={`text-6xl md:text-7xl font-bold ${SPACING.smallMargin} text-center text-background font-display mb-8`}
            >
              {texts.club.cta.title}
            </h2>
            <p className={`text-xl text-background ${SPACING.subheadingMargin}`}>{texts.club.cta.subtitle}</p>
            <Button
              size="lg"
              asChild
              className="text-2xl text-secondary rounded-full border-0 p-6 font-display bg-background"
            >
              <Link href="/socio">{texts.club.cta.button}</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
