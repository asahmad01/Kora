import React from 'react'

const BankingSection = () => {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Category Tag */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="inline-flex items-center gap-2.5 px-6 bg-transparent border-[1.5px] border-deep-cove h-[44px]"
                style={{ borderRadius: '18px 0 18px 0 / 26px 0 26px 0' }}
              >
                <span className="font-satoshi font-medium text-deep-cove text-[18px]">
                  Banking & Finance
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
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h2 className="font-reddit-sans font-medium text-deep-cove text-[40px] leading-[1.1] mb-6">
              Stop Fraud Before It Happens
            </h2>

            {/* Body Text - Paragraph 1 */}
            <p className="font-satoshi font-normal text-comet text-[21px] leading-relaxed mb-5">
              Implement AI-powered fraud detection, 24/7 customer service chatbots, and predictive analytics for credit risk—all without building in-house teams.
            </p>

            {/* Body Text - Paragraph 2 */}
            <p className="font-satoshi font-normal text-comet text-[21px] leading-relaxed mb-10">
              Real-time threat detection stops fraud in its tracks. Automated systems reduce compliance costs. Your customers get faster, smarter service.
            </p>

            {/* Divider Line */}
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
                60% reduction in fraud losses
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/Visual.png`}
              alt="Africa Map Visualization"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BankingSection
