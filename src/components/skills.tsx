export default function SkillsSection() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start gap-4 mb-16">
          <div className="max-w-xl">
            <h2 className="text-2xl font-medium mb-2">The tools of my trade?</h2>
            <p className="text-xl">
              A mix of tech that powers my projects and keeps the creativity flowing—because every masterpiece needs its
              trusty toolkit!
            </p>
          </div>
          <div className="flex-grow h-px bg-gray-700 mt-5"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
          {/* Row 1 */}
          <div className="flex justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              className="h-20 w-20"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              className="h-20 w-20"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="h-20 w-20"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              className="h-20 w-20"
            />
          </div>

          {/* Row 2 */}
          <div className="flex justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="h-20 w-20"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
              alt="Next.js"
              className="h-20 w-20 invert"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.surendarpd.dev/_next/static/media/tailwind.c4c4202b.svg"
              alt="Tailwind CSS"
              className="h-20 w-20"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              alt="Firebase"
              className="h-20 w-20"
            />
          </div>

          {/* Row 3 */}
          <div className="flex justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg"
              alt="Framer Motion"
              className="h-20 w-20"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL"
              className="h-20 w-20"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg"
              alt="Supabase"
              className="h-20 w-20"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
              alt="Docker"
              className="h-20 w-20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

