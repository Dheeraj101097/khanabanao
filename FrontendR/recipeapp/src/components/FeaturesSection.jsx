import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';
import { 
  Sparkles, 
  Search, 
  BookOpen, 
  Lock, 
  Edit 
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI-Powered Food Suggestions',
    description: 'Get personalized recipe recommendations based on your preferences and dietary needs.'
  },
  {
    icon: Search,
    title: 'Smart Recipe Categories',
    description: 'Browse recipes by cuisine, meal type, ingredients, or cooking time for easy discovery.'
  },
  {
    icon: BookOpen,
    title: 'Personalized Recipe Book',
    description: 'Save your favorite recipes in your personal cookbook for quick access anytime.'
  },
  {
    icon: Lock,
    title: 'Secure Login/Signup',
    description: 'Your account is protected with secure authentication to keep your data safe.'
  },
  {
    icon: Edit,
    title: 'Full CRUD for Recipes',
    description: 'Create, read, update, and delete your own recipes with our easy-to-use interface.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Amazing Features</h2>
          <p className="section-subtitle">
            Discover all the powerful features that make FoodZone the perfect companion for your culinary adventures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;