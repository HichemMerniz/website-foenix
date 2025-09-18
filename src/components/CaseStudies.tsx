'use client';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      company: "TechRetail Inc.",
      challenge: "Legacy system causing 40% transaction failures and poor user experience",
      solution: "Complete infrastructure overhaul with modern microservices architecture",
      results: [
        "99.9% uptime achieved",
        "300% increase in transaction speed",
        "50% reduction in operational costs",
        "Zero downtime deployment pipeline"
      ],
      testimonial: "Foenix Tech transformed our entire platform. We went from constant failures to industry-leading performance in just 6 months.",
      author: "Sarah Johnson",
      position: "CTO, TechRetail Inc.",
      image: "🏪"
    },
    {
      title: "Healthcare Data Migration",
      company: "MediCare Solutions",
      challenge: "Critical patient data scattered across 15 different systems",
      solution: "Secure cloud migration with HIPAA-compliant architecture",
      results: [
        "100% data integrity maintained",
        "75% faster data retrieval",
        "HIPAA compliance certified",
        "24/7 monitoring implemented"
      ],
      testimonial: "The migration was seamless. Our doctors can now access patient data instantly, improving care quality significantly.",
      author: "Dr. Michael Chen",
      position: "IT Director, MediCare Solutions",
      image: "🏥"
    },
    {
      title: "Financial Services Security Overhaul",
      company: "SecureBank Corp",
      challenge: "Multiple security vulnerabilities exposing customer financial data",
      solution: "Comprehensive security audit and multi-layered protection system",
      results: [
        "Zero security breaches in 18 months",
        "99.99% system availability",
        "SOC 2 Type II certification achieved",
        "50% faster incident response"
      ],
      testimonial: "Foenix Tech's security expertise gave us peace of mind. Our customers trust us more than ever.",
      author: "Robert Martinez",
      position: "CISO, SecureBank Corp",
      image: "🏦"
    }
  ];

  const metrics = [
    { number: "150+", label: "Projects Completed" },
    { number: "99.9%", label: "Average Uptime" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section id="case-studies" className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success <span className="text-foenix-gradient">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real transformations, real results. See how we&apos;ve helped businesses 
            rise from challenges to achieve unprecedented excellence.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foenix-gradient mb-2">
                {metric.number}
              </div>
              <div className="text-gray-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-12 md:space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column - Content */}
                <div className="p-6 md:p-8 lg:p-12">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{study.image}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <p className="text-foenix-orange font-semibold">{study.company}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Our Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center">
                            <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-gray-700 font-medium">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Testimonial */}
                <div className="bg-gradient-to-br from-foenix-orange to-foenix-red p-6 md:p-8 lg:p-12 text-white flex flex-col justify-center">
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-white/80 mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                    </svg>
                  </div>
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    &ldquo;{study.testimonial}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold">{study.author}</div>
                    <div className="text-white/80">{study.position}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['TechRetail', 'MediCare', 'SecureBank', 'CloudTech', 'DataFlow', 'NextGen'].map((company, index) => (
              <div key={index} className="bg-gray-200 rounded-lg p-4 text-center">
                <div className="font-semibold text-gray-600">{company}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the growing list of businesses that have transformed their operations 
              with Foenix Tech&apos;s expertise.
            </p>
            <a
              href="#contact"
              className="bg-foenix-gradient text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-block"
            >
              Start Your Transformation Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
