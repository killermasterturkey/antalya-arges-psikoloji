import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { trackPhoneClick, trackWhatsAppClick } from '../../../utils/analytics';

const LPCinselTerapi = () => {
  const [showPrivacyBadge, setShowPrivacyBadge] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const testimonials = [
    {
      text: "Yıllardır çektiğim sorunları tamamen gizli bir ortamda çözdüm. Profesyonel yaklaşım için teşekkürler.",
      author: "Anonim Danışan",
      rating: 5,
    },
    {
      text: "Başvurmaktan çekindiğim bir konuda gerçek destek aldım. Kesinlikle tavsiye ederim.",
      author: "Gizli Danışan",
      rating: 5,
    },
    {
      text: "Uzman desteği ile hayatım değişti. Gizlilik konusunda çok hassaslar.",
      author: "Anonim",
      rating: 5,
    },
  ];

  const benefits = [
    { icon: 'ri-lock-line', text: 'Kesin Gizlilik', desc: 'Bilgileriniz asla paylaşılmaz' },
    { icon: 'ri-shield-check-line', text: 'Profesyonel Yaklaşım', desc: 'Uzman terapist kadrosu' },
    { icon: 'ri-user-heart-line', text: 'Yargısız Ortam', desc: 'Anlayışla dinlenirsiniz' },
    { icon: 'ri-door-closed-line', text: 'Özel Görüşme', desc: 'Birebir terapi seansları' },
  ];

  const concerns = [
    { icon: 'ri-emotion-unhappy-line', text: 'Cinsel İsteksizlik', color: 'from-purple-500 to-indigo-500' },
    { icon: 'ri-mental-health-line', text: 'Performans Kaygısı', color: 'from-indigo-500 to-blue-500' },
    { icon: 'ri-heart-pulse-line', text: 'Erken Boşalma', color: 'from-blue-500 to-cyan-500' },
    { icon: 'ri-empathize-line', text: 'Orgazm Güçlükleri', color: 'from-teal-500 to-emerald-500' },
    { icon: 'ri-couple-line', text: 'İlişki Sorunları', color: 'from-violet-500 to-purple-500' },
    { icon: 'ri-psychotherapy-line', text: 'Cinsel Travma', color: 'from-slate-500 to-gray-500' },
  ];

  // Show privacy badge after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPrivacyBadge(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Floating lock icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/5 text-4xl"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
            }}
            animate={{
              y: -100,
              rotate: 360,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 3,
              ease: "linear",
            }}
          >
            <i className="ri-shield-keyhole-line"></i>
          </motion.div>
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 right-1/4 w-[350px] h-[350px] bg-slate-500/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl font-bold text-white flex items-center space-x-2">
            <motion.span
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <i className="ri-shield-check-fill text-purple-400"></i>
            </motion.span>
            <span>Arges Psikoloji</span>
          </Link>
          <motion.a
            href="tel:+905403251525"
            onClick={() => trackPhoneClick('lp_header_cinsel')}
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <i className="ri-phone-fill"></i>
            </motion.span>
            <span className="hidden sm:inline">Gizli Görüşme</span>
          </motion.a>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-purple-900/80 to-slate-900/70 z-10" />
            <img
              src="/images/lp/peaceful-woman.jpg"
              alt="Huzurlu Ortam"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
            {/* Privacy Badge */}
            <AnimatePresence>
              {showPrivacyBadge && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 px-5 py-2.5 rounded-full"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <i className="ri-shield-keyhole-fill text-purple-400"></i>
                  </motion.span>
                  <span className="text-sm font-medium text-purple-200">%100 Gizlilik Garantisi</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Lock Icon Animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="flex justify-center"
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/30"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <i className="ri-lock-2-fill text-white text-4xl"></i>
                </motion.div>
                {/* Pulse ring */}
                <motion.div
                  className="absolute inset-0 border-2 border-purple-400 rounded-2xl"
                  animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Cinsel Sağlık İçin
              <motion.span
                className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent block"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Profesyonel Destek
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto"
            >
              Cinsel sağlık sorunlarında <span className="font-semibold text-purple-300">tam gizlilik</span> garantisi ile
              güvenli ve profesyonel terapi ortamı. Bilgileriniz asla paylaşılmaz.
            </motion.p>

            {/* Privacy Notice Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="max-w-md mx-auto"
            >
              <motion.div
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <i className="ri-lock-fill text-white text-xl"></i>
                  </motion.div>
                  <div className="text-left">
                    <p className="text-white font-medium">Kesin Gizlilik</p>
                    <p className="text-white/60 text-sm">Tüm görüşmeler tamamen gizli tutulur</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-8"
            >
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.p
                  className="text-4xl font-bold text-purple-400"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  100%
                </motion.p>
                <p className="text-sm text-white/60">Gizlilik</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.p
                  className="text-4xl font-bold text-purple-400"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  10+
                </motion.p>
                <p className="text-sm text-white/60">Yıl Deneyim</p>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.p
                  className="text-4xl font-bold text-purple-400"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  Uzman
                </motion.p>
                <p className="text-sm text-white/60">Terapist</p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="space-y-4"
            >
              <motion.a
                href="tel:+905403251525"
                onClick={() => trackPhoneClick('lp_hero_cinsel')}
                className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-2xl shadow-purple-500/30 overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(168, 85, 247, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <i className="ri-phone-fill text-2xl"></i>
                </motion.span>
                <span className="relative z-10">0540 325 15 25</span>
              </motion.a>
              <p className="text-sm text-white/50">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <i className="ri-lock-line"></i>
                </motion.span>
                {' '}Gizli görüşme için arayın
              </p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="https://wa.me/905403251525?text=Merhaba,%20cinsel%20terapi%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('lp_hero_cinsel')}
                className="inline-flex items-center space-x-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-6 py-3 rounded-full font-medium hover:bg-[#25D366]/20 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-whatsapp-fill text-2xl"></i>
                <span>Gizli WhatsApp ile yazın</span>
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
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-xl flex items-center justify-center mx-auto mb-3"
                    whileHover={{ rotate: 10 }}
                  >
                    <i className={`${benefit.icon} text-2xl text-purple-300`}></i>
                  </motion.div>
                  <p className="text-sm font-semibold text-white">{benefit.text}</p>
                  <p className="text-xs text-white/50 mt-1">{benefit.desc}</p>
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
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/lp/therapy-session.jpg"
                      alt="Terapi Seansı"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />

                    {/* Privacy Card */}
                    <motion.div
                      className="absolute bottom-6 left-6 right-6 bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-2xl p-5"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                          <i className="ri-lock-2-fill text-white text-xl"></i>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Kesin Gizlilik</p>
                          <p className="text-white/60 text-sm">Bilgileriniz asla paylaşılmaz</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-500 to-indigo-500 text-white px-5 py-3 rounded-2xl shadow-xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <p className="text-xl"><i className="ri-shield-check-fill"></i></p>
                    <p className="text-xs">%100 Gizli</p>
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

        {/* Image Gallery Section */}
        <section className="py-16 px-6 lg:px-12 bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl font-bold text-white mb-4">
                Güvenli Terapi Ortamımız
              </h2>
              <p className="text-white/60">Özel ve huzurlu bir ortamda profesyonel destek</p>
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
                  src="/images/lp/therapy-session.jpg"
                  alt="Terapi Seansı"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-2xl mb-1"><i className="ri-lock-2-fill"></i></p>
                    <p className="font-semibold">Özel Görüşme Odası</p>
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
                  src="/images/lp/peaceful-woman.jpg"
                  alt="Huzurlu Ortam"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-2xl mb-1"><i className="ri-shield-check-fill"></i></p>
                    <p className="font-semibold">Huzurlu Atmosfer</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Concerns Section */}
        <section className="py-16 px-6 lg:px-12 bg-black/20 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                className="inline-flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-full mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-shield-check-fill text-purple-400"></i>
                <span className="text-purple-300 text-sm">Gizli & Profesyonel</span>
              </motion.div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
                Hangi Konularda Destek Alabilirsiniz?
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Tüm konularda kesin gizlilik garantisi ile profesyonel destek sunuyoruz.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {concerns.map((concern, i) => (
                <motion.div
                  key={i}
                  className="relative overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br ${concern.color} rounded-lg flex items-center justify-center mb-3`}>
                    <i className={`${concern.icon} text-xl text-white`}></i>
                  </div>
                  <p className="font-medium text-white">{concern.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <i className="ri-double-quotes-l text-4xl text-purple-400/50 mb-4 block"></i>
              <h2 className="font-serif text-3xl font-bold text-white">
                Danışan Deneyimleri
              </h2>
              <p className="text-white/50 text-sm mt-2">(Kimlikler gizli tutulmaktadır)</p>
            </motion.div>

            <motion.div
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 sm:p-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
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

                  <p className="text-lg sm:text-xl text-white/80 italic mb-6">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-center space-x-2">
                    <i className="ri-user-3-fill text-purple-400"></i>
                    <p className="font-medium text-purple-300">
                      {testimonials[activeTestimonial].author}
                    </p>
                  </div>
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
                        ? 'bg-purple-500 w-8'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 px-6 lg:px-12 bg-black/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <motion.h3
              className="text-center text-white/60 text-sm mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Neden Bizi Tercih Etmelisiniz?
            </motion.h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <motion.div
                className="flex items-center space-x-2 text-white/70"
                whileHover={{ scale: 1.05, color: '#c4b5fd' }}
              >
                <i className="ri-lock-2-fill text-2xl text-purple-400"></i>
                <span className="text-sm font-medium">Kesin Gizlilik</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-white/70"
                whileHover={{ scale: 1.05, color: '#c4b5fd' }}
              >
                <i className="ri-award-fill text-2xl text-purple-400"></i>
                <span className="text-sm font-medium">10+ Yıl Tecrübe</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-white/70"
                whileHover={{ scale: 1.05, color: '#c4b5fd' }}
              >
                <i className="ri-heart-pulse-fill text-2xl text-purple-400"></i>
                <span className="text-sm font-medium">Uzman Terapist</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-white/70"
                whileHover={{ scale: 1.05, color: '#c4b5fd' }}
              >
                <i className="ri-map-pin-fill text-2xl text-purple-400"></i>
                <span className="text-sm font-medium">Antalya Merkez</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white/5 text-5xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10 + Math.random() * 5,
                  repeat: Infinity,
                  delay: i * 0.8,
                }}
              >
                <i className="ri-shield-keyhole-line"></i>
              </motion.div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.div
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <i className="ri-lock-2-fill text-white text-4xl"></i>
              </motion.div>
            </motion.div>
            <motion.h2
              className="font-serif text-3xl sm:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Yardım Almak Cesaret İster
            </motion.h2>
            <motion.p
              className="text-white/80 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              İlk adımı atın. Gizli görüşme için hemen arayın.
            </motion.p>
            <motion.a
              href="tel:+905403251525"
              onClick={() => trackPhoneClick('lp_footer_cinsel')}
              className="inline-flex items-center space-x-3 bg-white text-purple-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <i className="ri-phone-fill text-2xl"></i>
              </motion.span>
              <span>0540 325 15 25</span>
            </motion.a>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-white/40 text-center text-sm border-t border-white/10">
        <p>Arges Psikoloji - Meltem Mah. Muratpaşa/Antalya</p>
        <p className="mt-2">© 2025 Tüm hakları saklıdır.</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-r from-purple-600 to-indigo-600 p-4 safe-area-bottom"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 1 }}
      >
        <motion.a
          href="tel:+905403251525"
          onClick={() => trackPhoneClick('lp_sticky_cinsel')}
          className="flex items-center justify-center space-x-2 bg-white text-purple-600 py-4 rounded-full font-bold text-lg shadow-lg"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <i className="ri-lock-fill mr-1"></i>
            <i className="ri-phone-fill"></i>
          </motion.span>
          <span>Gizli Görüşme: 0540 325 15 25</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default LPCinselTerapi;
