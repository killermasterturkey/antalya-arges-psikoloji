import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { trackPhoneClick, trackWhatsAppClick } from '../../../utils/analytics';
import { FloatingCTA, TrustBadges, FAQSection } from '../../../components/lp';

const faqData = [
  {
    question: 'Antalya\'da çift danışmanlığı randevusu nasıl alabilirim?',
    answer: 'Muratpaşa ve Konyaaltı bölgelerinde hizmet veren merkezimizden telefonla veya WhatsApp üzerinden eşinizle birlikte randevu alabilirsiniz. İlk görüşmede ilişkinizdeki sorunları değerlendiriyoruz.',
  },
  {
    question: 'Eşimle sürekli tartışıyoruz, çift danışmanlığı yardımcı olur mu?',
    answer: 'Evet, evlilikte iletişim sorunları en sık karşılaştığımız konulardan biridir. Antalya\'da deneyimli psikologlarımız, iletişim becerilerinizi güçlendirmenize ve tartışmaları azaltmanıza yardımcı olur.',
  },
  {
    question: 'Aldatma sonrası evlilik danışmanlığı işe yarar mı?',
    answer: 'Aldatma sonrası güven onarımı zorlu ama mümkün bir süreçtir. Profesyonel çift danışmanlığı ile aldatma sonrası ilişkiyi yeniden inşa etmek için destek sağlıyoruz.',
  },
  {
    question: 'Boşanmak istemiyorum, evlilik danışmanlığı ile kurtarılabilir mi?',
    answer: 'Birçok çift evlilik danışmanlığı sayesinde boşanmaktan vazgeçmiş ve ilişkilerini güçlendirmiştir. Muratpaşa\'daki merkezimizde deneyimli psikologlarımız size yardımcı olabilir.',
  },
  {
    question: 'Evlilik öncesi danışmanlık Antalya\'da var mı?',
    answer: 'Evet, nişanlılık döneminde evlilik öncesi danışmanlık alarak ilişkinizi güçlendirebilir ve olası sorunları önceden çözebilirsiniz.',
  },
  {
    question: 'Kıskançlık sorunu için çift danışmanlığı alabilir miyiz?',
    answer: 'Kıskançlık ve güven sorunları çift danışmanlığında sık karşılaştığımız konulardır. Konyaaltı ve Muratpaşa\'daki merkezimizde bu konuda psikolog desteği alabilirsiniz.',
  },
];

