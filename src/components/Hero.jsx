import React from 'react'
import Threads from './Threads'

const Hero = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Content Section with Wavy Background */}
      <section className="relative w-full overflow-hidden flex-1 flex flex-col justify-center">
        {/* White to Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white"></div>

        {/* Threads Animation - Between tagline and stats */}
        <div className="absolute left-0 right-0 bottom-0 z-5 pointer-events-none" style={{ top: '55%', height: '45%' }}>
          <Threads
            color={[0.667, 0.753, 0.980]}
            amplitude={1.2}
            distance={0}
            enableMouseInteraction={false}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Main Headline */}
          <div className="text-center">
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
      </section>

      {/* Stats Section - At the VERY BOTTOM */}
      <section className="relative bg-white w-full py-12">
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
      </section>
    </div>
  )
}

export default Hero
