import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData } from "@/lib/posts-util";

export async function generateMetadata({ params }) {
  const { postSlug } = params;

  const postData = getPostData(postSlug);

  return {
    title: postData.title,
    description: postData.excerpt,
  };
}

export default function PostDetailPage({ params }) {
  const { postSlug } = params;

  const postData = getPostData(postSlug);

  return <PostContent post={postData} />;
}
