import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({type, title, to}) => {
    const getButtonClass = () => {
        switch(type) {
            case 'yellow':
                return 'btn-yellow'
            case 'transparent':
                return 'btn-transparent'
            default:
                return 'btn-black'
        }
    }

  return (
    <Link to={to} className={getButtonClass()}>{title} <i className="fa-regular fa-arrow-up-right"></i></Link>
  )
}

export default Button