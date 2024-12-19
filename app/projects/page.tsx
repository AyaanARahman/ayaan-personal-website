import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter title-color">
        EventEase
      </h1>

      <p className='mb-4 tech-font-color font-size_small'>
        <i>
        Technologies: Python, Django, PostgreSQL, Amazon S3, Heroku, Google OAuth, Bootstrap
        </i>
      </p>

      <p className="mb-8 p-font-color">
        {`EventEase is a web application for seamless event management and collaboration. It features Google OAuth authentication, 
        role-based access, file uploads via Amazon S3, automated email reminders, and Google Calendar integration. With a modern 
        Bootstrap interface and robust backend powered by PostgreSQL, the application is fully deployed on Heroku, demonstrating 
        expertise in full-stack development and cloud integration.`}
      </p>

      <h1 className="mb-8 text-2xl font-semibold tracking-tighter title-color">
        HooRides
      </h1>
      <p className='mb-4 tech-font-color font-size_small'>
        <i>
        Technologies: React Native, Firebase, Google Cloud Platform
        </i>
      </p>

      <p className="mb-8 p-font-color">
        {`EventEase is a web application for seamless event management and collaboration. It features Google OAuth authentication, 
        role-based access, file uploads via Amazon S3, automated email reminders, and Google Calendar integration. With a modern 
        Bootstrap interface and robust backend powered by PostgreSQL, the application is fully deployed on Heroku, demonstrating 
        expertise in full-stack development and cloud integration.`}
      </p>

    </section>
  )
}
