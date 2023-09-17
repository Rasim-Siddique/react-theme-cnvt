


import './App.css'
import './js/lazysizes.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about-us/About';
import ContactUs from './pages/contact-us/ContactUs';
import ErrorPage from './pages/404/ErrroPage';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import SingleProduct from './pages/single-product/SingleProduct';
import SearchResult from './pages/search-result/SearchResult';
import ShortCodes from './pages/shortcodes/ShortCodes';
import Categories from './pages/categories/Categories';
import HomeFashion from './pages/home/HomeFashion';
import HomeGames from './pages/home/HomeGames';
import HomeMusic from './pages/home/HomeMusic';
import HomePolitics from './pages/home/HomePolitics';
import HomeVideos from './pages/home/HomeVideos';


function App() {


  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home-fashion' element={<HomeFashion />} />
          <Route path='/home-games' element={<HomeGames />} />
          <Route path='/home-music' element={<HomeMusic />} />
          <Route path='/home-politics' element={<HomePolitics />} />
          <Route path='/home-videos' element={<HomeVideos />} />





          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/single-product' element={<SingleProduct />} />
          <Route path='/search-result' element={<SearchResult />} />
          <Route path='/shortcodes' element={<ShortCodes />} />
          <Route path='/categories' element={<Categories />} />
          




          <Route path="*" element={<ErrorPage />} />



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
