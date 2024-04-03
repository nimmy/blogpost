import Image from "next/image";
import styles from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkDown from "react-markdown";

// const DUMMY_DATA = {
//   title: "Getting Started Nextjs",
//   image: "getting-started-nextjs.png",
//   content: "# this is a first post",
//   date: "2024-03-23",
//   slug: "getting-started-nextjs",
// };

const PostContent = ({ post }) => {
  console.log(post, "content");
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    image(image) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${image.src}`}
          alt={image.title}
          width={600}
          height={300}
        />
      );
    },
  };
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkDown components={customRenderers}>{post.content}</ReactMarkDown>
    </article>
  );
};

export default PostContent;
