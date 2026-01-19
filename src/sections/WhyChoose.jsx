import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, GraduationCap, Video, Sparkles } from "lucide-react"

const useAnimatedCounter = (target, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!startOnView || (isInView && !hasStarted.current)) {
      hasStarted.current = true
      let startTime = null
      const startValue = 0

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        )

        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(startValue + (target - startValue) * easeOutQuart)

        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(target)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [target, duration, isInView, startOnView])

  return [count, ref]
}

const MetricCard = ({ icon: Icon, value, suffix, label, description, delay = 0, color = "primary" }) => {
  const [count, ref] = useAnimatedCounter(value)

  const colorClasses = {
    primary: {
      bg: "bg-primary-50",
      icon: "text-primary",
      accent: "text-primary",
    },
    secondary: {
      bg: "bg-secondary-50",
      icon: "text-secondary-600",
      accent: "text-secondary-600",
    },
  }

  const currentColor = colorClasses[color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <div className="card-hover h-full p-6 lg:p-8 bg-white border border-gray-100 hover:border-primary-200 transition-all duration-300 text-center">
        {}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
          className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${currentColor.bg} flex items-center justify-center`}
        >
          <Icon className={`w-8 h-8 ${currentColor.icon}`} />
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="mb-2"
        >
          <span className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-gray-900">
            {count.toLocaleString()}
          </span>
          {suffix && (
            <span className={`text-3xl md:text-4xl lg:text-5xl font-poppins font-bold ${currentColor.accent} ml-1`}>
              {suffix}
            </span>
          )}
        </motion.div>

        {}
        <h3 className="text-h5 md:text-h4 mb-2 font-poppins font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300">
          {label}
        </h3>

        {}
        <p className="text-body text-gray-600 leading-relaxed">
          {description}
        </p>

        {}
        <motion.div
          className={`mt-4 h-1 w-12 mx-auto ${currentColor.bg} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay + 0.5 }}
        />
      </div>
    </motion.div>
  )
}

export const WhyChoose = () => {
  const metrics = [
    {
      icon: Users,

      value: 15.1,
      suffix: "K+",
      label: "Students",
      description: "Active learners achieving their academic goals with ClassPe",
      color: "primary",
      delay: 0,
    },
    {
      icon: GraduationCap,
      value: 10,
      suffix: "+",
      label: "Expert Mentors",
      description: "Certified educators with years of teaching experience",
      color: "secondary",
      delay: 0.1,
    },
    {
      icon: Video,
      value: 175,
      suffix: "+",
      label: "Live Classes",
      description: "High-definition interactive sessions every month",
      color: "primary",
      delay: 0.2,
    },
    {
      icon: Sparkles,
      value: 95,
      suffix: "%",
      label: "Personalized Learning",
      description: "Students experience customized learning paths",
      color: "secondary",
      delay: 0.3,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  return (
    <section
      id="why-choose"
      className="section-padding bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden scroll-mt-20"
    >
      {}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-secondary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
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
          className="text-center mb-6 md:mb-8 lg:mb-10"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary-50 text-primary font-poppins font-semibold text-sm rounded-full mb-4"
          >
            Our Impact
          </motion.span>
          <h2 className="text-h2 md:text-h1 mb-4 font-poppins font-bold text-gray-900">
            Why Choose <span className="text-primary">ClassPe</span>?
          </h2>
          <p className="text-body-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of students who are transforming their learning
            journey with our innovative platform.
          </p>
        </motion.div>

        {}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-6"
        >
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              description={metric.description}
              delay={metric.delay}
              color={metric.color}
            />
          ))}
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 md:mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-body font-inter">
              Trusted by students and parents nationwide
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
