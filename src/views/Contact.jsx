import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import InfoCardSection from '../components/InfoCardSection';
import ContactForm from '../components/ContactForm';
import Map from '../components/generics/Map';


const Contact = () => {
  return (
    <>
      <Header />
        <main>
          <PageTitle place='Home' strong='Contact' title='Let’s Connect' />
          <InfoCardSection />
          <ContactForm />
          <Map />
        </main>
      <Footer />
    </>
  )
}

export default Contact