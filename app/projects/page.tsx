import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Full-stack and cloud projects built by Ayaan Rahman — event planning platforms, mobile ride-sharing, and AI-powered semantic search.',
};

type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    name: 'EventEase',
    tagline: 'Full-stack event planning, deployed to the cloud',
    description:
      'A cloud-hosted event planning platform built with Django and PostgreSQL. It handles Google OAuth authentication, role-based access control, S3-backed file uploads, automated email reminders, and Google Calendar integration — all behind a Bootstrap interface and deployed on Heroku.',
    tech: [
      'Python',
      'Django',
      'PostgreSQL',
      'AWS S3',
      'GCP',
      'Heroku',
      'Google OAuth',
    ],
    links: [
      {
        label: 'Live site',
        href: 'https://project-b12-2024-4a4dbf0dbe13.herokuapp.com/',
      },
      { label: 'Source', href: 'https://github.com/AyaanARahman/EventEase' },
    ],
  },
  {
    name: 'HooRides',
    tagline: 'Ride-sharing for 24,000+ UVA students',
    description:
      'A cross-platform mobile app built with React Native and Firebase for secure ride-sharing inside the UVA community. I led an Agile Scrum team of three developers, building real-time data sync, Google Maps navigation, and UVA-only authentication. The platform enabled 1,000+ miles of rides across Central Virginia and was presented to 10+ faculty and stakeholders.',
    tech: ['React Native', 'Firebase', 'GCP', 'Google Maps API'],
    links: [
      { label: 'Source', href: 'https://github.com/UVA-Rideshare/rideshare' },
    ],
  },
  {
    name: 'Semantic Search',
    tagline: 'Context-aware search over vector embeddings',
    description:
      'A semantic search tool combining the OpenAI API, LangChain, and the Pinecone vector database to return results by meaning rather than keyword match. Vector-based indexing and natural language understanding pushed query accuracy to 95%, wrapped in a Next.js front end.',
    tech: ['Next.js', 'OpenAI API', 'LangChain', 'Pinecone'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/AyaanARahman/Ayaan-Semantic-Search',
      },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <section className="pb-4">
      <h1 className="title text-3xl font-semibold tracking-tight text-primary">
        Projects
      </h1>
      <p className="lede mt-3">
        Things I built end to end — from the data model to the deploy. Each one
        started as a problem I actually wanted solved.
      </p>

      <div className="mt-10 space-y-5">
        {projects.map((project) => (
          <article
            key={project.name}
            className="card card-interactive px-5 py-5"
          >
            <h2 className="text-lg font-semibold tracking-tight text-primary">
              {project.name}
            </h2>
            <p className="mt-0.5 text-sm text-accent">{project.tagline}</p>

            <p className="mt-3 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  {link.label}
                  <ArrowIcon />
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
