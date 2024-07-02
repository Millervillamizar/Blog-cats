import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';

//components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <Navbar/>
    <Sidebar/>  
     <div className='max-w-screen-md mx-auto pt-20'>
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/articles-list' element={<ArticlesList />} />
           <Route path='/article/:name' element={<Article />} />
        </Routes>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </Router>
    
  );
}

export default App;
