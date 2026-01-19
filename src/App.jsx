import { useState, useEffect } from "react"
import "./index.css"
import { Navbar } from "./components/Navbar"
import { trackPageView } from "./utils/analytics"
import { Hero } from "./sections/Hero"
import { Advantage } from "./sections/Advantage"
import { EmpoweringTransformations } from "./sections/EmpoweringTransformations"
import { CourseHighlights } from "./sections/CourseHighlights"
import { EliteTeachers } from "./sections/EliteTeachers"
import { Testimonials } from "./sections/Testimonials"
import { VideoSection } from "./sections/VideoSection"
import { FAQ } from "./sections/FAQ"
import { Courses } from "./sections/Courses"
import { Teachers } from "./sections/Teachers"
import { Students } from "./sections/Students"
import { Pricing } from "./sections/Pricing"
import { Contact } from "./sections/Contact"
import { CTABanner } from "./sections/CTABanner"
import { ZohoFormSection } from "./sections/ZohoFormSection"
import { Footer } from "./sections/Footer"
import { ThankYou } from "./sections/ThankYou"

function App() {

  const getInitialPage = () => {
    const hash = window.location.hash
    if (hash === "#teachers") return "teachers"
    if (hash === "#contact") return "contact"
    if (hash === "#students") return "students"
    if (hash === "#pricing") return "pricing"
    if (hash === "#courses") return "courses"
    if (hash === "#thank-you") return "thank-you"
    return "home"
  }

  const [currentPage, setCurrentPage] = useState(getInitialPage)

  useEffect(() => {
    trackPageView(currentPage)
  }, [currentPage])

  useEffect(() => {

    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash === "#teachers") {
        setCurrentPage("teachers")
      } else if (hash === "#contact") {
        setCurrentPage("contact")
      } else if (hash === "#students") {
        setCurrentPage("students")
      } else if (hash === "#pricing") {
        setCurrentPage("pricing")
      } else if (hash === "#courses") {
        setCurrentPage("courses")
      } else if (hash === "#thank-you") {
        setCurrentPage("thank-you")
      } else {
        setCurrentPage("home")
      }
    }

    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={setCurrentPage} />
      {currentPage === "teachers" ? (
        <>
          <Teachers />
          <Footer />
        </>
      ) : currentPage === "contact" ? (
        <>
          <Contact />
          <Footer />
        </>
      ) : currentPage === "students" ? (
        <>
          <Students />
          <Footer />
        </>
      ) : currentPage === "pricing" ? (
        <>
          <Pricing />
          <Footer />
        </>
      ) : currentPage === "courses" ? (
        <>
          <Courses />
          <Footer />
        </>
      ) : currentPage === "thank-you" ? (
        <>
          <ThankYou onNavigate={setCurrentPage} />
        </>
      ) : (
        <>
          <Hero />
          <Advantage />
          <EmpoweringTransformations />
          <CourseHighlights />
          <EliteTeachers />
          <Testimonials />
          <VideoSection />
          <ZohoFormSection />
          <FAQ />
          <CTABanner />
          <Footer />
        </>
      )}
      </div>
  )
}

export default App