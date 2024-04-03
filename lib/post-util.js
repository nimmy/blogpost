import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectry = path.join(process.cwd(), "postsContent");

export function getPostFiles() {
  return fs.readdirSync(postDirectry);
}

export function getPostData(postIdenfire) {
  const postSlug = postIdenfire.replace(/\.md$/, ""); //Removing the extension of the file
  const filePath = path.join(postDirectry, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  console.log(postData, "postData");
  return postData;
}

export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((postfile) => getPostData(postfile));

  const sortedPost = allPosts.sort((postA, postB) =>
    postA.d - postB.date ? -1 : 1
  );

  return sortedPost;
}

export function getFeaturedPost() {
  const allPosts = getAllPosts();

  const featuredPost = allPosts.filter((post) => post.isFeatured);

  return featuredPost;
}
