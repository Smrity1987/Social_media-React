import React, { useState } from 'react';
import "./Post.css"
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';

const Post = (props) => { 
    const {date,desc,photo,like,comment}=props.post

    const [like1,setLike] = useState(props.post.like);
    const [isLiked,setIsLiked]=useState(false);

  const clickHandler=()=>{
    setLike(isLiked ? like1-1 : like1+1)
    setIsLiked(!isLiked)
  }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(user=>user.id===props.post.userId)[0].profilePicture}alt="" className="postProfileImg" />
                        <span className="postUsername">{Users.filter(user=>user.id===props.post.userId)[0].username}</span>
                        <span className="postDate">{date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert></MoreVert>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{desc}</span>
                    <img src={photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon"src="/Assets/like.png" onClick={clickHandler} alt="" />
                        <img className="likeIcon"src="/Assets/heart.png" onClick={clickHandler} alt="" />
                        <img className="likeIcon"src="/Assets/haha.png" onClick={clickHandler} alt="" />
                        <img className="likeIcon"src="/Assets/sad.png" onClick={clickHandler} alt="" />
                        <img className="likeIcon"src="/Assets/angry.png" onClick={clickHandler} alt="" />
                        <span className="postLikeCounter">{like1} and others</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;