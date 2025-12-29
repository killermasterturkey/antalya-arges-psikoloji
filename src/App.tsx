import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import ScrollToTop from './components/ScrollToTop';
import CallBanner from './components/feature/CallBanner';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <AppRoutes />
      <CallBanner />
    </BrowserRouter>
  );
}

export default App;