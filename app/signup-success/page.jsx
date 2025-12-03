export default function SignupSuccess() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      
      <h1 className="text-4xl font-bold text-green-700">
        Signup Successful! 🎉
      </h1>

      <p className="text-gray-700 mt-4 text-lg max-w-md">
        Your account has been created successfully. 
        You can now log in and start using your account.
      </p>

      <a
        href="/login"
        className="mt-8 bg-green-900 text-white px-8 py-3 rounded-full text-lg hover:bg-green-800 transition"
      >
        Go to Login
      </a>
    </div>
  );
}
