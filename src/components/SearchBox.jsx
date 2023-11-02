import React from 'react'
import { Link } from 'react-router-dom';
import Post from './generics/Post';
import Category from './generics/Category';

const SearchBox = () => {
  return (
    <>
        <div className='searchbox'>
            <div className='input-area'>
                <i className="fa-regular fa-magnifying-glass"></i>
                <input type='text' placeholder='Type to search...' />
            </div>
            <div className='card-1'>
                <h3>Recent Posts</h3>
                <div className='underline'></div>
                <Post title='How To Blow Through Capital At An Incredible Rate' date='Jan 14, 2020' />
                <div className='border-between'></div>
                <Post title='Design Studios That Everyone Should Know About?' date='Jan 14, 2020' />
                <div className='border-between'></div>
                <Post title='How did we get 1M+ visitors in 30 days without anything!' date='Jan 14, 2020' />
                <div className='border-between'></div>
                <Post title='Figma On Figma: How We Built Our Website Design System' date='Jan 14, 2020' />
            </div>
            <div className='card-2'>
                <h3>Categories</h3>
                <div className='underline'></div>
                <Category category='Technology' quantity='20' />
                <Category category='Freelancing' quantity='7' />
                <Category category='Writing' quantity='16' />
                <Category category='Marketing' quantity='11' />
                <Category category='Business' quantity='35' />
                <Category category='Education' quantity='14' />

            </div>
        </div>
        
    </>
  )
}

export default SearchBox