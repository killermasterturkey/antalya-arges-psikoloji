import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { trackPhoneClick, trackWhatsAppClick } from '../../../utils/analytics';
import { FloatingCTA, TrustBadges, FAQSection } from '../../../components/lp';

const faqData = [
  {
    question: 'Antalya\'da çocuk psikoloğu randevusu nasıl alabilirim?',
    answer: 'Muratpaşa ve Konyaaltı bölgelerinde hizmet veren merkezimizden 0540 325 15 25 numarasını arayarak çocuk psikoloğu randevusu alabilirsiniz.',
  },
  {
    question: 'Antalya\'da oyun terapisi yapılıyor mu?',
    answer: 'Evet, Muratpaşa\'daki merkezimizde uzman çocuk psikologlarımız tarafından oyun terapisi uygulanmaktadır. Oyun odamız özel materyallerle donatılmıştır.',
  },
  {
    question: 'Çocuğumda dikkat eksikliği (DEHB) var, yardımcı olabilir misiniz?',
    answer: 'Evet, dikkat eksikliği ve hiperaktivite (DEHB) uzmanlık alanlarımızdan biridir. Antalya\'da uzman çocuk psikologlarımız bu konuda size yardımcı olabilir.',
  },
  {
    question: 'Çocuğumun davranış sorunları için ne yapmalıyım?',
    answer: 'Öfke nöbetleri, saldırganlık, inatçılık gibi davranış sorunları için çocuk psikoloğu desteği almak önemlidir. Merkezimizde bu konuda uzman terapistlerimiz bulunmaktadır.',
  },
  {
    question: 'Pedagog ve çocuk psikoloğu arasındaki fark nedir?',
    answer: 'Çocuk psikoloğu duygusal ve davranışsal sorunlarda terapi uygularken, pedagog eğitim ve gelişim odaklı çalışır. Merkezimizde her iki alanda da uzman kadromuz bulunmaktadır.',
  },
  {
    question: 'Ebeveyn olarak sürece dahil oluyor muyum?',
    answer: 'Evet, ebeveyn katılımı çok önemli. Düzenli olarak ebeveyn görüşmeleri yapılır ve evde uygulanabilecek stratejiler paylaşılır.',
  },
];

