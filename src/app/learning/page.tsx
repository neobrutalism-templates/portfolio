import { useEffect, useState } from 'react';

export default function Learning() {
  return (
    <div className="font-base min-h-[calc(100vh-12rem)]">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Learning</h1>

      <div className="mb-16">
        <h2 className="mb-6 text-xl font-heading sm:text-2xl">Reading</h2>
        
        <div className="mb-10">
          <h3 className="mb-4 text-lg font-heading sm:text-xl">Newsletters</h3>
          <div className="text-base sm:text-lg">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <a href="https://tldr.tech/" target="_blank" rel="noopener noreferrer" className="text-main-foreground hover:underline font-semibold">TLDR</a>,{' '}
                <a href="https://tldr.tech/product" target="_blank" rel="noopener noreferrer" className="text-main-foreground hover:underline font-semibold">TLDR Product</a>,{' '}
                <a href="https://tldr.tech/design" target="_blank" rel="noopener noreferrer" className="text-main-foreground hover:underline font-semibold">TLDR Design</a>
                {' '}– to keep on top of daily news in a few minutes a day.
              </li>
              <li>
                <span className="font-semibold">Lenny's Newsletter</span> – for the top product management interviews and ongoings.
              </li>
              <li>
                <span className="font-semibold">Paweł Huryn's product compass</span> – thoughtful in-depth articles that feel less buzz-wordy than others, and deliver specific value. A great place to
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

        <div className="mb-10">
          <h3 className="mb-4 text-lg font-heading sm:text-xl">Books</h3>
          <div className="text-base sm:text-lg">
            <p>Coming soon...</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-xl font-heading sm:text-2xl">Listening/Watching</h2>
        <div className="text-base sm:text-lg">
          <h3 className="mb-4 text-lg font-heading sm:text-xl">Podcasts</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="border-2 border-border rounded-base p-4 bg-main shadow-shadow w-full sm:w-64 max-w-xs flex-shrink-0 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
              <a href="https://open.spotify.com/show/2dR1MUZEHCOnz1LVfNac0j?si=906fa740205d4c5b" target="_blank" rel="noopener noreferrer" className="text-main-foreground font-semibold text-lg block text-center">
                Lenny's Podcast
              </a>
            </div>
            <div className="border-2 border-border rounded-base p-4 bg-main shadow-shadow w-full sm:w-64 max-w-xs flex-shrink-0 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
              <a href="https://open.spotify.com/show/4aRP2XSavdtrLG5FZoonOK?si=7ebb55dbce664083" target="_blank" rel="noopener noreferrer" className="text-main-foreground font-semibold text-lg block text-center">
                How I AI
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-6 text-xl font-heading sm:text-2xl">Useful Tools</h2>
        <div className="text-base sm:text-lg">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a 
                href="https://www.canva.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-main-foreground hover:underline"
              >
                Canva
              </a>
            </li>
            <li>
              <a 
                href="https://cursor.sh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-main-foreground hover:underline"
              >
                Cursor
              </a>
            </li>
            <li>
              <a 
                href="https://trello.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-main-foreground hover:underline"
              >
                Trello
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 