import './Post.css';
import moment from 'moment';
import PostComment from './PostComment';
import LoggedInProfileName from 'profile/LoggedInProfileName';
import { Fragment, React, useState} from 'react';
import { ProfileImageMedium, ProfileImageSmall } from 'profile/ProfileImage';
import { IconButtonHeart, IconButtonComment, IconButtonEmoji } from 'icons/IconButton';

const MAX_SHOWN_COMMENTS = 2;

function Post(props) {

    const [comment, setComment] = useState("");
    const [addedComments, setAddedComments] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        props.onAddComment(comment);
        setAddedComments(addedComments => [{"username" : LoggedInProfileName, "text" : comment}, ...addedComments]);
        setComment("");
    }

    const allComments = props.showLoading ? [] : addedComments.concat(props.post.comments);
    
    return (
        <article className="Post">
            <header className="Post-header">
                {props.showLoading
                    ? <ProfileImageMedium showLoading={true} />
                    : <ProfileImageMedium imageUrl={props.post.profile_picture} />}
                <div className="Post-header-name">
                    {props.showLoading
                        ? <div className="Post-header-placeholder" />
                        : <span>{props.post.profile_name}</span>}
                </div>
            </header>
            <section className="Post-header-image-container">
                {props.showLoading
                    ? <img className="Post-header-image Post-header-image-loading Util-loading-background" alt=""></img>
                    : <img className="Post-header-image" src={props.post.post_image} alt="Post" ></img>}
            </section>
            {!props.showLoading &&
                <Fragment>
                    <section className="Post-toolbar">
                        <IconButtonHeart />
                        <IconButtonComment />
                    </section>
                    {props.post.likes.length > 0 &&
                        <section className="Post-likes">
                            <ProfileImageSmall showHighlight={false} imageUrl={props.post.likes[0].profile_picture} />
                            <span>Liked by <strong>{props.post.likes[0].username}</strong> {props.post.likes.length > 1 && 
                                <Fragment>and <strong>{props.post.likes.length - 1}</strong> {props.post.likes.length > 2 ? "others" : "other" }</Fragment>
                            }
                            </span>
                        </section>
                    }
                    <section className="Post-text">
                        <PostComment username={props.post.profile_name} text={props.post.post_text} />
                    </section>
                        {allComments.length > 0 &&
                        <section className="Post-comments">
                            {allComments.length > MAX_SHOWN_COMMENTS &&
                                <div className="Post-view-all-comments"><span>View all {allComments.length} comments</span></div>
                            }
                            {allComments.slice(0, MAX_SHOWN_COMMENTS).map((comment, index) => (
                                <PostComment key={index} username={comment.username} text={comment.text} />))
                            }
                        </section>
                    }
                    <section className="Post-time">
                        <span>{moment(props.post.date.date, 'YYYY-MM-DD HH:mm:ss.S').fromNow()}</span>
                    </section>
                    <section className="Post-add-comment">
                        <form onSubmit={e => handleSubmit(e)}>
                            <button>
                                <IconButtonEmoji />
                            </button>
                            <input onChange={e => setComment(e.target.value)} value={comment} placeholder="Add a comment…" autoComplete="off" autoCorrect="off"></input>
                            <button className="Post-add-comment-submit" disabled={comment==""} type="submit">Post</button>
                        </form>
                    </section>
                </Fragment>
            }
        </article>
    );
}

export default Post;