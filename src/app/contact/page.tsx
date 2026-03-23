"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle submission
  };

  return (
    <>
      

      <main className="w-full bg-[#1f0033] min-h-screen">

        {/* Hero strip */}
        <div className="max-w-[1200px] mx-auto px-8 pt-20 pb-14">
          <p className="text-purple-300 text-sm uppercase tracking-widest mb-3">Get in touch</p>
          <h1 className="text-5xl font-bold text-white leading-tight">
            Let&apos;s start a conversation
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-xl">
            Have a question, want a demo, or need support? Fill out the form and our team will get back to you shortly.
          </p>
        </div>

        {/* Form + Info card */}
        <div className="max-w-[1200px] mx-auto px-8 pb-24">
          <div className="grid md:grid-cols-[1fr_340px] gap-10 items-start">

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-10 flex flex-col gap-7"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-white font-medium text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Work Email */}
              <div className="flex flex-col gap-2">
                <label className="text-white font-medium text-sm">Work Email</label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-white font-medium text-sm">Subject</label>
                <select
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-purple-500 transition appearance-none cursor-pointer"
                >
                  <option value="General Inquiry" className="bg-[#1f0033]">General Inquiry</option>
                  <option value="Schedule Demo" className="bg-[#1f0033]">Schedule Demo</option>
                  <option value="Technical Support" className="bg-[#1f0033]">Technical Support</option>
                  <option value="Partnerships" className="bg-[#1f0033]">Partnerships</option>
                  <option value="Billing" className="bg-[#1f0033]">Billing</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-white font-medium text-sm">Message</label>
                <textarea
                  placeholder="How can we help?"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-500 transition resize-y"
                />
              </div>

              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-200 w-fit"
              >
                Send Message
              </button>
            </form>

            {/* Info Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-8 text-white">

              <div>
                <p className="text-xs uppercase tracking-widest text-purple-300 mb-3">Address</p>
                <p className="text-gray-200 text-sm leading-relaxed">
                  5th Floor, Block-C,<br />
                  DLF Cyber City, Phase-II,<br />
                  Gurugram - 122002
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <p className="text-xs uppercase tracking-widest text-purple-300 mb-3">Contact</p>
                <p className="text-gray-200 text-sm">Cell: +91 72909 49301</p>
                <a
                  href="https://www.enableuser.com"
                  className="text-purple-400 hover:text-purple-300 text-sm underline transition"
                >
                  www.enableuser.com
                </a>
              </div>

              <div className="h-px bg-white/10" />

              <div>
                <p className="text-xs uppercase tracking-widest text-purple-300 mb-3">Support</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Existing clients can reach out directly to their dedicated success manager.
                </p>
              </div>

            </div>

          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