const LPCocukPsikolojisi = () => {
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
      name: 'G.Ç.',
      child: '5 yaşında kızı',
      text: 'Kızım beş yaşındaydı ve tuvalet problemi ile gitmiştik. Danışmanlık sürecinde bizi hiç yalnız bırakmadı. Kesinlikle öneririm.',
      rating: 5
    },
    {
      name: 'H.Y.',
      child: '3.5 yaşında oğlu',
      text: 'Deneyimsel Oyun Terapisi ile 4 ay gibi kısa sürede oğlum yaşadığı travmaların etkisinden kurtulup daha sakin, mutlu bir çocuğa dönüştü.',
      rating: 5
    },
    {
      name: 'N.P.',
      child: '5 yaşında oğlu',
      text: 'Oğlumun öfke nöbetleri ve korkuları vardı. Çok kısa sürede oğlumdaki değişiklikler muhteşemdi. İyi ki tanımışız.',
      rating: 5
    },
  ];

  const concerns = [
    { icon: 'ri-focus-3-line', title: 'Dikkat Eksikliği (DEHB)', desc: 'Konsantrasyon güçlüğü, hiperaktivite', color: 'from-blue-400 to-cyan-500' },
    { icon: 'ri-emotion-unhappy-line', title: 'Davranış Sorunları', desc: 'Öfke nöbetleri, saldırganlık, inatçılık', color: 'from-red-400 to-rose-500' },
    { icon: 'ri-ghost-line', title: 'Çocuklarda Korku ve Kaygı', desc: 'Ayrılık kaygısı, gece korkuları', color: 'from-purple-400 to-violet-500' },
    { icon: 'ri-emotion-sad-line', title: 'Okul Uyum Sorunu', desc: 'Arkadaşlık, sosyal güçlükler', color: 'from-green-400 to-emerald-500' },
    { icon: 'ri-gamepad-line', title: 'Oyun Terapisi', desc: 'Duygusal ifade ve gelişim', color: 'from-pink-400 to-rose-500' },
    { icon: 'ri-parent-line', title: 'Boşanma Sonrası Destek', desc: 'Aile içi değişimlere uyum', color: 'from-amber-400 to-orange-500' },
  ];

  const stats = [
    { value: '500+', label: 'Mutlu Danışan', icon: '😊' },
    { value: '4.9', label: 'Puan', icon: '⭐' },
    { value: '%98', label: 'Memnuniyet', icon: '🎯' },
    { value: '🎮', label: 'Oyun Terapisi', icon: '' },
  ];

  // Floating emojis
  const floatingEmojis = ['🧸', '🎨', '🌈', '⭐', '🎪', '🎈', '🦋', '🌸'];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-cream overflow-hidden">
      {/* Floating CTA Bar */}
      <FloatingCTA theme="pink" trackingSource="cocuk" />

      {/* Floating Emojis Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {floatingEmojis.map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            style={{
              left: `${10 + (i * 12) % 80}%`,
              top: `${20 + (i * 15) % 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 right-1/4 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl font-bold text-darkgray flex items-center space-x-3">
            <div className="w-10 h-10 bg-olive rounded-xl flex items-center justify-center p-1.5">
              <img src="/logo-icon.webp" alt="Arges Logo" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <span>Arges Psikoloji</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-darkgray hover:text-pink-500 transition-colors">Anasayfa</Link>
            <Link to="/about" className="text-sm font-medium text-darkgray hover:text-pink-500 transition-colors">Hakkımızda</Link>
            <Link to="/services" className="text-sm font-medium text-darkgray hover:text-pink-500 transition-colors">Hizmetlerimiz</Link>
            <Link to="/team" className="text-sm font-medium text-darkgray hover:text-pink-500 transition-colors">Ekibimiz</Link>
            <Link to="/testimonials" className="text-sm font-medium text-darkgray hover:text-pink-500 transition-colors">Yorumlar</Link>
            <Link to="/contact" className="text-sm font-medium text-darkgray hover:text-pink-500 transition-colors">İletişim</Link>
          </nav>

          <motion.a
            href="tel:+905403251525"
            onClick={() => trackPhoneClick('lp_header_cocuk')}
            className="flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <i className="ri-phone-fill"></i>
            </motion.span>
            <span className="hidden sm:inline">0540 325 15 25</span>
          </motion.a>
        </div>
      </motion.header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-pink-900/60 to-transparent z-10" />
            <img
              src="/images/services/pedagog-hero.png"
              alt="Antalya Çocuk Psikoloğu - Oyun Terapisi"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Main Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  className="text-7xl"
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🧸
                  </motion.span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  Antalya Çocuk Psikoloğu
                  <motion.span
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300"
                    animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    Oyun Terapisi
                  </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-white/80 max-w-lg"
                >
                  Muratpaşa ve Konyaaltı'nda dikkat eksikliği (DEHB), davranış sorunları, korku ve kaygı için
                  <span className="font-semibold text-pink-300"> uzman çocuk psikoloğu.</span>
                </motion.p>

                {/* Stats Row */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-wrap gap-6"
                >
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      className="text-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1, type: "spring" }}
                    >
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <p className="text-white/60 text-sm">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <motion.a
                    href="tel:+905403251525"
                    onClick={() => trackPhoneClick('lp_hero_cocuk')}
                    className="relative inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <motion.span
                      animate={{ rotate: [0, 20, -20, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <i className="ri-phone-fill text-2xl"></i>
                    </motion.span>
                    <span className="relative z-10">0540 325 15 25</span>
                  </motion.a>

                  <motion.a
                    href="https://wa.me/905403251525?text=Merhaba,%20çocuğum%20için%20randevu%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('lp_hero_cocuk')}
                    className="inline-flex items-center justify-center space-x-2 bg-[#25D366] text-white px-8 py-5 rounded-full text-lg font-semibold shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className="ri-whatsapp-fill text-2xl"></i>
                    <span>WhatsApp</span>
                  </motion.a>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap items-center gap-6"
                >
                  <div className="flex items-center space-x-2 text-white/70">
                    <span className="text-xl">🎮</span>
                    <span className="text-sm">Oyun Terapisi</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <span className="text-xl">👨‍👩‍👧</span>
                    <span className="text-sm">Aile Desteği</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <span className="text-xl">🏆</span>
                    <span className="text-sm">Uzman Kadro</span>
                  </div>
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
                      src="/images/team/busra-demirbas.png"
                      alt="Antalya Çocuk Terapisti - Uzman Psikolog"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />

                    {/* Floating Card */}
                    <motion.div
                      className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">👨‍👩‍👧</div>
                        <div>
                          <p className="font-semibold text-darkgray">Mutlu Aileler</p>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-amber-400">★</span>
                            ))}
                            <span className="text-darkgray/60 text-sm ml-2">5.0 (80+ yorum)</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Badges */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-gradient-to-br from-pink-500 to-purple-500 text-white px-5 py-3 rounded-2xl shadow-xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <p className="text-2xl">🧸</p>
                    <p className="text-xs">Oyun Terapisi</p>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-white text-darkgray px-5 py-3 rounded-2xl shadow-xl"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <p className="text-sm font-bold">500+</p>
                    <p className="text-xs text-darkgray/60">Mutlu Çocuk</p>
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
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-purple-900 to-pink-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          </div>

          {/* Floating Emojis */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {['🧸', '🎨', '⭐', '🌈'].map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl opacity-20"
                style={{ left: `${20 + i * 20}%`, top: `${20 + i * 15}%` }}
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-flex items-center gap-2 bg-pink-500/20 text-pink-300 px-6 py-2 rounded-full text-sm font-bold mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-lg">🧸</span>
                NEDEN BİZİ TERCİH ETMELİSİNİZ?
              </motion.span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Çocuğunuzun <span className="text-pink-300">Mutluluğu</span> Bizim Önceliğimiz
              </h2>
              <p className="text-white/70 mt-6 text-lg max-w-2xl mx-auto">
                500+ çocuğun hayatına dokunduk. Oyun terapisi ile çocukların dünyasına girip, onları anlıyoruz.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reason 1 - Play Therapy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🎮</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Oyun Terapisi Uzmanlığı</h3>
                <p className="text-white/60">
                  Deneyimsel Oyun Terapisi ile çocukların dilini konuşuyoruz. Oyun odamız özel materyallerle donatıldı.
                </p>
                <div className="flex items-center gap-2 mt-4 text-pink-400">
                  <i className="ri-gamepad-fill"></i>
                  <span className="text-sm">Çocuk dostu terapi</span>
                </div>
              </motion.div>

              {/* Reason 2 - Results */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-line-chart-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hızlı ve Kalıcı Sonuçlar</h3>
                <p className="text-white/60">
                  Ailelerimiz ortalama 4-8 hafta içinde çocuklarında belirgin olumlu değişimler görüyor.
                </p>
                <div className="flex items-center gap-2 mt-4 text-emerald-400">
                  <i className="ri-timer-flash-fill"></i>
                  <span className="text-sm">Kısa sürede fark</span>
                </div>
              </motion.div>

              {/* Reason 3 - Parent Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">👨‍👩‍👧</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ebeveyn Rehberliği</h3>
                <p className="text-white/60">
                  Sadece çocuğunuzu değil, sizi de destekliyoruz. Evde yapabileceğiniz stratejiler öğretiyoruz.
                </p>
                <div className="flex items-center gap-2 mt-4 text-blue-400">
                  <i className="ri-parent-fill"></i>
                  <span className="text-sm">Birlikte çalışıyoruz</span>
                </div>
              </motion.div>

              {/* Reason 4 - Experts */}
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
                <h3 className="text-xl font-bold text-white mb-3">Uzman Çocuk Psikologları</h3>
                <p className="text-white/60">
                  Çocuk ve ergen psikolojisinde uzmanlaşmış, EMDR ve BDT sertifikalı profesyonel kadro.
                </p>
                <div className="flex -space-x-2 mt-4">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold border-2 border-purple-900">NÜ</div>
                  <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs font-bold border-2 border-purple-900">BD</div>
                  <span className="ml-3 text-white/50 text-sm">2 uzman</span>
                </div>
              </motion.div>

              {/* Reason 5 - Success Stories */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-heart-3-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">%98 Memnuniyet</h3>
                <p className="text-white/60">
                  500+ ailenin güvenini kazandık. Ebeveynlerimizin %98'i terapi sürecinden memnun ayrıldı.
                </p>
                <div className="flex items-center mt-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-lg"></i>
                  ))}
                  <span className="text-white/50 ml-2 text-sm">4.9/5</span>
                </div>
              </motion.div>

              {/* Reason 6 - Child Friendly */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">🌈</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Çocuk Dostu Ortam</h3>
                <p className="text-white/60">
                  Renkli, sıcak ve güvenli bir ortam. Çocuğunuz burada kendini rahat hissedecek.
                </p>
                <div className="flex items-center gap-2 mt-4 text-purple-400">
                  <i className="ri-home-heart-fill"></i>
                  <span className="text-sm">Güvenli alan</span>
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
                Çocuğunuzun mutluluğu için ilk adımı atın
              </p>
              <motion.a
                href="tel:+905403251525"
                onClick={() => trackPhoneClick('lp_whychoose_cocuk')}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl shadow-pink-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <i className="ri-phone-fill text-2xl"></i>
                </motion.span>
                <span>Hemen Arayın: 0540 325 15 25</span>
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Concerns Section */}
        <section className="py-20 px-6 lg:px-12 bg-white/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.span
                className="text-5xl mb-4 block"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🎯
              </motion.span>
              <h2 className="font-serif text-4xl font-bold text-darkgray mb-4">
                Antalya'da Çocuk Psikolojisi Hizmetlerimiz
              </h2>
              <p className="text-darkgray/60 max-w-2xl mx-auto">
                Muratpaşa ve Konyaaltı'nda dikkat eksikliği, davranış sorunları, korku ve kaygı için uzman çocuk psikoloğu
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {concerns.map((concern, i) => (
                <motion.div
                  key={i}
                  className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${concern.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <i className={`${concern.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-darkgray mb-2">{concern.title}</h3>
                  <p className="text-darkgray/60">{concern.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-pink-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl font-bold text-darkgray mb-4">
                Antalya Oyun Terapisi Merkezi
              </h2>
              <p className="text-darkgray/60">Muratpaşa'da çocuklar için özel tasarlanmış terapi alanları</p>
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
                  src="/images/services/pedagog-hero.png"
                  alt="Antalya Oyun Terapisi - Çocuk Psikolog"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-2xl mb-1">🎮</p>
                    <p className="font-semibold">Oyun Terapisi Odası</p>
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
                  src="/images/team/busra-demirbas.png"
                  alt="Çocuk Psikoloğu Antalya - Aile Görüşmesi"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-2xl mb-1">👨‍👩‍👧</p>
                    <p className="font-semibold">Aile Görüşme Alanı</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-5xl mb-4 block">💬</span>
              <h2 className="font-serif text-4xl font-bold text-darkgray">
                Aileler Ne Diyor?
              </h2>
            </motion.div>

            <motion.div
              className="relative bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl">
                  ❝
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="text-center pt-6"
                >
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-amber-400 text-2xl"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-xl md:text-2xl text-darkgray/80 italic mb-8 leading-relaxed">
                    "{testimonials[activeTestimonial].text}"
                  </p>
                  <div>
                    <p className="font-bold text-darkgray text-lg">{testimonials[activeTestimonial].name}</p>
                    <p className="text-pink-500">{testimonials[activeTestimonial].child}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTestimonial(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === activeTestimonial
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 w-8'
                        : 'bg-pink-200 hover:bg-pink-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Badges Section */}
        <section className="py-12 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <TrustBadges
              theme="pink"
              variant="horizontal"
              badges={[
                { icon: 'ri-gamepad-line', text: 'Oyun', subtext: 'Terapisi' },
                { icon: 'ri-calendar-check-line', text: '10+ Yıl', subtext: 'Deneyim' },
                { icon: 'ri-user-smile-line', text: '500+', subtext: 'Mutlu Çocuk' },
                { icon: 'ri-map-pin-line', text: 'Muratpaşa', subtext: 'Konyaaltı' },
              ]}
            />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqData} theme="pink" />

        {/* Final CTA Section */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-r from-pink-500 to-purple-500 relative overflow-hidden">
          {/* Floating emojis */}
          <div className="absolute inset-0 overflow-hidden">
            {['🧸', '⭐', '🎨', '🌈', '🎪', '🦋'].map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  rotate: [0, 20, -20, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="text-6xl mb-6"
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                🧸
              </motion.span>
            </motion.div>

            <motion.h2
              className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Çocuğunuzun Mutluluğu İçin
            </motion.h2>

            <motion.p
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Hemen randevu alın. Uzman çocuk psikologlarımız yanınızda.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.a
                href="tel:+905403251525"
                onClick={() => trackPhoneClick('lp_footer_cocuk')}
                className="inline-flex items-center justify-center space-x-3 bg-white text-purple-600 px-12 py-5 rounded-full text-xl font-bold shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  <i className="ri-phone-fill text-2xl"></i>
                </motion.span>
                <span>0540 325 15 25</span>
              </motion.a>

              <motion.a
                href="https://wa.me/905403251525"
                onClick={() => trackWhatsAppClick('lp_footer_cocuk')}
                className="inline-flex items-center justify-center space-x-2 bg-[#25D366] text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="ri-whatsapp-fill text-2xl"></i>
                <span>WhatsApp</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-darkgray text-white/60 text-sm">
        <div className="max-w-4xl mx-auto">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link to="/" className="hover:text-pink-400 transition-colors">Ana Sayfa</Link>
            <Link to="/about" className="hover:text-pink-400 transition-colors">Hakkımızda</Link>
            <Link to="/services" className="hover:text-pink-400 transition-colors">Hizmetlerimiz</Link>
            <Link to="/team" className="hover:text-pink-400 transition-colors">Ekibimiz</Link>
            <Link to="/testimonials" className="hover:text-pink-400 transition-colors">Danışan Yorumları</Link>
            <Link to="/contact" className="hover:text-pink-400 transition-colors">İletişim</Link>
          </div>
          <div className="text-center">
            <p className="font-semibold text-white/80">Antalya Çocuk Psikoloğu - Arges Psikoloji Merkezi</p>
            <p className="mt-1">Meltem Mah. Muratpaşa/Antalya | Konyaaltı Bölgesine Yakın</p>
            <p className="mt-1">Oyun Terapisi, Dikkat Eksikliği (DEHB), Davranış Sorunları, Çocuk Terapisti</p>
            <p className="mt-4">© 2025 Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-r from-pink-500 to-purple-500 p-4 safe-area-bottom"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 1 }}
      >
        <div className="flex gap-3">
          <motion.a
            href="tel:+905403251525"
            onClick={() => trackPhoneClick('lp_sticky_cocuk')}
            className="flex-1 flex items-center justify-center space-x-2 bg-white text-purple-600 py-4 rounded-full font-bold text-lg shadow-lg"
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <i className="ri-phone-fill"></i>
            </motion.span>
            <span>Hemen Ara</span>
          </motion.a>
          <motion.a
            href="https://wa.me/905403251525"
            onClick={() => trackWhatsAppClick('lp_sticky_cocuk')}
            className="flex items-center justify-center bg-[#25D366] text-white px-6 py-4 rounded-full shadow-lg"
            whileTap={{ scale: 0.95 }}
          >
            <i className="ri-whatsapp-fill text-xl"></i>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default LPCocukPsikolojisi;
