import { SIZE_MEDIUM, SIZE_SMALL } from './ProfileImage';

import ProfileImage from './ProfileImage';
import PostCommentList from './PostCommentList';
import IconButtonHeart from './IconButtonHeart';
import IconButtonComment from './IconButtonComment';

function Post(props) {
    return (
        <article className="Post">
            <header className="Post-header">
                <ProfileImage size={SIZE_MEDIUM} imageUrl={props.post.profile_picture}/>
                <div className="Post-header-name">
                    <span>
                        {props.post.profile_name}
                    </span>
                </div>
            </header>
            <section className="Post-header-image-container">
                <img className="Post-header-image" src={props.post.post_image}></img>
            </section>
            <section className="Post-toolbar">
                <IconButtonHeart />
                <IconButtonComment />
            </section>
                {props.post.likes.length > 0 &&
                    <section className="Post-likes">
                        <ProfileImage showHighlight={false} size={SIZE_SMALL} imageUrl={props.post.likes[0].profile_picture}/>
                        <span>Liked by <strong>{props.post.likes[0].username}</strong> and <strong>{props.post.likes.length-1}</strong> others</span>
                    </section>
                }
            <section className="Post-text">
                <span><strong>{props.post.profile_name}</strong> {props.post.post_text}</span>
            </section>
            <section className="Post-comments">
                <PostCommentList comments={props.post.comments} />
            </section>
        </article>
  );
}

export default Post;
