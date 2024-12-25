import './App.css';
import ClippedDrawer from './components/ClippedDrawer/ClippedDrawer';
import HeroSection from './components/HeroSection/HeroSection';
import ImageSwiper from './components/SlideImgs/SlideImgs';

import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
      < Header />
      < HeroSection />
      < ImageSwiper />
      < ClippedDrawer />
    </div>
  );
}

export default App;