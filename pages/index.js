import FeaturedPosts from "../components/home-page/featured-posts/featured-posts";
import Hero from "../components/home-page/hero/hero";
import { getFeaturedPost } from "../lib/post-util";
import Head from "next/head";

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

const Homepage = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Nimesh Blogs</title>
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </div>
  );
};

export function getStaticProps() {
  const featuredPost = getFeaturedPost();
  return {
    props: {
      posts: featuredPost,
    },
  };
}

export default Homepage;
