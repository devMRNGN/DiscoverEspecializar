import axios from "axios";

async function start() {
  try {
    const url = axios.get("https://api.github.com/users/devMRNGN");
    const urlResponse = await (await url).data;
    const userName = await urlResponse.login;
    const urlRepos = await axios.get(urlResponse.repos_url);
    const userRepos = await urlRepos.data;
    console.log(`The user name is ${userName}\nUser repos ${userRepos}`);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("finished");
  }
}

start();

/* Mayk Brito soluction
async function fetchRepos() {
  try {
    const user = axios.get('https://github.com/users/devMRNGN');
    const repos = axios.get(user.data.repos_url);
    console.log(repos.data);
  } catch(e) => {
    console.log(e);
  } finally {
    console.log('finished');
  }
}


*/
