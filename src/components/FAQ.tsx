import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's the Average bank balance required for UK Student Visa?",
      answer: "It depends on the city you're going to study in. But the average balance you have to show is £22,000 - £25,000 for most cities in the UK."
    },
    {
      question: "How much Average tuition fees do I have to pay for UK study?",
      answer: "Undergraduate tuition fees start at around £10,000 and go up to £38,000 or more for medical degrees, whilst taking a master's degree course in the UK normally costs between £13,000 to £15,000 per year."
    },
    {
      question: "What is the Minimum IELTS requirement?",
      answer: "You can apply for an undergraduate degree with a minimum IELTS score of 5.5 and for a Master's degree with 6.0. Some universities may require higher scores for specific courses."
    },
    {
      question: "Can I apply without IELTS?",
      answer: "Yes! You can apply to some UK universities without IELTS, but you need to demonstrate your Medium of Instruction (MOI) certificate to prove that your last education was in English-taught medium."
    },
    {
      question: "How many days does it take to get offer letter?",
      answer: "It usually takes 3-15 working days to get an offer from the university, depending on the institution and the time of year."
    },
    {
      question: "Is study gap acceptable in UK?",
      answer: "According to UK universities, if you are applying for a master's program, you can have a maximum of 10-12 year gap starting from the year you graduated. If you are applying for a bachelor's program, you can have a maximum of 2-3 years of gap. Gap years are generally acceptable, but you will be asked to demonstrate work experience for your gap years."
    },
    {
      question: "Can international students work in UK?",
      answer: "Yes! International students are entitled to work part-time while they are studying, but it's maximum of 20 hours per week during term time and full-time during vacation periods."
    },
    {
      question: "Are scholarships available in UK?",
      answer: "Yes! There are many scholarships available in the UK for international students. If you would like to secure your own scholarship, please do get in touch with us for guidance and application support."
    },
    
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about studying abroad and our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-primary-600 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our expert consultants are here to help. Get in touch with us for personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Us
              </button>
              <button className="btn-secondary">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
