import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Thought() {
  return (
    <div className="min-h-[calc(100vh-12rem)]">
      <h1 className="font-heading mb-8 text-2xl sm:text-4xl">Thoughts</h1>

      <div className="flex flex-col gap-5">
        <div className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5 dark:text-black">
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

          <div className="text-main-foreground font-base mt-5 dark:text-black">
            <h2 className="font-heading text-xl sm:text-2xl dark:text-black">
              My 2024 in Business Books: An Overview with Top 10 Recommendations
            </h2>

            <p className="mt-2 dark:text-black">A curated list of the most impactful business books I've read this year, with personal insights and recommendations for different interests and needs.</p>

            <div className="mt-4 text-sm text-gray-600 dark:text-black">
              <span>March 2024</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>

            <div className="mt-8">
              <a
                className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
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