import { motion } from "framer-motion"
import { LayoutGrid } from "../components/ui/layout-grid"
import {
  BookOpen,
  Users,
  Award,
  Video,
  Brain,
  TrendingUp,
} from "lucide-react"

export const Features = () => {
  const FeatureOne = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white font-poppins">
          Expert Curriculum
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-white/90 font-inter">
          Comprehensive courses designed by industry experts and academic professionals to ensure quality learning for CBSE and JEE preparation.
        </p>
      </div>
    );
  };

  const FeatureTwo = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white font-poppins">
          Interactive Classes
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-white/90 font-inter">
          Live sessions with real-time interaction, Q&A, and collaborative learning experiences with our elite IIT & IISER faculty.
        </p>
      </div>
    );
  };

  const FeatureThree = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white font-poppins">
          Certified Teachers
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-white/90 font-inter">
          Learn from certified educators with years of experience and proven track records in producing top JEE rankers.
        </p>
      </div>
    );
  };

  const FeatureFour = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white font-poppins">
          Recorded Sessions
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-white/90 font-inter">
          Access recorded classes anytime, anywhere. Learn at your own pace with lifetime access to all course materials.
        </p>
      </div>
    );
  };

  const FeatureFive = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white font-poppins">
          Personalized Learning
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-white/90 font-inter">
          AI-powered learning paths tailored to your strengths, weaknesses, and learning style for maximum effectiveness.
        </p>
      </div>
    );
  };

  const FeatureSix = () => {
    return (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white font-poppins">
          Progress Tracking
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-white/90 font-inter">
          Monitor your progress with detailed analytics, performance reports, and achievement badges to stay motivated.
        </p>
      </div>
    );
  };

  const cards = [
    {
      id: 1,
      title: "Expert Curriculum",
      content: <FeatureOne />,
      className: "md:col-span-2",
      icon: BookOpen,
    },
    {
      id: 2,
      title: "Interactive Classes",
      content: <FeatureTwo />,
      className: "col-span-1",
      icon: Users,
    },
    {
      id: 3,
      title: "Certified Teachers",
      content: <FeatureThree />,
      className: "col-span-1",
      icon: Award,
    },
    {
      id: 4,
      title: "Recorded Sessions",
      content: <FeatureFour />,
      className: "col-span-1",
      icon: Video,
    },
    {
      id: 5,
      title: "Personalized Learning",
      content: <FeatureFive />,
      className: "col-span-1",
      icon: Brain,
    },
    {
      id: 6,
      title: "Progress Tracking",
      content: <FeatureSix />,
      className: "md:col-span-2",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative section-padding-sm bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary-50 text-primary-600 font-poppins font-semibold text-sm rounded-full mb-4"
          >
            Features
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gunmetal mb-4 font-poppins">
            Premium Learning{" "}
            <span className="text-primary">Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            Discover the features that make ClassPe the preferred choice for students and educators worldwide.
          </p>
        </motion.div>

        {}
        <div className="h-screen py-20 w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  )
}