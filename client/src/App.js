import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './AuthContext';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <AuthProvider>
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
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </div>
          <Footer className='mt-auto py-4' />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
