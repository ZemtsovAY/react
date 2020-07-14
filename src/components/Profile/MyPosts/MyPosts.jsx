import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElements = props.state.map(m => <Post message={m.message} likesCount={m.likesCount}/>);
    const addNewPostRef = React.createRef();

    let onPostChange = () => {
        let text=addNewPostRef.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={addNewPostRef} value={props.newPostMessageText} onChange={onPostChange}/>
                <div>
                    <button onClick={() => props.addPost(addNewPostRef.current.value)}>Add post</button>
                </div>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;