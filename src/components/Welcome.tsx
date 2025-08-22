import React from "react";

const Welcome: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Welcome to <span className="text-primary-600">Wo Consult</span>
          </h2>
          <div className="mt-6 text-left space-y-10">
            <div id="who-we-are" className="scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Who We Are</h3>
              <div className="mt-2 h-1 w-16 bg-primary-600 rounded md:ml-0 ml-auto mr-auto" />
              <p className="mt-3 text-gray-700 leading-relaxed">
                At W.O Consults, we are dedicated to transforming educational experiences through innovative consulting services.
                Our mission is to guide and support students in achieving their dream of studying abroad by connecting them with world-class universities.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We specialize in helping students gain admission into universities in the UK, Canada, USA, Australia, and Ireland, giving them the opportunity to earn an international degree and build a brighter future.
              </p>
            </div>

            <div id="what-we-do" className="scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">What We Do</h3>
              <div className="mt-2 h-1 w-16 bg-primary-600 rounded md:ml-0 ml-auto mr-auto" />
              <p className="mt-3 text-gray-700 leading-relaxed">
                We provide a full range of services designed to make the study abroad journey smooth and stress-free:
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>🎓 <span className="font-medium">Educational Consultancy</span> – Tailored advice and guidance for your academic journey.</li>
                <li>🏫 <span className="font-medium">University Admissions</span> – Secure placements in leading international universities.</li>
                <li>✈ <span className="font-medium">Visa Assistance</span> – Step-by-step support for visa applications and embassy requirements.</li>
                <li>🌍 <span className="font-medium">Post-Arrival Support</span> – Guidance to help students settle comfortably in their new destination.</li>
              </ul>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We are committed to recruiting only genuine students who are passionate about education and determined to succeed at the world’s leading universities.
              </p>
            </div>

            <div id="our-promise" className="scroll-mt-24">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">Our Promise</h3>
              <div className="mt-2 h-1 w-16 bg-primary-600 rounded md:ml-0 ml-auto mr-auto" />
              <p className="mt-3 text-gray-700 leading-relaxed">
                At W.O Consults, we believe every student deserves access to quality education. That’s why we go the extra mile to:
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Deliver personalized counseling for each applicant.</li>
                <li>• Ensure transparency and honesty in all our processes.</li>
                <li>• Maintain a high standard of professionalism with proven results.</li>
              </ul>
              <p className="mt-3 text-gray-700 leading-relaxed">
                With us, your study abroad journey is more than just paperwork—it’s the beginning of a life-changing opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
