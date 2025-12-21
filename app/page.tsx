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
  {`Hi! I’m Ayaan Rahman, a software and solutions engineer who works at the intersection of code, systems, and customer-facing problem solving. I have hands-on experience diagnosing, debugging, and stabilizing production environments, and I enjoy turning ambiguous technical issues into reliable, scalable solutions. My background spans full-stack development, cloud-native systems, and enterprise platforms, using Java, Python, JavaScript, and modern web frameworks.`}
</p>

<p className="mb-4 p-font-color">
  {`Currently, I work as a Solution Engineer at Appian, where I troubleshoot real-world customer deployments involving distributed systems, Kubernetes-based infrastructure, and application performance issues. My role involves deep log analysis, configuration debugging, and root-cause investigations across production environments, helping restore service, improve reliability, and guide customers toward scalable, highly available architectures.`}
</p>

<p className="mb-4 p-font-color">
  {`Previously at Navy Federal Credit Union, I shipped reusable Adobe Experience Manager components used by teams across the organization, improving accessibility, performance, and authoring efficiency. I also resolved security and code-quality issues flagged by tools like SonarQube, BlackDuck, and Checkmarx, reinforcing my focus on production readiness and long-term maintainability.`}
</p>

<p className="mb-4 p-font-color">
  {`Outside of enterprise systems, I’ve built and deployed full-stack applications using Django, Next.js, Firebase, and cloud services, and I’ve applied machine learning in academic research to improve sheet music digitization accuracy using PyTorch. My experience as an Undergraduate Teaching Assistant strengthened my systems fundamentals and ability to explain complex technical concepts clearly.`}
</p>

<p className="mb-4 p-font-color">
  {`I’m driven by curiosity, ownership, and impact — whether that’s debugging a production outage, improving system performance, or building software that scales. Outside of tech, you’ll find me competing in pickleball tournaments, composing music, or cooking for friends and family.`}
</p>


    </section>
  )
}
