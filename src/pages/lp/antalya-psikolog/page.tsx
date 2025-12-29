import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { trackPhoneClick, trackWhatsAppClick } from '../../../utils/analytics';

const LPAntalyaPsikolog = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 30, seconds: 0 });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showUrgency, setShowUrgency] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const testimonials = [
    {
      text: "Arges Psikoloji'de aldığım terapi hayatımı değiştirdi. Artık kendimi çok daha iyi hissediyorum.",
      author: "Ayşe K.",
      role: "Bireysel Terapi Danışanı",
      rating: 5,
    },
    {
      text: "Profesyonel ve anlayışlı yaklaşımları sayesinde zor bir dönemimi atlattım. Herkese tavsiye ederim.",
      author: "Mehmet Y.",
      role: "EMDR Terapi Danışanı",
      rating: 5,
    },
    {
      text: "10 yıldır çektiğim kaygı bozukluğunda ilk kez gerçek bir ilerleme kaydettim.",
      author: "Zeynep A.",
      role: "Bireysel Terapi Danışanı",
      rating: 5,
    },
  ];

  const services = [
    { icon: 'ri-user-heart-line', title: 'Bireysel Terapi', desc: 'Kişisel gelişim ve iyileşme', color: 'from-blue-500 to-cyan-500' },
    { icon: 'ri-parent-line', title: 'Aile Danışmanlığı', desc: 'Aile içi iletişim', color: 'from-green-500 to-emerald-500' },
    { icon: 'ri-heart-2-line', title: 'Çift Terapisi', desc: 'İlişki sorunları', color: 'from-rose-500 to-pink-500' },
    { icon: 'ri-mental-health-line', title: 'EMDR Terapi', desc: 'Travma tedavisi', color: 'from-purple-500 to-indigo-500' },
    { icon: 'ri-gamepad-line', title: 'Çocuk Terapisi', desc: 'Oyun terapisi', color: 'from-amber-500 to-orange-500' },
    { icon: 'ri-user-star-line', title: 'Ergen Danışmanlığı', desc: 'Gençlik sorunları', color: 'from-teal-500 to-cyan-500' },
  ];

  const stats = [
    { value: '1000+', label: 'Mutlu Danışan', icon: 'ri-user-smile-line' },
    { value: '10+', label: 'Yıl Deneyim', icon: 'ri-calendar-check-line' },
    { value: '%98', label: 'Memnuniyet', icon: 'ri-star-line' },
    { value: '24s', label: 'Randevu', icon: 'ri-time-line' },
  ];

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 2, minutes: 30, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Show urgency after delay
  useEffect(() => {
    const timer = setTimeout(() => setShowUrgency(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      {/* Floating Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl font-bold text-darkgray flex items-center space-x-2">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-olive to-green-600 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 10, scale: 1.1 }}
            >
              <i className="ri-mental-health-fill text-white text-xl"></i>
            </motion.div>
            <span>Arges Psikoloji</span>
          </Link>
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://wa.me/905403251525"
              className="hidden sm:flex items-center space-x-2 text-[#25D366] hover:text-[#128C7E] font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <i className="ri-whatsapp-fill text-xl"></i>
              <span>WhatsApp</span>
            </motion.a>
            <motion.a
              href="tel:+905403251525"
              onClick={() => trackPhoneClick('lp_header_psikolog')}
              className="flex items-center space-x-2 bg-gradient-to-r from-olive to-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-olive/30"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(128, 128, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <i className="ri-phone-fill"></i>
              </motion.span>
              <span>Hemen Ara</span>
            </motion.a>
          </div>
        </div>
      </motion.header>

      <main>
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image with Parallax */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{ y: heroY }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-darkgray/90 via-darkgray/70 to-transparent z-10" />
            <motion.img
              src="/images/lp/therapy-room-bright.jpg"
              alt="Terapi Odası"
              className="w-full h-full object-cover"
              initial={{ scale: 1.1 }}
              animate={{ scale: imageLoaded ? 1 : 1.1 }}
              transition={{ duration: 1.5 }}
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-olive/20 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + i * 10}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </div>

          <motion.div
            className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20"
            style={{ opacity: heroOpacity }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Urgency Badge */}
                <AnimatePresence>
                  {showUrgency && (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2.5 rounded-full shadow-lg"
                    >
                      <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-3 h-3 bg-white rounded-full"
                      />
                      <span className="text-sm font-semibold">Bugün {3} kişi randevu aldı!</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  Antalya'nın
                  <motion.span
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-olive to-green-400"
                    animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    Uzman Psikoloğu
                  </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-white/80 max-w-lg"
                >
                  Profesyonel psikolojik danışmanlık ile hayatınızı dönüştürün.
                  <span className="font-semibold text-olive"> İlk görüşme ücretsiz.</span>
                </motion.p>

                {/* Countdown Timer */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-5 inline-block"
                >
                  <p className="text-white/70 text-sm mb-2">Kampanya bitimine kalan süre:</p>
                  <div className="flex space-x-4">
                    {[
                      { value: timeLeft.hours, label: 'Saat' },
                      { value: timeLeft.minutes, label: 'Dakika' },
                      { value: timeLeft.seconds, label: 'Saniye' },
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <motion.div
                          className="bg-gradient-to-br from-olive to-green-600 text-white text-2xl sm:text-3xl font-bold w-16 h-16 rounded-xl flex items-center justify-center shadow-lg"
                          animate={{ scale: item.label === 'Saniye' ? [1, 1.05, 1] : 1 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          {String(item.value).padStart(2, '0')}
                        </motion.div>
                        <p className="text-white/60 text-xs mt-1">{item.label}</p>
                      </div>
                    ))}
                  </div>
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
                    onClick={() => trackPhoneClick('lp_hero_psikolog')}
                    className="relative group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-olive to-green-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl overflow-hidden"
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
                    href="https://wa.me/905403251525?text=Merhaba,%20randevu%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('lp_hero_psikolog')}
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
                  className="flex flex-wrap items-center gap-6 pt-4"
                >
                  <div className="flex items-center space-x-2 text-white/70">
                    <i className="ri-shield-check-fill text-olive text-xl"></i>
                    <span className="text-sm">Gizlilik Garantisi</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <i className="ri-award-fill text-olive text-xl"></i>
                    <span className="text-sm">Uzman Kadro</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <i className="ri-map-pin-fill text-olive text-xl"></i>
                    <span className="text-sm">Antalya Merkez</span>
                  </div>
                </motion.div>
              </div>

              {/* Right - Floating Image Card */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="hidden lg:block"
              >
                <motion.div
                  className="relative"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/lp/therapy-room-cozy.jpg"
                      alt="Terapi Odası"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-darkgray/60 to-transparent" />

                    {/* Floating Stats Card */}
                    <motion.div
                      className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-darkgray font-semibold">Mutlu Danışanlar</p>
                          <div className="flex items-center space-x-1 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 + i * 0.1 }}
                                className="text-amber-400"
                              >
                                ★
                              </motion.span>
                            ))}
                            <span className="text-darkgray/60 text-sm ml-2">5.0 (120+ yorum)</span>
                          </div>
                        </div>
                        <motion.div
                          className="text-4xl font-bold text-olive"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.2, type: "spring" }}
                        >
                          1000+
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-gradient-to-br from-olive to-green-600 text-white px-6 py-3 rounded-2xl shadow-xl"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <p className="text-sm font-bold">10+ Yıl</p>
                    <p className="text-xs opacity-80">Deneyim</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <i className="ri-arrow-down-double-line text-white/50 text-3xl"></i>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-olive/10 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <i className={`${stat.icon} text-3xl text-olive`}></i>
                  </motion.div>
                  <motion.p
                    className="text-4xl font-bold text-darkgray"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-darkgray/60 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-cream to-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-block bg-olive/10 text-olive px-4 py-2 rounded-full text-sm font-medium mb-4">
                Hizmetlerimiz
              </span>
              <h2 className="font-serif text-4xl font-bold text-darkgray">
                Uzman Kadromuzla Yanınızdayız
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-darkgray mb-2">{service.title}</h3>
                  <p className="text-darkgray/60">{service.desc}</p>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-olive to-green-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
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
              <p className="text-darkgray/60">Huzurlu ve güvenli bir ortamda terapi</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { src: '/images/lp/therapy-room-bright.jpg', title: 'Ana Terapi Odası' },
                { src: '/images/lp/modern-office.jpg', title: 'Modern Ofis' },
                { src: '/images/lp/therapy-session.jpg', title: 'Terapi Seansı' },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  className="relative group rounded-3xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkgray/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-semibold">{img.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-cream to-white">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-4xl font-bold text-darkgray">
                Danışanlarımız Ne Diyor?
              </h2>
            </motion.div>

            <motion.div
              className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-12 h-12 bg-olive rounded-full flex items-center justify-center">
                  <i className="ri-double-quotes-l text-white text-xl"></i>
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
                    <p className="font-bold text-darkgray text-lg">{testimonials[activeTestimonial].author}</p>
                    <p className="text-darkgray/60">{testimonials[activeTestimonial].role}</p>
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
                      i === activeTestimonial ? 'bg-olive w-8' : 'bg-olive/20 hover:bg-olive/40'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 lg:px-12 bg-gradient-to-r from-olive to-green-600 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/10 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8"
            >
              <i className="ri-mental-health-fill text-white text-4xl"></i>
            </motion.div>

            <motion.h2
              className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Değişim İçin İlk Adımı Atın
            </motion.h2>

            <motion.p
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Ücretsiz ön görüşme ile başlayın. Uzman psikologlarımız sizi dinlemek için hazır.
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
                onClick={() => trackPhoneClick('lp_footer_psikolog')}
                className="inline-flex items-center justify-center space-x-3 bg-white text-olive px-12 py-5 rounded-full text-xl font-bold shadow-2xl"
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
                onClick={() => trackWhatsAppClick('lp_footer_psikolog')}
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
      <footer className="py-8 px-6 bg-darkgray text-white/60 text-center text-sm">
        <p>Arges Psikoloji - Meltem Mah. Muratpaşa/Antalya</p>
        <p className="mt-2">© 2025 Tüm hakları saklıdır.</p>
      </footer>

      {/* Mobile Sticky CTA */}
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-r from-olive to-green-600 p-4 safe-area-bottom"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", delay: 1 }}
      >
        <div className="flex gap-3">
          <motion.a
            href="tel:+905403251525"
            onClick={() => trackPhoneClick('lp_sticky_psikolog')}
            className="flex-1 flex items-center justify-center space-x-2 bg-white text-olive py-4 rounded-full font-bold text-lg shadow-lg"
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
            onClick={() => trackWhatsAppClick('lp_sticky_psikolog')}
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

export default LPAntalyaPsikolog;
