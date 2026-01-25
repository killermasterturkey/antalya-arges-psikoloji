import { motion } from 'framer-motion';

interface TrustBadge {
  icon: string;
  text: string;
  subtext?: string;
}

interface TrustBadgesProps {
  badges?: TrustBadge[];
  theme?: 'olive' | 'teal' | 'purple' | 'pink';
  variant?: 'horizontal' | 'grid';
}

const defaultBadges: TrustBadge[] = [
  { icon: 'ri-calendar-check-line', text: '10+ Yıl', subtext: 'Deneyim' },
  { icon: 'ri-user-smile-line', text: '1000+', subtext: 'Mutlu Danışan' },
  { icon: 'ri-phone-line', text: 'Hızlı', subtext: 'Randevu' },
  { icon: 'ri-shield-check-line', text: '%100', subtext: 'Gizlilik' },
];

const themeColors = {
  olive: {
    bg: 'bg-olive/10',
    icon: 'text-olive',
    border: 'border-olive/20',
  },
  teal: {
    bg: 'bg-teal-50',
    icon: 'text-teal-600',
    border: 'border-teal-200',
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'text-purple-600',
    border: 'border-purple-200',
  },
  pink: {
    bg: 'bg-pink-50',
    icon: 'text-pink-600',
    border: 'border-pink-200',
  },
};

const TrustBadges = ({
  badges = defaultBadges,
  theme = 'olive',
  variant = 'horizontal',
}: TrustBadgesProps) => {
  const colors = themeColors[theme];

  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`${colors.bg} border ${colors.border} rounded-2xl p-5 text-center`}
          >
            <motion.div
              className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}
              whileHover={{ rotate: 10 }}
            >
              <i className={`${badge.icon} text-2xl ${colors.icon}`}></i>
            </motion.div>
            <p className="font-bold text-darkgray text-lg">{badge.text}</p>
            {badge.subtext && (
              <p className="text-sm text-darkgray/60">{badge.subtext}</p>
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${colors.bg} border ${colors.border} rounded-2xl p-6`}
    >
      <div className="flex flex-wrap justify-center items-center gap-8">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center`}>
              <i className={`${badge.icon} text-xl ${colors.icon}`}></i>
            </div>
            <div>
              <p className="font-bold text-darkgray">{badge.text}</p>
              {badge.subtext && (
                <p className="text-xs text-darkgray/60">{badge.subtext}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TrustBadges;
