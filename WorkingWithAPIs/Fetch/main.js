const url = "http://localhost:5500/api"

function getUsers(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser(url) {
    fetch(`${url}/18`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name;
        userCity.textContent = data.city;
        userAvatar.scr = data.avatar;
    })
    .catch(error => console.error(error));
}

function addUser(newUser, url) {
    fetch(url, {
        method: "POST", 
        body: JSON.stringify(newUser), 
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error));
}

const newUser = {
    name: "João Marangoni",
    avatar: "https://picsum.photos/200/300",
    city: "Mogi Mirim"
}

function updateUser(updateUser, url) {
    fetch(`${url}/1?`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const updateUser = {
    name: "Luiz Marangoni",
    avatar: "https://picsum.photos/200/300",
    city: "Mogi Mirim"
}

function deleteUser(url, id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error));
}

deleteUser(url, 1)
updateUser(updateUser, url);
addUser(newUser, url);
getUsers(url);
getUser(url);