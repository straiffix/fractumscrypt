import styles from '../styles/ShortPost.module.css';

function ShortPost({ post_id, post }){

    console.log(post.text)
    
    return (
        <div className={styles.shortpost}>
            <div className={styles.shortpostheader}>{post.title}
            </div>
            <div className={styles.shortpostcontent}>
            
            <p> {post.shorttext }</p>
            <form><button type="submit" formAction={post_id} className={styles.shortpostbutton}>Read more</button></form>
            </div>
        </div>

    );
}

export default ShortPost;

