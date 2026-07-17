import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white text-gray-900">
      <div className="max-w-xl text-center p-6">
        <h1 className="text-4xl font-bold mb-4">404 — Page not found</h1>
        <p className="text-lg mb-6">Sorry, we couldn’t find the page you’re looking for.</p>
        <Link
          href="/"
          className="inline-block rounded bg-black text-white px-4 py-2 hover:opacity-90"
        >
          Return home
        </Link>
      </div>
    </main>
  )
}
