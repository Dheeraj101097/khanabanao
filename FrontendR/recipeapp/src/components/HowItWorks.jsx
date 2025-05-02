import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Lightbulb, BookMarked, ChefHat } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your free account to access all features',
    color: 'bg-primary-100 text-primary-600'
  },
  {
    icon: Lightbulb,
    title: 'Get Suggestions',
    description: 'Receive AI-powered recipe recommendations',
    color: 'bg-secondary-100 text-secondary-600'
  },
  {
    icon: BookMarked,
    title: 'Save Recipes',
    description: 'Build your personalized cookbook',
    color: 'bg-accent-100 text-accent-600'
  },
  {
    icon: ChefHat,
    title: 'Enjoy Cooking',
    description: 'Follow recipes and create delicious meals',
    color: 'bg-primary-100 text-primary-600'
  }
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting started with FoodZone is easy. Follow these simple steps to begin your culinary journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-120px)] bg-gray-200 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center text-center relative z-10"
              >
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-6`}>
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-16px)] w-[calc(100%-32px)] h-0.5 bg-gray-200"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;