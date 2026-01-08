import { motion } from 'framer-motion';
import { useState } from 'react';
import Header from '../../../components/feature/Header';
import Footer from '../../../components/feature/Footer';
import WhatsAppButton from '../../../components/feature/WhatsAppButton';

const AntalyaCinselTerapiPage = () => {
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);

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
                  <span className="font-sans text-sm text-darkgray">Cinsel Terapi</span>
                </div>

                <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray leading-tight">
                  Antalya Cinsel Terapi
                </h1>

                <p className="font-sans text-lg text-darkgray/70 leading-relaxed mb-2">
                  Cinsel Sağlık İçin Güvenli ve Profesyonel Destek
                </p>
                <p className="font-sans text-base text-darkgray/60 leading-relaxed">
                  Cinsel sorunlar, bireylerin yaşam kalitesini ve ilişkilerini doğrudan etkileyebilir. Konuşulması zor gibi görünse de, profesyonel destek bu süreçte çok önemlidir. Arges Psikoloji olarak gizlilik ve güven ortamında uzman desteği sunuyoruz.
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
                    alt="Cinsel Terapi - Gizlilik Garantili Profesyonel Destek"
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
            <h2 className="font-serif text-4xl font-bold text-darkgray mb-6">Profesyonel Cinsel Terapi</h2>
            <p className="font-sans text-lg text-darkgray/70 mb-8">Uzman cinsel terapistimiz ile yaşam kalitenizi artırın.</p>
            <a href="https://wa.me/905403251525" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full hover:bg-olive transition-all duration-300">
              <i className="ri-whatsapp-line"></i>
              <span>WhatsApp ile Randevu</span>
            </a>
          </div>
        </section>

        {/* Danışan Yorumları Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-olive/10 px-6 py-3 rounded-full mb-4">
                <i className="ri-heart-3-fill text-olive text-xl"></i>
                <span className="font-sans text-sm font-medium text-darkgray">Danışan Deneyimleri</span>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-4">
                Cinsel Terapi Yorumları
              </h2>
              <p className="font-sans text-lg text-darkgray/70 max-w-2xl mx-auto">
                Cinsel terapi sürecinden geçen danışanlarımızın gerçek hikayeleri
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
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
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-cream rounded-3xl p-8 space-y-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${
                        ['bg-olive/80', 'bg-gold/80', 'bg-darkgray/70', 'bg-olive/60', 'bg-gold/60'][index % 5]
                      }`}>
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.split(' ')[0][0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-sans text-base font-semibold text-darkgray">
                          {testimonial.name}
                        </h3>
                        <p className="font-sans text-sm text-darkgray/60">
                          Cinsel Terapi
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <i key={star} className="ri-star-fill text-gold"></i>
                    ))}
                  </div>

                  <div>
                    <p className={`font-sans text-sm text-darkgray/80 leading-relaxed ${
                      expandedTestimonial === testimonial.id ? '' : 'line-clamp-6'
                    }`}>
                      "{testimonial.text}"
                    </p>
                    {testimonial.text.length > 300 && (
                      <button
                        onClick={() => setExpandedTestimonial(
                          expandedTestimonial === testimonial.id ? null : testimonial.id
                        )}
                        className="mt-3 font-sans text-sm text-olive hover:text-darkgray transition-colors cursor-pointer"
                      >
                        {expandedTestimonial === testimonial.id ? 'Daha az göster' : 'Devamını oku'}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-12"
            >
              <a
                href="/danisan-yorumlari"
                className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300"
              >
                <span>Tüm Yorumları Görüntüle</span>
                <i className="ri-arrow-right-line"></i>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AntalyaCinselTerapiPage;
