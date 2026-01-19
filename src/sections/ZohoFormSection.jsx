import { motion } from "framer-motion"
import { ZohoForm } from "../components/ZohoForm"
import { Phone, Mail, MapPin } from "lucide-react"

export const ZohoFormSection = () => {
  return (
    <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50/20 overflow-hidden">
      {}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gunmetal mb-4">
            Get Started with{" "}
            <span className="text-primary">ClassPe</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and our team will get in touch with you shortly
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gunmetal mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gunmetal mb-1">Phone</p>
                    <a href="tel:+919960192594" className="text-gray-600 hover:text-primary transition-colors">
                      +91 99601 92594
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gunmetal mb-1">Email</p>
                    <a href="mailto:info@classpe.com" className="text-gray-600 hover:text-primary transition-colors">
                      info@classpe.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-gunmetal mb-1">Website</p>
                    <a href="https://www.classpe.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                      www.classpe.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {}
            <div className="bg-gradient-to-br from-primary to-primary-400 rounded-2xl shadow-lg p-6 text-white">
              <h4 className="text-xl font-bold mb-3">Why Choose ClassPe?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Expert Teachers with Proven Track Records
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Personalized Learning Paths
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  15,000+ Successful Students
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  4.9/5 Average Rating
                </li>
              </ul>
            </div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full">
              <ZohoForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}