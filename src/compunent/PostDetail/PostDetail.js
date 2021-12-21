import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const params = useParams();
    const [posts, setPosts] = useState({})
    const [comments, setComments] = useState([])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [params.postId])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [params.postId])
    return (
        <div style={{border: '1px solid red', padding: '20px', margin: '20px', borderRadius: '20px'}}>
            <p><small>Id: {posts.id}</small></p>
            <h2>{posts.title}</h2>
            <p>{posts.body}</p>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetail;