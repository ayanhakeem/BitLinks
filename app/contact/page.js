"use client";
import { useState } from "react";
import { Mail, Phone, User } from "lucide-react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, query }),
      });

      if (res.ok) {
        setSubmitted(true);
        setEmail("");
        setQuery("");

        // Hide success message after 2 seconds
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        const error = await res.json();
        console.error("Error:", error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
      {/* Left: Contact Form */}
      <div>
        <h1 className="text-4xl font-bold text-purple-700 mb-8 text-center md:text-left">
          Get in Touch
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-5 border border-gray-100"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
          />

          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Your Query"
            required
            rows={5}
            className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
          ></textarea>

          <button
            type="submit"
            className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-purple-700 transition-all"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <p className="text-green-600 text-center mt-4 font-medium animate-fade-out">
            ✅ Thanks for reaching out! Your query has been saved.
          </p>
        )}
      </div>

      {/* Right: My Contact Details */}
      <div className="flex items-center">
        <div className="bg-gradient-to-br from-purple-50 to-white shadow-xl rounded-2xl p-8 w-full border border-gray-100">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">
            Contact Information
          </h2>

          <div className="flex items-center gap-4 mb-4">
            <User className="text-purple-600 w-6 h-6" />
            <p className="text-lg text-gray-800 font-medium">Ayan Hakeem</p>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <Mail className="text-purple-600 w-6 h-6" />
            <p className="text-lg text-gray-800">ayanhakeem20@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-purple-600 w-6 h-6" />
            <p className="text-lg text-gray-800">8073789906</p>
          </div>
        </div>
      </div>
    </div>
  );
}
