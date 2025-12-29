import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

// Ana Sayfalar
const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const TestimonialsPage = lazy(() => import('../pages/testimonials/page'));
const TeamPage = lazy(() => import('../pages/team/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const BlogDetailPage = lazy(() => import('../pages/blog/detail/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Mevcut Hizmet Sayfalari
const IndividualTherapyPage = lazy(() => import('../pages/services/individual-therapy/page'));
const CoupleTherapyPage = lazy(() => import('../pages/services/couple-therapy/page'));
const ChildPsychologyPage = lazy(() => import('../pages/services/child-psychology/page'));
const FamilyTherapyPage = lazy(() => import('../pages/services/family-therapy/page'));
const AdolescentCounselingPage = lazy(() => import('../pages/services/adolescent-counseling/page'));
const EMDRTherapyPage = lazy(() => import('../pages/services/emdr-therapy/page'));
const SexualTherapyPage = lazy(() => import('../pages/services/sexual-therapy/page'));
const CareerCounselingPage = lazy(() => import('../pages/services/career-counseling/page'));

// Yeni Hizmet Sayfalari
const AntalyaPsikologPage = lazy(() => import('../pages/services/antalya-psikolog/page'));
const AntalyaPedagogPage = lazy(() => import('../pages/services/antalya-pedagog/page'));
const AileDanismanligiPage = lazy(() => import('../pages/services/aile-danismanligi/page'));
const AntalyaCocukOyunPage = lazy(() => import('../pages/services/antalya-cocuk-ve-oyun/page'));
const AntalyaErgenTerapisiPage = lazy(() => import('../pages/services/antalya-ergen-terapisi/page'));
const AntalyaCiftTerapisiPage = lazy(() => import('../pages/services/antalya-cift-terapisi/page'));
const AntalyaCinselTerapiPage = lazy(() => import('../pages/services/antalya-cinsel-terapi/page'));
const AntalyaEmdrPage = lazy(() => import('../pages/services/antalya-emdr/page'));

// Dikkat Gelistirme Sayfalari
const DehbNedirPage = lazy(() => import('../pages/dikkat-gelistirme/dehb-nedir/page'));
const CocuklarIcinMoxoPage = lazy(() => import('../pages/dikkat-gelistirme/cocuklar-icin-moxo/page'));
const YetiskinlerIcinMoxoPage = lazy(() => import('../pages/dikkat-gelistirme/yetiskinler-icin-moxo/page'));
const BbmpPage = lazy(() => import('../pages/dikkat-gelistirme/bbmp/page'));

// SAS Metodu Sayfalari
const SasNedirPage = lazy(() => import('../pages/sas/sas-nedir/page'));
const SasSmartPage = lazy(() => import('../pages/sas/sas-smart/page'));
const SasLifePage = lazy(() => import('../pages/sas/sas-life/page'));
const SasBoostPage = lazy(() => import('../pages/sas/sas-boost/page'));
const SasBalancePage = lazy(() => import('../pages/sas/sas-balance/page'));

// Danisan Yorumlari Alt Sayfalari
const TestimonialsCocukPage = lazy(() => import('../pages/testimonials/cocuk/page'));
const TestimonialsErgenPage = lazy(() => import('../pages/testimonials/ergen/page'));
const TestimonialsBireyselPage = lazy(() => import('../pages/testimonials/bireysel/page'));
const TestimonialsCiftAilePage = lazy(() => import('../pages/testimonials/cift-aile/page'));
const TestimonialsCinselTerapiPage = lazy(() => import('../pages/testimonials/cinsel-terapi/page'));

// Ekip Uyeleri Bireysel Sayfalari
const NurDenizYukselPage = lazy(() => import('../pages/team/nur-deniz-yuksel/page'));
const NezhiUnalPage = lazy(() => import('../pages/team/nezihi-unal/page'));
const BusraDemirbasPage = lazy(() => import('../pages/team/busra-demirbas/page'));

// Hizli Randevu
const HizliRandevuPage = lazy(() => import('../pages/hizli-randevu/page'));

const routes: RouteObject[] = [
  // Ana Sayfalar
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/services',
    element: <ServicesPage />,
  },
  {
    path: '/testimonials',
    element: <TestimonialsPage />,
  },
  {
    path: '/team',
    element: <TeamPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/blog/:slug',
    element: <BlogDetailPage />,
  },
  {
    path: '/hizli-randevu',
    element: <HizliRandevuPage />,
  },

  // Mevcut Hizmet Sayfalari
  {
    path: '/services/individual-therapy',
    element: <IndividualTherapyPage />,
  },
  {
    path: '/services/couple-therapy',
    element: <CoupleTherapyPage />,
  },
  {
    path: '/services/child-psychology',
    element: <ChildPsychologyPage />,
  },
  {
    path: '/services/family-therapy',
    element: <FamilyTherapyPage />,
  },
  {
    path: '/services/adolescent-counseling',
    element: <AdolescentCounselingPage />,
  },
  {
    path: '/services/emdr-therapy',
    element: <EMDRTherapyPage />,
  },
  {
    path: '/services/sexual-therapy',
    element: <SexualTherapyPage />,
  },
  {
    path: '/services/career-counseling',
    element: <CareerCounselingPage />,
  },

  // Yeni Hizmet Sayfalari
  {
    path: '/services/antalya-psikolog',
    element: <AntalyaPsikologPage />,
  },
  {
    path: '/services/antalya-pedagog',
    element: <AntalyaPedagogPage />,
  },
  {
    path: '/services/aile-danismanligi',
    element: <AileDanismanligiPage />,
  },
  {
    path: '/services/antalya-cocuk-ve-oyun',
    element: <AntalyaCocukOyunPage />,
  },
  {
    path: '/services/antalya-ergen-terapisi',
    element: <AntalyaErgenTerapisiPage />,
  },
  {
    path: '/services/antalya-cift-terapisi',
    element: <AntalyaCiftTerapisiPage />,
  },
  {
    path: '/services/antalya-cinsel-terapi',
    element: <AntalyaCinselTerapiPage />,
  },
  {
    path: '/services/antalya-emdr',
    element: <AntalyaEmdrPage />,
  },

  // Dikkat Gelistirme Sayfalari
  {
    path: '/dikkat-gelistirme/dehb-nedir',
    element: <DehbNedirPage />,
  },
  {
    path: '/dikkat-gelistirme/cocuklar-icin-moxo',
    element: <CocuklarIcinMoxoPage />,
  },
  {
    path: '/dikkat-gelistirme/yetiskinler-icin-moxo',
    element: <YetiskinlerIcinMoxoPage />,
  },
  {
    path: '/dikkat-gelistirme/bbmp',
    element: <BbmpPage />,
  },

  // SAS Metodu Sayfalari
  {
    path: '/sas/sas-nedir',
    element: <SasNedirPage />,
  },
  {
    path: '/sas/sas-smart',
    element: <SasSmartPage />,
  },
  {
    path: '/sas/sas-life',
    element: <SasLifePage />,
  },
  {
    path: '/sas/sas-boost',
    element: <SasBoostPage />,
  },
  {
    path: '/sas/sas-balance',
    element: <SasBalancePage />,
  },

  // Danisan Yorumlari Alt Sayfalari
  {
    path: '/testimonials/cocuk',
    element: <TestimonialsCocukPage />,
  },
  {
    path: '/testimonials/ergen',
    element: <TestimonialsErgenPage />,
  },
  {
    path: '/testimonials/bireysel',
    element: <TestimonialsBireyselPage />,
  },
  {
    path: '/testimonials/cift-aile',
    element: <TestimonialsCiftAilePage />,
  },
  {
    path: '/testimonials/cinsel-terapi',
    element: <TestimonialsCinselTerapiPage />,
  },

  // Ekip Uyeleri Bireysel Sayfalari
  {
    path: '/team/nur-deniz-yuksel',
    element: <NurDenizYukselPage />,
  },
  {
    path: '/team/nezihi-unal',
    element: <NezhiUnalPage />,
  },
  {
    path: '/team/busra-demirbas',
    element: <BusraDemirbasPage />,
  },

  // 404
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
