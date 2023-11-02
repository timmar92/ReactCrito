import { Link } from 'react-router-dom';

const Post = ({ title, date }) => {
    return (
        <Link className='post' to='/post'>
            <h4>{title}</h4>
            {date && <p>{date}</p>}
        </Link>
    );
};

export default Post