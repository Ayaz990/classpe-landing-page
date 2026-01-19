import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { trackPhoneClick, trackEmailClick, trackLocationClick } from "../utils/analytics"

export const Footer = () => {
  const handleFooterClick = (contact) => {
    if (contact.icon === Mail) {
      trackEmailClick('info@classpe.com', 'footer')
    } else if (contact.icon === Phone) {
      trackPhoneClick('+919960192594', 'footer')
    } else if (contact.icon === MapPin) {
      trackLocationClick('footer')
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      text: "info@classpe.com",
      href: "mailto:info@classpe.com",
    },
    {
      icon: Phone,
      text: "+91 99601 92594",
      href: "tel:+919960192594",
    },
    {
      icon: MapPin,
      text: "View Our Location",
      href: "https://maps.app.goo.gl/ZtWVbZqP4vRPDKkK8",
    },
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="py-6 md:py-4 lg:py-5"
        >
          <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-3xl mx-auto px-2 md:px-4">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.icon === MapPin ? "_blank" : undefined}
                  rel={contact.icon === MapPin ? "noopener noreferrer" : undefined}
                  onClick={() => handleFooterClick(contact)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-1 md:gap-2 text-gray-300 hover:text-white transition-colors duration-300 group p-2 md:p-3 rounded-xl hover:bg-gray-800/50"
                  whileHover={{ y: -3 }}
                >
                  <div className="w-10 h-10 md:w-10 md:h-10 rounded-xl bg-gray-800 group-hover:bg-primary flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-5 h-5 md:w-5 md:h-5" />
                  </div>
                  <span className="font-inter text-xs md:text-sm text-center break-words max-w-full leading-tight">{contact.text}</span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
