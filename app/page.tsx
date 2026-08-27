import Image from 'next/image';

const highlights = [
  { value: '500+', label: 'incidents resolved' },
  { value: '30+', label: 'P1 outages handled' },
  { value: '150+', label: 'engineers on my pipeline' },
  { value: '1.5h → 1 click', label: 'restart procedure automated' },
];

const experience = [
  {
    role: 'Associate Solution Engineer',
    company: 'Appian',
    location: 'McLean, VA',
    period: 'Jul 2025 — Present',
    current: true,
    points: [
      'Designed, built, and own an end-to-end multi-repository GitLab CI/CD pipeline used by 150+ engineers. JavaScript stages compile tooling definitions into structured Markdown, publish versioned artifacts to the GitLab Package Registry, and trigger a downstream Docusaurus build, removing a second approval step across 100+ contributions in six months.',
      'Resolved 500+ incident tickets across production, staging, and development Linux environments on AWS and Kubernetes, including response for 30+ P1 outages and the root-cause analysis that made the fixes permanent.',
      'Automated rolling restarts of application servers with Python and Bash, turning a 1.5+ hour hands-on procedure into a single-click operation.',
      'Built self-service diagnostic runbooks that connect to customer environments, run Linux command sequences, and return structured findings, cutting investigation time by 20–30% across AWS (EC2, IAM, EKS) and Kubernetes.',
    ],
    tech: ['Linux', 'AWS', 'Kubernetes', 'GitLab CI/CD', 'Python', 'Bash'],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Navy Federal Credit Union',
    location: 'Vienna, VA',
    period: 'May 2024 — May 2025',
    points: [
      'Built reusable front-end components with HTL, JavaScript, and Sass on an agile team, driving 100K+ user interactions and streamlining development across teams.',
      'Refactored 250+ code smells and resolved 100+ security findings using SonarQube, Checkmarx, and BlackDuck, reducing deployment errors by 25%.',
    ],
    tech: ['JavaScript', 'Java', 'Sass', 'SonarQube', 'Checkmarx'],
  },
  {
    role: 'Undergraduate Teaching Assistant',
    company: 'University of Virginia',
    location: 'Charlottesville, VA',
    period: 'Jan 2024 — May 2024',
    points: [
      'Held weekly office hours for 30+ students on CPU architecture, x86 assembly, memory management, and Linux networking, the fundamentals I now use every day.',
    ],
    tech: ['x86 Assembly', 'C', 'Linux'],
  },
];

const toolkit = [
  {
    group: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash', 'C/C++'],
  },
  {
    group: 'Cloud & Infrastructure',
    items: ['AWS (EC2, IAM, EKS)', 'GCP', 'Kubernetes', 'Docker', 'Linux', 'IaC'],
  },
  {
    group: 'CI/CD & Observability',
    items: ['GitLab CI/CD', 'Git', 'Grafana', 'Prometheus', 'Incident response', 'On-call'],
  },
  {
    group: 'Frameworks & Tools',
    items: ['React', 'React Native', 'Next.js', 'Node.js', 'Django', 'PostgreSQL', 'Firebase', 'Jira'],
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-heading mb-6">
      <h2 className="section-label">{children}</h2>
    </div>
  );
}

