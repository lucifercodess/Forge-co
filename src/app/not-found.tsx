import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050508] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display font-bold text-2xl sm:text-4xl text-white mb-2">404</h1>
      <p className="text-zinc-400 mb-6">This page could not be found.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#00ffc8] text-[#050508] font-semibold rounded-full hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
