import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowcaseSection from '../components/ShowcaseSection';
import CompanyAdsSection from '../components/CompanyAdsSection';
import FeaturesSection from '../components/FeaturesSection';
import AboutCompanySection from '../components/AboutCompanySection';
import ServiceSection from '../components/ServiceSection';
import ChooseUsSection from '../components/ChooseUsSection';
import ProjectCaseSection from '../components/ProjectCaseSection';
import MeetOurTeamSection from '../components/MeetOurTeamSection';
import ReviewSection from '../components/ReviewSection';
import ArticlesSection from '../components/ArticlesSection';
import NewsLetterSection from '../components/NewsLetterSection';


const Home = () => {
  return (
    <>
      <Header />
        <main>
          <ShowcaseSection />
          <CompanyAdsSection />
          <FeaturesSection />
          <AboutCompanySection />
          <ServiceSection />
          <ChooseUsSection />
          <ProjectCaseSection />
          <MeetOurTeamSection />
          <ReviewSection />
          <ArticlesSection />
          <NewsLetterSection />
        </main>
      <Footer />
    </>
  )
}

export default Home