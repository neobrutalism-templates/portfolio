import { useEffect, useState } from 'react';

export default function Learning() {
  return (
    <div className="font-base min-h-[calc(100vh-12rem)]">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Learning</h1>

      <div className="mb-16">
        <h2 className="mb-6 text-xl font-heading sm:text-2xl">Newsletters</h2>
        <div className="text-base sm:text-lg">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://tldr.tech/" target="_blank" rel="noopener noreferrer" className="text-main-foreground hover:underline font-semibold">TLDR</a>,{' '}
              <a href="https://tldr.tech/product" target="_blank" rel="noopener noreferrer" className="text-main-foreground hover:underline font-semibold">TLDR Product</a>,{' '}
              <a href="https://tldr.tech/design" target="_blank" rel="noopener noreferrer" className="text-main-foreground hover:underline font-semibold">TLDR Design</a>
              {' '}– to keep on top of daily news in a few minutes a day.
            </li>
            <li>
              <a href="https://www.productcompass.pm/" target="_blank" rel="noopener noreferrer" className="text-main-foreground font-semibold hover:underline">Product Compass by Paweł Huryn</a> – thoughtful in-depth articles that feel less buzz-wordy than others, and deliver specific value.
            </li>
            <li>
              <a href="https://news.yuezhao.coach?r=44rsh" target="_blank" rel="noopener noreferrer" className="text-main-foreground hover:underline font-semibold">The Uncommon Executive by Yue Zhao</a> – great articles about leadership in tech.
            </li>
            <li>
              <a href="https://levelupwithethanevans.substack.com/" target="_blank" rel="noopener noreferrer" className="text-main-foreground hover:underline font-semibold">Level Up by Ethan Evans</a> – slightly less specific to startups, but still has some great content on leadership in tech and how to navigate different challenges.
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Recent Reading</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href="https://www.goodreads.com/book/show/3828902-thinking-in-systems"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-black dark:border-white rounded-lg flex gap-4 bg-white dark:bg-black shadow-shadow h-[160px]"
          >
            <div className="flex-shrink-0">
              <img 
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1390169859l/3828902._SY75_.jpg"
                alt="Thinking In Systems: A Primer"
                className="w-12 h-18 object-cover rounded"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="font-medium line-clamp-3">
                  Thinking In Systems: A Primer
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">by Donella H. Meadows</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black/20 dark:text-white/20">☆</span>
                <span className="text-black/20 dark:text-white/20">☆</span>
              </div>
            </div>
          </a>

          <a 
            href="https://www.goodreads.com/book/show/58261060-four-thousand-weeks"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-black dark:border-white rounded-lg flex gap-4 bg-white dark:bg-black shadow-shadow h-[160px]"
          >
            <div className="flex-shrink-0">
              <img 
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1649313831l/58261060._SY75_.jpg"
                alt="Four Thousand Weeks: Time Management for Mortals"
                className="w-12 h-18 object-cover rounded"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="font-medium line-clamp-3">
                  Four Thousand Weeks: Time Management for Mortals
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">by Oliver Burkeman</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black/20 dark:text-white/20">☆</span>
              </div>
            </div>
          </a>

          <a 
            href="https://www.goodreads.com/book/show/204884957-how-big-things-get-done"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-black dark:border-white rounded-lg flex gap-4 bg-white dark:bg-black shadow-shadow h-[160px]"
          >
            <div className="flex-shrink-0">
              <img 
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1704437468l/204884957._SY75_.jpg"
                alt="How Big Things Get Done"
                className="w-12 h-18 object-cover rounded"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="font-medium line-clamp-3">
                  How Big Things Get Done
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">by Bent Flyvbjerg</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black/20 dark:text-white/20">☆</span>
              </div>
            </div>
          </a>

          <a 
            href="https://www.goodreads.com/book/show/52963508-the-science-of-storytelling"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-black dark:border-white rounded-lg flex gap-4 bg-white dark:bg-black shadow-shadow h-[160px]"
          >
            <div className="flex-shrink-0">
              <img 
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1588763709l/52963508._SY75_.jpg"
                alt="The Science of Storytelling"
                className="w-12 h-18 object-cover rounded"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="font-medium line-clamp-3">
                  The Science of Storytelling
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">by Will Storr</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black/20 dark:text-white/20">☆</span>
              </div>
            </div>
          </a>

          <a 
            href="https://www.goodreads.com/book/show/218319936-the-nvidia-way"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 border-2 border-black dark:border-white rounded-lg flex gap-4 bg-white dark:bg-black shadow-shadow h-[160px]"
          >
            <div className="flex-shrink-0">
              <img 
                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1725343720l/218319936._SY75_.jpg"
                alt="The Nvidia Way: Jensen Huang and the Making of a Tech Giant"
                className="w-12 h-18 object-cover rounded"
              />
            </div>
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <div className="font-medium line-clamp-3">
                  The Nvidia Way: Jensen Huang and the Making of a Tech Giant
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">by Tae Kim</p>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-black dark:text-white">★</span>
                <span className="text-black dark:text-white">★</span>
                <span className="text-black/20 dark:text-white/20">☆</span>
                <span className="text-black/20 dark:text-white/20">☆</span>
                <span className="text-black/20 dark:text-white/20">☆</span>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="mb-16 mt-16">
        <h2 className="mb-6 text-xl font-heading sm:text-2xl">Podcasts</h2>
        <div className="text-base sm:text-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://www.lennysnewsletter.com/podcast"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-border rounded-lg flex gap-4 bg-main shadow-shadow flex items-center h-[100px] cursor-pointer"
            >
              <img
                src="/lennys-podcast.jpg"
                alt="Lenny's Podcast cover"
                className="w-14 h-14 object-cover rounded"
              />
              <span className="text-main-foreground font-semibold text-lg block">
                Lenny&apos;s Podcast
              </span>
            </a>
            <a
              href="https://open.spotify.com/show/4aRP2XSavdtrLG5FZoonOK?si=7ebb55dbce664083"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-border rounded-lg flex gap-4 bg-main shadow-shadow flex items-center h-[100px] cursor-pointer"
            >
              <img
                src="/how-i-ai.jpg"
                alt="How I AI podcast cover"
                className="w-14 h-14 object-cover rounded"
              />
              <span className="text-main-foreground font-semibold text-lg block">
                How I AI
              </span>
            </a>
            <a
              href="https://www.leahtharin.com/p/the-productea-with-leah"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border-2 border-border rounded-lg flex gap-4 bg-main shadow-shadow flex items-center h-[100px] cursor-pointer"
            >
              <img
                src="/productea-podcast.jpg"
                alt="ProducTea podcast cover"
                className="w-14 h-14 object-cover rounded"
              />
              <span className="text-main-foreground font-semibold text-lg block">
                ProducTea with Leah
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 
