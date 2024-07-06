// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-opacity-90 bg-white">
        <Navbar />
        <Sidebar />
        <div className='flex-grow max-w-screen-md mx-auto pt-20'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/articles-list' element={<ArticlesList />} />
            <Route path='/article/:name' element={<Article />} />
          </Routes>
        </div>
        <Footer className='mt-auto py-4' />
      </div>
    </Router>
  );
}

export default App;
