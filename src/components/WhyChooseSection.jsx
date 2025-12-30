import React from 'react'

const WhyChooseSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-reddit-sans font-medium text-deep-cove text-[64px] leading-[110%] tracking-[-1.5px] mb-4">
            Why Choose
            <br />
            KoraGrid Africa
          </h2>
          <p className="font-satoshi font-normal text-[#5F6375] text-[14px] leading-[100%] tracking-[-0.4px] max-w-[302px] mx-auto">
            Every institution across Africa deserves access to AI—not just the ones with million-dollar budgets and technical teams.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {/* Card 1 - Built for Africa */}
          <div className="relative rounded-3xl overflow-hidden group">
            {/* Image */}
            <div className="aspect-[4/5] w-full">
              <img
                src="/assets/images/Tech team looking at computer.jpg"
                alt="Built for Africa"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-reddit-sans font-bold text-white text-[28px] leading-[1.2] mb-3">
                Built for Africa
              </h3>
              <p className="font-satoshi font-normal text-white/90 text-[14px] leading-relaxed">
                Tailored for African data, languages, infrastructure, and regulatory environments. <span className="italic">Not</span> imported solutions forced to fit.
              </p>
            </div>
          </div>

          {/* Card 2 - Security First */}
          <div className="relative rounded-3xl overflow-hidden group">
            {/* Image */}
            <div className="aspect-[4/5] w-full">
              <img
                src="/assets/images/laptop-server-room-black-man-network-database-maintenance-programming-software-typing-tech-data-center-happy-engineer-system-information-cybersecurity-cloud-computing.jpg"
                alt="Security First"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-reddit-sans font-bold text-white text-[28px] leading-[1.2] mb-3">
                Security First
              </h3>
              <p className="font-satoshi font-normal text-white/90 text-[14px] leading-relaxed">
                Enterprise-grade security meeting international standards while respecting local data sovereignty and compliance requirements.
              </p>
            </div>
          </div>

          {/* Card 3 - Fast Implementation */}
          <div className="relative rounded-3xl overflow-hidden group">
            {/* Image */}
            <div className="aspect-[4/5] w-full">
              <img
                src="/assets/images/Tech team in office, with woman in front facing camera.jpg"
                alt="Fast Implementation"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-reddit-sans font-bold text-white text-[28px] leading-[1.2] mb-3">
                Fast Implementation
              </h3>
              <p className="font-satoshi font-normal text-white/90 text-[14px] leading-relaxed">
                Launch pilot programs in weeks, not years. You pay for proven solutions, not research and development from scratch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseSection
