import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import InfoCardSection from '../components/InfoCardSection';

const Contact = () => {
  return (
    <>
        <Header />
        <main>
        <PageTitle place='Home' strong='Contact' title='Let’s Connect' />
        <InfoCardSection />
        </main>
        <Footer />
    </>
  )
}

export default Contact