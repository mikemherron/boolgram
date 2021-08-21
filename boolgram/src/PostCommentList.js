function PostCommentList(props) {
    //todo fileter comments 
    return props.comments.slice(0,2).map(comment=> (
        <div>
            <span><strong>{comment.username}</strong> {comment.text}</span>
        </div>
    ))
    
}

export default PostCommentList;
