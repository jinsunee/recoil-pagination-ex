import { memo } from "react";
import { Post } from "../../../types";

interface Props extends Post {}

function PostItem({ id, title, body }: Props) {
  return (
    <div className="post-item">
      <div className="title'">{title}</div>
      <div className="content">{body}</div>
    </div>
  );
}

export default memo(PostItem);
