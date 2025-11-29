import React from 'react';

function AboutUs() {
  const teamMembers = [
    { name: 'Alice Johnson', role: 'Product Manager' },
    { name: 'Bob Smith', role: 'Lead Developer' },
    { name: 'Carol Lee', role: 'UI/UX Designer' },
  ];

  return (
    <div 
    id='about'
    className="bg-gray-50 px-6 py-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          About TaskFlow
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          TaskFlow is a modern task management platform designed to help individuals and teams stay organized,
          productive, and on track. We believe in simplicity, efficiency, and collaboration.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600">
          Our mission is to provide a seamless task management experience that boosts productivity and fosters
          collaboration. We strive to simplify complex workflows and empower users to focus on what truly matters.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
