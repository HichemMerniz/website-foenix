'use client';

import Image from 'next/image';

export default function About() {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We dive deep into your current systems, challenges, and goals to understand exactly what you need.",
      icon: '/data-discovery.png',
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "We create a comprehensive roadmap with clear milestones, timelines, and success metrics.",
      icon: '/strategy.png',
    },
    {
      step: "03",
      title: "Implementation",
      description: "Our expert team executes the plan with precision, keeping you informed every step of the way.",
      icon: '/implementation.png',
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "We continuously monitor, optimize, and provide ongoing support to ensure lasting success.",
      icon: '/support.png',
    }
  ];

  const teamMembers = [
    {
      name: "Senior DevOps Engineer",
      role: "Lead Technical Architect",
      expertise: "Cloud Infrastructure, Automation, CI/CD",
      image: "👨‍💻"
    },
    {
      name: "Network Specialist",
      role: "Infrastructure Consultant", 
      expertise: "Network Design, Security, Performance",
      image: "👩‍💼"
    },
    {
      name: "Software Architect",
      role: "Solutions Developer",
      expertise: "Full-Stack Development, API Design",
      image: "👨‍🔬"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative w-50 h-50 animate-phoenix-rise">
              <Image
                src="/logo1.png"
                alt="Foenix Phoenix Logo"
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-foenix-gradient">Foenix Tech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe every business has the potential to rise from its challenges 
            and achieve unprecedented excellence. Our mission is to make that transformation possible.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-12">
            <div className="w-16 h-16 bg-foenix-gradient rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with cutting-edge technology solutions that transform 
              challenges into opportunities for growth, efficiency, and innovation. We&apos;re 
              committed to delivering excellence in every project, helping our clients 
              rise from their current state to achieve their highest potential.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 lg:p-12">
            <div className="w-16 h-16 bg-foenix-gradient rounded-xl flex items-center justify-center text-white mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the leading force in technology transformation, recognized for our 
              ability to help businesses rise from any challenge and achieve unprecedented 
              levels of excellence. We envision a future where every organization has 
              the technology foundation to thrive in an ever-evolving digital landscape.
            </p>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-foenix-gradient rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Proven Process</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a structured, proven methodology that ensures successful outcomes 
              and lasting transformations for every client. Our 4-step process has delivered 
              exceptional results for over 150+ projects.
            </p>
          </div>

          {/* Process Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-foenix-orange via-foenix-red to-foenix-orange opacity-30"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-10 h-10 bg-white border-4 border-foenix-orange rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-foenix-orange font-bold text-sm">{step.step}</span>
                    </div>
                  </div>

                  {/* Step Card */}
                  <div className="bg-white rounded-3xl p-8 pt-12 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-foenix-orange/20 group-hover:-translate-y-2">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-foenix-orange to-foenix-red rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Image src={step.icon} alt={step.title} width={80} height={80} />
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-foenix-orange transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Duration Badge */}
                      <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {index === 0 ? '1-2 weeks' : index === 1 ? '2-3 weeks' : index === 2 ? '4-12 weeks' : 'Ongoing'}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-foenix-orange/5 to-foenix-red/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>

                  {/* Arrow for Desktop */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-20 -right-2 w-4 h-4 bg-foenix-orange rounded-full z-20"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Process Summary */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-foenix-orange mb-2">4</div>
                <div className="text-gray-600 font-medium">Structured Steps</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foenix-orange mb-2">150+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foenix-orange mb-2">99.9%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-10 md:mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional results 
              and transforming your business from ashes to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center group hover:shadow-lg transition-all duration-300">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                <p className="text-foenix-orange font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure we deliver 
              the highest quality service to every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Excellence", description: "We strive for the highest standards in every project" },
              { title: "Transparency", description: "Clear communication and honest feedback throughout" },
              { title: "Innovation", description: "Cutting-edge solutions that drive real results" },
              { title: "Partnership", description: "We're your technology partners, not just vendors" }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-foenix-gradient rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
