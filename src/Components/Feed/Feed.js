import React from 'react';
import "./Feed.css"
import Share from '../Share/Share';
import Post from '../Post/Post';
import { Posts } from '../../dummyData';

const Feed = () => {
    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share></Share>
                {Posts.map(post =><Post key={post.id}post={post}></Post>)}
            </div>

        </div>
    );
};

export default Feed;