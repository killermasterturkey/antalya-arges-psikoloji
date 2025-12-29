import { motion } from 'framer-motion';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';
import { Link } from 'react-router-dom';

const SasBalancePage = () => {
  const modules = [
    {
      icon: 'ri-scales-3-line',
      title: 'Yaşam Dengesi Oluşturma',
      description: 'İş, aile, sosyal yaşam ve kişisel zaman arasında sağlıklı bir denge kurun.',
      topics: ['Öncelik belirleme', 'Zaman dağılımı', 'Sınır koyma', 'Enerji yönetimi']
    },
    {
      icon: 'ri-mental-health-line',
      title: 'Stres Yönetimi',
      description: 'Stresle sağlıklı bir şekilde başa çıkma teknikleri ve stratejileri geliştirin.',
      topics: ['Stres analizi', 'Başa çıkma stilleri', 'Tetikleyici yönetimi', 'Stres azaltma']
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'İç Huzur ve Dinginlik',
      description: 'Zihninizi sakinleştirin ve iç huzurunuzu bulun.',
      topics: ['Meditasyon', 'Nefes teknikleri', 'Şu an farkındalığı', 'Dinlenme sanatı']
    },
    {
      icon: 'ri-leaf-line',
      title: 'Mindfulness Uygulamaları',
      description: 'Günlük yaşamda farkındalık geliştirerek daha bilinçli bir hayat sürün.',
      topics: ['Bilinçli yeme', 'Bilinçli hareket', 'Duygu farkındalığı', 'Şükran pratiği']
    },
  ];

  const benefits = [
    { icon: 'ri-heart-3-line', title: 'İç Huzur', description: 'Zihninizi sakinleştirin ve iç dengeyi bulun.' },
    { icon: 'ri-emotion-happy-line', title: 'Azalan Stres', description: 'Kaygı ve stres düzeyinizi önemli ölçüde azaltın.' },
    { icon: 'ri-battery-charge-line', title: 'Yenilenen Enerji', description: 'Tükenmişlikten kurtulun, enerjinizi yenileyin.' },
    { icon: 'ri-moon-line', title: 'Kaliteli Uyku', description: 'Daha derin ve dinlendirici uyku deneyimi.' },
    { icon: 'ri-focus-3-line', title: 'Zihin Netliği', description: 'Düşünce bulanıklığından kurtulun, netlik kazanın.' },
    { icon: 'ri-home-heart-line', title: 'İlişki Kalitesi', description: 'Yakınlarınızla daha derin bağlar kurun.' },
  ];

  const practices = [
    { name: 'Sabah Meditasyonu', description: 'Güne sakin ve odaklı başlama rutini', duration: '10-15 dk' },
    { name: 'Nefes Egzersizleri', description: 'Anlık stres yönetimi için 4-7-8 ve box breathing teknikleri', duration: '3-5 dk' },
    { name: 'Body Scan', description: 'Bedendeki gerginliklerin farkına varma ve bırakma', duration: '15-20 dk' },
    { name: 'Şükran Günlüğü', description: 'Her gün üç şükran nedeni yazma pratiği', duration: '5 dk' },
    { name: 'Dijital Detoks', description: 'Ekran süresini azaltma ve bilinçli teknoloji kullanımı', duration: 'Günlük' },
    { name: 'Doğa Yürüyüşü', description: 'Doğada bilinçli yürüyüş ve gözlem', duration: '30-45 dk' },
  ];

  const weeklyPlan = [
    { week: '1-2', title: 'Farkındalık Temelleri', content: 'Mevcut stres kaynaklarınızı ve yaşam dengesizliklerini tespit edin. Temel nefes ve meditasyon tekniklerini öğrenin.' },
    { week: '3-4', title: 'Stres Yönetimi', content: 'Kişisel stres tetikleyicilerinizi tanıyın. Etkili başa çıkma stratejileri geliştirin. Gevşeme tekniklerini uygulayın.' },
    { week: '5-6', title: 'Mindfulness Derinleştirme', content: 'Günlük farkındalık pratiklerini hayatınıza entegre edin. Bilinçli yaşam alışkanlıkları oluşturun.' },
    { week: '7-8', title: 'Sürdürülebilir Denge', content: 'Uzun vadeli denge stratejileri geliştirin. Kriz anları için acil durum planı oluşturun. Sürdürülebilir rutinler belirleyin.' },
  ];

  const testimonials = [
    { name: 'Elif S.', text: 'İş stresi hayatımı mahvediyordu. SAS Balance ile hem işimde hem özel hayatımda denge kurdum.', rating: 5 },
    { name: 'Burak K.', text: 'Anksiyete ile yıllarca mücadele ettim. Bu program bana gerçek iç huzuru öğretti.', rating: 5 },
    { name: 'Aylin M.', text: 'Anne ve kariyer kadını olarak tükenmişlik yaşıyordum. Şimdi her ikisine de kaliteli zaman ayırabiliyorum.', rating: 5 },
  ];

  const faqs = [
    { question: 'SAS Balance kimler için ideal?', answer: 'Stres ve kaygı yaşayan, iş-yaşam dengesini kuramayan, tükenmişlik hisseden veya iç huzur arayan herkes için uygundur. Özellikle yoğun iş temposu olan profesyoneller büyük fayda görür.' },
    { question: 'Meditasyon deneyimim yok, katılabilir miyim?', answer: 'Kesinlikle! Program her seviyeye uygundur. Hiç meditasyon yapmamış olsanız bile, temellerden başlayarak adım adım ilerliyoruz.' },
    { question: 'Günlük ne kadar zaman ayırmam gerekiyor?', answer: 'Başlangıçta günde 10-15 dakika yeterlidir. Program ilerledikçe tercihinize göre süreyi artırabilirsiniz. Önemli olan düzenli pratik yapmaktır.' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-olive/5"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-olive/10 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center space-x-2 bg-white border border-gold/30 px-4 py-2 rounded-full">
                  <i className="ri-scales-3-line text-gold"></i>
                  <span className="font-sans text-sm text-darkgray">SAS Balance Programı</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  İç Dengenizi <span className="text-gold">Bulun</span>
                </h1>

                <p className="font-sans text-lg text-darkgray/70 leading-relaxed mb-2">
                  Stres Yönetimi ve Denge İçin
                </p>
                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  SAS Balance, stres yönetimi ve yaşam dengesi üzerine odaklanır. Mindfulness teknikleri, duygusal regülasyon ve gevşeme yöntemleri ile iç huzurunuzu bulun.
                </p>

                <div className="flex items-center space-x-6 pt-2">
                  <div className="flex items-center space-x-2">
                    <i className="ri-time-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">8 Hafta</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-leaf-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Mindfulness</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="ri-heart-line text-gold"></i>
                    <span className="font-sans text-sm text-darkgray/70">Bütüncül Yaklaşım</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="https://wa.me/905403251525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gold text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-gold/90 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap">
                    <i className="ri-calendar-check-line"></i>
                    <span>Programa Katıl</span>
                  </a>
                  <Link to="/sas-nedir" className="inline-flex items-center space-x-2 bg-white text-darkgray px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-cream transition-all duration-300 border border-darkgray/20 cursor-pointer whitespace-nowrap">
                    <span>SAS Hakkında</span>
                    <i className="ri-arrow-right-line"></i>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/sas/sas-2.png"
                    alt="SAS Balance - İç Denge"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center">
                      <i className="ri-mental-health-line text-2xl text-gold"></i>
                    </div>
                    <div>
                      <p className="font-serif text-2xl font-bold text-darkgray">%70</p>
                      <p className="font-sans text-sm text-darkgray/60">Stres Azalması</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Program Modülleri
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto">
                Dört bütüncül modül ile yaşamınızda kalıcı denge ve huzur oluşturun.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className={`${module.icon} text-3xl text-gold`}></i>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-serif text-xl font-bold text-darkgray">{module.title}</h3>
                      <p className="font-sans text-base text-darkgray/70">{module.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, i) => (
                          <span key={i} className="bg-gold/20 text-darkgray px-3 py-1 rounded-full font-sans text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Practices Section */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <img
                    src="/images/sas/sas-4.png"
                    alt="SAS Balance Pratikleri"
                    className="w-full h-[600px] object-cover rounded-3xl shadow-xl"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                    Günlük Pratikler
                  </h2>
                  <p className="font-sans text-lg text-darkgray/70">
                    Hayatınıza entegre edebileceğiniz basit ama etkili mindfulness uygulamaları.
                  </p>
                </div>

                <div className="space-y-4">
                  {practices.map((practice, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-5 hover:shadow-lg transition-all duration-300 flex justify-between items-start"
                    >
                      <div className="flex-1">
                        <h4 className="font-sans text-base font-semibold text-darkgray flex items-center">
                          <i className="ri-leaf-line text-gold mr-2"></i>
                          {practice.name}
                        </h4>
                        <p className="font-sans text-sm text-darkgray/60 mt-1 pl-6">{practice.description}</p>
                      </div>
                      <span className="bg-gold/20 text-darkgray px-3 py-1 rounded-full font-sans text-xs whitespace-nowrap">
                        {practice.duration}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Program Faydaları
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <i className={`${benefit.icon} text-3xl text-gold`}></i>
                  </div>
                  <h4 className="font-sans text-lg font-semibold text-darkgray">{benefit.title}</h4>
                  <p className="font-sans text-sm text-darkgray/60 mt-2">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Weekly Plan Section */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-16"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                8 Haftalık Program Akışı
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {weeklyPlan.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 h-full space-y-4 hover:shadow-xl transition-all duration-300 relative"
                >
                  <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full font-sans text-xs font-medium">
                    Hafta {item.week}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-darkgray pt-4">{item.title}</h3>
                  <p className="font-sans text-sm text-darkgray/70 leading-relaxed">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Katılımcı Deneyimleri
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream rounded-3xl p-8 space-y-4 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="ri-star-fill text-gold"></i>
                    ))}
                  </div>
                  <p className="font-sans text-base text-darkgray/80 italic">"{testimonial.text}"</p>
                  <p className="font-sans text-sm font-semibold text-darkgray">{testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 mb-12"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray">
                Sıkça Sorulan Sorular
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-serif text-lg font-bold text-darkgray mb-3 flex items-start">
                    <i className="ri-question-line text-gold mr-3 mt-1"></i>
                    {faq.question}
                  </h3>
                  <p className="font-sans text-base text-darkgray/70 pl-8">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-gold to-gold/80">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
                İç Huzurunuzu Bulmaya Hazır mısınız?
              </h2>
              <p className="font-sans text-xl text-white/90">
                SAS Balance programı ile dengeli ve huzurlu bir yaşam kurun. İlk görüşme ücretsizdir.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <a href="https://wa.me/905403251525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white text-gold px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-cream transition-all duration-300 shadow-lg">
                  <i className="ri-whatsapp-line text-xl"></i>
                  <span>WhatsApp ile Bilgi Al</span>
                </a>
                <a href="tel:+905403251525" className="inline-flex items-center space-x-2 bg-transparent text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-white/10 transition-all duration-300 border-2 border-white">
                  <i className="ri-phone-line"></i>
                  <span>0540 325 15 25</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SasBalancePage;
