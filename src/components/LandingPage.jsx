import React from 'react'

const LandingPage = () => {
  return (
    <section
      className="w-full bg-white flex flex-col relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 120px)',
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/images/KoraGrid%20Hero%20Desktop.jpg)`
      }}
    >
      {/* Main content area - will expand to push stats to bottom */}
      <div className="flex-1 w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-10">
        <div className="text-center w-full max-w-4xl">
          {/* Main Headline */}
          <h1 className="font-reddit-sans font-bold text-deep-cove text-[44px] sm:text-[60px] md:text-[80px] lg:text-[96px] leading-[100%] tracking-[0%] mb-4 sm:mb-6">
            Making AI work
            <br />
            for Africa.
          </h1>

          {/* Subtext */}
          <p className="font-satoshi font-normal text-[#5F6375] text-[16px] sm:text-[18px] md:text-[21px] leading-[1.3] tracking-[-0.03em] max-w-[90%] sm:max-w-[562px] mx-auto mb-4 px-4">
            We implement AI solutions for banks, government agencies, schools, and businesses across Africa.
          </p>

          {/* White box with tagline */}
          <div className="inline-block bg-white/95 backdrop-blur-sm px-5 sm:px-7 py-2 sm:py-2.5 rounded-full shadow-sm border border-gray-100 max-w-[90%]">
            <p className="font-satoshi font-medium text-deep-cove text-[14px] sm:text-[16px] leading-[1.2] tracking-[-0.07px]">
              No complexity. No in-house engineers. Just results.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section - At the bottom */}
      <div className="w-full py-8 sm:py-12 relative z-10">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-20 lg:gap-28">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="font-satoshi font-medium text-deep-cove text-[24px] sm:text-[28px] leading-[32px] tracking-[-0.59px] mb-0.5">
                $16.53B
              </div>
              <div className="font-satoshi font-normal text-[#666A7C] text-[13px] sm:text-[14px] leading-[20px] tracking-[0px] max-w-[140px]">
                Africa's AI market by 2030
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="font-satoshi font-medium text-deep-cove text-[24px] sm:text-[28px] leading-[32px] tracking-[-0.59px] mb-0.5">
                2,400+
              </div>
              <div className="font-satoshi font-normal text-[#666A7C] text-[13px] sm:text-[14px] leading-[20px] tracking-[0px] max-w-[140px]">
                AI firms across Africa
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="font-satoshi font-medium text-deep-cove text-[24px] sm:text-[28px] leading-[32px] tracking-[-0.59px] mb-0.5">
                10%
              </div>
              <div className="font-satoshi font-normal text-[#666A7C] text-[13px] sm:text-[14px] leading-[20px] tracking-[0px] max-w-[140px]">
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
