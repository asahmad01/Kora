import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import Hero from './components/Hero'
import ImageSection from './components/ImageSection'
import BankingSection from './components/BankingSection'
import GovernmentSection from './components/GovernmentSection'
import EducationSection from './components/EducationSection'
import EnterpriseSection from './components/EnterpriseSection'
import WhyChooseSection from './components/WhyChooseSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsConditions from './components/TermsConditions'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Home Page Component
const HomePage = () => (
  <>
    <LandingPage />
    {/* <Hero /> */}
    <ImageSection />
    <BankingSection />
    <GovernmentSection />
    <EducationSection />
    <EnterpriseSection />
    <WhyChooseSection />
    <CTASection />
  </>
)

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
