import { useEffect } from "react";
import {
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
} from "recoil";
import { fetchPostsSelector, postsAtom, startPageStateAtom } from "../states";

export function usePostItems() {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const fetchNewPostsLoadable = useRecoilValueLoadable(fetchPostsSelector);
  const [, setStartPage] = useRecoilStateLoadable(startPageStateAtom);

  const handleLoadMorePosts = () => {
    setStartPage((prev) => prev + 5);
  };

  useEffect(() => {
    if (
      fetchNewPostsLoadable.state === "hasValue" &&
      !!fetchNewPostsLoadable.contents.length
    ) {
      setPosts((prev) => [...fetchNewPostsLoadable.contents, ...prev]);
    }
  }, [fetchNewPostsLoadable, setPosts]);

  return {
    ...fetchNewPostsLoadable,
    isLoading: fetchNewPostsLoadable.state === "loading",
    onLoadMorePosts: handleLoadMorePosts,
    posts,
  };
}
