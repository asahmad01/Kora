import React, { useState } from 'react'
import ConsultationModal from './ConsultationModal'

const ImageSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="w-full">
      {/* Full-width image with overlay content */}
      <div className="relative w-full h-[420px] lg:h-[500px] overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}assets/images/Man smiling woth phone in hand.jpg`}
          alt="Professional using mobile device"
          className="w-full h-full object-cover object-center"
        />

        {/* White Card Overlay - Right Side */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex justify-end">
            <div className="bg-white rounded-2xl px-8 py-9 max-w-md shadow-xl">
              {/* Headline */}
              <h2 className="font-reddit-sans font-bold text-deep-cove text-[36px] lg:text-[40px] leading-[1.15] mb-4">
                The Gap Isn't Innovation. It's Implementation.
              </h2>

              {/* Subtext */}
              <p className="font-satoshi font-normal text-comet/70 text-[14px] leading-relaxed mb-6">
                African institutions want AI. They just don't know where to start. That's where we come in.
              </p>

              {/* CTA Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#F9FF2D] text-deep-cove font-satoshi font-bold text-[13px] px-7 py-3 rounded-lg hover:bg-[#F9FF2D]/90 transition-all duration-200 shadow-md"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* Consultation Modal */}
        <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </section>
    </>
  )
}

export default ImageSection
