import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
          consequatur, harum pariatur provident rerum placeat magni voluptas
          consectetur in exercitationem nobis aut, molestiae iure possimus
          aspernatur nesciunt laudantium ab atque.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
