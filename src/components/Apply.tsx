import React, { useState } from "react";

const Apply: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    qualification: "",
    qualificationYear: "",
    cgpa: "",
    level: "",
    ielts: "",
    message: "",
  });

  const countries = [
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    "Ireland",
    "Nigeria",
    "Ghana",
  ];

  const levels = ["Undergraduate", "Postgraduate", "PhD", "Diploma/Certificate"];

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Apply form submitted", form);
  };

  return (
    <section id="apply" className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Start your Global Education Journey
          </h2>
          <p className="text-gray-600 mt-2">Fill up the form to apply</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10">
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Country *</label>
              <select
                name="country"
                value={form.country}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select your country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Country code + number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Academic Qualification *</label>
              <input
                name="qualification"
                value={form.qualification}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., BSc Computer Science"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year of Last Academic Qualification *</label>
              <input
                name="qualificationYear"
                value={form.qualificationYear}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., 2023"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">CGPA / GPA *</label>
              <input
                name="cgpa"
                value={form.cgpa}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="e.g., 3.7 / 5.0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Desired Level of Studies *</label>
              <select
                name="level"
                value={form.level}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select level</option>
                {levels.map((l) => (
                  <option key={l} value={l}>
                    {l}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Do You Have IELTS or Equivalent? *</label>
              <select
                name="ielts"
                value={form.ielts}
                onChange={onChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">Select one</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Tell us more about your goals"
              />
            </div>

            <button type="submit" className="w-full btn-primary py-4 text-lg">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Apply;
