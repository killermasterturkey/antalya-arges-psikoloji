import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Notification {
  name: string;
  action: string;
  time: string;
}

interface SocialProofNotificationProps {
  notifications?: Notification[];
  interval?: number;
  theme?: 'olive' | 'teal' | 'purple' | 'pink';
  startDelay?: number;
}

const defaultNotifications: Notification[] = [
  { name: 'Ayşe K.', action: 'randevu aldı', time: 'Az önce' },
  { name: 'Mehmet Y.', action: 'aradı', time: '2 dakika önce' },
  { name: 'Zeynep A.', action: 'randevu aldı', time: '5 dakika önce' },
  { name: 'Ali B.', action: 'WhatsApp yazdı', time: '8 dakika önce' },
  { name: 'Fatma S.', action: 'randevu aldı', time: '12 dakika önce' },
];

const themeColors = {
  olive: {
    accent: 'bg-olive',
    border: 'border-olive/20',
    text: 'text-olive',
  },
  teal: {
    accent: 'bg-teal-500',
    border: 'border-teal-200',
    text: 'text-teal-600',
  },
  purple: {
    accent: 'bg-purple-500',
    border: 'border-purple-200',
    text: 'text-purple-600',
  },
  pink: {
    accent: 'bg-pink-500',
    border: 'border-pink-200',
    text: 'text-pink-600',
  },
};

const SocialProofNotification = ({
  notifications = defaultNotifications,
  interval = 5000,
  theme = 'olive',
  startDelay = 3000,
}: SocialProofNotificationProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const colors = themeColors[theme];

  useEffect(() => {
    // Initial delay before showing first notification
    const startTimer = setTimeout(() => {
      setIsVisible(true);
      setShowNotification(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!isVisible) return;

    const rotateTimer = setInterval(() => {
      setShowNotification(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setShowNotification(true);
      }, 500);
    }, interval);

    return () => clearInterval(rotateTimer);
  }, [isVisible, notifications.length, interval]);

  const currentNotification = notifications[currentIndex];

  return (
    <div className="fixed bottom-24 left-4 z-40 lg:bottom-4">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ x: -100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            exit={{ x: -100, opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className={`bg-white rounded-2xl shadow-xl border ${colors.border} p-4 max-w-xs`}
          >
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <div className={`w-10 h-10 ${colors.accent} rounded-full flex items-center justify-center text-white font-bold`}>
                {currentNotification.name.charAt(0)}
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-sm text-darkgray">
                  <span className="font-semibold">{currentNotification.name}</span>{' '}
                  <span className={colors.text}>{currentNotification.action}</span>
                </p>
                <p className="text-xs text-darkgray/50">{currentNotification.time}</p>
              </div>

              {/* Verified badge */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <i className={`ri-verified-badge-fill ${colors.text} text-lg`}></i>
              </motion.div>
            </div>

            {/* Progress bar */}
            <motion.div
              className={`h-0.5 ${colors.accent} mt-3 rounded-full`}
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: interval / 1000, ease: 'linear' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialProofNotification;
