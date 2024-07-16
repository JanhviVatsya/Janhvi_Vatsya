import React from 'react'

const NoPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-500 text-white text-center">
      <div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">Oops! The page you are looking for does not exist.</p>
        <a href="/" className="text-blue-300 underline">Go back to Home</a>
      </div>
    </div>
  )
}

export default NoPage