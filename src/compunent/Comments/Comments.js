import React from 'react';

const Comments = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div style={{border: '1px solid tomato'}}>
            <p>{name} : {email}</p>
            <p>{body}</p>
        </div>
    );
};

export default Comments;