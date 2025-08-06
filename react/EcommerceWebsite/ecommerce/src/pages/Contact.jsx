import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Contact Us
      </h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Write your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
