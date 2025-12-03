export default function WelcomePage() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1 className="text-4xl font-bold text-green-700">Welcome 🎉</h1>

      <p className="mt-4 text-gray-700 text-lg">
        You have successfully logged in.
      </p>

      <a
        href="/"
        className="mt-6 bg-green-900 text-white px-6 py-3 rounded-full text-lg"
      >
        Go to Home
      </a>
    </div>
  );
}
