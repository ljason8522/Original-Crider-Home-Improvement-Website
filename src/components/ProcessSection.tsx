import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

interface ProcessSectionProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

function ProcessSection({ title, subtitle, steps }: ProcessSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center group relative">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-6 hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-3xl font-bold text-blue-600 mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;