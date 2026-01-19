import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Globe, Send, MapPin } from "lucide-react"
import { Button } from "../components/Button"
import { trackPhoneClick, trackEmailClick, trackExternalLink } from "../utils/analytics"

export const Contact = () => {
  const [formLoaded, setFormLoaded] = useState(false)

  const handleContactClick = (contact) => {
    if (contact.title === 'Phone') {
      trackPhoneClick(contact.text, 'contact_section')
    } else if (contact.title === 'Email') {
      trackEmailClick(contact.text, 'contact_section')
    } else if (contact.title === 'Website') {
      trackExternalLink(contact.href, 'website', 'contact_section')
    }
  }

  useEffect(() => {

    const script = document.createElement("script")
    script.src = "https://forms.zohopublic.in/js/embediframe.js"
    script.async = true
    script.onload = () => setFormLoaded(true)
    document.body.appendChild(script)

    return () => {

      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      text: "+91-8788234365",
      href: "tel:+918788234365",
      color: "primary",
    },
    {
      icon: Mail,
      title: "Email",
      text: "info@classpe.com",
      href: "mailto:info@classpe.com",
      color: "secondary",
    },
    {
      icon: Globe,
      title: "Website",
      text: "www.classpe.com",
      href: "https://www.classpe.com",
      color: "primary",
    },
  ]

  return (
    <section
      id="contact"
      className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 relative overflow-hidden"
    >
      {}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary-50 text-primary-600 font-poppins font-semibold text-sm rounded-full mb-4"
          >
            Get In Touch
          </motion.span>
          <h2 className="text-h2 md:text-h1 mb-4 font-poppins font-bold text-gray-900">
            Contact <span className="text-primary">ClassPe Tutorial</span>
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon
                return (
                  <motion.a
                    key={index}
                    href={contact.href}
                    onClick={() => handleContactClick(contact)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="block p-6 bg-white rounded-xl shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-${
                          contact.color === "primary"
                            ? "primary"
                            : "secondary"
                        }-50 flex items-center justify-center group-hover:bg-${
                          contact.color === "primary"
                            ? "primary"
                            : "secondary"
                        } transition-colors duration-300`}
                      >
                        <Icon
                          className={`w-6 h-6 text-${
                            contact.color === "primary"
                              ? "primary"
                              : "secondary"
                          }-600`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-h6 font-poppins font-semibold text-gray-900 mb-1">
                          {contact.title}
                        </h3>
                        <p className="text-body text-gray-600 font-inter">
                          {contact.text}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border border-primary-100"
            >
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h3 className="text-h6 font-poppins font-semibold text-gray-900 mb-2">
                    Office Hours
                  </h3>
                  <p className="text-body-sm text-gray-600 font-inter mb-2">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-body-sm text-gray-600 font-inter">
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-xl shadow-card border border-gray-100 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center">
                  <Send className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-h5 font-poppins font-bold text-gray-900">
                    Send us a Message
                  </h3>
                  <p className="text-body-sm text-gray-600 font-inter">
                    Fill out the form below and we'll get back to you
                  </p>
                </div>
              </div>

              {}
              <div className="relative min-h-[600px]">
                {}

                {}
                <iframe
                  src="https://forms.zohopublic.in/classpe/form/ContactForm/formperma/YOUR_FORM_ID"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Contact Form"
                  className="w-full rounded-lg"
                  style={{ minHeight: "600px" }}
                ></iframe>

                {}
                {}
              </div>

              {}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-body-sm text-gray-600 font-inter text-center">
                  <span className="font-semibold">Note:</span> If the form doesn't load,
                  please contact us directly at{" "}
                  <a
                    href="mailto:info@classpe.com"
                    onClick={() => trackEmailClick('info@classpe.com', 'contact_fallback')}
                    className="text-primary hover:underline font-semibold"
                  >
                    info@classpe.com
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:+918788234365"
                    onClick={() => trackPhoneClick('+918788234365', 'contact_fallback')}
                    className="text-primary hover:underline font-semibold"
                  >
                    +91-8788234365
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
