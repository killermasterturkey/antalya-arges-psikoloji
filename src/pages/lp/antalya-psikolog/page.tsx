import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { trackPhoneClick, trackWhatsAppClick } from '../../../utils/analytics';
import { FloatingCTA, TrustBadges, FAQSection } from '../../../components/lp';

const faqData = [
  {
    question: 'Antalya\'da psikolog randevusu nasıl alabilirim?',
    answer: 'Muratpaşa ve Konyaaltı bölgelerinde hizmet veren merkezimizden telefonla veya WhatsApp üzerinden kolayca randevu alabilirsiniz. İlk görüşmede ihtiyaçlarınızı belirliyor ve size en uygun danışmanlık yaklaşımını öneriyoruz.',
  },
  {
    question: 'Antalya\'da duygusal zorlanmalar için destek veriyor musunuz?',
    answer: 'Evet, yoğun üzüntü ve isteksizlik gibi duygusal zorlanmalar en önemli çalışma alanlarımızdan biridir. Bilişsel davranışçı yaklaşım gibi kanıta dayalı yöntemlerle destek sağlıyoruz.',
  },
  {
    question: 'Yoğun kaygılar için danışmanlık veriyor musunuz?',
    answer: 'Yoğun kaygılarla çalışma konusunda deneyimliyiz. Konyaaltı ve Muratpaşa\'daki merkezimizde bilişsel davranışçı yaklaşımla etkili sonuçlar alıyoruz.',
  },
  {
    question: 'Online danışmanlık hizmeti var mı?',
    answer: 'Evet, Antalya dışından da danışanlarımıza online danışmanlık hizmeti sunuyoruz. Zoom veya Google Meet üzerinden yüz yüze görüşmelerle aynı kalitede hizmet alabilirsiniz.',
  },
  {
    question: 'Psikolog görüşmeleri gizli mi?',
    answer: 'Kesinlikle. Tüm psikolojik danışmanlık görüşmeleri etik kurallar ve yasal düzenlemeler çerçevesinde tamamen gizli tutulmaktadır. Bilgileriniz üçüncü kişilerle paylaşılmaz.',
  },
  {
    question: 'Antalya\'da stres yönetimi için kimden yardım alabilirim?',
    answer: 'Merkezimizde stres yönetimi, öfke kontrolü ve yaşam koçluğu hizmetleri sunuyoruz. Muratpaşa Meltem Mahallesi\'ndeki merkezimize randevu alarak psikologlarımızla görüşebilirsiniz.',
  },
];

