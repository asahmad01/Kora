import React from 'react'

const EducationSection = () => {
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
                  Education
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
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h2 className="font-reddit-sans font-medium text-deep-cove text-[40px] leading-[1.1] mb-6">
              Scale Quality Learning With AI
            </h2>

            {/* Body Text - Paragraph 1 */}
            <p className="font-satoshi font-normal text-comet text-[21px] leading-relaxed mb-5">
              AI tutors, adaptive learning platforms, and data-driven student performance tracking—supporting thousands of learners simultaneously without overwhelming teachers.
            </p>

            {/* Body Text - Paragraph 2 */}
            <p className="font-satoshi font-normal text-comet text-[21px] leading-relaxed mb-10">
              Personalized learning paths for every student. Real-time performance insights for educators. Administrative automation that frees up staff time.
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
                10,000+ learners supported simultaneously
              </span>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex items-center justify-center lg:justify-end">
            <img
              src={`${import.meta.env.BASE_URL}assets/images/Visual-2.png`}
              alt="Education Visualization"
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
