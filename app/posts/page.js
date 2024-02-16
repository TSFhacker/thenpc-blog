import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

export const metadata = {
  title: "All posts",
  description: "All the blog posts that Dung Bui has written!",
};

export default function AllPostsPage() {
  const allPosts = getAllPosts();
  return <AllPosts posts={allPosts} />;
}
