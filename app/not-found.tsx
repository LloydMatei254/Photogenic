import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-serif mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-serif mb-6">Page Not Found</h2>
        <p className="text-warm-gray text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-warm-gray transition-colors uppercase tracking-wider text-sm font-medium"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