export default function Page() {
  return (
    <section className="pb-4">
      {/* ---------- Hero ---------- */}
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
        <div className="avatar-ring relative h-28 w-28 shrink-0 overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Ayaan Rahman"
            fill
            priority
            sizes="112px"
            className="object-cover object-[20%_30%]"
          />
        </div>

        <div className="text-center sm:text-left">
          <h1 className="title text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Ayaan Rahman
          </h1>
          <p className="mt-2 text-[0.9375rem] text-muted">
            Solution Engineer at{' '}
            <span className="font-medium text-accent">Appian</span> · Washington,
            D.C. area
          </p>
          <p className="mt-1 text-sm text-subtle">
            I keep production systems standing up — and automate the parts that
            shouldn&apos;t need a human.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              View résumé
            </a>
            <a
              href="mailto:ayaanrah99@gmail.com"
              className="btn btn-ghost"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Intro ---------- */}
      <div className="mt-12 space-y-5">
        <p className="lede">
          Hi! I&apos;m Ayaan — a software and solution engineer who lives where
          distributed systems meet the people actually depending on them. I spend
          my days inside Linux, AWS, and Kubernetes environments, turning
          ambiguous &ldquo;something is broken&rdquo; reports into root causes,
          permanent fixes, and the occasional script that means nobody has to do
          that job by hand again.
        </p>

        <p className="lede">
          At <span className="font-medium text-primary">Appian</span>, that means
          incident response at real stakes: 500+ tickets across production,
          staging, and development, including 30+ P1 outages where the fix and the
          follow-up root-cause analysis both mattered. The parts I enjoy most are
          the ones that outlive the ticket: a CI/CD pipeline that 150+ engineers
          publish through, diagnostic runbooks that cut investigation time by
          20–30%, and a rolling-restart procedure I turned from a 1.5-hour manual
          slog into one click.
        </p>

        <p className="lede">
          Before Appian I was at{' '}
          <span className="font-medium text-primary">
            Navy Federal Credit Union
          </span>
          , shipping reusable front-end components that drove 100K+ user
          interactions and clearing out 250+ code smells and 100+ security
          findings — which is where I learned that &ldquo;it works&rdquo; and
          &ldquo;it&apos;s ready for production&rdquo; are two very different
          claims. Before that I was a UVA teaching assistant explaining x86
          assembly and Linux networking to 30+ students, and I still think
          teaching something is the fastest way to find out whether you actually
          understand it.
        </p>

        <p className="lede">
          Away from a terminal, I&apos;m usually on a pickleball court chasing a
          tournament bracket, composing music, or cooking something ambitious for
          friends and family. Curiosity and ownership are the through-line, whether it's a 2 a.m. outage or a recipe I've never attempted.
          whether it&apos;s a 2 a.m. outage or a recipe I&apos;ve never attempted.
        </p>
      </div>

      {/* ---------- Highlights ---------- */}
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {highlights.map((item) => (
          <div key={item.label} className="card px-4 py-4 text-center">
            <p className="text-lg font-semibold tracking-tight text-accent">
              {item.value}
            </p>
            <p className="mt-1 text-xs leading-snug text-subtle">{item.label}</p>
          </div>
        ))}
      </div>

      {/* ---------- Experience ---------- */}
      <div className="mt-16">
        <SectionHeading>Experience</SectionHeading>

        <div className="space-y-4">
          {experience.map((job) => (
            <article key={job.company} className="card px-5 py-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-base font-semibold tracking-tight text-primary">
                  {job.role}
                  <span className="text-muted"> · {job.company}</span>
                </h3>
                <p className="shrink-0 font-mono text-xs text-subtle">
                  {job.period}
                </p>
              </div>

              <p className="mt-1 flex items-center gap-2 text-xs text-subtle">
                {job.location}
                {job.current && (
                  <span className="chip chip-accent !px-2 !py-0.5 !text-[0.6875rem]">
                    Current
                  </span>
                )}
              </p>

              <ul className="mt-4 space-y-2.5">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="relative pl-4 text-sm leading-relaxed text-muted"
                  >
                    <span className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full bg-[var(--accent)]" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ---------- Toolkit ---------- */}
      <div className="mt-16">
        <SectionHeading>Toolkit</SectionHeading>

        <div className="grid gap-4 sm:grid-cols-2">
          {toolkit.map((section) => (
            <div key={section.group} className="card px-5 py-4">
              <h3 className="text-sm font-semibold tracking-tight text-primary">
                {section.group}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {section.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Education ---------- */}
      <div className="mt-16">
        <SectionHeading>Education</SectionHeading>

        <div className="card px-5 py-5">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="text-base font-semibold tracking-tight text-primary">
              University of Virginia
            </h3>
            <p className="shrink-0 font-mono text-xs text-subtle">
              Aug 2022 — May 2025
            </p>
          </div>
          <p className="mt-1 text-sm text-muted">
            B.A. Computer Science · Charlottesville, VA
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="chip">GPA 3.97</span>
            <span className="chip">Dean&apos;s List</span>
          </div>
        </div>
      </div>
    </section>
  );
}
