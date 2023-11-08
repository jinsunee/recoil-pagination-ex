import axios from "axios";
import { atom, selector } from "recoil";
import { paginationLimit } from "../constants/limit";
import { Post } from "../types";

export const startPageStateAtom = atom<number>({
  key: "startPageState",
  default: 0,
});

export const postsAtom = atom<Post[]>({
  key: "postsAtom",
  default: [],
});

export const fetchPostsSelector = selector<Post[]>({
  key: "fetchPostsSelector",
  get: async ({ get }) => {
    const startState = get(startPageStateAtom);

    const response = await axios.get<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?_start=${startState}&_limit=${paginationLimit}`
    );

    return response.data;
  },
});
