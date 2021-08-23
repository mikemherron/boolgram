import './Post.css';
import React from 'react';
import moment from 'moment';
import { Fragment } from 'react';

import { ProfileImageMedium, ProfileImageSmall } from 'profile/ProfileImage';
import { IconButtonHeart, IconButtonComment } from 'icons/IconButton';
import PostComment from './PostComment';

const MAX_SHOWN_COMMENTS = 2;

function Post(props) {
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
                    {props.post.comments.length > 0 &&
                        <section className="Post-comments">
                            {props.post.comments.length > MAX_SHOWN_COMMENTS &&
                                <div className="Post-view-all-comments"><span>View all {props.post.comments.length} comments</span></div>
                            }
                            {props.post.comments.slice(0, MAX_SHOWN_COMMENTS).map((comment, index) => (
                                <PostComment key={index} username={comment.username} text={comment.text} />))
                            }
                        </section>
                    }
                    <section className="Post-time">
                        <span>{moment(props.post.date.date, 'YYYY-MM-DD HH:mm:ss.S').fromNow()}</span>
                    </section>
                </Fragment>
            }
        </article>
    );
}

export default Post;