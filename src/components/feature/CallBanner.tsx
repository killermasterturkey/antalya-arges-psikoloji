import { motion } from 'framer-motion';

const CallBanner = () => {
  return (
    <>
      {/* Mobile Sticky Call Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-olive shadow-2xl safe-area-bottom"
      >
        <div className="flex items-center justify-between px-4 py-3">
          <a
            href="tel:+905403251525"
            className="flex-1 flex items-center justify-center space-x-2 bg-white text-darkgray py-3 rounded-full font-sans text-sm font-semibold mr-2"
          >
            <i className="ri-phone-fill text-olive"></i>
            <span>Hemen Ara</span>
          </a>
          <a
            href="https://wa.me/905403251525"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center space-x-2 bg-[#25D366] text-white py-3 rounded-full font-sans text-sm font-semibold ml-2"
          >
            <i className="ri-whatsapp-fill"></i>
            <span>WhatsApp</span>
          </a>
        </div>
      </motion.div>

      {/* Desktop Floating Call Button */}
      <motion.a
        href="tel:+905403251525"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        className="hidden lg:flex fixed bottom-8 left-8 z-50 items-center space-x-3 bg-olive text-white px-6 py-4 rounded-full shadow-2xl hover:bg-darkgray transition-colors duration-300 cursor-pointer group"
      >
        <div className="relative">
          <i className="ri-phone-fill text-xl"></i>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs opacity-80">Hemen Arayın</span>
          <span className="font-semibold">0540 325 15 25</span>
        </div>
      </motion.a>
    </>
  );
};

export default CallBanner;