const LPCiftTerapisi = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  // Gerçek danışan yorumları
  const testimonials = [
    {
      text: "Eşimle olan iletişim sorunlarımızı profesyonel destek ile aştık. Çok memnun kaldık, kesinlikle tavsiye ederim.",
      author: "Y.T.",
      rating: 5,
    },
    {
      text: "Güler yüzlü ve anlayışlı yaklaşımları sayesinde ilişkimizde büyük ilerlemeler kaydettik.",
      author: "M.K.",
      rating: 5,
    },
    {
      text: "Danışmanlık sürecinde bize verilen destekten çok memnunuz. Birbirimizi daha iyi anlamaya başladık.",
      author: "E.S.",
      rating: 5,
    },
  ];

  const issues = [
    { icon: 'ri-chat-delete-line', text: 'Evlilikte İletişim Sorunu', color: 'from-teal-500 to-cyan-500' },
    { icon: 'ri-shield-cross-line', text: 'Güven ve Kıskançlık Sorunu', color: 'from-slate-500 to-gray-500' },
    { icon: 'ri-emotion-sad-line', text: 'Duygusal Uzaklaşma', color: 'from-cyan-500 to-teal-500' },
    { icon: 'ri-discuss-line', text: 'Eşimle Tartışıyoruz', color: 'from-slate-600 to-slate-500' },
    { icon: 'ri-heart-add-line', text: 'Aldatma Sonrası Danışmanlık', color: 'from-teal-600 to-teal-500' },
    { icon: 'ri-calendar-heart-line', text: 'Evlilik Öncesi Danışmanlık', color: 'from-cyan-600 to-cyan-500' },
  ];

  const benefits = [
    { icon: 'ri-lock-line', text: 'Tam Gizlilik', desc: 'Görüşmeler gizli tutulur' },
    { icon: 'ri-heart-2-line', text: 'Deneyimli Psikolog', desc: '10+ yıl deneyim' },
    { icon: 'ri-team-line', text: 'Birlikte Çözüm', desc: 'İkiniz için özel program' },
    { icon: 'ri-refresh-line', text: 'İlişki Onarımı', desc: 'Kanıtlanmış yöntemler' },
  ];

  // Floating elements - soft and calming
  const floatingElements = ['🌿', '✨', '🫂', '💫', '🌸', '☁️'];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-teal-50/30 to-white overflow-hidden">
      {/* Floating CTA Bar */}
      <FloatingCTA theme="teal" trackingSource="cift" />

      {/* Floating Elements Background - Soft and Calming */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {floatingElements.map((element, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-15"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
            }}
            animate={{
              y: -100,
              x: `+=${Math.sin(i) * 100}`,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          >
            {element}
          </motion.div>
        ))}
      </div>

      {/* Animated Background Circles - Soft Teal/Sage Tones */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 right-1/3 w-72 h-72 bg-slate-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl font-bold text-darkgray flex items-center space-x-3">
            <div className="w-10 h-10 bg-olive rounded-xl flex items-center justify-center p-1.5">
              <img src="/logo-icon.webp" alt="Arges Logo" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <span>Arges Psikoloji</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">Anasayfa</Link>
            <Link to="/about" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">Hakkımızda</Link>
            <Link to="/services" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">Hizmetlerimiz</Link>
            <Link to="/team" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">Ekibimiz</Link>
            <Link to="/testimonials" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">Yorumlar</Link>
            <Link to="/contact" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">İletişim</Link>
          </nav>

          <motion.a
            href="tel:+905403251525"
            onClick={() => trackPhoneClick('lp_header_cift')}
            className="flex items-center space-x-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <i className="ri-phone-fill"></i>
            </motion.span>
            <span className="hidden sm:inline">0540 325 15 25</span>
          </motion.a>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 via-teal-900/60 to-transparent z-10" />
            <img
              src="/images/sas/sas-1.png"
              alt="Antalya Çift Danışmanlığı - Evlilik Danışmanlığı Seansı"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
            {/* Couple Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-6xl"
              >
                💑
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Antalya Çift Danışmanlığı
              <motion.span
                className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent block"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                Evlilik Danışmanlığı
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-white/80 max-w-lg"
            >
              Evlilik sorunları, iletişim kopukluğu, güven problemleri için <span className="font-semibold text-teal-300">Muratpaşa ve Konyaaltı'da deneyimli psikolog</span>.
              Gizli ve güvenli ortamda ilişki danışmanlığı.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-8"
            >
              <div className="text-center">
                <motion.p
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  500+
                </motion.p>
                <p className="text-sm text-white/60">Mutlu Çift</p>
              </div>
              <div className="text-center">
                <motion.p
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  %92
                </motion.p>
                <p className="text-sm text-white/60">Başarı Oranı</p>
              </div>
              <div className="text-center">
                <motion.p
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  10+
                </motion.p>
                <p className="text-sm text-white/60">Yıl Deneyim</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <motion.a
                href="tel:+905403251525"
                onClick={() => trackPhoneClick('lp_hero_cift')}
                className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-2xl overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
                >
                  <i className="ri-phone-fill text-2xl"></i>
                </motion.span>
                <span className="relative z-10">0540 325 15 25</span>
              </motion.a>
              <p className="text-sm text-white/60">
                Randevu almak için birlikte arayın
              </p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="https://wa.me/905403251525?text=Merhaba,%20çift%20danışmanlığı%20için%20randevu%20almak%20istiyoruz."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('lp_hero_cift')}
                className="inline-flex items-center space-x-2 bg-[#25D366]/10 text-[#25D366] px-6 py-3 rounded-full font-medium hover:bg-[#25D366]/20 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-whatsapp-fill text-2xl"></i>
                <span>WhatsApp ile yazın</span>
              </motion.a>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-teal-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(20, 184, 166, 0.15)" }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-3"
                    whileHover={{ rotate: 10 }}
                  >
                    <i className={`${benefit.icon} text-2xl text-teal-600`}></i>
                  </motion.div>
                  <p className="text-sm font-semibold text-darkgray">{benefit.text}</p>
                  <p className="text-xs text-darkgray/60 mt-1">{benefit.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

              {/* Right - Image Card */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="hidden lg:block"
              >
                <motion.div
                  className="relative"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/sas/sas-4.png"
                      alt="Antalya Evlilik Psikoloğu - İlişki Danışmanlığı"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent" />

                    {/* Floating Card */}
                    <motion.div
                      className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">🤝</div>
                        <div>
                          <p className="font-semibold text-darkgray">Mutlu Çiftler</p>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-amber-400">★</span>
                            ))}
                            <span className="text-darkgray/60 text-sm ml-2">5.0 (90+ yorum)</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Badges */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-gradient-to-br from-teal-600 to-teal-500 text-white px-5 py-3 rounded-2xl shadow-xl"
                    animate={{ rotate: [0, 3, -3, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <p className="text-2xl">✨</p>
                    <p className="text-xs">%92 Başarı</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <i className="ri-arrow-down-double-line text-white/50 text-3xl"></i>
          </motion.div>
        </section>

        {/* Why Choose Us Section - Persuasive */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-slate-900 to-teal-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block bg-teal-500/20 text-teal-300 px-6 py-2 rounded-full text-sm font-bold mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                NEDEN BİZİ TERCİH ETMELİSİNİZ?
              </motion.span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                İlişkinizi Kurtarmak İçin <span className="text-teal-300">Doğru Yerdesiniz</span>
              </h2>
              <p className="text-white/70 mt-6 text-lg max-w-2xl mx-auto">
                Yüzlerce çiftin ilişkisini onarmasına yardımcı olduk. %92 başarı oranıyla Antalya'nın güvenilir evlilik danışmanlığı merkezi.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reason 1 - Success Rate */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-heart-pulse-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">%92 İlişki Onarım Başarısı</h3>
                <p className="text-white/60">
                  Boşanmanın eşiğindeki çiftlerin %92'si danışmanlık sonrası ilişkilerini güçlendirdi ve birlikte olmaya devam etti.
                </p>
                <div className="flex items-center mt-4">
                  <div className="flex-1 bg-white/10 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-teal-400 to-cyan-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className="ml-3 text-teal-300 font-bold">%92</span>
                </div>
              </motion.div>

              {/* Reason 2 - Privacy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-shield-check-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">%100 Gizlilik Garantisi</h3>
                <p className="text-white/60">
                  Evlilik sorunlarınız aramızda kalır. Görüşmeleriniz tamamen gizli, bilgileriniz kesinlikle paylaşılmaz.
                </p>
                <div className="flex items-center gap-2 mt-4 text-emerald-400">
                  <i className="ri-lock-fill"></i>
                  <span className="text-sm">Etik kurallara tam uyum</span>
                </div>
              </motion.div>

              {/* Reason 3 - Couple Together */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-heart-2-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Birlikte Çalışıyoruz</h3>
                <p className="text-white/60">
                  İlişkinizin her iki tarafını dinliyor, anlıyor ve birlikte çözüm üretiyoruz. Tarafsız, objektif yaklaşım.
                </p>
                <div className="flex items-center gap-2 mt-4 text-rose-400">
                  <span className="text-2xl">🤝</span>
                  <span className="text-sm">Birlikte güçlü olun</span>
                </div>
              </motion.div>

              {/* Reason 4 - Experience */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-award-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">10+ Yıl Deneyim</h3>
                <p className="text-white/60">
                  2019'dan bu yana yüzlerce çiftin ilişkisine dokunuyor, kanıta dayalı yöntemlerle kalıcı çözümler sunuyoruz.
                </p>
                <div className="flex items-center gap-2 mt-4 text-amber-400">
                  <i className="ri-star-fill"></i>
                  <span className="text-sm">500+ mutlu danışan</span>
                </div>
              </motion.div>

              {/* Reason 5 - Methods */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-mental-health-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Kanıtlanmış Yöntemler</h3>
                <p className="text-white/60">
                  EFT, BDT ve modern ilişki danışmanlığı teknikleri ile etkili sonuçlar alıyoruz.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">EFT</span>
                  <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs">BDT</span>
                </div>
              </motion.div>

              {/* Reason 6 - Quick Results */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-timer-flash-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">İlk Seansta Fark</h3>
                <p className="text-white/60">
                  Çoğu çift ilk birkaç seansta iletişimlerinde belirgin iyileşme görüyor. Kısa sürede somut sonuçlar.
                </p>
                <div className="flex items-center gap-2 mt-4 text-purple-400">
                  <i className="ri-checkbox-circle-fill"></i>
                  <span className="text-sm">Hızlı ve etkili</span>
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-white/60 mb-6 text-lg">
                İlişkinizi kurtarmak için ilk adımı birlikte atın
              </p>
              <motion.a
                href="tel:+905403251525"
                onClick={() => trackPhoneClick('lp_whychoose_cift')}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl shadow-teal-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <i className="ri-phone-fill text-2xl"></i>
                </motion.span>
                <span>Birlikte Arayın: 0540 325 15 25</span>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-slate-50 to-teal-50/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl font-bold text-darkgray mb-4">
                Antalya Çift Danışmanlığı Merkezimiz
              </h2>
              <p className="text-darkgray/60">Muratpaşa Meltem Mahallesi'nde gizli ve güvenli evlilik danışmanlığı ortamı</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/sas/sas-4.png"
                  alt="Antalya Çift Danışmanlığı Seansı - Evlilik Danışmanlığı"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-2xl mb-1">🤝</p>
                    <p className="font-semibold">Evlilik Danışmanlığı Seansı</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="/images/sas/sas-1.png"
                  alt="Antalya İlişki Danışmanlığı - Mutlu Çiftler"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-2xl mb-1">🌿</p>
                    <p className="font-semibold">İlişki Danışmanlığı</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Issues Section */}
        <section className="py-16 px-6 lg:px-12 bg-white/80 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-4xl mb-4 block">🌱</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-darkgray mb-4">
                Antalya'da Evlilik Sorunları İçin Psikolog Desteği
              </h2>
              <p className="text-darkgray/60 max-w-2xl mx-auto">
                İletişim kopukluğu, güven sorunu, kıskançlık veya aldatma sonrası onarım için Muratpaşa ve Konyaaltı'da çift danışmanlığı.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {issues.map((issue, i) => (
                <motion.div
                  key={i}
                  className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-teal-50/50 rounded-2xl p-5 border border-teal-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -10px rgba(20, 184, 166, 0.1)" }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${issue.color} rounded-lg flex items-center justify-center mb-3`}>
                    <i className={`${issue.icon} text-xl text-white`}></i>
                  </div>
                  <p className="font-medium text-darkgray">{issue.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-6 lg:px-12 bg-slate-50/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="text-4xl mb-4 block">✨</span>
              <h2 className="font-serif text-3xl font-bold text-darkgray">
                Antalya'da Çift Danışmanlığı Alanların Yorumları
              </h2>
              <p className="text-darkgray/60 mt-3">Evlilik danışmanlığı alan çiftlerin deneyimleri</p>
            </motion.div>

            <motion.div
              className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-teal-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="text-4xl">🤝</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-amber-400 text-xl"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl text-darkgray/80 italic mb-6">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <p className="font-semibold text-teal-600">
                    {testimonials[activeTestimonial].author}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === activeTestimonial
                        ? 'bg-teal-500 w-8'
                        : 'bg-teal-200 hover:bg-teal-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 px-6 lg:px-12 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <motion.div
                className="flex items-center space-x-2 text-darkgray/60"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-shield-check-fill text-2xl text-teal-600"></i>
                <span className="text-sm font-medium">Gizlilik Garantili</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-darkgray/60"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-award-fill text-2xl text-teal-600"></i>
                <span className="text-sm font-medium">Psikolog Kadrosu</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-darkgray/60"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-map-pin-fill text-2xl text-teal-600"></i>
                <span className="text-sm font-medium">Muratpaşa/Konyaaltı</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="py-12 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <TrustBadges theme="teal" variant="horizontal" />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqData} theme="teal" />

        {/* Final CTA */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white/10 text-6xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="text-5xl mb-4"
            >
              🫂
            </motion.div>
            <motion.h2
              className="font-serif text-3xl sm:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Antalya'da Çift Danışmanlığı Randevusu
            </motion.h2>
            <motion.p
              className="text-white/80 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Muratpaşa ve Konyaaltı'da evlilik danışmanlığı için eşinizle birlikte hemen randevu alın.
            </motion.p>
            <motion.a
              href="tel:+905403251525"
              onClick={() => trackPhoneClick('lp_footer_cift')}
              className="inline-flex items-center space-x-3 bg-white text-teal-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-slate-50 transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <i className="ri-phone-fill text-2xl"></i>
              </motion.span>
              <span>0540 325 15 25</span>
            </motion.a>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="py-12 px-6 bg-darkgray text-white/60 text-sm">
        <div className="max-w-4xl mx-auto">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link to="/" className="hover:text-olive transition-colors">Ana Sayfa</Link>
            <Link to="/about" className="hover:text-olive transition-colors">Hakkımızda</Link>
            <Link to="/services" className="hover:text-olive transition-colors">Hizmetlerimiz</Link>
            <Link to="/team" className="hover:text-olive transition-colors">Ekibimiz</Link>
            <Link to="/testimonials" className="hover:text-olive transition-colors">Danışan Yorumları</Link>
            <Link to="/contact" className="hover:text-olive transition-colors">İletişim</Link>
          </div>
          <div className="text-center">
            <p className="font-semibold text-white/80">Antalya Çift Danışmanlığı - Arges Psikoloji Merkezi</p>
            <p className="mt-1">Meltem Mah. Muratpaşa/Antalya | Konyaaltı Bölgesine Yakın</p>
            <p className="mt-1">Evlilik Danışmanlığı, İlişki Danışmanlığı, Evlilik Sorunları Çözümü</p>
            <p className="mt-4">© 2025 Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-r from-teal-600 to-teal-500 p-4 safe-area-bottom"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 1 }}
      >
        <motion.a
          href="tel:+905403251525"
          onClick={() => trackPhoneClick('lp_sticky_cift')}
          className="flex items-center justify-center space-x-2 bg-white text-teal-600 py-4 rounded-full font-bold text-lg shadow-lg"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 4 }}
          >
            <i className="ri-phone-fill"></i>
          </motion.span>
          <span>Randevu: 0540 325 15 25</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default LPCiftTerapisi;
