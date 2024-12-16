import './App.css';
import HeroSection from './components/HeroSection/HeroSection';
import ImageSwiper from './components/SlideImgs/SlideImgs';
// import CategoryMenu from './componnets/CategoryMenu/CategoryMenu';
// import SliderImgs from './componnets/SliderImgs/SliderImgs';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className="App">
      < Header />
      < HeroSection />
      < ImageSwiper />
      {/* <CategoryMenu /> */}
    </div>
  );
}

export default App;