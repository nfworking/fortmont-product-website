import Link from "next/link";

export default function StatusPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-display mb-6">Fortmont status</h1>
        <p className="text-muted-foreground mb-6">
          Core Fortmont API and Fortmont Home services are currently operational. This page is reserved for public uptime and maintenance notices.
        </p>
        <Link href="/" className="underline underline-offset-4">
          Return home
        </Link>
      </div>
    </main>
  );
}
