import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import WhatsAppButton from '../../components/feature/WhatsAppButton';

const TestimonialsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'child', name: 'Çocuk Danışmanlığı' },
    { id: 'teen', name: 'Ergen Danışmanlığı' },
    { id: 'individual', name: 'Bireysel Danışmanlık' },
    { id: 'couple', name: 'Çift Danışmanlığı' },
    { id: 'sexual', name: 'Cinsel Danışmanlık' },
  ];

  const testimonials = [
    // ÇOCUK DANIŞMANLIĞI
    {
      id: 1,
      name: 'G.Ç.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Kızım beş yaşındaydı ve tuvalet problemi ile gitmiştik. Bizim için sürekli tuvaletini etrafa yapması çok zordu. Aile olarak çok yıpranmıştık. Kendisine ilk olarak anne baba görüşmesi yapmak için gittik. Ne gerek vardı desek de en önemli kısım anne baba görüşmesiymiş aslında onu fark ettik süreçte. Danışmanlık sürecinde bizi hiç yalnız bırakmadı. Kızım zaten çok seviyordu kendisini gün sayardı hep. Seanslardan sonra yaptığı telefon görüşmeleri ise hem bize hem çocuğumuza çok iyi geldi. Kesinlikle öneririm kendisini.',
    },
    {
      id: 2,
      name: 'S.T.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Zorlayıcı bir dönemde gitmiştik Nezihi Hocaya. Kendisine tavsiye ile ulaşmıştık. 6 seans kadar devam ettik. Kızımın babası tarafından kafası karıştırılıyordu. Yaklaşımından ve sürecimizden çok memnun kaldık. Kesinlikle öneririm kendisini. Kendisi ile iletişime geçmekte zorlanmadık.',
    },
    {
      id: 3,
      name: 'K.L.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Nezihi Hocamı Google üzerinden araştırarak buldum. Dokuz seanstan fazla gitmişizdir. Kızımda anlam veremediğim bazı tekrarlı davranışları vardı ve kardeşine karşı tutumu beni kaygılandırıyordu. Sürecimizden çok memnun kaldık. Kızım büyük bir sevinçle gidiyordu çünkü Nezihi Hocayı çok seviyordu. Kızımda büyük bir iz bıraktı. Onu hiç unutmayacak. Daha iyi olabilirdi diyebileceğim bir şey yok çünkü her şey çok çok güzeldi.',
    },
    {
      id: 4,
      name: 'B.Y.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Nezihi Hocayı sosyal medya üzerinden buldum. Oğlum akran zorbalığına uğruyordu ve takıntıları vardı. Sorunlarını çok fazla ağlayarak ifade ediyordu. Zorbalık yüzünden de tırnak yemesi artmıştı. Kendisiyle ilerlettiğimiz danışmanlık sürecinden çok memnun kaldım. Kendisini öneririm.',
    },
    {
      id: 5,
      name: 'S.İ.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Kızımın kıyafet giyerken kol yenlerinin eşit olmadığı, külotlarının üzerinde istediği gibi durmaması vb. takıntıları vardı. Bu konulardan dolayı tutturup kavga çıkarıyordu. Aile olarak her gün günde bir veya iki kere kriz yaşıyorduk. Bağırıp çağırıyordum arkasından da pişman oluyordum. Bu sıkıntılı süreci tek başıma atlatamayacağımı anladığımda destek almaya karar verdim. 10 ay sürdü. Memnun kaldım. Kesinlikle tavsiye ederim.',
    },
    {
      id: 6,
      name: 'E.Ü.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Büyük travmalarla geldik. Oğlumun bacaklarına kaynar su döküldü, sonrasında kardeşini kaybetti. Daha sonraları iki parmağı koptu. Dikildi ancak tutmadı. Bu dönemde ben de çok öfkelendim, sinirlendim. İster istemez oğluma da yansıdı bu durum. Arkadaşımın vesilesi ile Nezihi Ünal ile tanıştım. Kendisinin emeği çok büyük üzerimizde. Danışmanlık süresi 6 ay sürdü ve yavaş yavaş değişimleri görmek beni çok mutlu etti. Çok memnun kaldım. Minnettarım kendisine, ne yapsam hakkını ödeyemem.',
    },
    {
      id: 7,
      name: 'A.K.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Oğlumun okulda göstermiş olduğu bazı davranışlarından dolayı merkezinize başvurduk. Oğlumun özgüvenli olmasını, güç kontrolü, arkadaşları ve öğretmeniyle başarılı diyalog kurmasını istiyordum. Eşimin bana tavsiyeleri ve internetten araştırma yaparak karar verdik. İlk başlangıç sürecinde başarı yavaş ilerledi ama 1 ay geçtikten sonra artan oranda pozitif sonuç almaya başladık. Süreç 6 ay sürdü. Artan oranda başarılıydı. Tavsiye ediyoruz, memnun kaldık.',
    },
    {
      id: 8,
      name: 'H.F.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Sorunumuz oğlumun agresif davranışlar sergilemesi, sinirli oluşu, bazı takıntılı davranışlarıydı. Süreci kendimizin çözemeyeceğini anladık ve destek almaya karar verdik. Süreç 8 ay sürdü. Birlikte Nezihi hocamız ile sürece devam ettik ve yapmamız gerekenleri ondan öğrendik. Sorunumuz çözüldü. Oğlumuz normal davranışlar sergilemeye başladı. İyileşti. Kesinlikle başkalarına da tavsiye ederim.',
    },
    {
      id: 9,
      name: 'H.Y.',
      category: 'child',
      service: 'Oyunla Danışmanlık',
      rating: 5,
      text: 'Değerli hocamdan destek almaya 3,5 yaşındaki oğlumun öfkeli ve agresif davranışlarıyla başa çıkamadığım, kendimi çok çaresiz ve yetersiz hissettiğim bir dönemde karar verdim. Oğlum, öfke patlamaları her geçen gün artan, yaşıtlarıyla bile anlaşamayan bir çocuk olmuştu. Oyunla yürütülen danışmanlık süreciyle 4 ay gibi kısa bir sürede oğlum yaşadığı travmaların etkisinden kurtulup daha sakin, mutlu ve uyumlu bir çocuğa dönüştü. Değerli hocama minnettarım.',
    },
    {
      id: 10,
      name: 'N.P.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Beş yaşındaki oğlumun öfke nöbetleri ve korkuları vardı. Korkuları gün geçtikçe artmaya ve daha şiddetli olmaya başlamıştı. Okulda da birkaç problem yaşadıktan sonra internette araştırmaya başladım ve Psikolog Nezihi Ünal\'ı tercih ettim. Kesinlikle doğru bir tercih yaptığımı ilk seanstan sonra anladım. Çok kısa bir sürede oğlumdaki değişiklikler muhteşemdi. Nezihi Ünal size çok teşekkür ediyoruz, iyi ki sizi tanımışız.',
    },
    {
      id: 11,
      name: 'N.K.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Oğlum hırçın, agresif, mutsuz bir çocuktu ve bu beni çok üzüyordu. Nasıl davranacağımı bilemiyordum. Psikoloğumuz sayesinde nasıl davranmam gerektiğini ve onu nasıl mutlu edebileceğimi öğrendim. Süreç boyunca her daim yanımızda oldular. Güler yüzlü ve gayet samimi bir ortamdı. Yaklaşık 5-6 ay sürdü. Bu kurumu başkalarına tavsiye ederim. Çünkü olaylara bakış açınız değişiyor ve daha farklı şekilde düşünmeye başlıyorsunuz.',
    },
    {
      id: 12,
      name: 'Veysel T.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Psikoloğumuza internet aracılığıyla ulaştım. 5 yaşındaki kızım için alt ıslatma ve parmak emme şikâyetlerimiz için başvurduk. Yaptığımız ilk görüşmede bu davranışlarının sebeplerini ve çocuğumuzda problem oluşturabilecek noktaları öğrendik. Farkında olmadan bu davranışları desteklediğimiz davranışlar ve doğru bildiğimiz yanlışlar varmış. Seanslarımız hala devam ediyor ve olumlu gidişatı görebiliyoruz. Bir baba olarak benzer problem yaşayan ailelere psikolojik destek almalarını öneriyorum.',
    },
    {
      id: 13,
      name: 'A.N.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: '8 yaşında bir oğlumuz var. Oğlum inanılmaz agresif, hiperaktif bir çocuktu. Neredeyse her gün okulda arkadaşlarıyla kavga ediyordu. Bize karşı çok öfkeliydi. Artık şikâyet duymamak için okula gitmek, bir veliyi dahi görmek istemiyordum. Gayet güler yüzlü, samimi ve sıcak bir psikolog. Bize verdiği güven duygusu sayesinde sıkılmadan çekinmeden her şeyi anlatabiliyorsunuz. Anlattıkça çocuklarımızı farkında olmadan ne kadar ihmal ettiğimizi öğrendik. Biz Nezihi Hocadan çok memnun kaldık.',
    },
    {
      id: 14,
      name: 'E.D.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Eşimle birkaç ay önce boşandık ve 9 yaşında bir kızımız var. Kızımızın içine kapanık olması, kendi yaşıtlarıyla bile oynayamaması, ders başarısının düşmesi, okulda sosyalleşememesi gibi problemleri vardı. Son zamanlarda tırnak yeme, tek başına uyuyamama, geceleri ağlayarak uyanma gibi sorunlar da başlamıştı. İlk seanstan beri çocuğuma ve bize çok olumlu ve samimi yaklaştı. Yaptığı testler, uyguladığı oyunla danışmanlık seansları sonrasında bizim küçük dünyamızda harika değişimler olmaya başladı. Kendisine çok şey borçluyum.',
    },
    {
      id: 15,
      name: 'Z.S.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Yaklaşık 10 aydır oğlumun okul fobisini yenmeye çalışıyorduk. Sınıfta geçirdiği kaza ile bu sorun iyice büyüdü. Her gün okula giderken neredeyse okul kelimesini duyunca ağlama krizleri başlamıştı. Bir yerden sonra artık şımarıklık yaptığını düşünmeye başladık. Kendisi çocuğun dilinden çok iyi anlıyor ve bize de onu öğretti. Oğlumun amacı bize eziyet etmek değilmiş, biz tabloyu yanlış okuyormuşuz. Takıldığınız, sıkıştığınız yerde destek alabileceğiniz güler yüzlü, samimi bir insan.',
    },
    {
      id: 16,
      name: 'B.Y.',
      category: 'child',
      service: 'Oyunla Danışmanlık',
      rating: 5,
      text: '8 ay önce doğum yaptım. Büyük kızım ise 5 yaşında. Kızım kardeşi evimize geldiğinden beri mutsuzdu, kardeşini bir türlü sevemiyordu, bebeksi hareketler yapmaya başlamıştı. Kızım ile oyunla danışmanlığa başladı. Bir yandan kızımla ilgilenirken bir yandan bize nelerle karşılaşabileceğimiz, nasıl davranmamız gerektiğini öğretti. Kızımın söylediklerinin değil de asıl söylemek istediklerinin ne olduğunu hocamızın destekleriyle fark ettik. Kendisine ilgisi ve samimiyeti için çok teşekkür ediyorum.',
    },
    {
      id: 17,
      name: 'Y.Ö.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Kızım 5 yaşında ve anasınıfı öğrencisi. Bir süre önce olur olmadık şeylerden korkmaya başlamıştı. İlerleyen günlerde arkadaşlarına vurmaya ve öğretmenine sorunlar yaşatmaya başladı. Okuldaki öğretmenimizin yönlendirmesiyle bir pedagoga gitmeye karar verdik. Kısa sürede faydasını görmeye başladık. Kızımla oynadıkları oyunlar bize kısa sürede ilaç gibi geldi. Psikoloğumuzun güler yüzü, cana yakınlığı, samimiyeti, bize güven vermesi, her şeyden önce kızımızın kalbine dokunuşu bizi çok mutlu etti.',
    },
    {
      id: 18,
      name: 'M.N.',
      category: 'child',
      service: 'Oyunla Danışmanlık',
      rating: 5,
      text: 'Eşimle bir süre önce boşanma kararı almıştık. Boşanma aşamasında oğlumun gözlemlenmesi ve oluşabilecek sıkıntılara karşı önlem alabilmek amacıyla Nezihi Hocayla görüşmeye karar verdim. O sıcaklığı ve enerjisini görür görmez fark ediyorsunuz zaten. Hem mesleğini hem de çocukları çok seven bir psikolog. İlk tanışmanızda anlayabiliyorsunuz. Güler yüzlü, sevecen ve içten olması benim için çok önemliydi. Kullanmakta olduğu oyunla danışmanlık yöntemi de gayet başarılı.',
    },
    {
      id: 19,
      name: 'E.Y.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Nezihi Hoca ile internette yaptığım araştırmalar sonucunda iletişime geçtim. Oğlumun bir süredir devam eden takıntılı davranışları vardı. Okuldaki rehberlik öğretmeni bir psikologla görüşmemizi önerdi. İlk seansta hem bizimle hem oğlumuzla görüştü. Danışmanlık sürecine başladık. Şu an ilk başladığımız duruma göre çok fazla ilerleme kaydettik. Birçok takıntısı azaldı. Deniz Hanım oğlumuzla alakalı çok özverili ve sevecen davrandı. Teşekkür ederiz.',
    },
    {
      id: 20,
      name: 'A.S.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Büyük kızım 10 yaşında. Son iki üç yıldır ciddi iletişim problemleri yaşıyorduk. Gitgide hırçınlaşan, öfkeli bir çocuk olmaya başlamıştı. Okulunda da sorunlar yaşamaya başladı, başarısı ciddi anlamda düştü. Sosyal medyada araştırırken Nezihi Hoca dikkatimi çekti. Zorla götürdüğüm çocuk bir süre sonra koşa koşa gitmeye başladı. Sürekli iletişim halindeyiz ve bana da ne yapmam konusunda çok güzel tavsiyelerde bulunuyor. Henüz danışmanlık sürecimiz bitmemesine rağmen, kızımda çok güzel değişimler görüyorum. Herkese tavsiye ederim.',
    },
    {
      id: 21,
      name: 'E.Y.',
      category: 'child',
      service: 'Oyunla Danışmanlık',
      rating: 5,
      text: '7 yaşındaki kızım her şeyi ağlayarak istiyordu. Sürekli mutsuz ve her şeye mızmızlanan bir çocuktu. Taşınmamız, okulunun değişmesi gibi olaylardan sonra bunlar daha da arttı. Çocuklarla çok güzel iletişim kurabilen, onları tedirgin etmeden korkutmadan yaklaşan, mesleğinde oldukça başarılı olduğunu düşündüğümüz bir psikolog. İlk birkaç seans yenemeyiz gibi geldi ama bittiğinde her şey normal bir hal aldı. Yemek problemimiz de birlikte yaptığımız çalışmalarla büyük ölçüde çözüldü. Bu süreçte bize verdiği destek ve cesaret için kendisine çok teşekkür ediyoruz.',
    },
    {
      id: 22,
      name: 'K.M.',
      category: 'child',
      service: 'Oyunla Danışmanlık',
      rating: 5,
      text: 'İnternet üzerinden araştırdık ve kendisiyle ilgili olumlu yorumlara ulaştık. İlkokuldaki çocuğumuzun kaygı sorunu vardı ve destek almaya karar verdik. Çok çekingen bir çocuk olmasına rağmen psikoloğumuza hemen ısındı ve anlaştılar. İletişimi güzel, samimi ve ebeveynlere olan desteği çok memnun bırakıyor insanı. Oyunla danışmanlıktan ve süreçten bahsetti. Çocukla ilgilenirken bir yandan da bizi eğitti diyebilirim. Çocuğumuz şimdi daha rahat. Her şey için çok teşekkürler.',
    },
    {
      id: 23,
      name: 'B.Y.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: '7 yaşındaki oğlumun alt ıslatma problemi vardı. Bulunduğumuz ildeki psikologları araştırdık ama içimize sinmedi biz de Antalya\'yı araştırmak istedik ve Nezihi Hoca\'dan destek almaya karar verdik. İyi ki de gitmişiz. Çok samimi ve işini iyi yapan bir psikolog kendisi. Çok da uzun sürmeyen bir süreç oldu ve sorunumuzu hallettik. Bundan sonra zorlandığımız herhangi bir konuda hemen başvurmayı düşünüyoruz kendisine.',
    },
    {
      id: 24,
      name: 'E.Ş.',
      category: 'child',
      service: 'Oyunla Danışmanlık',
      rating: 5,
      text: '4 yaşındaki kızım için danışmıştık kendisine. Kızımı kreşe bırakmak isteyince aşırı hırçın, öfkeli, söz dinlemeyen bir çocuk oluyordu. Bir arkadaşımızın tavsiyesi ile Nezihi Ünal\'dan randevu aldık. Çok yardımcı oldu. Bizim yaptığımız hataları anlattı. Neden böyle davrandığını, temelinde neler olabileceğini ve nasıl ilerlememiz gerektiğini çok açık anlaşılır bir dille aktardı bize. Oyunla danışmanlığa başladık ve çok şükür şu an uyum ve ayrılma konusunda bir problem yaşamıyoruz.',
    },
    {
      id: 25,
      name: 'F.Ş.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Eşimle anlaşamadık ve boşanma sürecine girdik. 9 yaşındaki kızım için bu süreç çok zorlu geçti elbette. Velayet davası da işin içine girince var olan endişesi iyice arttı. Ne yapacağımızı bilemedik. Önce bir psikiyatriste götürdük ama ilaç tedavisi işe yaramadı. Psikiyatristimizin yönlendirmesi ile Nezihi Hocam\'dan danışmanlık desteği almaya karar verdik. Seanslara devam ederken bile kızımdaki kaygı düzeyinin azalışı ve sürecin gidişatı bizi çok memnun etti. Her zaman hiç tereddütsüz herhangi bir problem olursa gideceğim kişidir kendisi.',
    },
    {
      id: 26,
      name: 'D.Ç.',
      category: 'child',
      service: 'Oyunla Danışmanlık',
      rating: 5,
      text: '3 yaşındaki oğlum için başvurduk kendisine. Hırçın ve öfkeli bir çocuktu. Babasından bile nefret etmeye başlamıştı. Nerede yanlış yaptığımızı aradık durduk sürekli. Akrabamızın önerisi ile Nezihi Ünal\'a ulaştık. Nezihi Hocam süreçte biraz zorlanabileceğimizi söylediğinde kendimi uzun bir sürece hazırlamıştım. Ama kısa zamanda epey yol kat ettik. Oyunla danışmanlık oğluma çok iyi geldi. Kesinlikle başarılı bir psikolog. Onun önerilerini uyguladığımda oğlumdaki değişime inanamadım. Her şey için teşekkürler.',
    },
    {
      id: 27,
      name: 'P.S.',
      category: 'child',
      service: 'Oyunla Danışmanlık',
      rating: 5,
      text: 'Bir sene önce doğum yaptım. Doğumdan sonra 4,5 yaşındaki oğlumla sıkıntı yaşamaya başladık. Bana karşı çok agresif olmaya, saldırgan ve hırçın bir tutum sergilemeye başladı. İlk seansta karşımda sempatik ve işini severek yapan bir insan görmek beni çok mutlu etti. Bize oyunla danışmanlıktan bahsetti ve başladık. Oğlumun psikoloğumuza karşı tavırlarıydı. Oğlum her seansa isteyerek, seve seve gitti. Sonuçtan çok memnun kaldık. İhtiyacı olan herkese tavsiye ederim.',
    },
    {
      id: 28,
      name: 'S.G.',
      category: 'child',
      service: 'Oyunla Danışmanlık',
      rating: 5,
      text: 'Biz 8 yaşındaki kızımız için kendisiyle görüştük. Kızım çok içe kapanıktı. Bizimle konuşurken bile zar zor göz teması kuruyor, yeni yerlere alışması ve uyum sağlaması çok uzun zaman alıyordu. İnternet üzerinden Nezihi Ünal\'ı bulduk. Aşırıya kaçan bu durumun nedenlerini anlamak ve daha etkili bir süreç sağlamak için çocukla bizim aramızda mekik dokudu resmen. Oyunla danışmanlık ile kızıma, verdiği değerli bilgiler ile bize çok yardımcı oldu. Allah razı olsun kendisinden.',
    },
    {
      id: 29,
      name: 'L.K.',
      category: 'child',
      service: 'Oyunla Danışmanlık',
      rating: 5,
      text: 'Yakın zamanda 5 yaşındaki oğlum için Nezihi Hocam\'dan psikolojik destek aldık. Yaklaşık bir yılı oğlumun çeşitli sağlık sorunları nedeniyle sürekli hastanede geçirdik. Bir süre sonra oğlumda ciddi bir öfke nöbeti ve ağlama krizleri başladı. Psikoloğumuz bizimle ve oğlumuzla görüştükten sonra oyunla danışmanlığa başladık. Sayesinde bizim çok önemsemediğimiz şeylerin oğlumuzu ne kadar üzdüğünü ve kırdığını anladık. Kendisine minnettarız ve herkese tavsiye ederiz.',
    },
    {
      id: 30,
      name: 'A.Ç.',
      category: 'child',
      service: 'Çocuk Danışmanlığı',
      rating: 5,
      text: 'Nezihi Hocam\'ı çocuğunuz varsa tanımanızı isterim. Özel durumumu burada belirtmek istemiyorum. Ama çocuğumla alakalı önemli bir sıkıntı yaşadım. Gittiğim bazı doktorlar ilaç tedavisi önerdi. Yaşı küçük olduğu için ilaç kullanmasına içim elvermedi. Bir de psikologla görüşmek istedim. Neyse ki Nezihi Hocam ile yollarımız kesişti. Kendisini tanıdığıma çok memnunum. Her şey için teşekkürler.',
    },

    // ERGEN DANIŞMANLIĞI
    {
      id: 31,
      name: 'Ü.K.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: 'Nezihi Hocaya Google üzerinden ulaştım. 17 yaşımdayım. Depresyondaydım sürece başladığımda. 8 seans kadar kendisine devam ettim. Kendisinden memnun kaldım. Kendisini öneriyorum etrafımda ihtiyaç duyanlara. Bana çok yardımcı oldu. Empatisi güler yüzü ve her konuda gösterdiği şefkati bana çok iyi geldi.',
    },
    {
      id: 32,
      name: 'C.A.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: 'Google\'daki araştırmalarım sonucunda kendisine ulaştım. Sınav sürecim konusunda endişelerim vardı. Stresimi yönetmekte zorlanıyordum. Sınav dönemimde yardım almamın daha doğru olacağını düşündüm. Danışmanlık sürecimiz acı tatlı bir şekilde ilerledi. Bazen üzdü ama çoğu zaman iyileştirdi. Sürecimden memnundum. Kendisini öneririm ve her şey için teşekkürler.',
    },
    {
      id: 33,
      name: 'D.Ş.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: 'Google üzerinden yaptığım araştırmalar sonucunda Nezihi Hocama ulaştım. Hayatımda problem yaşadığım kısım her şeyi çok problem edişimle ilgiliydi ve bu bana değersiz hissettiriyordu. Telefonla randevu aldığımızda verilen bilgilerin tatmin ediciliği ve sıcak bir ortam oluşundan dolayı devam ettim. Kendisinden çok memnun kaldım ve bana çok destek oldu. Çok sıcakkanlı, güvenilir ve en önemlisi empati yapabilen bir insan.',
    },
    {
      id: 34,
      name: 'P.T.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: 'Kendisine tavsiye ile ulaşmıştım. Sorun yaşadığım kısım anksiyete ile ilgiliydi. Dışarıya dahi çıkamıyordum. Artık dayanamaz hale gelmiştim ve bir denemekte fayda var dedim. Danışmanlık almaya karar verdim. Sürecim bazı nedenlerden dolayı kısa sürse de etkisi oldu. Kendisini tavsiye ederim.',
    },
    {
      id: 35,
      name: 'C.G.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: 'Topluma girememek, kalp çarpıntısı, gece titremeleri, mide bulantısı, baş ağrısı, arkadaş ortamına girmekte zorlanıyordum. Ailemle etkinliklere katılamıyordum. Annemin önerisi sayesinde destek almaya karar verdim. 6 seans sürdü. Süreç gayet güzel ilerledi. Sorunlarımı bir bir ortadan yok etti. Danışmanlık sürecinden memnun kaldım. Herkese tavsiye ediyorum.',
    },
    {
      id: 36,
      name: 'E.P.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: 'Psikoloğumuza oğlumun sınavla ilgili korkuları için başvurduk. Oğlum üniversite sınavına hazırlanıyordu. Gece gündüz ders çalışıyordu. Dışarı çıkmıyordu, arkadaşı yoktu, evde bizimle devamlı kavga ediyordu. Başaramamakla ilgili çok büyük korkuları vardı. Geçirdiği süreç çok iyi geldi hepimize. Oğlum sınava çalışmaya devam ediyor ama Nezihi Hocam sayesinde artık ne istediğinden emin. Ve başaracağına inanıyor.',
    },
    {
      id: 37,
      name: 'T.A.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: '16 yaşındaki kızımız aşırı derecede içine kapanıktı. Birkaç arkadaşı dışında kimseyle bir şey paylaşmıyordu. Ev ortamında ise tam tersi devamlı bağırıyordu, bizimle sadece kavga halinde iletişim kuruyordu. Bir süre sonra davranışları kendine zarar veren bir hal almaya başladı. Uygulayacağı yöntemleri ve nasıl ilerleyeceğini hem bize hem de kızımıza çok güzel bir şekilde ifade etti. Samimiyeti, iletişimi, bizi sürekli bilgilendirmesi ve sonuç odaklı ilerlemesi bizi çok memnun etti.',
    },
    {
      id: 38,
      name: 'H.L.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: 'Oğlumun rehber öğretmeni yönlendirdiği için gitmiştik. Öğretmeni sınıfta derse dikkatini veremediğini, odak problemi yaşadığını söylemişti. İlaç tedavisine ek olarak danışmanlığa da başladık. Çok güzel ilerleme kaydettik. Seanslara halen devam ediyoruz ve şu an durumumuzdan gayet memnunum. Aynı şekilde oğlum da memnun. Etrafımda sorun yaşayan anne babalara da tavsiye ediyorum.',
    },
    {
      id: 39,
      name: 'P.A.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: 'Sınav kaygım için psikoloğa gitmek istedim. Ne yapsam bu konunun üstesinden gelemedim. Benim için korkunç bir hal almaya başlamıştı. Sınav aklıma gelince bile nefesim daralıyordu, kalp atışlarım hızlanıyordu. Nezihi Ünal\'a gitmeye karar verdim. Güler yüzlülüğü, empatisi ve detaylı açıklamaları ile seanslarımızdan çok verim aldım. Birlikte yaptığımız çalışmalarla artık kaygılarımı kabulleniyorum, kontrol edebiliyorum. Benzer sorunları yaşayan insanlara tavsiye ederim.',
    },
    {
      id: 40,
      name: 'L.T.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: 'Ergenlik çağındaki kızımın son zamanlarda artan sık sık el yıkama ve bazı takıntılı davranışları vardı. Arkadaşımın tavsiyesi ile Nezihi Ünal\'ı araştırdık. Eğitimleri ve danışan yorumları içimize sindi. Çok tatlı ve cana yakın bir insan kendisi. Bu yüzden kızım da hemen alıştı. Sürecin sonucundan hepimiz memnun kaldık. Ne kadar teşekkür etsem az kendisine. Çocuğu için destek almak isteyen herkese tavsiye ediyorum.',
    },
    {
      id: 41,
      name: 'E.Y.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: '17 yaşındayım ve kendimi bildim bileli özgüven problemi yaşıyordum. O kadar zordu ki benim için yapabileceğim birçok aktiviteyi, derslerimi yapamamaya başlamıştım. Bu özgüven sorunu beni içe kapanık bir insan haline getirdi. İnternetten araştırdım Nezihi Ünal\'dan bir randevu aldım. Danışmanlık sürecine başladık ve şimdi gayet rahat ve mutluyum. Travmalarım üzerinde çalıştık ve süreçte benimle sürekli iletişim halindeydi. İyi ki gitmişim.',
    },
    {
      id: 42,
      name: 'Z.Ü.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: 'Kızımın öfke patlamaları lise 2\'de başladı. Normalde sorun olmayan ufak tefek konularda bile aşırı tepkiler vermeye başlamıştı. İlk başta bunun ergenlikle alakalı olduğunu düşündük ancak bizimle ve arkadaşlarıyla iletişimini de kesince bir destek almak istedik. Bir akrabamızın tavsiyesiyle kendisinden randevu aldık. Şimdiden ailece büyük bir yol kat ettik. Gerekli gördüğü durumlarda bizimle de görüşmeler yaparak yanlışlarımızı düzeltmemizi sağladı. Her şey için çok teşekkürler.',
    },
    {
      id: 43,
      name: 'F.Ü.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: 'Görev yerimiz dolayısıyla ilçede yaşıyoruz. Oğlum şehir merkezinde güzel bir lise kazandı. Ancak eve geldikçe fark etmeye başladık ki oğlum içine kapanmaya başladı. Meğer sosyal fobisi varmış ve bu fobi onu gündelik hayatında çok etkilemeye başlamış. Bize nasıl yaklaşmamız gerektiği yönünde destek sağlarken oğlumla birlikte çalışmaya başladılar. Şimdi kalabalıkta daha rahat ve ders ortamında daha aktif. Her şey için teşekkürler.',
    },
    {
      id: 44,
      name: 'S.L.',
      category: 'teen',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Lise yıllarımda yaşadığım sorunlardan sonra topluluk önünde konuşmak beni hep korkutuyordu. Topluluk önünde konuşma düşüncesi bile bende kalp çarpıntısı, nefes darlığı, titremeye neden oluyordu. İnsanlarla birebir konuşurken de sıkıntı yaşamaya başlamıştım. Bir akrabamın tavsiyesi ile Nur Deniz hanımı araştırdım. Deniz Hanım\'ın anlayışlı ve destekçi tavrı ile kendimi ifade edebildim. Sayesinde aslında korkularıma neden olan şeylerin çocukluğuma kadar uzadığını fark ettim. Her şey için teşekkürler hocam.',
    },
    {
      id: 45,
      name: 'F.A.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: '17 yaşındayım ve lise son öğrencisiyim. Bu sene üniversite sınavına hazırlanıyorum. Kendimi bildim bileli dikkat sorunum hep vardı. Aileme ne kadar zorlandığımı anlattım ve destek almak istediğimi söyledim. Detaylı şekilde konuştuktan sonra bana danışmanlık sürecinden bahsetti. Seanslarda hem dikkat eksikliğimi hem de sınav stresimi çalışmaya başladık. Çalışmaların yanı sıra benimle konuşması, beni anladığını hissettirmesi kendime olan güvenimi yeniden kazanmamı sağladı. Her şey için çok teşekkür ederim.',
    },
    {
      id: 46,
      name: 'S.G.',
      category: 'teen',
      service: 'Ergen Danışmanlığı',
      rating: 5,
      text: '16 yaşında bir lise öğrencisiyim. Kendimi yalnızlaştırmıştım. Okul başarım ciddi anlamda düşmüştü. Ailem de bu durumdan korkmaya başlamıştı. Bu yüzden ablam Deniz Hanım\'dan randevu aldı. Başlarda gitmek istemedim. Çünkü ne anlatacağımı bilmiyordum. Deniz Hanımla görüştükten sonra düşüncelerim yavaş yavaş değişmeye başladı. Bana güven vermesi, beni gerçekten dinlemesi ve verdiği öneriler benim için çok değerli. Değişimlerin herkes farkında. Ama en önemlisi ben kendimi artık iyi hissediyorum.',
    },

    // BİREYSEL DANIŞMANLIK
    {
      id: 47,
      name: 'Y.V.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Deniz Hanım\'a sosyal medya üzerinde ulaştım. Ortalama 8 seans görüştük. İlişkimle alakalı kıskançlığım beni zorluyordu ve her şeyi gereğinden fazla sorguluyordum. Artık bazı durumların bana ve hayatıma zarar verdiğini fark edip destek almaya başladım. Danışmanlık sürecim çok güzel ilerledi ve çok güzel sonuçlar aldım. Benim için çok güzel bir deneyimdi. Deniz Hanım\'ın ilgisi ve anlayışı daha da güzeldi.',
    },
    {
      id: 48,
      name: 'F.C.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Bunalım ve boş vermişlik vardı üzerimde. Danışmanlık süreciyle ilerleyerek sorunlarımı aştım. Çok kıymetli ve değerli bir yol arkadaşlığıydı. Kendisine çok teşekkür ediyorum ve kariyerinde başarılar diliyorum.',
    },
    {
      id: 49,
      name: 'B.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Ben Deniz Hanım\'a OKB nedeni ile başvurdum. Pandemi sürecinden çok etkilenmiştim. Dışarı çıkamayacağım ve hareket edemeyeceğim kadar etkilendim. Daha sonra Deniz Hanım\'la çalışmaya başladık. Kendisi her zaman çok anlayışlı oldu. Bu hastalığı atlatabileceğim konusunda bana güven verdi. Seanslarım halen devam ediyor ama büyük oranda eski takıntılarımı aşmış durumdayım. Kendisi çok sabırlı, anlayışlı ve sakin düşünceli ince bir insan.',
    },
    {
      id: 50,
      name: 'T.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Bende biraz kaygı vardı, kaygı üzerine gittim Deniz Hanım\'a. Yaklaşık 3 ay kadar çalışma fırsatımız oldu. Kendisinden çok memnun kaldım. Kaygıdan dolayı gitmek isteyenlere tavsiye ederim. Hayata bakışım değişti. O zaman gittiğim durumla şu anki durum arasında çok fark var. Dışarı çıkarken başıma bir şey gelecek diye çok korkuyordum.',
    },
    {
      id: 51,
      name: 'R.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Bende panik atak var, bir de sınav süreci geçiriyorum. Hepsi tetikliyordu beni. Beni dinliyor, yardımcı oluyor. Danışan odaklı. Birlikte yaptığımız çalışmalardan çok memnun kaldım. Dinliyor, bana iyi geliyor. Süreci atlatmamda yardımcı oldu. Stresim biraz daha azaldı, kendimi daha iyi hissediyorum.',
    },
    {
      id: 52,
      name: 'Z.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Kendisi çok duyarlı bir psikolog. Dikkatli bir şekilde dinliyor ve güzel yönlendiriyor. Bende olumlu yönde çok güzel ilerleme kaydettik. 3 ayda epeyce yol katettik. Gittiğim dönemde çıkmazdaydım. Kendimle ve eşimle ilgili problemlerimi çözdük. Ailemle ve kendimle kaliteli vakit geçirebiliyorum. Kendimi dinleyebiliyorum artık.',
    },
    {
      id: 53,
      name: 'A.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Ben kendisinden çok memnun kaldım. Aldatılma yaşamıştım ve çok sıkıntılıydım. Kendisine başvurdum ve gayet güzel sonuçlar elde ettim. Tavsiyelerinden memnun kaldım ve şu anda çok daha iyiyim. En azından eski sıkıntı ve üzüntülerim kalmadı. Hayata daha olumlu bakıyorum. Konuşmalarının üzerimde olumlu etkisi oldu. Dinlemesi de çok önemliydi.',
    },
    {
      id: 54,
      name: 'E.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Ben gayet memnun kaldım, benim için gayet güzel bir süreçti. Görüşme sürecimizde epeyce ilerleme oldu, sıkıntılarım çoktu ama bana çok iyi geldi. Şu anda kendimi daha iyi hissediyorum. Benim belirli sıkıntılarım vardı, uykularım düzensizdi. Toplum içinde oturup konuşamıyordum. Nur Hanım\'ın desteği bana iyi geldi, artık gayet rahatım.',
    },
    {
      id: 55,
      name: 'F.T.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Uzun bir süredir ne olduğunu anlayamadığım ama içinden çıkamadığım bir ruh hali içindeydim. Eskiden yapmaktan hoşlandığım şeyleri bile yapasım gelmiyordu. Ancak Nur Deniz Hanım beni oldukça sıcak karşıladı. Konuştukça sizi yargılamadığını ve gerçekten anlaşıldığınızı hissediyorsunuz. Bana danışmanlık sürecinden bahsetti. Hissettiğim sıkıntılarla ilgili farkında bile olmadığım nedenleri görmemi sağladı. Süreç devam ettikçe bende ne kadar büyük bir değişim olduğunu fark ettim.',
    },
    {
      id: 56,
      name: 'G.Ç.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: '23 yaşındayım ve hayatım boyunca farklı takıntılarım oldu. Bu sorunu erteledikçe daha da artarak ilerledi. Devamlı her yeri temiz tutmaya çalışıyordum. Bu bir süre sonra beni çok yıpratmaya başladı. Ne kendime ne işime ne de aileme zaman ayıramaz hale geldim. Nur Deniz Hanım ile danışmanlığa başladık. Hem seanstaki anlayışlı ve anlattıklarınızı saygıyla dinleyen yaklaşımı hem de kullandığı teknikler ile takıntılarım azalmaya başladı.',
    },
    {
      id: 57,
      name: 'F.P.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Yaklaşık 4 ay önce eşimin beni defalarca aldattığını öğrendim. Benim için büyük bir yıkımdı. İlk birkaç hafta evden çıkmadım ve devamlı ağladım. Daha sağlıklı düşünebilmek için bir psikoloğa gitmeye karar verdim. Deniz Hanım ilk seansta oldukça güler yüzlü ve samimi bir şekilde karşıladı. Beni sabırla dinledi. Günlük hayatımın eski düzenine dönmesi için çok destekleyici ve motive edici konuşmalar yaptı. Deniz Hanımın bu süreçte üzerimdeki emeği çok büyüktür.',
    },
    {
      id: 58,
      name: 'B.G.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Geçmişte yaşadığım bazı olumsuz olaylar beni hala rahatsız etmeye devam ediyordu. Kendimi tutamıyordum. Eski olaylar üzerinden zaman geçmesine rağmen hep aklımdaydı sanki. Bir arkadaşımın tavsiyesi üzerine kendisinden randevu aldım. Benim için zor bir süreçti, çok ağlayan biriydim. Ağlama nöbetlerim son buldu. Sizi sonuna kadar dinliyor ve sizi anladığını hissediyorsunuz. Kendisinden çok çok memnunum.',
    },
    {
      id: 59,
      name: 'K.T.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: '3 yıl önce iflas etmemle başlayan sıkıntılarım artık tahammül edemeyeceğim bir hal almıştı. Maddi sorunlar, işle ilgili sıkıntılar devamlı kafamda dönüp duruyordu. Bir süre sonra kendi içime kapandım. İşe gitmek, dışarı çıkmak istemiyordum. Çocuklarımın artık benden korktuklarını fark ettiğimde bunu düzeltmem gerektiğini anladım. Destekleyici ve anlayışlı tavrı bana cesaret veriyor. Hayatım yoluna girmeye başladı. Eşim ve çocuklarımla eskisi gibi keyifli vakit geçirebiliyorum.',
    },
    {
      id: 60,
      name: 'S.K.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'İki buçuk sene önce bir uçak yolculuğu sırasında geçirdiğim ataktan sonra uçağa binemez oldum. Yakın zamanda işimi değiştirdim ve sık sık seyahat etmek zorunda kaldım. Nur Deniz hanıma giden bir arkadaşımın tavsiyesi üzerine kendisiyle görüştüm. Birkaç seans birlikte çalıştık ve süreç kendiliğinden hızlı bir şekilde ilerledi. Bu sorunun üstesinden gelmek bana büyük kolaylık sağladı. Teşekkürler hocam.',
    },
    {
      id: 61,
      name: 'Ş.M.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Üniversitenin başlarında başlayan panik ataklarım için 3-4 yıl psikiyatriste gitmiştim. Mezun olduktan sonra işsiz kaldım ve bu dönem benim için daha da zorlayıcı olmaya başlamıştı. Bir yerden sonra ilaçlar da fayda etmedi ve psikoloğa gitmeye karar verdim. Çok iyi bir dinleyici ve güven verici bir psikolog. Onun sayesinde panik atağı yendim. Artık çok daha iyiyim.',
    },
    {
      id: 62,
      name: 'Ö.M.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: '2 sene önce boğazıma bir cismin kaçması sonucu aşırı bir ölüm korkusu duymaya başladım. Devamlı boğazıma bir şeyler kaçacağından veya öleceğimden korkuyordum. Bir süre sonra artık dışarıya çıkamaz hale geldim. Uzun arayışlarım sonucu Deniz Hanımla seanslara başladık. Zamanla bendeki değişimi etrafımdaki herkes fark etmeye başladı. Ama en önemlisi ben o korkuları artık içimde hissetmiyorum. Deniz Hanımı gönül rahatlığıyla öneririm.',
    },
    {
      id: 63,
      name: 'N.T.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Hamile olduğum dönemde bazı sağlık problemlerim oldu. Bebeğimi kaybetme riskim vardı. Bu durum ilk başlarda beni rahatsız etmiyordu ancak zaman geçtikçe dikkat ettiğim şeyler artmaya başladı. Takıntılarım hem benim hem eşimin hem de çocuğumun hayatını engellemeye başlamıştı. Deniz hanımla seanslara başladıktan sonra depresyonun eşiğinden döndüm diyebilirim. Yaşadığım hayatın tadına vardım, artık çocuğuma, eşime ve en önemlisi kendime vakit ayırabiliyorum.',
    },
    {
      id: 64,
      name: 'İ.Y.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'İnsanlar ile iletişimim hiçbir zaman iyi olmadı. Bunalım ve yalnızlık sıkıntısı çekiyordum. Rahatça konuşabildiğim hiç kimsem yoktu. İnternetten yaptığım araştırmalarda Nur Deniz Hanım\'ı buldum. İlk görüşmeden çıkarken uzun zaman sonra bir şeye inandığımı hissettim. İlk defa bir şeyi başarabileceğimi düşünüyordum. Kendisi ruhsal sorunumun kaynağının ne olduğunu fark etmemi sağladı. Nur Deniz hocama güvenip onun tavsiyelerine uyuyorum ve beni rahatsız eden kaygılardan kurtulmaya başladım.',
    },
    {
      id: 65,
      name: 'K.Ü.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: 'Yaşadığım sorunlar kendini ifade etme konusunda yetersizlik, bir şeyleri başaramama korkusu ve güvensizlik duygusuydu. Danışmanlık süreci sayesinde sağladığım olumlu geri bildirimler açıkçası beni çok mutlu ediyor. Hala devam ediyorum ve daha huzurlu ve daha mutlu hissediyorum. Nur Deniz Hanımla yaptığımız seanslar hayata karşı daha güvenli durmamı sağladı. Kesinlikle herkese tavsiye ediyorum.',
    },
    {
      id: 66,
      name: 'R.A.',
      category: 'individual',
      service: 'Bireysel Danışmanlık',
      rating: 5,
      text: '24 yaşındayım ve anksiyete bozukluğunu 8 senedir yaşıyordum. Psikiyatriye gidip ilaçlar kullandım, birkaç psikologla görüştüm. Hiçbirinden fayda göremedim maalesef. Dışarı çıkmak istemiyordum, arkadaşlarımın, ailemin yanında mutlu değildim, sürekli korktuğum düşünceler aklımdaydı. Deniz Hanım\'ın sayesinde artık bunların hiçbirini yaşamıyorum. Deniz Hanım\'a sadece ben değil tüm ailem dua ediyor. Herkese öneriyorum, çok teşekkürler.',
    },

    // ÇİFT DANIŞMANLIĞI
    {
      id: 67,
      name: 'S.',
      category: 'couple',
      service: 'Çift Danışmanlığı',
      rating: 5,
      text: 'İnternetten araştırarak bulmuştum. Deniz Hanım\'la çift danışmanlığına başladık, çok memnun kaldık. Herkese tavsiye ederim. Çok güzel dinliyor ve güzel yorumlar katıyor. Birbirimizi anlamamızı sağlıyor. Görüşmeler sonucu kendimi daha iyi hissettim.',
    },
    {
      id: 68,
      name: 'F.Ü.',
      category: 'couple',
      service: 'Çift Danışmanlığı',
      rating: 5,
      text: 'Deniz Hanım\'dan evliliğimiz hakkında destek aldık. Eşim ilk etapta danışmanlığa gitme konusunda isteksizdi ama Deniz Hanım\'ın yaklaşımı onu rahatlatınca istekle gitmeye başladı. Nur Deniz Hanım\'la birlikte sorunlarımızı etkili bir biçimde çözdük. Çok güler yüzlü, samimi ve işinde çok başarılı biri. İnsana güven veriyor ve sıkıntınızı rahatça paylaşabiliyorsunuz. Kesinlikle tavsiye ederim.',
    },
    {
      id: 69,
      name: 'F.S.',
      category: 'couple',
      service: 'Çift Danışmanlığı',
      rating: 5,
      text: 'Eşimle kısa bir süre önce severek evlendik. Evlenmeden önce ilişkimiz çok güzeldi. Evlendikten sonra kavgalarımız çok sıklaştı. Artık kavgaları uzatmamak için konuşmamaya başlamıştık. Ortak bir arkadaşımız bizim için randevu almış. Nur Deniz Hanım ikimizi de uzun uzun dinledi. Daha sonra konuştuğumuz konular üzerinden nerelerde takıldığımızı görmemizi sağladı. Bugün 4. seansımızı yaptık. Şimdiden farkı görebiliyoruz. Nur Deniz Hanım\'dan çok memnunuz.',
    },
    {
      id: 70,
      name: 'Y.Ö.',
      category: 'couple',
      service: 'Çift Danışmanlığı',
      rating: 5,
      text: 'Eşimle yaşadığım sorunlar için Deniz Hanıma başvurdum. Eşim gelmek istemediği için ilk seanslarımı kendim gittim ve bana iyi geldiğini görünce eşim de gelmek istedi. Her gittiğimiz seanstan yeni bir şey öğrenerek çıktık o kapıdan. Ben eşimi, eşim beni anlamaya başladı. Kendisinin ilgisinden, samimiyetinden, profesyonelliğinden dolayı çok teşekkür ederim.',
    },
    {
      id: 71,
      name: 'R.A.',
      category: 'couple',
      service: 'Çift Danışmanlığı',
      rating: 5,
      text: '13 senedir evliyiz. Son 3-4 yıldır kavgalarımız çok artmıştı. Her şeyden kavga eder olmuştuk. Son çare boşanmaya karar verdik. Ama ailelerimizin ısrarıyla davayı açmadan önce bir psikologla görüşelim dedik. Nur Hanım ikimizi de sırayla dinledi. Konuştukça aslında neden kavga ettiğimizi fark etmeye başladım. Nur Hanım bizi dinledikten sonra sorunlarımızı ve nedenlerini toparladı. Yıllar sonra ilk defa bir şeylere inandık eşimle. Başlayalı 4 seans oldu ancak şimdiden yol aldığımızı düşünüyorum.',
    },
    {
      id: 72,
      name: 'G.U.',
      category: 'couple',
      service: 'Çift Danışmanlığı',
      rating: 5,
      text: 'Nur Deniz hocaya internetten araştırmalarımız sonucu ulaştık. Danışmanlığa gelinceye kadar önyargılarımız vardı çünkü Deniz hocadan önce farklı psikologlardan destek alıp hayal kırıklığı ile sonlandırmıştık. Kendisine çift danışmanlığı için başvurduğumuzda evliliğimizin temelini adeta yeniden oluşturduğumuzu fark ettik. Eşimle birbirimizi daha iyi anlamayı dinlemeyi ve keşfetmemizi sağladı. Kendisine ne kadar teşekkür etsek azdır.',
    },
    {
      id: 73,
      name: 'E.M.',
      category: 'couple',
      service: 'Çift Danışmanlığı',
      rating: 5,
      text: 'Yaklaşık 2 sene önce eşimle aramızda bir mesafe oluşmaya başladı. Zamanla birbirimizden uzaklaştığımızı fark ettim. Bunu düzeltmeye çalıştıkça daha da kötü bir hal aldı. Boşanmanın eşiğine geldiğimizi fark edince ailelerimiz Deniz Hanıma ulaşmışlar. Deniz Hanım ilk seansta her ikimizi de dinledi ve aramızdaki sorunlarla ilgili bazı şeyleri fark etmemizi sağladı. Şimdi seanslara bireysel devam ediyoruz. Sürecin sonunda her şeyin düzeleceğine olan inancım ve Deniz Hanıma olan güvenim tam.',
    },
    {
      id: 74,
      name: 'S.G.',
      category: 'couple',
      service: 'Çift Danışmanlığı',
      rating: 5,
      text: 'Yaklaşık 8 aydır evliyim ve ilişkimde evlendikten sonra oluşan bir öfke problemim vardı. Boşanmak üzereyken buldum Nur Deniz Hanımı. Sıcak ve içten yaklaşımı benim bütün problemlerimi açık bir şekilde anlatmamı sağladı. En ufak bir şeyde artık tahammülüm kalmadığını hissedip eşime şiddete varan tartışmalar başlatıyordum. Nur Deniz Hanıma bunları anlattığımızda bize en uygun çalışma yönteminden bahsetti. Şu anda daha sabırlı ve sakin biriyim. Nur Deniz Hanıma bunları fark etmemi sağladığı için teşekkür ediyorum.',
    },

    // CİNSEL DANIŞMANLIK - Mevcut yorumlar + Yeni eklenen 5 yorum
    {
      id: 75,
      name: 'N.Ü.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: 'Son bir senedir ara ara devam eden erken boşalma problemlerim vardı. Bu sorundan dolayı pek çok partner değiştirmek zorunda kaldım. İlişkilerimde bu sorun yüzünden tartışmalar hatta ayrılıklar oluyordu. Gittiğim ürolog herhangi bir sorun olmadığını ve deneyimli bir psikologla görüşmemin faydalı olacağını söyledi. Seansa ilk gittiğimde oldukça gergindim. Ancak Nur Hanımın güven veren yaklaşımı ve mahremiyete verdiği önem beni rahatlattı. Seanslara devam ediyoruz ve şimdiden ilerlediğimizi fark edebiliyorum.',
    },
    {
      id: 76,
      name: 'S.B.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: 'Eşimle yaşadığımız problemlerden dolayı cinsel isteksizlik yaşıyordum. Başlarda bunu çok önemsemedim. Bir süre sonra tartışmalarımız arttı. Ben kendimi suçlu hissetmeye başladım. Cinsellikle ilgili herhangi bir şey konuşmayı, eşimin bana dokunmasını bile istemiyordum. Kendisini internet üzerinden yaptığımız araştırmalar sonucunda bulduk. Her şeyden önce güven veren ve anlayışlı bir duruşu var. Sorduğunuz bütün soruları yanıtlıyor. Neredeyse boşanmanın eşiğindeyken eskisi gibi mutlu olabilmek çok güzel. Teşekkürler.',
    },
    {
      id: 77,
      name: 'B.Y.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: 'Kendimi bildim bileli cinselliğe soğuk bakıyordum. Oğlum doğduktan sonra bu daha da arttı. Bir süre sonra eşim her konuşmada bu sorunla ilgili beni eleştirmeye başladı. Kendimi eksik ve suçlu hissediyordum. Bu sorunu araştırırken Deniz Hanımı buldum, sitedeki yorumlarını okudum ve seanslara başladık. Deniz Hanım hislerimi o kadar iyi anladı ki, eşime bu sorunla ilgili açıklamalar yaptı. Kendimi her anlamda çok daha iyi hissediyorum. Bu sorunu yaşayan tüm kadınlara tavsiyem bir an önce Deniz Hanım ile görüşmeleri.',
    },
    {
      id: 78,
      name: 'D.U.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: 'Uzun zamandır ereksiyon sorunuyla baş etmeye çalışıyordum. Benim için bu konuyu başka biriyle konuşmak imkânsız gibiydi. Yıllarca psikoloğa gitmemek için direndim. Eşim destek almadan bunu çözemeyeceğimi söyleyince kendimi çok kötü hissetmiştim. Üroloğa gittim, herhangi bir sorun olmadığını söyleyerek beni deneyimli bir psikoloğa yönlendirdi. Nur Hanım\'a anlatırken çok zorlandım. Ama kendisi sabırla ve yargılamadan dinledi. Nur Deniz Hanım\'la bu sorunu çözebileceğimize inancım tamdı, yanılmadım da. Yaşım ilerlemesine rağmen cinsel hayatımdan memnunum. Teşekkürler.',
    },
    {
      id: 79,
      name: 'Ö.G.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: '8 ay önce yaşadığım maddi sorunlardan sonra ereksiyon sorunum başlamıştı. İlk zamanlar kendiliğinden geçer diye düşündüm. Ama giderek ilerledi. Artık eşimle cinsel ilişkiye giremez hale gelmiştim. Eşimin ısrarı ve desteği ile internette yaptığım araştırmalar sonucu ümitsiz bir şekilde kendisine başvurmuştum. Sağolsun çok anlayışlı yaklaştı. Beni yargılamadan dinledi. Bu sorunu yaşayan insanlara tavsiyem ertelemesinler. Şimdi çok daha iyiyim. Allah razı olsun hocam.',
    },
    {
      id: 80,
      name: 'E.S.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: 'Eşimle 3 senedir evliyiz. Son zamanlarda cinsellik yaşamaktan kaçınmaya başlamıştım. Aradan ne kadar zaman geçerse geçsin asla bir şeyler yaşamak istemiyordum. Bir süre sonra eşimde de erken boşalma problemi başladı. Hem benim isteksizliğim hem eşimin erken boşalması yüzünden cinsellik yaşayamaz olmuştuk. Nur Deniz Hanım\'la çalışmaya başladık. Sonuçlardan çok memnunuz. Teşekkürler Nur Deniz Hanım.',
    },
    {
      id: 81,
      name: 'H.Y.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: 'Nur Deniz Hanım\'a bir süredir var olan cinsel sorunlarımız için başvurduk. İyi gitmeyen bir ilişkimiz vardı ve sürekli tartışan bir çifttik. Kendisi bize çift hayatının ve cinsel hayatın nasıl iç içe olduğunu oldukça net bir şekilde açıkladı. Sorunumuzu dinledikten sonra anlattığı şeyler kafamdaki tüm soruların cevabı gibiydi. Çift sorunlarımızı çözmeye başladıkça cinsel hayatımız da düzelmeye başladı. Hem çift danışmanlığı hem de cinsel danışmanlık konusunda kendisini tavsiye ederim. Teşekkürler.',
    },
    // Yeni eklenen cinsel danışmanlık yorumları (antalya-cinsel-terapi sayfasından)
    {
      id: 82,
      name: 'Beyza D.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: 'Merhaba, ben Deniz hanıma buradaki yorumlar aracılığıyla geldim. Eşimle üç yıldır evliyiz, ancak üç yıldır benim vajinismus olmam nedeniyle bir ilişki yaşayamıyorduk. Başlarda bunun kendiliğinden geçeceğini düşündük. İlişkimiz ilerledikçe gerginliğimin azalacağını ve uygun bir cinsel hayatımızın olabileceğini düşünüyordum. Ancak zaman geçtikçe daha da zorlanmaya başladık. Evliliğimiz bana göre bir çıkmaza girmişti. İş yerindeki arkadaşlarımla bu durumu paylaşınca verdikleri tepki üzerine kendimi daha kötü hissetmeye başladım ve eşimle konuşmamız üzerine bir destek almaya karar verdik. Daha sonra Deniz hanımla tanışmış olduk. Seanslar sırasında eşim de ben de birçok şeyi fark ettik ve Deniz hanım bizi acele ettirmedi. Özellikle bu bana çok iyi geldi. Her şey yapabileceğim ölçü ve derecedeydi. Eşimle olan ilişkim ve iletişimim gün geçtikçe daha iyi hale geldi ve yaşadığımız sorunları ayıp, günah olmadan ya da böyle düşünmeden, hissetmeden konuşabiliyor olmamız bile benim için çok kıymetliydi. Bugün oturup bunları sizlerle paylaşma nedenim Deniz hanım benim ve eşimin hayatında sanki yepyeni bir pencere açtı. Tüm samimiyetimle çok memnun kaldığımı belirtmek isterim. Kendisine teşekkürlerimizi sunuyoruz.',
    },
    {
      id: 83,
      name: 'Elif D.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: '1,5 yıl vajinismusu çekenlerden biriyim. Yaşadıklarım tarif bile edilemezdi. Ancak yaşayan biliyor vajinismusun ne denli insanı yıprattığını. Kendimi her şeyden soyutlamıştım evden dışarı çıkmak istemiyordum. Gitgide de kilo aldım bunu bile kafama takmıyordum. Dışarı çıktığımda ise bebeği olan birini gördüğümde bende bir anormallik var herkes normal ben hastayım güçsüz biriyim gibi düşünüyordum. İyice içime kapanmıştım, tamamen kendime olan güvenimi kaybetmiştim. Daha öncesinde 4 ayrı yere başvurdum. Ama hepsi de hüsranla sonuçlandı. İnternetten tedavi araştırmaya karar verdim ve Deniz Hanım\'ı buldum. Kendisi ile telefonla konuştuk. Son derece umutsuz olmama rağmen bir kez daha denemeye karar verdik. Kendisine çok teşekkür ediyorum ve herkese de tavsiye ediyorum. Allah herkesi doğru insanlar ile karşılaştırsın.',
    },
    {
      id: 84,
      name: 'Aysel C.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: '4 sene önce geçirdiğim vajinal mantar rahatsızlığından sonra cinsel hayatımızda sorunlar ortaya çıktı. Yıllarca bir çözüm aradım. Gittiğim kadın doğum doktorları herhangi bir sorun olmadığını söylüyordu. Ancak cinsel ilişki sırasında aşırı kaygılanıyordum ve vajinamda yoğun bir ağrı oluyordu. Bir kadın doğum doktorunun tavsiyesi üzerine deneyimli bir psikolog araştırmaya başlamıştım ve Deniz hanımı buldum. Seanslara eşimle birlikte katıldık. Birkaç seansta fark edilir değişimler oldu. Şu an hiçbir sorun yaşamıyoruz. Gönül rahatlığı ile kendisine başvurabilirsiniz.',
    },
    {
      id: 85,
      name: 'Zeynep A.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: 'Üniversite mezunu olmamıza rağmen şu ana kadar vajinismus diye bir şey duymamıştık. Gerek web sitesindeki güven verici bilgiler, gerekse daha sonra Nur Deniz Hanım\'la konuşarak aldığımız sıcak mesajlar sonucunda randevu alarak tedavilerimize başladık. Tedavilerde basit bir takım egzersizler veriliyor ve sizden uygulamanız bekleniyor. Aslında son derece basit ve kolay uygulamalar bunlar. En çok korktuğum şey ise canımın yanmasıydı. Korkumun ne kadar yersiz olduğunu tedaviye başladıktan sonra anladım. Birkaç seanstan sonra korkularınız ve kasılmalarınız tamamen azalıp kayboluyor. Şu anda eşimle mükemmel bir cinsel hayatımız var ve artık çocuk sahibi olmak istiyorum. Tüm yardımlarınız için çok ama çok teşekkür ederim.',
    },
    {
      id: 86,
      name: 'Hilmi H.',
      category: 'sexual',
      service: 'Cinsel Danışmanlık',
      rating: 5,
      text: 'Nur Deniz Hanım ile çift danışmanlığı seanslarımıza başladık. İyi gitmeyen bir ilişkimiz vardı ve sürekli tartışan bir çifttik ve cinsel hayatımızda yolunda gitmiyordu. Aslında cinsel sorunların çift hayatımızı etkilediği ortaya çıktı. Seanslarımızı cinsel danışmanlık üzerine yoğunlaştırdık. Var olan erken boşalma sorunuma çözüm bulunca cinsel hayatımızda düzelmeler başladı. Bu da çift ilişkimizin de düzelmesine neden oldu hem çift danışmanlığı hem de cinsel danışmanlık konusunda kendisini tavsiye ederim. Teşekkürler Nur Deniz hocam.',
    },
  ];

  const filteredTestimonials = activeCategory === 'all'
    ? testimonials
    : testimonials.filter(t => t.category === activeCategory);

  const getAvatarColor = (index: number) => {
    const colors = [
      'bg-gradient-to-br from-olive to-olive/80',
      'bg-gradient-to-br from-gold to-gold/80',
      'bg-gradient-to-br from-darkgray to-darkgray/80',
      'bg-gradient-to-br from-olive/90 to-gold/70',
      'bg-gradient-to-br from-gold/90 to-olive/70',
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <WhatsAppButton />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-64 h-64 bg-olive rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-olive/10 px-6 py-3 rounded-full mb-4">
                <i className="ri-heart-3-fill text-olive text-xl"></i>
                <span className="font-sans text-sm font-medium text-darkgray">
                  Danışanlarımızın Deneyimleri
                </span>
              </div>
              <h1 className="font-serif text-5xl lg:text-7xl font-bold text-darkgray">
                Danışan Yorumları
              </h1>
              <p className="font-sans text-xl text-darkgray/70 max-w-3xl mx-auto leading-relaxed">
                Arges Psikoloji ile yolculuklarına başlayan danışanlarımızın gerçek hikayeleri ve deneyimleri.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { icon: 'ri-user-heart-line', number: '500+', label: 'Mutlu Danışan' },
                { icon: 'ri-star-fill', number: '4.9/5', label: 'Ortalama Puan' },
                { icon: 'ri-thumb-up-line', number: '%98', label: 'Memnuniyet Oranı' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center space-y-3 shadow-sm"
                >
                  <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center mx-auto">
                    <i className={`${stat.icon} text-2xl text-olive`}></i>
                  </div>
                  <div className="font-serif text-3xl font-bold text-darkgray">
                    {stat.number}
                  </div>
                  <div className="font-sans text-sm text-darkgray/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => { setActiveCategory(category.id); setExpandedId(null); }}
                  className={`px-6 py-3 rounded-full font-sans text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeCategory === category.id
                      ? 'bg-darkgray text-white shadow-lg'
                      : 'bg-white text-darkgray hover:bg-olive/10'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials Accordion */}
        <section className="pb-20 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
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
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${getAvatarColor(index)}`}>
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
                        <span className="sm:hidden inline-flex items-center px-3 py-1.5 rounded-full bg-olive/10 text-olive text-xs font-medium">
                          Oku
                        </span>
                        <span className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full bg-olive/10 text-olive text-xs font-medium">
                          {testimonial.service}
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

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-olive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-chat-smile-3-line text-4xl text-olive"></i>
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-darkgray mb-6">
                Siz de Hikayenizi Yazın
              </h2>
              <p className="font-sans text-lg text-darkgray/70 mb-8">
                Profesyonel psikolojik destek ile hayatınızı dönüştürmeye bugün başlayın.
              </p>
              <a
                href="https://wa.me/905403251525"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-darkgray text-white px-8 py-4 rounded-full font-sans text-base font-medium hover:bg-olive transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
              >
                <span>Randevu Almak İstiyorum</span>
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

export default TestimonialsPage;
