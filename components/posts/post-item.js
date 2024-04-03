import styles from "./post-item.module.css";
import Image from "next/image";
import Link from "next/link";
const PostItem = ({ item }) => {
  const { title, image, excerpt, date, slug } = item;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <>
      <li className={styles.post}>
        <Link href={`/posts/${slug}`}>
          <div className={styles.image}>
            <Image src={imagePath} alt={title} width={400} height={200} />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </Link>
      </li>
    </>
  );
};

export default PostItem;
