import React from 'react';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {
    const componentStyle = {
        border: '1px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    const {title, id, body} = props.post;
    const navigate = useNavigate();
    const handleChange = () => {
        navigate(`post/${id}`)
    }
    
    return (
        <div style={componentStyle}>
            <h5>Id : {id} {title} </h5>
            <p>Email : {body}</p>
            <button onClick={() => handleChange()}>Show Details</button>
        </div>
    );
};

export default Post;