import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Thought() {
  return (
    <div className="min-h-[calc(100vh-12rem)]">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Thoughts</h1>

      <div className="flex flex-col gap-5">
        {/* New Medium Article Card */}
        <div className="border-border shadow-shadow rounded-base bg-main dark:bg-[#1c0252] border-2 p-4 sm:p-5 text-main-foreground">
          <AspectRatio
            className="border-border shadow-shadow rounded-base -bottom-[2px]! border-2 bg-white flex items-center justify-center"
            ratio={71 / 26}
          >
            <img
              className="rounded-base max-h-full max-w-full object-contain"
              src="/vibe-coding-article-compressed.jpg"
              alt="Vibe coding a personal website article illustration"
            />
          </AspectRatio>

          <div className="text-main-foreground font-base mt-5">
            <h2 className="font-heading text-xl sm:text-2xl">
              Vibe coding a personal website
            </h2>

            <p className="mt-2">A look at building this website: my motivations, the tools I chose, and tips for anyone wanting to experiment with vibe-coding their own personal site without overcomplicating things.</p>

            <div className="mt-4 text-sm text-main-foreground">
              <span>June 2025</span>
              <span className="mx-2">•</span>
              <span>4 min read</span>
            </div>

            <div className="mt-8">
              <a
                className="border-2 border-border rounded-base p-2 bg-secondary-background shadow-shadow w-48 max-w-xs flex-shrink-0 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none text-foreground font-base text-center block text-sm sm:text-base cursor-pointer"
                href="https://medium.com/@nufar.galin/vibe-coding-a-personal-website-why-i-did-it-what-i-used-and-how-you-can-do-it-without-making-the-ab41977a6772"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="border-border shadow-shadow rounded-base bg-main dark:bg-[#1c0252] border-2 p-4 sm:p-5 text-main-foreground">
          <AspectRatio
            className="border-border shadow-shadow rounded-base -bottom-[2px]! border-2 bg-white flex items-center justify-center"
            ratio={71 / 26}
          >
            <img
              className="rounded-base max-h-full max-w-full object-contain"
              src="/Business-reading-timeline-2024.jpg"
              alt="2024 in business books timeline"
            />
          </AspectRatio>

          <div className="text-main-foreground font-base mt-5">
            <h2 className="font-heading text-xl sm:text-2xl">
              My 2024 in Business Books: An Overview with Top 10 Recommendations
            </h2>

            <p className="mt-2">A curated list of the most impactful business books I&apos;ve read this year, with personal insights and recommendations for different interests and needs.</p>

            <div className="mt-4 text-sm text-main-foreground">
              <span>January 2025</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>

            <div className="mt-8">
              <a
                className="border-2 border-border rounded-base p-2 bg-secondary-background shadow-shadow w-48 max-w-xs flex-shrink-0 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none text-foreground font-base text-center block text-sm sm:text-base cursor-pointer"
                href="https://medium.com/@nufar.galin/my-2024-in-business-books-an-overview-with-top-10-recommendations-17dc7f0c80af"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
