"use client";

import { useEffect } from "react";

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
    <div className="min-h-screen bg-[#0f0f14] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display font-bold text-2xl sm:text-4xl text-white mb-2">Something went wrong</h1>
      <p className="text-zinc-400 mb-6 max-w-md">We hit an error. Try refreshing the page.</p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-[#00ffc8] text-[#0f0f14] font-semibold rounded-full hover:opacity-90 transition-opacity"
      >
        Try again
      </button>
    </div>
  );
}
