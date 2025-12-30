import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ConsultationModal from './ConsultationModal'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="w-full">
        {/* Blue Decorative Bar at Top */}
        <div className="bg-deep-cove h-10 w-full"></div>

        {/* Main Content - White Background */}
        <div className="bg-white w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center cursor-pointer">
                <img
                  src="/assets/logo/KoraGrid - Dark.svg"
                  alt="KoraGrid Africa"
                  className="h-10"
                />
              </Link>

              {/* CTA Button Group */}
              <div className="flex items-center gap-2.5">
                {/* Pill Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-2.5 bg-deep-cove text-white font-satoshi font-medium text-[14px] leading-[20px] tracking-[-0.09px] rounded-full border-[1.5px] border-[#F7F8FA] hover:bg-deep-cove/90 transition-all duration-200 shadow-md"
                >
                  Let's Build Together
                </button>

                {/* Pebble/Pick Arrow Button - Commented out for now */}
                {/* <button
                  className="w-[36px] h-[35px] bg-deep-cove border-[1.5px] border-[#F7F8FA] flex items-center justify-center shadow-md hover:bg-deep-cove/90 transition-all duration-200"
                  style={{
                    borderRadius: '50% 80% 80% 50% / 50% 50% 50% 50%',
                    clipPath: 'polygon(0% 50%, 100% 0%, 100% 100%)',
                    borderTopLeftRadius: '50%',
                    borderBottomLeftRadius: '50%',
                    borderTopRightRadius: '20%',
                    borderBottomRightRadius: '20%'
                  }}
                >
                  <svg
                    className="w-3.5 h-3.5 ml-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="11 17 16 12 11 7" stroke="white"></polyline>
                    <polyline points="5 17 10 12 5 7" stroke="white"></polyline>
                  </svg>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Modal */}
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default Header
