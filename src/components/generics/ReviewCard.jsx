import React from 'react'
import Stars from './Stars';
import img_cassandra from '../../assets/images/cassandra.png'
import img_amanda from '../../assets/images/amanda.png'
import img_jack from '../../assets/images/jack.png'

const ReviewCard = ({ starsCount, reviewerName, reviewerTitle }) => {
    let imageSrc;
    switch (reviewerName) {
      case 'Cassandra Warren':
        imageSrc = img_cassandra;
        break;
      case 'Amanda Tulling':
        imageSrc = img_amanda;
        break;
      case 'Jack McDogglas':
        imageSrc = img_jack;
        break;
      default:
        imageSrc = img_cassandra; // default image
    }

  return (
    <div className="card">
      <div className="score" alt={`${starsCount} star review`}>
        <Stars count={starsCount} />
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
      </div>
      <div className="person">
        <img src={imageSrc} alt="image of reviewer" />
        <div className="person-title">
          <h3>{reviewerName}</h3>
          <p>{reviewerTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard