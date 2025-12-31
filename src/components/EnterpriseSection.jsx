import React from 'react'

const EnterpriseSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Right Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/Visual-3.png`}
                alt="Enterprise Logistics Visualization"
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
                  Enterprise & Logistics
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
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h2 className="font-reddit-sans font-medium text-deep-cove text-[40px] leading-[1.1] mb-6">
              Automate the Routine, Optimize the Critical
            </h2>

            {/* Body Text - Paragraph 1 */}
            <p className="font-satoshi font-normal text-comet text-[21px] leading-relaxed mb-5">
              Predictive demand forecasting, AI-powered route optimization, and back-office automation for businesses competing in African and global markets.
            </p>

            {/* Body Text - Paragraph 2 */}
            <p className="font-satoshi font-normal text-comet text-[21px] leading-relaxed mb-10">
              Reduce fuel costs with smarter routing. Predict demand before stockouts happen. Automate repetitive tasks so your team focuses on growth.
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
                30% improvement in delivery efficiency
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseSection
