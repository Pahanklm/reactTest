import React, { useState, useRef } from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/app.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        if (post.title !== '' && post.body !== '') {
            setPosts([...posts, { ...post, id: Date.now() }]);
            setPost({ title: '', body: '' });
        }
    };

    return (
        <div className="App">
            <form>
                <MyInput
                    value={post.title}
                    onChange={(e) =>
                        setPost({ ...post, title: e.target.value })
                    }
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    value={post.body}
                    onChange={(e) => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder="описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title={'список постов 1'} />
        </div>
    );
}

export default App;
