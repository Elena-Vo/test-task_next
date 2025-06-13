'use client';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-4">
      <h2 className="text-2xl text-red-600 font-semibold">Произошла ошибка 😢</h2>
      <p className="text-gray-700">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Попробовать снова
      </button>
    </div>
  );
}