const LPAntalyaPsikolog = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Gerçek danışan yorumları
  const testimonials = [
    {
      text: "Zorlayıcı bir dönemde gitmiştik. Kendisine tavsiye ile ulaşmıştık. 6 görüşme kadar devam ettik. Yaklaşımından ve sürecimizden çok memnun kaldık. Kesinlikle öneririm.",
      author: "S.T.",
      role: "Çocuk Danışmanlığı",
      rating: 5,
    },
    {
      text: "Gayet güler yüzlü, samimi ve sıcak bir psikolog. Bize verdiği güven duygusu sayesinde sıkılmadan çekinmeden her şeyi anlatabiliyorsunuz. Çok memnun kaldık.",
      author: "A.N.",
      role: "Çocuk Danışmanlığı",
      rating: 5,
    },
    {
      text: "Süreç boyunca her daim yanımızda oldular. Güler yüzlü ve gayet samimi bir ortamdı. Bu kurumu başkalarına tavsiye ederim.",
      author: "N.K.",
      role: "Bireysel Danışmanlık",
      rating: 5,
    },
  ];

  const services = [
    { icon: 'ri-user-heart-line', title: 'Bireysel Danışmanlık', desc: 'Kaygı, stres ve duygusal zorlanmalar', color: 'from-blue-500 to-cyan-500' },
    { icon: 'ri-parent-line', title: 'Aile Danışmanlığı', desc: 'Aile içi iletişim sorunları', color: 'from-green-500 to-emerald-500' },
    { icon: 'ri-heart-2-line', title: 'Çift Danışmanlığı', desc: 'Evlilik ve ilişki danışmanlığı', color: 'from-rose-500 to-pink-500' },
    { icon: 'ri-mental-health-line', title: 'Cinsel Danışmanlık', desc: 'Gizlilik garantili profesyonel destek', color: 'from-purple-500 to-indigo-500' },
    { icon: 'ri-gamepad-line', title: 'Çocuk Psikoloğu', desc: 'Oyunla danışmanlık desteği', color: 'from-amber-500 to-orange-500' },
    { icon: 'ri-user-star-line', title: 'Ergen Psikoloğu', desc: 'Ergenlik dönemi desteği', color: 'from-teal-500 to-cyan-500' },
  ];

  const stats = [
    { value: '500+', label: 'Mutlu Danışan', icon: 'ri-user-smile-line' },
    { value: '4.9', label: 'Puan', icon: 'ri-star-fill' },
    { value: '%98', label: 'Memnuniyet', icon: 'ri-thumb-up-line' },
    { value: '3', label: 'Psikolog', icon: 'ri-team-line' },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-cream overflow-hidden">
      {/* Floating CTA Bar */}
      <FloatingCTA theme="olive" trackingSource="psikolog" />

      {/* Floating Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg"
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
            <Link to="/" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">Anasayfa</Link>
            <Link to="/about" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">Hakkımızda</Link>
            <Link to="/services" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">Hizmetlerimiz</Link>
            <Link to="/team" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">Ekibimiz</Link>
            <Link to="/testimonials" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">Yorumlar</Link>
            <Link to="/contact" className="text-sm font-medium text-darkgray hover:text-olive transition-colors">İletişim</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <motion.a
              href="https://wa.me/905403251525"
              className="hidden md:flex items-center space-x-2 text-[#25D366] hover:text-[#128C7E] font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <i className="ri-whatsapp-fill text-xl"></i>
              <span className="hidden xl:inline">WhatsApp</span>
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
              src="/images/sas/sas-1.png"
              alt="Antalya Psikolog - Bireysel Danışmanlık Görüşmesi"
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
                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  Antalya Psikolog
                  <motion.span
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-olive to-green-400"
                    animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    Muratpaşa & Konyaaltı
                  </motion.span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-white/80 max-w-lg"
                >
                  Kaygılar ve duygusal zorlanmalar konusunda deneyimli psikolog kadrosu.
                  <span className="font-semibold text-olive"> Hemen randevu alın.</span>
                </motion.p>

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
                    <span className="text-sm">10+ Yıl Deneyim</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70">
                    <i className="ri-map-pin-fill text-olive text-xl"></i>
                    <span className="text-sm">Muratpaşa/Konyaaltı</span>
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
                      src="/images/services/psikolog-hero.png"
                      alt="Antalya Psikolog - Psikolojik Danışmanlık"
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

        {/* Why Choose Us Section - Persuasive */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-darkgray to-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
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
                className="inline-block bg-olive/20 text-olive px-6 py-2 rounded-full text-sm font-bold mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                NEDEN BİZİ TERCİH ETMELİSİNİZ?
              </motion.span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Antalya'da <span className="text-olive">500+ Danışan</span> Bize Güvendi
              </h2>
              <p className="text-white/70 mt-6 text-lg max-w-2xl mx-auto">
                2019'dan bu yana yüzlerce kişinin hayatına dokunuyor, bilimsel yöntemlerle kalıcı çözümler sunuyoruz.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Reason 1 - Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-olive to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-user-star-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">%98 Memnuniyet Oranı</h3>
                <p className="text-white/60">
                  500+ danışanımızın %98'i danışmanlık sürecinden memnun ayrıldı. Google'da 4.9 yıldız puanımız var.
                </p>
                <div className="flex items-center mt-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-lg"></i>
                  ))}
                  <span className="text-white/50 ml-2 text-sm">4.9/5</span>
                </div>
              </motion.div>

              {/* Reason 2 - Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-mental-health-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Bilimsel Yöntemler</h3>
                <p className="text-white/60">
                  BDT ve şema çalışması gibi kanıta dayalı, uluslararası standartlarda yöntemler uyguluyoruz.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs">BDT</span>
                  <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs">Çözüm Odaklı</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs">Şema Çalışması</span>
                </div>
              </motion.div>

              {/* Reason 3 - Team */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-team-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">3 Psikolog</h3>
                <p className="text-white/60">
                  Her biri kendi alanında deneyimli, sürekli eğitim alan ve süpervizyon altında çalışan profesyonel kadro.
                </p>
                <div className="flex -space-x-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-olive flex items-center justify-center text-white text-sm font-bold border-2 border-slate-900">ND</div>
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-bold border-2 border-slate-900">NÜ</div>
                  <div className="w-10 h-10 rounded-full bg-rose-500 flex items-center justify-center text-white text-sm font-bold border-2 border-slate-900">BD</div>
                </div>
              </motion.div>

              {/* Reason 4 - Privacy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-shield-check-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">%100 Gizlilik Garantisi</h3>
                <p className="text-white/60">
                  Tüm görüşmeler kesinlikle gizli tutulur. Bilgileriniz hiçbir koşulda üçüncü kişilerle paylaşılmaz.
                </p>
                <div className="flex items-center gap-2 mt-4 text-emerald-400">
                  <i className="ri-lock-fill"></i>
                  <span className="text-sm">Etik kurallara tam uyum</span>
                </div>
              </motion.div>

              {/* Reason 5 - Personalized */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-user-settings-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Kişiye Özel Danışmanlık</h3>
                <p className="text-white/60">
                  Hazır kalıplar değil, sizin ihtiyaçlarınıza göre özel olarak hazırlanan bireysel danışmanlık planları uyguluyoruz.
                </p>
                <div className="flex items-center gap-2 mt-4 text-amber-400">
                  <i className="ri-checkbox-circle-fill"></i>
                  <span className="text-sm">Size özel yaklaşım</span>
                </div>
              </motion.div>

              {/* Reason 6 - Easy Access */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <i className="ri-video-chat-fill text-3xl text-white"></i>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Online & Yüz Yüze</h3>
                <p className="text-white/60">
                  İster merkezimizde yüz yüze, ister evinizden online danışmanlık alın. Esnek randevu seçenekleri sunuyoruz.
                </p>
                <div className="flex items-center gap-2 mt-4 text-cyan-400">
                  <i className="ri-calendar-check-fill"></i>
                  <span className="text-sm">Hızlı randevu imkanı</span>
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
                Siz de hayatınızı değiştirmek için ilk adımı atın
              </p>
              <motion.a
                href="tel:+905403251525"
                onClick={() => trackPhoneClick('lp_whychoose_psikolog')}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-olive to-green-500 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl shadow-olive/30"
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
                Antalya Psikolojik Danışmanlık
              </span>
              <h2 className="font-serif text-4xl font-bold text-darkgray">
                Muratpaşa ve Konyaaltı'da Psikolog Hizmetleri
              </h2>
              <p className="text-darkgray/60 mt-4 max-w-2xl mx-auto">
                Kaygılar, duygusal zorlanmalar, stres yönetimi ve daha fazlası için profesyonel destek
              </p>
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
                Antalya Psikoloji Merkezimiz
              </h2>
              <p className="text-darkgray/60">Muratpaşa Meltem Mahallesi'nde huzurlu ve güvenli danışmanlık ortamı</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { src: '/images/sas/sas-1.png', title: 'Antalya Bireysel Danışmanlık Görüşmesi' },
                { src: '/images/sas/sas-4.png', title: 'Stres Yönetimi ve Meditasyon' },
                { src: '/images/sas/sas-5.png', title: 'Psikolojik Danışmanlık Ortamı' },
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
                Antalya'da Psikolog Arayanların Yorumları
              </h2>
              <p className="text-darkgray/60 mt-4">Muratpaşa ve Konyaaltı'dan danışanlarımızın deneyimleri</p>
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

        {/* Trust Badges Section */}
        <section className="py-12 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <TrustBadges theme="olive" variant="horizontal" />
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqData} theme="olive" />

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
              Antalya'da Psikolog Randevusu
            </motion.h2>

            <motion.p
              className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Muratpaşa ve Konyaaltı'da kaygılar ve duygusal zorlanmalar için hemen randevu alın.
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
            <p className="font-semibold text-white/80">Antalya Psikolog - Arges Psikoloji Merkezi</p>
            <p className="mt-1">Meltem Mah. Muratpaşa/Antalya | Konyaaltı Bölgesine Yakın</p>
            <p className="mt-1">Kaygı, Stres ve Duygusal Zorlanmalarda Profesyonel Destek</p>
            <p className="mt-4">© 2025 Tüm hakları saklıdır.</p>
          </div>
        </div>
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
