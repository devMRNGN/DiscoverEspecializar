const url = "http://localhost:5500/api";

function getUsers(url) {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data);
    })
    .catch(error => console.error(error));
}

function addNewUser(url, person) {
    axios.post(url, {
        "name": person.name,
        "avatar": person.avatar,
        "city": person.city
    })
    .then(response => console.log(response))
    .catch(error => console.error(error));
}

function deleteUser(url, ids) {
    for(let id of ids) {
        axios.delete(`${url}/${id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error));
    }
   
}

function getUser(url, id) {
    axios.get(`${url}/${id}`)
    .then(response => response.data)
    .then(data => {
        const name = data.name;
        const city = data.city;
        const avatar = data.avatar;
        userName.textContent = name;
        userCity.textContent = city;
        userAvatar.scr = avatar;
        userAvatar.alt = `foto de ${name}`
    })
    .catch(error => console.error(error));
}

function updateUser(url, id, person) {
    axios.put(`${url}/${id}`, person)
    .then(response => alertApi.textContent = `Status função atual (${response.data})`)
    .catch(error => console.error(error));
}

const userUpdated = {
    name: "Mayra unicorninha",
    city: "Cornolandia",
    avatar: "Algum link imaginario"
}

getUser(url, 1);
updateUser(url, 1, userUpdated)