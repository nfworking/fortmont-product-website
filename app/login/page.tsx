import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-display mb-6">Login</h1>
        <p className="text-muted-foreground mb-6">
          Connect this route to your Fortmont sign-in flow or redirect to your hosted auth endpoint.
        </p>
        <Link href="/fortmont-api" className="underline underline-offset-4">
          Read Fortmont API docs
        </Link>
      </div>
    </main>
  );
}
