import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';

const HizliRandevuPage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    { value: 'individual', label: 'Bireysel Terapi' },
    { value: 'couple', label: 'Çift Terapisi' },
    { value: 'family', label: 'Aile Terapisi' },
    { value: 'child', label: 'Çocuk Psikolojisi' },
    { value: 'teen', label: 'Ergen Danışmanlığı' },
    { value: 'emdr', label: 'EMDR Terapisi' },
    { value: 'sexual', label: 'Cinsel Terapi' },
  ];

  const contactInfo = [
    { icon: 'ri-phone-line', title: 'Telefon', content: '0540 325 15 25', link: 'tel:+905403251525' },
    { icon: 'ri-mail-line', title: 'E-posta', content: 'info@argespsikoloji.com', link: 'mailto:info@argespsikoloji.com' },
    { icon: 'ri-map-pin-line', title: 'Adres', content: 'Meltem Mah. 3850. Sk. Belgen Sitesi Muratpaşa/Antalya', link: null },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        <section className="pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-olive/10 px-6 py-3 rounded-full">
                <i className="ri-calendar-check-line text-olive text-xl"></i>
                <span className="font-sans text-sm font-medium text-darkgray">Hızlı Randevu</span>
              </div>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray">
                Hızlı Randevu
              </h1>
              <p className="font-sans text-lg text-darkgray/70 max-w-3xl mx-auto mb-2">
                Hazır mısınız? Sizin için buradayız.
              </p>
              <p className="font-sans text-base text-darkgray/60 max-w-3xl mx-auto">
                Hayat bazen ağır gelir. Yanınızda sizi anlayan, dinleyen ve eşlik eden bir uzman olsun istersiniz. Arges Psikoloji olarak, ilk adımı sizin adınıza kolaylaştırıyoruz.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-12 space-y-8 shadow-lg"
              >
                <h2 className="font-serif text-3xl font-bold text-darkgray">Randevu Formu</h2>

                <form className="space-y-6">
                  <div>
                    <label className="block font-sans text-sm font-medium text-darkgray mb-2">Ad Soyad *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-cream border border-darkgray/10 rounded-xl font-sans text-sm"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-sm font-medium text-darkgray mb-2">Telefon *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-cream border border-darkgray/10 rounded-xl font-sans text-sm"
                        placeholder="5XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block font-sans text-sm font-medium text-darkgray mb-2">E-posta</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-cream border border-darkgray/10 rounded-xl font-sans text-sm"
                        placeholder="ornek@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-medium text-darkgray mb-2">Hizmet *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-cream border border-darkgray/10 rounded-xl font-sans text-sm"
                    >
                      <option value="">Hizmet seçiniz</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>{service.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-medium text-darkgray mb-2">Mesajınız</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-5 py-4 bg-cream border border-darkgray/10 rounded-xl font-sans text-sm resize-none"
                      placeholder="Randevu talebinizle ilgili notlar..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300"
                  >
                    Randevu Talebini Gönder
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2 space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6 space-y-3 shadow-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center">
                        <i className={`${info.icon} text-2xl text-olive`}></i>
                      </div>
                      <div>
                        <h3 className="font-sans text-xs font-semibold text-darkgray/60 uppercase">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="font-sans text-base text-darkgray hover:text-olive">{info.content}</a>
                        ) : (
                          <p className="font-sans text-base text-darkgray">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-3xl p-8 text-white space-y-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <i className="ri-whatsapp-line text-4xl"></i>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">WhatsApp ile Hızlı İletişim</h3>
                    <p className="font-sans text-sm text-white/90">Hemen WhatsApp üzerinden bizimle iletişime geçin.</p>
                  </div>
                  <a
                    href="https://wa.me/905403251525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 bg-white text-[#128C7E] px-6 py-4 rounded-full font-sans text-base font-semibold hover:bg-cream transition-all duration-300"
                  >
                    <i className="ri-whatsapp-line text-xl"></i>
                    <span>WhatsApp'tan Yazın</span>
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

export default HizliRandevuPage;
