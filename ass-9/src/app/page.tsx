import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-blue-300 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-4 p-4 grid place-content-center">
            <Link
              href="/clientSide"
              className="text-white text-lg font-semibold hover:underline"
            >
              Client Side Data Fetching
            </Link>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden mx-4 p-4 grid place-content-center">
            <Link
              href="/serverSide"
              className="text-white text-lg font-semibold hover:underline"
            >
              Server Side Data Fetching
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
