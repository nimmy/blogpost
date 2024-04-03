import styles from "./post-header.module.css";
import Image from "next/image";

const PostHeader = ({ title, image }) => {
  return (
    <div className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={300} height={200} />
    </div>
  );
};

export default PostHeader;
