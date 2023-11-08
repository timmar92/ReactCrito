import '../src/assets/scss/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Contact from './views/Contact';
import News from './views/News';
import NotFound from './views/NotFound';
import NewsDetails from './views/NewsDetails';
import ScrollToTopButton from './components/generics/ScrollToTopButton';
import { ArticleProvider } from './contexts/ArticleContext';

function App() {
  return (
    <>
      <div className='wrapper'>
        <BrowserRouter>
        <ScrollToTopButton />
        <ArticleProvider>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/news' element={<News />} />
            <Route path='/newsdetails/:id' element={<NewsDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </ArticleProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;


