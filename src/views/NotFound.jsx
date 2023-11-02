import React from 'react'
import Footer from '../components/Footer';
import Button from '../components/generics/Button';

const NotFound = () => {
  return (
    <>  
        <div className='not-found-page'>
        <div className='not-found-error'>404 Page Not Found</div>
        <Button to='/' title='Go Back' type='yellow' />
        </div>
        <Footer />
    </>
  )
}

export default NotFound