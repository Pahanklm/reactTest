import React from 'react';

const PostItem = (props) => {
    const removePost = (e) => {
        e.preventDefault();
        console.log(props.post.id);
        // Ваша логика удаления поста
    };

    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.number} {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <button onClick={removePost}>delete</button>
            </div>
        </div>
    );
};

export default PostItem;
