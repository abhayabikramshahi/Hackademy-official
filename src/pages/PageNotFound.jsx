import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <main className="bg-white text-black min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-7xl font-bold mb-6">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Oops! The page you are looking for doesn’t exist. It might have been moved or removed.
      </p>
      <Link
        to="/"
        className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}

export default PageNotFound;
