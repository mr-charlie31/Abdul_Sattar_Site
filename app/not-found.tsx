import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 bg-[#f8f9f6]">
      <div className="w-24 h-24 bg-[#1a472a] rounded-none flex items-center justify-center mb-8">
        <div className="w-12 h-12 flex items-center justify-center">
          <i className="ri-map-pin-line text-white text-4xl"></i>
        </div>
      </div>
      <h1 className="text-7xl font-bold text-[#0a1f12] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8 max-w-md">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="inline-flex items-center gap-2 bg-[#1a472a] hover:bg-[#0f2e1a] text-white font-semibold px-8 py-3 rounded-none transition-colors cursor-pointer whitespace-nowrap">
        <div className="w-4 h-4 flex items-center justify-center">
          <i className="ri-arrow-left-line"></i>
        </div>
        Back to Home
      </Link>
    </div>
  );
}