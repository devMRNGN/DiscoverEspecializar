import axios from "axios";

axios.get("https://api.github.com/users/devMRNGN").then((res) => {
  console.log(res.data);
});
