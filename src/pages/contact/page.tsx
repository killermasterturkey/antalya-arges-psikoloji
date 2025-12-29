import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import CallBanner from '../../components/feature/CallBanner';
import WhatsAppButton from '../../components/feature/WhatsAppButton';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'ri-phone-line',
      title: 'Telefon',
      content: '0540 325 15 25',
      link: 'tel:+905403251525',
    },
    {
      icon: 'ri-mail-line',
      title: 'E-posta',
      content: 'info@antalyaargespsikoloji.com',
      link: 'mailto:info@antalyaargespsikoloji.com',
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Adres',
      content: 'Meltem Mah. 3850. Sk. Belgen Sitesi D:7 Blok K:4 D:10 Muratpaşa/Antalya',
      link: 'https://maps.google.com/?q=Meltem+Mah.+3850.+Sk.+Belgen+Sitesi+Muratpasa+Antalya',
    },
    {
      icon: 'ri-time-line',
      title: 'Çalışma Saatleri',
      content: 'Pazartesi - Cumartesi: 09:00 - 20:00',
      link: null,
    },
  ];

  const socialMedia = [
    { icon: 'ri-instagram-line', name: 'Instagram', link: 'https://www.instagram.com/argespsikoloji/' },
    { icon: 'ri-facebook-line', name: 'Facebook', link: 'https://www.facebook.com/people/Arges-Psikoloji/61559928306983/' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <CallBanner />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-96 h-96 bg-olive rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-gold rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-olive/10 px-6 py-3 rounded-full mb-4">
                <i className="ri-message-3-line text-olive text-xl"></i>
                <span className="font-sans text-sm font-medium text-darkgray">
                  Bizimle İletişime Geçin
                </span>
              </div>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray">
                İletişim
              </h1>
              <p className="font-sans text-xl text-darkgray/70 max-w-3xl mx-auto leading-relaxed">
                İlk Adım Cesaretle Başlar. Her türlü soru, görüş ve randevu talepleriniz için bize ulaşın.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center">
                    <i className={`${info.icon} text-2xl text-olive`}></i>
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-semibold text-darkgray/60 uppercase tracking-wide mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-sans text-base text-darkgray hover:text-olive transition-colors duration-200 cursor-pointer"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="font-sans text-base text-darkgray">
                        {info.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form & Map Section */}
        <section className="pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-8 lg:p-12 space-y-8"
              >
                <div className="space-y-4">
                  <h2 className="font-serif text-3xl lg:text-4xl font-bold text-darkgray">
                    Bize Yazın
                  </h2>
                  <p className="font-sans text-base text-darkgray/70">
                    Formu doldurarak bize ulaşabilirsiniz. En kısa sürede size geri dönüş yapacağız.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block font-sans text-sm font-medium text-darkgray mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream border border-darkgray/10 rounded-xl font-sans text-sm text-darkgray focus:outline-none focus:border-olive transition-colors duration-200"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block font-sans text-sm font-medium text-darkgray mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-cream border border-darkgray/10 rounded-xl font-sans text-sm text-darkgray focus:outline-none focus:border-olive transition-colors duration-200"
                        placeholder="ornek@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block font-sans text-sm font-medium text-darkgray mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-cream border border-darkgray/10 rounded-xl font-sans text-sm text-darkgray focus:outline-none focus:border-olive transition-colors duration-200"
                        placeholder="5XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block font-sans text-sm font-medium text-darkgray mb-2">
                      İlgilendiğiniz Hizmet
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-cream border border-darkgray/10 rounded-xl font-sans text-sm text-darkgray focus:outline-none focus:border-olive transition-colors duration-200 cursor-pointer"
                    >
                      <option value="">Seçiniz</option>
                      <option value="individual">Bireysel Terapi</option>
                      <option value="couple">Çift Terapisi</option>
                      <option value="family">Aile Terapisi</option>
                      <option value="child">Çocuk Psikolojisi</option>
                      <option value="teen">Ergen Danışmanlığı</option>
                      <option value="emdr">EMDR Terapisi</option>
                      <option value="sexual">Cinsel Terapi</option>
                      <option value="career">Kariyer Danışmanlığı</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-sans text-sm font-medium text-darkgray mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      maxLength={500}
                      className="w-full px-4 py-3 bg-cream border border-darkgray/10 rounded-xl font-sans text-sm text-darkgray focus:outline-none focus:border-olive transition-colors duration-200 resize-none"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                    <p className="mt-2 font-sans text-xs text-darkgray/50 text-right">
                      {formData.message.length}/500
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <i className="ri-loader-4-line animate-spin"></i>
                        <span>Gönderiliyor...</span>
                      </span>
                    ) : (
                      'Mesajı Gönder'
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 bg-olive/10 text-olive px-4 py-3 rounded-xl"
                    >
                      <i className="ri-checkbox-circle-line text-xl"></i>
                      <span className="font-sans text-sm">
                        Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                      </span>
                    </motion.div>
                  )}
                </form>
              </motion.div>

              {/* Map & Social */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Map */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm w-full h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.8!2d30.7!3d36.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUyJzQ4LjAiTiAzMMKwNDInMDAuMCJF!5e0!3m2!1str!2str!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arges Psikoloji Konum - Antalya"
                  ></iframe>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-3xl p-8 space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-darkgray">
                    Sosyal Medya
                  </h3>
                  <p className="font-sans text-sm text-darkgray/70">
                    Bizi sosyal medyada takip edin, güncel içeriklerimizden haberdar olun.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center hover:bg-olive hover:text-white text-olive transition-all duration-300 cursor-pointer"
                        aria-label={social.name}
                      >
                        <i className={`${social.icon} text-xl`}></i>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-olive to-gold rounded-3xl p-8 text-white space-y-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <i className="ri-customer-service-2-line text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">
                      Hızlı İletişim
                    </h3>
                    <p className="font-sans text-sm text-white/90">
                      Acil durumlar için WhatsApp üzerinden bize ulaşabilirsiniz.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/905403251525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-white text-darkgray px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-cream transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-whatsapp-line text-lg"></i>
                    <span>WhatsApp ile İletişim</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
