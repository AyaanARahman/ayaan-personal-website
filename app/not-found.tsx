import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="py-16 text-center">
      <p className="section-label">Error 404</p>
      <h1 className="title mt-4 text-3xl font-semibold tracking-tight text-primary">
        This page doesn&apos;t exist
      </h1>
      <p className="lede mx-auto mt-3 max-w-md">
        The link may be outdated, or I may have moved something. Nothing broken
        on your end.
      </p>
      <Link href="/" className="btn btn-primary mt-7">
        Back to home
      </Link>
    </section>
  )
}
