import React from 'react'
import "../css/PostItem.css"

function PostItem(props){
    const {title,content} = props;

    return(
        <div class="post-item">
            <p>{title}</p>
            <p>{content}</p>
        </div>
    )
}



export default PostItem;