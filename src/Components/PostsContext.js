import { createContext } from "react";
const PostsContext = createContext({
  id: null,
  content: null,
});
export default PostsContext;
