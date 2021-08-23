import './Post.css';
import {ProfileImageMedium, ProfileImageSmall} from 'profile/ProfileImage';
import {IconButtonHeart, IconButtonComment} from 'icons/IconButton';
import PostComment from './PostComment';

import moment from 'moment';

const MAX_SHOWN_COMMENTS = 2

function Post(props) {
    if (props.showLoading===true){
        return (
            <article className="Post">
                <header className="Post-header">
                    <ProfileImageMedium showLoading={true}/>
                    <div className="Post-header-name">
                        <div className="Post-header-placeholder" />
                    </div>
                </header>
                <section className="Post-header-image-container">
                    <img className="Post-header-image Util-loading-background"></img>
                </section>
            </article>
        )
    };

    return (
        <article className="Post">
            <header className="Post-header">
                <ProfileImageMedium imageUrl={props.post.profile_picture}/>
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
                    <ProfileImageSmall showHighlight={false} imageUrl={props.post.likes[0].profile_picture}/>
                    <span>Liked by <strong>{props.post.likes[0].username}</strong> and <strong>{props.post.likes.length-1}</strong> others</span>
                </section>
            }
            <section className="Post-text">
                <PostComment username={props.post.profile_name} text={props.post.post_text} />
            </section>
            {props.post.comments.length > 0 &&
                <section className="Post-comments">
                    {props.post.comments.length > MAX_SHOWN_COMMENTS && 
                        <div className="Post-view-all-comments"><span>View all {props.post.comments.length} comments</span></div>
                    }
                    {props.post.comments.slice(0, MAX_SHOWN_COMMENTS).map(comment=> (
                        <PostComment username={comment.username} text={comment.text} /> ))
                    }
                </section>
            }
            <section className="Post-time">
                <span>{moment(props.post.date.date, 'YYYY-MM-DD HH:mm:ss.S').fromNow()}</span>
            </section>
        </article>
  );
}

export default Post;