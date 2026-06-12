import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const AntalyaCinselTerapiPage = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: 'Beyza D.',
      text: 'Merhaba, ben Deniz hanıma buradaki yorumlar aracılığıyla geldim. Eşimle üç yıldır evliyiz, ancak üç yıldır benim vajinismus olmam nedeniyle bir ilişki yaşayamıyorduk. Başlarda bunun kendiliğinden geçeceğini düşündük. İlişkimiz ilerledikçe gerginliğimin azalacağını ve uygun bir cinsel hayatımızın olabileceğini düşünüyordum. Ancak zaman geçtikçe daha da zorlanmaya başladık. Evliliğimiz bana göre bir çıkmaza girmişti. İş yerindeki arkadaşlarımla bu durumu paylaşınca verdikleri tepki üzerine kendimi daha kötü hissetmeye başladım ve eşimle konuşmamız üzerine bir destek almaya karar verdik. Daha sonra Deniz hanımla tanışmış olduk. Seanslar sırasında eşim de ben de birçok şeyi fark ettik ve Deniz hanım bizi acele ettirmedi. Özellikle bu bana çok iyi geldi. Her şey yapabileceğim ölçü ve derecedeydi. Eşimle olan ilişkim ve iletişimim gün geçtikçe daha iyi hale geldi ve yaşadığımız sorunları ayıp, günah olmadan ya da böyle düşünmeden, hissetmeden konuşabiliyor olmamız bile benim için çok kıymetliydi. Bugün oturup bunları sizlerle paylaşma nedenim Deniz hanım benim ve eşimin hayatında sanki yepyeni bir pencere açtı. Tüm samimiyetimle çok memnun kaldığımı belirtmek isterim. Kendisine teşekkürlerimizi sunuyoruz.',
    },
    {
      id: 2,
      name: 'Elif D.',
      text: '1,5 yıl vajinismusu çekenlerden biriyim. Yaşadıklarım tarif bile edilemezdi. Ancak yaşayan biliyor vajinismusun ne denli insanı yıprattığını. Kendimi her şeyden soyutlamıştım evden dışarı çıkmak istemiyordum. Gitgide de kilo aldım bunu bile kafama takmıyordum. Dışarı çıktığımda ise bebeği olan birini gördüğümde bende bir anormallik var herkes normal ben hastayım güçsüz biriyim gibi düşünüyordum. İyice içime kapanmıştım, tamamen kendime olan güvenimi kaybetmiştim. Daha öncesinde 4 ayrı yere başvurdum. Ama hepsi de hüsranla sonuçlandı. İnternetten tedavi araştırmaya karar verdim ve Deniz Hanım\'ı buldum. Kendisi ile telefonla konuştuk. Son derece umutsuz olmama rağmen bir kez daha denemeye karar verdik. Kendisine çok teşekkür ediyorum ve herkese de tavsiye ediyorum. Allah herkesi doğru insanlar ile karşılaştırsın.',
    },
    {
      id: 3,
      name: 'Aysel C.',
      text: '4 sene önce geçirdiğim vajinal mantar rahatsızlığından sonra cinsel hayatımızda sorunlar ortaya çıktı. Yıllarca bir çözüm aradım. Gittiğim kadın doğum doktorları herhangi bir sorun olmadığını söylüyordu. Ancak cinsel ilişki sırasında aşırı kaygılanıyordum ve vajinamda yoğun bir ağrı oluyordu. Bir kadın doğum doktorunun tavsiyesi üzerine cinsel terapist araştırmaya başlamıştım ve Deniz hanımı buldum. Seanslara eşimle birlikte katıldık. Birkaç seansta fark edilir değişimler oldu. Şu an hiçbir sorun yaşamıyoruz. Gönül rahatlığı ile kendisine başvurabilirsiniz.',
    },
    {
      id: 4,
      name: 'Zeynep A.',
      text: 'Üniversite mezunu olmamıza rağmen şu ana kadar vajinismus diye bir şey duymamıştık. Gerek web sitesindeki güven verici bilgiler, gerekse daha sonra Nur Deniz Hanım\'la konuşarak aldığımız sıcak mesajlar sonucunda randevu alarak tedavilerimize başladık. Tedavilerde basit bir takım egzersizler veriliyor ve sizden uygulamanız bekleniyor. Aslında son derece basit ve kolay uygulamalar bunlar. En çok korktuğum şey ise canımın yanmasıydı. Korkumun ne kadar yersiz olduğunu tedaviye başladıktan sonra anladım. Birkaç seanstan sonra korkularınız ve kasılmalarınız tamamen azalıp kayboluyor. Şu anda eşimle mükemmel bir cinsel hayatımız var ve artık çocuk sahibi olmak istiyorum. Tüm yardımlarınız için çok ama çok teşekkür ederim.',
    },
    {
      id: 5,
      name: 'Hilmi H.',
      text: 'Nur Deniz Hanım ile çift terapisi olarak seanslarımıza başladık. İyi gitmeyen bir ilişkimiz vardı ve sürekli tartışan bir çifttik ve cinsel hayatımızda yolunda gitmiyordu. Aslında cinsel sorunların çift hayatımızı etkilediği ortaya çıktı. Seanslarımızı cinsel terapi üzerine yoğunlaştırdık. Var olan erken boşalma sorunuma çözüm bulunca cinsel hayatımızda düzelmeler başladı. Bu da çift ilişkimizin de düzelmesine neden oldu hem çift terapisi hem de cinsel terapi konusunda kendisini tavsiye ederim. Teşekkürler Nur Deniz hocam.',
    },
  ];

  const topics = [
    { icon: 'ri-heart-pulse-line', title: 'Cinsel İstek Sorunları', description: 'Düşük libido ve cinsel isteksizlik.' },
    { icon: 'ri-shield-user-line', title: 'Erken Boşalma', description: 'Cinsel performans ve özgüven.' },
    { icon: 'ri-heart-2-line', title: 'İlişki İçi Yakınlık', description: 'Duygusal ve fiziksel yakınlık sorunları.' },
    { icon: 'ri-mental-health-line', title: 'Vajinismus', description: 'Cinsel ilişkiye girememe.' },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-olive/5 via-transparent to-gold/5"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center space-x-2 bg-white border border-darkgray/20 px-4 py-2 rounded-full">
                  <i className="ri-heart-pulse-line text-olive"></i>
                  <span className="font-sans text-sm text-darkgray">Cinsel Danışmanlık</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  Antalya Cinsel Danışmanlık
                </h1>

                <p className="font-sans text-lg text-darkgray/70 leading-relaxed mb-2">
                  Cinsel Sağlık İçin Güvenli ve Profesyonel Destek
                </p>
                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  Cinsel sorunlar, bireylerin yaşam kalitesini ve ilişkilerini doğrudan etkileyebilir. Konuşulması zor gibi görünse de, profesyonel destek bu süreçte çok önemlidir. Arges Psikoloji olarak gizlilik ve güven ortamında psikolog desteği sunuyoruz.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://wa.me/905403251525"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-calendar-check-line"></i>
                    <span>Randevu Al</span>
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=1000&fit=crop&q=80"
                    alt="Cinsel Danışmanlık - Gizlilik Garantili Profesyonel Destek"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream rounded-2xl p-6 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-olive/20 rounded-2xl flex items-center justify-center mx-auto">
                    <i className={`${topic.icon} text-3xl text-olive`}></i>
                  </div>
                  <h3 className="font-sans text-lg font-bold text-darkgray">{topic.title}</h3>
                  <p className="font-sans text-sm text-darkgray/70">{topic.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-cream">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl font-bold text-darkgray mb-6">Profesyonel Cinsel Danışmanlık</h2>
            <p className="font-sans text-lg text-darkgray/70 mb-8">Psikologlarımız ile yaşam kalitenizi artırın.</p>
            <a href="https://wa.me/905403251525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full hover:bg-olive transition-all duration-300">
              <i className="ri-whatsapp-line"></i>
              <span>WhatsApp ile Randevu</span>
            </a>
          </div>
        </section>

        {/* Danışan Yorumları Section - Accordion Style */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-b from-white to-cream/50">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center space-x-2 bg-olive/10 border border-olive/20 px-5 py-2.5 rounded-full mb-6">
                <i className="ri-chat-heart-line text-olive text-lg"></i>
                <span className="font-sans text-sm font-medium text-darkgray">Danışan Deneyimleri</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-5">
                Gerçek Başarı Hikayeleri
              </h2>
              <p className="font-sans text-lg text-darkgray/60 max-w-2xl mx-auto">
                Cinsel terapi sürecinden geçen danışanlarımızın samimi paylaşımları
              </p>
            </motion.div>

            {/* Testimonials Accordion */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div
                    className={`bg-white rounded-2xl overflow-hidden border transition-all duration-500 ${
                      expandedId === testimonial.id
                        ? 'border-olive/30 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.12)]'
                        : 'border-darkgray/10 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:border-olive/20'
                    }`}
                  >
                    {/* Header - Tıklanabilir Alan */}
                    <button
                      onClick={() => setExpandedId(expandedId === testimonial.id ? null : testimonial.id)}
                      className="w-full p-6 flex items-center justify-between cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                          ['bg-gradient-to-br from-olive to-olive/80',
                           'bg-gradient-to-br from-gold to-gold/80',
                           'bg-gradient-to-br from-darkgray to-darkgray/80',
                           'bg-gradient-to-br from-olive/90 to-gold/70',
                           'bg-gradient-to-br from-gold/90 to-olive/70'][index % 5]
                        }`}>
                          <span className="text-white font-bold text-xl">
                            {testimonial.name.split(' ')[0][0]}
                          </span>
                        </div>
                        <div className="text-left">
                          <h3 className="font-sans text-lg font-semibold text-darkgray">
                            {testimonial.name}
                          </h3>
                          <div className="flex items-center space-x-3 mt-1">
                            <div className="flex items-center space-x-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <i key={star} className="ri-star-fill text-gold text-sm"></i>
                              ))}
                            </div>
                            <span className="text-xs text-darkgray/40">•</span>
                            <span className="inline-flex items-center text-xs text-olive font-medium">
                              <i className="ri-verified-badge-fill mr-1"></i>
                              Doğrulanmış
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-olive/10 text-olive text-xs font-medium">
                          <i className="ri-heart-pulse-line mr-1.5"></i>
                          Cinsel Terapi
                        </span>
                        <div className={`w-10 h-10 rounded-full bg-cream flex items-center justify-center transition-all duration-300 ${
                          expandedId === testimonial.id ? 'bg-olive text-white rotate-180' : 'text-darkgray/50 group-hover:bg-olive/10 group-hover:text-olive'
                        }`}>
                          <i className="ri-arrow-down-s-line text-xl"></i>
                        </div>
                      </div>
                    </button>

                    {/* Content - Açılır Alan */}
                    <AnimatePresence>
                      {expandedId === testimonial.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="pt-4 border-t border-darkgray/10">
                              <div className="relative">
                                <i className="ri-double-quotes-l text-5xl text-olive/10 absolute -top-2 -left-2"></i>
                                <p className="font-sans text-base text-darkgray/75 leading-relaxed pl-8">
                                  {testimonial.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AntalyaCinselTerapiPage;
