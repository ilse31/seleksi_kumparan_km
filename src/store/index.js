import axios from "axios";
import { selector } from "recoil";

const dataUser = selector({
  key: "users",
  get: async () => {
    let user = null;
    try {
      let data = await axios.get("https://jsonplaceholder.typicode.com/users");
      user = { user: data };
    } catch (error) {
      console.log(error);
    }
    return user;
  },
});

export { dataUser };
