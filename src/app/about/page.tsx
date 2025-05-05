import Experience from '@/components/sections/experience'
import Links from '@/components/links'

export default function About() {
  return (
    <div className="font-base min-h-[calc(100vh-12rem)]">
      <h2 className="mb-8 text-2xl font-heading sm:text-4xl">About</h2>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Hello! I&apos;m Nufar, a product person living and working in London. Currently, I work at the LEGO group, helping tech teams work well together and deliver great products. Before coming to LEGO, I was the Chief Product Officer at Applied, a tech-for-good startup using behavioural science to debias hiring. I geek out over all things Product Management, building high performing teams, and using psychology and behavioural science.<br /><br /> This website is my experiment in vibe coding, using <a href="https://www.cursor.com/" target="_blank" rel="noopener noreferrer" className="text-main-foreground">Cursor</a> and learning as I go.
        </p>
      </div>

      <div className="mb-16">
        <Links />
      </div>

      <Experience />
    </div>
  )
}
