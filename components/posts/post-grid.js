import PostItem from "./post-item";
import styles from "./posts-grid.module.css";

const PostsGrid = ({ posts }) => {
  const item = posts.map((post) => {
    return <PostItem key={post.slug} item={post} />;
  });
  return (
    <>
      <ul className={styles.grid}>{item}</ul>
    </>
  );
};

export default PostsGrid;
