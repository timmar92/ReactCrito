import React from 'react'
import Button from './generics/Button';
import SectionTitle from './generics/SectionTitle';
import ReviewCard from './generics/ReviewCard';

const ReviewSection = () => {
  return (
    <section className="review-section">
    <div className="container">
        <div className="section-title">

            <SectionTitle title='Testimonials' description='What Our Clients Say' />
        </div>
        <div className="reviews">
            <ReviewCard starsCount={5} reviewerName='Cassandra Warren' reviewerTitle='Business Manager, Dorfus' />
            <ReviewCard starsCount={5} reviewerName='Amanda Tulling' reviewerTitle='Senior Developer, Square' />
            <ReviewCard starsCount={5} reviewerName='Jack McDogglas' reviewerTitle='Key Account Manager, Gobona' />
        </div>
        <div className="center-content">
            <Button to='/reviews' title='All Reviews' />
        </div>
    </div>
</section>
  )
}

export default ReviewSection