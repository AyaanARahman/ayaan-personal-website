import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-center title-color">
        So Whose Page Are You Looking At Right Now?
      </h1>

      <div className="flex justify-center mb-8">
  <div className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-white shadow-lg">
    <Image
      src="/profile.jpg"
      alt="A picture of me"
      fill
      className="object-cover object-[20%_30%]"
    />
  </div>
</div>

      <p className="mb-4 p-font-color">
        {`Hi, I’m Ayaan Rahman, a passionate and detail-oriented software engineer with a knack for crafting scalable, 
        user-focused solutions. With experience in full-stack development, I’ve worked on impactful projects that leverage modern 
        technologies like Python, Java, JavaScript, and Django, as well as platforms like Adobe Experience Manager and Heroku. My 
        technical expertise includes solving complex problems in web development, integrating APIs, and building reusable components 
        that streamline workflows and enhance user experiences.`}
      </p>
      <p className="mb-4 p-font-color">
        {`Beyond the code, I’m driven by curiosity and a love for learning. My recent work includes enhancing accessibility and 
        performance for web applications, developing dynamic features for enterprise systems, and collaborating with cross-functional 
        teams to deliver high-quality software. During my time as an intern at Navy Federal Credit Union, I tackled industry challenges 
        like addressing vulnerabilities, optimizing performance, and implementing innovative designs that are now used by teams across 
        the organization.`}
      </p>
      <p className="mb-4 p-font-color">
        {`When I’m not coding, you can find me mentoring students, competing in pickleball tournaments, or exploring entrepreneurial 
        ideas with fellow innovators. My journey has been shaped by a commitment to excellence, a drive to continuously grow, and a 
        deep respect for teamwork and collaboration.`}
      </p>

    </section>
  )
}
