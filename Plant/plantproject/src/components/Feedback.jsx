import React from 'react';

function Feedback() {
  return (
    <div className="min-h-screen bg-green-900 text-white flex justify-center items-center p-8">
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md space-y-4">
        <h1 className="text-center text-2xl font-bold text-black mb-4">Contact Us</h1>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-black mb-1">Enter Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-black mb-1">Enter Your Phone</label>
          <input
            id="phone"
            type="tel"
            placeholder="Phone number"
            className="border border-gray-300 rounded-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-black mb-1">Enter Your Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Your message..."
            className="border border-gray-300 rounded-md px-3 py-2 text-black resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <button className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-md mt-4 transition duration-300">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Feedback;
