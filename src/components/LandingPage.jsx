import React from 'react'

const LandingPage = () => {
  return (
    <section
      className="w-full bg-white flex flex-col relative bg-cover bg-center bg-no-repeat"
      style={{
        minHeight: 'calc(100vh - 120px)',
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/images/KoraGrid%20Hero%20Desktop.jpg)`
      }}
    >
      {/* Main content area - will expand to push stats to bottom */}
      <div className="flex-1 max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-center relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="font-reddit-sans font-bold text-deep-cove text-[96px] leading-[100%] tracking-[0%] mb-6">
            Making AI work
            <br />
            for Africa.
          </h1>

          {/* Subtext */}
          <p className="font-satoshi font-normal text-[#5F6375] text-[21px] leading-[24px] tracking-[-0.03em] max-w-[562px] mx-auto mb-4">
            We implement AI solutions for banks, government agencies,
            <br />
            schools, and businesses across Africa.
          </p>

          {/* White box with tagline */}
          <div className="inline-block bg-white/95 backdrop-blur-sm px-7 py-2.5 rounded-full shadow-sm border border-gray-100">
            <p className="font-satoshi font-medium text-deep-cove text-[16px] leading-[19.6px] tracking-[-0.07px]">
              No complexity. No in-house engineers. Just results.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section - At the bottom */}
      <div className="w-full py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center gap-28">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="font-satoshi font-medium text-deep-cove text-[28px] leading-[32px] tracking-[-0.59px] mb-0.5">
                $16.53B
              </div>
              <div className="font-satoshi font-normal text-[#666A7C] text-[14px] leading-[20px] tracking-[0px]">
                Africa's AI market by 2030
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="font-satoshi font-medium text-deep-cove text-[28px] leading-[32px] tracking-[-0.59px] mb-0.5">
                2,400+
              </div>
              <div className="font-satoshi font-normal text-[#666A7C] text-[14px] leading-[20px] tracking-[0px]">
                AI firms across Africa
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="font-satoshi font-medium text-deep-cove text-[28px] leading-[32px] tracking-[-0.59px] mb-0.5">
                10%
              </div>
              <div className="font-satoshi font-normal text-[#666A7C] text-[14px] leading-[20px] tracking-[0px]">
                AI adoption in Africa
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage
