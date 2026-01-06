import { useContext } from "react";
import Post from "./post";
import { Postlist as postlistdata } from "../store/post-list-store";
const postlist = () => {
  const {postlist} =  useContext(postlistdata);
  return (
    <>
      <h2>Wellcome to create your first Post </h2>
      <div className="postlist">
        {postlist.map((post) => (<Post key = {post.id} post = {post}/>))}
      </div>
    </>
  );
};
export default postlist;
