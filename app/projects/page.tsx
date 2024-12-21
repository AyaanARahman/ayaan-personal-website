import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

//UPDATE AND ADD ALL RELEVANT PROJECTS WITH SOURCE CODE LINKS

export default function Page() {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-semibold tracking-tighter title-color">
        EventEase
      </h1>

      <p className='mb-4 tech-font-color font-size_small'>
        <i>
        Technologies: Python, Django, PostgreSQL, Amazon S3, Heroku, Google OAuth, Bootstrap
        </i>
      </p>

      <p className="mb-6 p-font-color">
        {`EventEase is a web application for seamless event management and collaboration. It features Google OAuth authentication, 
        role-based access, file uploads via Amazon S3, automated email reminders, and Google Calendar integration. With a modern 
        Bootstrap interface and robust backend powered by PostgreSQL, the application is fully deployed on Heroku, demonstrating 
        expertise in full-stack development and cloud integration.`}
      </p>

      <a
          href="https://project-b12-2024-4a4dbf0dbe13.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md font-size_small custom-link"
        >
          View Deployed Site
        </a>
        <a
          href="https://github.com/uva-cs3240-f24/project-b-12"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md font-size_small custom-link"
        >
          View Source Code
        </a>

      <h1 className="mt-6 mb-4 text-2xl font-semibold tracking-tighter title-color">
        HooRides
      </h1>
      <p className='mb-4 tech-font-color font-size_small'>
        <i>
        Technologies: React Native, Firebase, Google Cloud Platform
        </i>
      </p>

      <p className="mb-8 p-font-color">
        {`The UVA Carpooling App is a mobile application built with React Native, Firebase, and the Google Maps API 
        to serve 24,000+ University of Virginia students. It streamlines campus mobility by enabling secure, 
        efficient carpooling through real-time data synchronization, precise navigation, and UVA-only authentication. 
        Designed to foster a community-driven transportation network, the app enhances campus safety and promotes 
        sustainability by encouraging ride-sharing and reducing carbon footprints.`}
      </p>
      <a
          href="https://github.com/UVA-Rideshare/rideshare"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md font-size_small custom-link"
        >
          View Source Code
        </a>

        <h1 className="mt-6 mb-4 text-2xl font-semibold tracking-tighter title-color">
        Semantic Search Application
      </h1>
      <p className='mb-4 tech-font-color font-size_small'>
        <i>
        Technologies: React Native, Firebase, Google Cloud Platform
        </i>
      </p>

      <p className="mb-8 p-font-color">
        {`The Semantic Search Application is a cutting-edge tool built with OpenAI API, LangChain, Next.js, 
        and the Pinecone vector database to deliver highly accurate and context-aware search results. 
        Leveraging advanced natural language understanding and vector-based indexing, the application 
        achieved 95% accuracy in processing user queries. This innovative project showcases a seamless integration 
        of AI-powered search capabilities and optimized performance for retrieving semantically relevant content with speed and precision.`}
      </p>
      <a
          href="https://github.com/AyaanARahman/Ayaan-Semantic-Search"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md font-size_small custom-link"
        >
          View Source Code
        </a>

    </section>
  )
}
