import React from 'react';
import { Shield, Users, Clock, CheckCircle, Award, MapPin } from 'lucide-react';

interface WhyChooseUsProps {
  variant?: 'default' | 'compact';
}

function WhyChooseUsSection({ variant = 'default' }: WhyChooseUsProps) {
  const features = [
    {
      icon: Shield,
      title: "BuildZoom Verified",
      description: "BuildZoom Score of 91, ranking in the top 37% of 65,686 Illinois contractors with verified permit history.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Expert Craftsmanship",
      description: "Years of experience delivering high-quality workmanship on every project, with all work completed to code specifications.",
      color: "green"
    },
    {
      icon: Clock,
      title: "Honest & Reliable",
      description: "We do what we say we'll do, when we say we'll do it. No surprises, no hidden costs, just honest communication.",
      color: "purple"
    },
    {
      icon: CheckCircle,
      title: "Code Compliant",
      description: "Every project meets or exceeds local building codes with proper permits and inspections for your safety.",
      color: "orange"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Deep knowledge of local building codes, permit requirements, and weather considerations specific to the Quad Cities area.",
      color: "teal"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Extensive portfolio of successful projects with satisfied customers and a 5-star rating based on real client experiences.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      teal: "bg-teal-100 text-teal-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  if (variant === 'compact') {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Crider Home Improvement</h2>
            <p className="text-lg text-gray-600">What you can expect when you work with us</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${getColorClasses(feature.color)}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Crider Home Improvement</h2>
          <p className="text-xl text-gray-600">Experience the difference of working with true professionals</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 ${getColorClasses(feature.color)}`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;