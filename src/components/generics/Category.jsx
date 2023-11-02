import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category, quantity}) => {
    return (
        <Link className='category' to='/category'>
            <p>{category}  -  <span>{quantity} Posts</span></p>
            
        </Link>
    );
};

export default Category;