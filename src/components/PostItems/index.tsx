import Skeleton from "react-loading-skeleton";
import { usePostItems } from "../../hooks/usePostItems";
import PostItem from "./PostItem";
import "./index.css";

export default function PostItems() {
  const { posts, onLoadMorePosts, isLoading } = usePostItems();

  return (
    <>
      <button className="load-more-button" onClick={onLoadMorePosts}>
        Load More
      </button>
      {isLoading && (
        <div className="post-item" style={{ height: 200 }}>
          <Skeleton baseColor="#f2f2f2" />
          <Skeleton baseColor="#f2f2f2" />
          <div style={{ height: 10 }} />
          <Skeleton baseColor="#f2f2f2" />
        </div>
      )}
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </>
  );
}
