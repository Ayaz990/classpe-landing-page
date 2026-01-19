import { motion } from "framer-motion"
import { CheckCircle, Home, Phone, Mail, Globe, ArrowLeft } from "lucide-react"
import logo from "../images/Classpe-final-Logo.webp"

export const ThankYou = ({ onNavigate }) => {
  const handleBackToHome = () => {
    window.location.hash = ""
    if (onNavigate) onNavigate("home")
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col">
      {/* Navbar */}
      <nav className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 z-50">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <a href="/" onClick={(e) => { e.preventDefault(); handleBackToHome(); }}>
            <img src={logo} alt="ClassPe" className="h-8 sm:h-10" />
          </a>
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-sm font-semibold text-primary hover:bg-primary-50 rounded-lg transition-all duration-300 font-poppins"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </button>
        </div>
      </nav>

      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary-200/50 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[15%] -right-[10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-secondary-100/60 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[20%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-primary-100/40 rounded-full blur-[100px] hidden md:block" />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center pt-24 sm:pt-28 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-[800px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-soft-xl p-6 sm:p-10 lg:p-14 text-center"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg"
              style={{ boxShadow: "0 8px 30px rgba(34, 197, 94, 0.25)" }}
            >
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-green-500" />
            </motion.div>

            {/* Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gunmetal mb-3 sm:mb-4 font-poppins"
            >
              Thank You<span className="text-primary">!</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-2"
            >
              Your form has been submitted successfully.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base lg:text-lg text-gray-500 mb-8 sm:mb-10"
            >
              Our team will get in touch with you within{" "}
              <span className="text-primary font-semibold">24 hours</span>.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10"
            >
              <button
                onClick={handleBackToHome}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-primary text-white font-semibold rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-primary-lg hover:shadow-xl font-poppins text-sm sm:text-base"
              >
                <Home className="w-5 h-5" />
                Explore Courses
              </button>

              <a
                href="tel:+919960192594"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-primary font-semibold rounded-xl border-2 border-primary hover:bg-primary-50 hover:-translate-y-1 transition-all duration-300 font-poppins text-sm sm:text-base"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </motion.div>

            {/* Steps Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl sm:rounded-2xl p-5 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-bold text-gunmetal mb-5 sm:mb-7 font-poppins">
                What happens next?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { num: 1, text: "Our team reviews your request" },
                  { num: 2, text: "We call you to understand your needs" },
                  { num: 3, text: "Get started with ClassPe!" },
                ].map((step, index) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 p-3 sm:p-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-primary sm:mb-4 flex-shrink-0 font-poppins">
                      {step.num}
                    </div>
                    <p className="text-sm sm:text-[15px] text-gray-600 text-left sm:text-center">
                      {step.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200"
            >
              <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                Have questions? Reach out to us directly:
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
                <a
                  href="tel:+919960192594"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-[15px] font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  +91 99601 92594
                </a>
                <a
                  href="mailto:info@classpe.com"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-[15px] font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  info@classpe.com
                </a>
                <a
                  href="https://www.classpe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-sm sm:text-[15px] font-medium text-gray-700 hover:text-primary transition-colors"
                >
                  <Globe className="w-4 h-4 text-primary" />
                  www.classpe.com
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 sm:py-6 px-4 text-gray-500 text-xs sm:text-sm relative z-10">
        <p>
          &copy; 2025{" "}
          <a
            href="https://www.classpe.com"
            className="text-primary font-medium hover:underline"
          >
            ClassPe
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  )
}
