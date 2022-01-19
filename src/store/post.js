import axios from "axios";
import { selector } from "recoil";

const dataPost = selector({
  key: "posts",
  get: async () => {
    let post = null;
    try {
      let data = await axios.get("https://jsonplaceholder.typicode.com/posts");
      post = { post: data };
    } catch (error) {
      console.log(error);
    }
    return post;
  },
});

export { dataPost };
