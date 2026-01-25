import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { trackPhoneClick, trackWhatsAppClick } from '../../utils/analytics';

interface FloatingCTAProps {
  phoneNumber?: string;
  whatsappNumber?: string;
  theme?: 'olive' | 'teal' | 'purple' | 'pink';
  trackingSource: string;
  showAfterScroll?: number;
}

const themeColors = {
  olive: {
    bg: 'from-olive to-green-600',
    text: 'text-olive',
    shadow: 'shadow-olive/30',
  },
  teal: {
    bg: 'from-teal-600 to-teal-500',
    text: 'text-teal-600',
    shadow: 'shadow-teal-500/30',
  },
  purple: {
    bg: 'from-purple-600 to-indigo-600',
    text: 'text-purple-600',
    shadow: 'shadow-purple-500/30',
  },
  pink: {
    bg: 'from-pink-500 to-purple-500',
    text: 'text-purple-600',
    shadow: 'shadow-pink-500/30',
  },
};

const FloatingCTA = ({
  phoneNumber = '+905403251525',
  whatsappNumber = '905403251525',
  theme = 'olive',
  trackingSource,
  showAfterScroll = 400,
}: FloatingCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const colors = themeColors[theme];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfterScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll]);

  const formattedPhone = phoneNumber.replace('+90', '').replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="fixed top-20 left-0 right-0 z-40 hidden lg:block"
        >
          <div className={`bg-gradient-to-r ${colors.bg} shadow-lg ${colors.shadow}`}>
            <div className="max-w-7xl mx-auto px-6 py-3">
              <div className="flex items-center justify-between">
                {/* Left - Message */}
                <div className="flex items-center space-x-3 text-white">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-white rounded-full"
                  />
                  <span className="font-medium">
                    Hemen arayın, <span className="font-bold">profesyonel destek</span> alın!
                  </span>
                </div>

                {/* Right - CTA Buttons */}
                <div className="flex items-center space-x-4">
                  <motion.a
                    href={`tel:${phoneNumber}`}
                    onClick={() => trackPhoneClick(`floating_${trackingSource}`)}
                    className="flex items-center space-x-2 bg-white px-6 py-2.5 rounded-full font-bold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                      className={colors.text}
                    >
                      <i className="ri-phone-fill text-lg"></i>
                    </motion.span>
                    <span className={colors.text}>{formattedPhone}</span>

                    {/* Pulse effect */}
                    <motion.span
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${colors.bg} opacity-30`}
                      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.a>

                  <motion.a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`floating_${trackingSource}`)}
                    className="flex items-center space-x-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full font-semibold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="ri-whatsapp-fill text-lg"></i>
                    <span>WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
