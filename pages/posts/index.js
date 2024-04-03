import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

// const DUMMY_DATA = [
//   {
//     title: "Getting Started Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
//     date: "2024-03-23",
//     slug: "getting-started-nextjs",
//   },
//   {
//     title: "Getting Started Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
//     date: "2024-03-23",
//     slug: "getting-started-nextjs",
//   },
//   {
//     title: "Getting Started Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
//     date: "2024-03-23",
//     slug: "getting-started-nextjs",
//   },
//   {
//     title: "Getting Started Nextjs",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.",
//     date: "2024-03-23",
//     slug: "getting-started-nextjs",
//   },
// ];

const AllPostsPage = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
