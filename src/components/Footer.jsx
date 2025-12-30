import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Headline */}
        <h2 className="font-reddit-sans font-bold text-deep-cove text-[56px] lg:text-[64px] leading-[1.1] mb-16">
          Data-Driven.
          <br />
          African-Built.
        </h2>

        {/* Links Row with Diagonal Rectangle Buttons */}
        <div className="flex flex-wrap items-center justify-start gap-4 mb-16">
          {/* Privacy Policy */}
          <Link
            to="/privacy-policy"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent text-deep-cove font-satoshi font-medium text-[15px] border-[1.5px] border-deep-cove hover:bg-deep-cove/5 transition-all duration-200"
            style={{ borderRadius: '18px 0 18px 0 / 26px 0 26px 0' }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Privacy Policy
          </Link>

          {/* Terms & Conditions */}
          <Link
            to="/terms-conditions"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent text-deep-cove font-satoshi font-medium text-[15px] border-[1.5px] border-deep-cove hover:bg-deep-cove/5 transition-all duration-200"
            style={{ borderRadius: '18px 0 18px 0 / 26px 0 26px 0' }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            Terms & Conditions
          </Link>

          {/* Email */}
          <a
            href="mailto:Info@koragrid.com"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent text-deep-cove font-satoshi font-medium text-[15px] border-[1.5px] border-deep-cove hover:bg-deep-cove/5 transition-all duration-200"
            style={{ borderRadius: '18px 0 18px 0 / 26px 0 26px 0' }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Info@koragrid.com
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/koragrid-africa/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent text-deep-cove font-satoshi font-medium text-[15px] border-[1.5px] border-deep-cove hover:bg-deep-cove/5 transition-all duration-200"
            style={{ borderRadius: '18px 0 18px 0 / 26px 0 26px 0' }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/koragrid/?igsh=aHMyOWd6dGlrd2R6#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-transparent text-deep-cove font-satoshi font-medium text-[15px] border-[1.5px] border-deep-cove hover:bg-deep-cove/5 transition-all duration-200"
            style={{ borderRadius: '18px 0 18px 0 / 26px 0 26px 0' }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <div className="text-comet/50 font-satoshi text-[13px]">
          © 2025 KoraGrid Africa. All rights reserved
          <span className="ml-8">CIN: U74999PN2019PTC186495</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
