import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { trackPhoneClick, trackWhatsAppClick } from '../../../utils/analytics';

const LPCiftTerapisi = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showUrgency, setShowUrgency] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const testimonials = [
    {
      text: "5 yıllık evliliğimizde yaşadığımız sorunları Arges'te çözdük. Artık birbirimizi daha iyi anlıyoruz.",
      author: "A. & M. Ailesi",
      rating: 5,
    },
    {
      text: "Boşanmanın eşiğindeyken bu terapiye başladık. Şimdi her zamankinden daha mutluyuz.",
      author: "S. & K. Çifti",
      rating: 5,
    },
    {
      text: "İletişim sorunlarımızı profesyonel destek ile aştık. Kesinlikle tavsiye ederim.",
      author: "E. & D. Ailesi",
      rating: 5,
    },
  ];

  const issues = [
    { icon: 'ri-chat-delete-line', text: 'İletişim Kopukluğu', color: 'from-rose-500 to-pink-500' },
    { icon: 'ri-shield-cross-line', text: 'Güven Sorunları', color: 'from-purple-500 to-indigo-500' },
    { icon: 'ri-emotion-sad-line', text: 'Duygusal Uzaklaşma', color: 'from-amber-500 to-orange-500' },
    { icon: 'ri-discuss-line', text: 'Sürekli Tartışmalar', color: 'from-red-500 to-rose-500' },
    { icon: 'ri-heart-add-line', text: 'Aldatma Sonrası Onarım', color: 'from-teal-500 to-cyan-500' },
    { icon: 'ri-calendar-heart-line', text: 'Evlilik Öncesi Danışmanlık', color: 'from-pink-500 to-rose-500' },
  ];

  const benefits = [
    { icon: 'ri-lock-line', text: 'Tam Gizlilik', desc: 'Görüşmeler gizli tutulur' },
    { icon: 'ri-heart-2-line', text: 'Uzman Terapi', desc: '10+ yıl deneyim' },
    { icon: 'ri-team-line', text: 'Birlikte Çözüm', desc: 'İkiniz için özel program' },
    { icon: 'ri-refresh-line', text: 'İlişki Onarımı', desc: 'Kanıtlanmış yöntemler' },
  ];

  // Floating hearts
  const floatingHearts = ['❤️', '💕', '💑', '💞', '💗', '🤍'];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Show urgency message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowUrgency(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-cream overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {floatingHearts.map((heart, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-20"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
            }}
            animate={{
              y: -100,
              x: `+=${Math.sin(i) * 100}`,
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
          >
            {heart}
          </motion.div>
        ))}
      </div>

      {/* Animated Background Circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 right-1/3 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />
      </div>

      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl font-bold text-darkgray flex items-center space-x-2">
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💕
            </motion.span>
            <span>Arges Psikoloji</span>
          </Link>
          <motion.a
            href="tel:+905403251525"
            onClick={() => trackPhoneClick('lp_header_cift')}
            className="flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
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
            <div className="absolute inset-0 bg-gradient-to-r from-rose-900/80 via-pink-900/60 to-transparent z-10" />
            <img
              src="/images/lp/couple-romantic.jpg"
              alt="Mutlu Çift"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
            {/* Urgency Banner */}
            <AnimatePresence>
              {showUrgency && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full inline-flex items-center space-x-2 shadow-lg"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    💕
                  </motion.span>
                  <span className="text-sm font-medium">Bu hafta 3 çift danışmanlık aldı</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Heart Animation */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-7xl"
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
              İlişkinizi
              <motion.span
                className="bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent block"
                animate={{
                  backgroundPosition: ['0%', '100%', '0%'],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Yeniden Keşfedin
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-white/80 max-w-lg"
            >
              İlişkinizde yaşadığınız sorunları <span className="font-semibold text-rose-300">birlikte çözmek</span> için
              profesyonel çift terapisi desteği. Gizlilik garantili, uzman yaklaşım.
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
                className="relative inline-flex items-center space-x-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-2xl overflow-hidden group"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(244, 63, 94, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
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
              <p className="text-sm text-darkgray/60">
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  💕
                </motion.span>
                {' '}Ücretsiz ön görüşme için birlikte arayın
              </p>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="https://wa.me/905403251525?text=Merhaba,%20çift%20terapisi%20için%20randevu%20almak%20istiyoruz."
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
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-rose-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px -12px rgba(244, 63, 94, 0.2)" }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3"
                    whileHover={{ rotate: 10 }}
                  >
                    <i className={`${benefit.icon} text-2xl text-rose-500`}></i>
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
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/lp/couple-talking.jpg"
                      alt="Çift Terapisi"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent" />

                    {/* Floating Card */}
                    <motion.div
                      className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-4xl">💑</div>
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
                    className="absolute -top-4 -right-4 bg-gradient-to-br from-rose-500 to-pink-500 text-white px-5 py-3 rounded-2xl shadow-xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <p className="text-2xl">💕</p>
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

        {/* Image Gallery Section */}
        <section className="py-16 px-6 lg:px-12 bg-gradient-to-b from-rose-50 to-pink-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl font-bold text-darkgray mb-4">
                Terapi Ortamımız
              </h2>
              <p className="text-darkgray/60">Huzurlu ve güvenli bir ortamda çift terapisi</p>
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
                  src="/images/lp/couple-talking.jpg"
                  alt="Çift Terapisi Seansı"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-2xl mb-1">💑</p>
                    <p className="font-semibold">Çift Terapisi Seansı</p>
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
                  src="/images/lp/couple-romantic.jpg"
                  alt="Mutlu Çift"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-2xl mb-1">❤️</p>
                    <p className="font-semibold">Mutlu İlişkiler</p>
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
              <span className="text-4xl mb-4 block">💔</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-darkgray mb-4">
                Bu Sorunları Birlikte Çözebiliriz
              </h2>
              <p className="text-darkgray/60 max-w-2xl mx-auto">
                Her ilişkide zorluklar yaşanabilir. Önemli olan doğru destek almaktır.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {issues.map((issue, i) => (
                <motion.div
                  key={i}
                  className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-5 border border-rose-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -10px rgba(244, 63, 94, 0.15)" }}
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
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="text-4xl mb-4 block">💕</span>
              <h2 className="font-serif text-3xl font-bold text-darkgray">
                Mutlu Çiftlerimiz
              </h2>
            </motion.div>

            <motion.div
              className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-rose-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="text-4xl">💑</span>
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
                  <p className="font-semibold text-rose-500">
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
                        ? 'bg-rose-500 w-8'
                        : 'bg-rose-200 hover:bg-rose-300'
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
                <i className="ri-shield-check-fill text-2xl text-rose-500"></i>
                <span className="text-sm font-medium">Gizlilik Garantili</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-darkgray/60"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-award-fill text-2xl text-rose-500"></i>
                <span className="text-sm font-medium">Uzman Psikologlar</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2 text-darkgray/60"
                whileHover={{ scale: 1.05 }}
              >
                <i className="ri-map-pin-fill text-2xl text-rose-500"></i>
                <span className="text-sm font-medium">Antalya Merkez</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-center relative overflow-hidden">
          {/* Animated hearts background */}
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
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                💕
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
              💑
            </motion.div>
            <motion.h2
              className="font-serif text-3xl sm:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              İlişkinize Değer Verin
            </motion.h2>
            <motion.p
              className="text-white/80 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Profesyonel destek için birlikte arayın. İlk adımı atın.
            </motion.p>
            <motion.a
              href="tel:+905403251525"
              onClick={() => trackPhoneClick('lp_footer_cift')}
              className="inline-flex items-center space-x-3 bg-white text-rose-500 px-12 py-5 rounded-full text-xl font-bold hover:bg-cream transition-all duration-300 shadow-2xl"
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
      <footer className="py-8 px-6 bg-darkgray text-white/60 text-center text-sm">
        <p>Arges Psikoloji - Meltem Mah. Muratpaşa/Antalya</p>
        <p className="mt-2">© 2025 Tüm hakları saklıdır.</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-r from-rose-500 to-pink-500 p-4 safe-area-bottom"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 1 }}
      >
        <motion.a
          href="tel:+905403251525"
          onClick={() => trackPhoneClick('lp_sticky_cift')}
          className="flex items-center justify-center space-x-2 bg-white text-rose-500 py-4 rounded-full font-bold text-lg shadow-lg"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <i className="ri-phone-fill"></i>
          </motion.span>
          <span>Birlikte Arayın: 0540 325 15 25</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default LPCiftTerapisi;
