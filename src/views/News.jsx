import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import AllArticlesSection from '../components/AllArticlesSection';
import PageTitle from '../components/PageTitle';
import NewsLetterSection from '../components/NewsLetterSection';
import ScrollToTopButton from '../components/generics/ScrollToTopButton';


const News = () => {
  return (
    <>
      <Header />
        <main>
          <ScrollToTopButton />
          <PageTitle place='Home' strong='News' title='Articles & News' />
          <AllArticlesSection />
          <NewsLetterSection />
        </main>
      <Footer />
    </>
  )
}

export default News