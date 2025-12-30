import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
    <Router>
      <div className="min-h-screen">
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
