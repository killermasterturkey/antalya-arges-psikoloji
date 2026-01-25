import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  theme?: 'olive' | 'teal' | 'purple' | 'pink';
  title?: string;
  subtitle?: string;
}

const themeColors = {
  olive: {
    bg: 'bg-olive/5',
    activeBg: 'bg-olive/10',
    icon: 'text-olive',
    border: 'border-olive/20',
    accent: 'bg-olive',
  },
  teal: {
    bg: 'bg-teal-50/50',
    activeBg: 'bg-teal-50',
    icon: 'text-teal-600',
    border: 'border-teal-200',
    accent: 'bg-teal-500',
  },
  purple: {
    bg: 'bg-purple-50/50',
    activeBg: 'bg-purple-50',
    icon: 'text-purple-600',
    border: 'border-purple-200',
    accent: 'bg-purple-500',
  },
  pink: {
    bg: 'bg-pink-50/50',
    activeBg: 'bg-pink-50',
    icon: 'text-pink-600',
    border: 'border-pink-200',
    accent: 'bg-pink-500',
  },
};

const FAQSection = ({
  faqs,
  theme = 'olive',
  title = 'Sıkça Sorulan Sorular',
  subtitle = 'Merak ettiklerinizi yanıtlıyoruz',
}: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const colors = themeColors[theme];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Schema markup for SEO
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-20 px-6 lg:px-12">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            className="text-4xl mb-4 block"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ❓
          </motion.span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-darkgray mb-4">
            {title}
          </h2>
          <p className="text-darkgray/60">{subtitle}</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl border ${colors.border} overflow-hidden transition-all duration-300 ${
                activeIndex === index ? colors.activeBg : colors.bg
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-darkgray pr-4">{faq.question}</span>
                <motion.span
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex-shrink-0 w-8 h-8 ${colors.accent} rounded-full flex items-center justify-center`}
                >
                  <i className="ri-arrow-down-s-line text-white text-lg"></i>
                </motion.span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <div className={`w-12 h-0.5 ${colors.accent} mb-4`} />
                      <p className="text-darkgray/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
