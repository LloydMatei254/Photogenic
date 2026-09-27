'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <AlertCircle className="w-20 h-20 mx-auto mb-6 text-red-500" />
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Something went wrong</h1>
        <p className="text-warm-gray text-lg mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-4 bg-white text-black hover:bg-warm-gray transition-colors uppercase tracking-wider text-sm font-medium"
          >
            Try Again
          </button>
          <Link 
            href="/"
            className="px-8 py-4 border border-white/30 hover:border-white/60 transition-colors uppercase tracking-wider text-sm font-medium inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
