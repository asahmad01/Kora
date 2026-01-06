import React, { useState } from 'react'

const ConsultationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/xjgkqnko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', company: '', message: '' })
        setIsSubmitting(false)

        // Close modal after 3 seconds
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 3000)
      } else {
        setSubmitStatus('error')
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="p-8">
          <h2 className="font-reddit-sans font-bold text-deep-cove text-[32px] md:text-[36px] leading-[1.15] mb-3">
            Let's Build Together
          </h2>
          <p className="font-satoshi font-normal text-comet text-[16px] leading-relaxed mb-6">
            Schedule a consultation to discuss how KoraGrid can help transform your organization with AI.
          </p>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="font-satoshi text-green-800 text-[14px] font-semibold mb-1">
                Thank You!
              </p>
              <p className="font-satoshi text-green-700 text-[13px]">
                Your consultation request has been received. We'll reach out to you shortly to discuss how we can help transform your organization with AI.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="font-satoshi text-red-800 text-[14px]">
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-satoshi font-medium text-deep-cove text-[14px] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg font-satoshi text-[15px] focus:outline-none focus:ring-2 focus:ring-deep-cove focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-satoshi font-medium text-deep-cove text-[14px] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg font-satoshi text-[15px] focus:outline-none focus:ring-2 focus:ring-deep-cove focus:border-transparent"
                placeholder="john@company.com"
              />
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block font-satoshi font-medium text-deep-cove text-[14px] mb-2">
                Company/Organization
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg font-satoshi text-[15px] focus:outline-none focus:ring-2 focus:ring-deep-cove focus:border-transparent"
                placeholder="Your Company Name"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-satoshi font-medium text-deep-cove text-[14px] mb-2">
                How can we help? *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg font-satoshi text-[15px] focus:outline-none focus:ring-2 focus:ring-deep-cove focus:border-transparent resize-none"
                placeholder="Tell us about your project or requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#F9FF2D] text-deep-cove font-satoshi font-bold text-[15px] px-7 py-4 rounded-lg hover:bg-[#F9FF2D]/90 transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ConsultationModal
