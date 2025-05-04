import Experience from '@/components/sections/experience'
import Links from '@/components/links'

export default function About() {
  return (
    <div className="font-base min-h-[calc(100vh-12rem)]">
      <h2 className="mb-8 text-2xl font-heading sm:text-4xl">About</h2>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Hello! I'm Nufar, a product person living and working in London. Currently, I work at the LEGO group, helping tech teams work well together and deliver great products. Before coming to LEGO, I was the Chief Product Officer at Applied, a tech-for-good startup using behavioural science to debias hiring. I geek out over all things Product Management, building high performing teams, and using psychology and behavioural science.
        </p>
      </div>

      <div className="mb-10">
        <a
          href="mailto:hello@nufargalin.com"
          className="border-2 border-border rounded-base p-2 bg-[#74fbdb] shadow-shadow w-48 max-w-xs flex-shrink-0 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none text-foreground font-base text-center block text-sm sm:text-base"
        >
          Work with me
        </a>
      </div>

      <div className="mb-16">
        <Links />
      </div>

      <Experience />
    </div>
  )
}
