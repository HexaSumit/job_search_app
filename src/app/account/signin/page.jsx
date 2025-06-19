import Link from "next/link"

function page() {
  return (
    <div className="min-h-screen mt-6 flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-14 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Sign In</h2>
        <form >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>

      {/* 👇 Text outside the box */}
      <p className="mt-4 text-sm text-gray-600">
        Already have an account? <Link href="/account/login" className="text-blue-600 hover:underline">Login</Link>
      </p>
    </div>
  )
}

export default page