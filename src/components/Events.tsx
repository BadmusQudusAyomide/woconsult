import React from 'react';

const Events: React.FC = () => {
  const events = [
    {
      title: 'Open Day with UK, Ireland & Europe Universities',
      date: '28/06/2025',
      time: '11:00 AM - 06:00 PM',
      venue: 'Woconsult Ltd. (Main Office)',
      location: 'London',
      type: 'Open Day',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'International Education Fair – London (UK, IRELAND, USA, CANADA, AUSTRALIA & DENMARK)',
      date: '21/06/2025',
      time: '10:00 AM - 06:30 PM',
      venue: 'London Conference Center',
      location: 'London',
      type: 'Education Fair',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Scholarship Workshop & Application Session',
      date: '15/07/2025',
      time: '02:00 PM - 05:00 PM',
      venue: 'Woconsult Ltd. (Main Office)',
      location: 'London',
      type: 'Workshop',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Visa Application Seminar',
      date: '08/08/2025',
      time: '11:00 AM - 03:00 PM',
      venue: 'Online Event',
      location: 'Virtual',
      type: 'Seminar',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us at our upcoming events to learn more about studying abroad and meet university representatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`bg-gradient-to-r ${event.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                  <span className="text-sm opacity-90">
                    {event.location}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {event.title}
                </h3>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Date: {event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Time: {event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-primary-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">Venue: {event.venue}</span>
                  </div>
                </div>
                
                <button className="w-full btn-primary">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't attend our events?
            </h3>
            <p className="text-gray-600 mb-6">
              Don't worry! You can still get personalized guidance through our free online consultation sessions. 
              Book a slot that works for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Book Free Consultation
              </button>
              <button className="btn-secondary">
                View All Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
