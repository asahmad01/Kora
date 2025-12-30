import React from 'react'

const GovernmentSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Right Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src="/assets/images/Visual-1.png"
                alt="Government Visualization"
                className="w-full max-w-md lg:max-w-lg"
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="order-1 lg:order-2">
            {/* Category Tag */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="inline-flex items-center gap-2.5 px-6 bg-transparent border-[1.5px] border-deep-cove h-[44px]"
                style={{ borderRadius: '18px 0 18px 0 / 26px 0 26px 0' }}
              >
                <span className="font-satoshi font-medium text-deep-cove text-[18px]">
                  Government & Public Sector
                </span>
              </div>
              <div className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#071844"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4v18" />
                  <path d="M19 21V11l-6-4" />
                  <path d="M9 9v.01" />
                  <path d="M9 12v.01" />
                  <path d="M9 15v.01" />
                  <path d="M9 18v.01" />
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h2 className="font-reddit-sans font-medium text-deep-cove text-[40px] leading-[1.1] mb-6">
              Transparency Through Intelligence
            </h2>

            {/* Body Text - Paragraph 1 */}
            <p className="font-satoshi font-normal text-comet text-[21px] leading-relaxed mb-5">
              AI-driven project monitoring, predictive budget tracking, and intelligent document management for ministries and agencies across Africa.
            </p>

            {/* Body Text - Paragraph 2 */}
            <p className="font-satoshi font-normal text-comet text-[21px] leading-relaxed mb-10">
              Track large-scale projects in real-time. Get live insights into progress, budget adherence, and bottlenecks. Improve accountability and service delivery.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-gray-300 mb-8"></div>

            {/* Stat */}
            <div className="flex items-center gap-3">
              <svg
                className="w-6 h-6 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#071844"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              <span className="font-satoshi font-medium text-deep-cove text-[17px]">
                Real-time project accountability
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GovernmentSection
