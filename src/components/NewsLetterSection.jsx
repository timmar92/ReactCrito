import React from 'react'
import img_wavyLinesSignup from '../assets/images/wavy-lines-signup.svg'
import Button from './generics/Button';

const NewsLetterSection = () => {
  return (
    <section className="newsletter">
    <img className="wavy-lines-signup" src={img_wavyLinesSignup} alt="wavy lines" />
    <div className="container">
        <h2>Get News Updates By Signing Up</h2>
        <form>
            <input type="text" placeholder="username@domain.com" />
            <Button type='yellow' title='Subscribe' to='/subscribe' />
        </form>
    </div>
</section>
  )
}

export default NewsLetterSection