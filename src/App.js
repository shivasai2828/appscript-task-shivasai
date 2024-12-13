import './App.css';
import FavPage from './components/FavPage';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/fav-list' element={<FavPage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
     </div>
  );
}

export default App;
