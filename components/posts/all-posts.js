import styles from "./all-posts.module.css";
import PostsGrid from "./post-grid";

const AllPosts = ({ posts }) => {
  return (
    <div className={styles.posts}>
      <h1>AllPosts</h1>
      <PostsGrid posts={posts} />
    </div>
  );
};

export default AllPosts;
