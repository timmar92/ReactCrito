import React from 'react';
import img_wavyLinesConnect from '../assets/images/wavy-lines-connect.svg';

const PageTitle = ({place, strong, title}) => {
    return (
        <section className="connect-section">
            <div className="container">
                <img src={img_wavyLinesConnect} alt="wavy lines for looks" />
                    <div className="message">
                        <p>{place} <strong>{strong}</strong></p>
                        <h1>{title}</h1>
                    </div>
            </div>
        </section>
    );
};

export default PageTitle;