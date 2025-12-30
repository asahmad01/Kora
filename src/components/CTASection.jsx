import React, { useState } from 'react'
import ConsultationModal from './ConsultationModal'

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-foam rounded-[40px] overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="px-12 py-16 lg:py-20">
                {/* Headline */}
                <h2 className="font-reddit-sans font-bold text-almost-black text-[52px] lg:text-[60px] leading-[1.05] mb-6">
                  Let's Build the Future Together.
                </h2>

                {/* Body Text */}
                <p className="font-satoshi font-normal text-almost-black/80 text-[16px] leading-relaxed mb-8 max-w-lg">
                  Got questions? We're all ears. Whether you're curious about what AI can do for your institution or just want to talk data, feel free to reach out. We're happy to chat.
                </p>

                {/* CTA Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#F9FF2D] text-deep-cove font-satoshi font-bold text-[14px] px-8 py-3.5 rounded-lg hover:bg-[#F9FF2D]/90 transition-all duration-200 shadow-md"
                >
                  Schedule a Consultation
                </button>
              </div>

            {/* Right Visual - Same Foam background */}
            <div className="relative h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center pr-8">
              <img
                src="/assets/images/africa-map.png"
                alt="Africa Map"
                className="w-full max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Consultation Modal */}
    <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </>
  )
}

export default CTASection
