const botonBuscar = document.querySelector("#botonBuscar");

const listarAlbumes = (event) => {
    event.preventDefault();

    axios.get("https://jsonplaceholder.typicode.com/users/" + usuario + "/albums")
        .then(respuesta => {

            let contenidoTabla = document.querySelector("#contenidoTabla");
            contenidoTabla.innerHTML = "";

            contenidoTabla.innerHTML += "<tr><td>" + "<input type='checkbox'>" + "</td>"
                + "<td>" + albumes.id + "</td>"
                + "<td> " + albumes.userId + "</td>"
                + "<td> " + albumes.title + "</td>"
                + "</tr>"

        })
        .catch(error => console.log(error));
}

botonBuscar.addEventListener("click", listarAlbumes);



const llenarCombo = (event) => {
    event.preventDefault();

    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => {

            console.log(respuesta);
            let comboUsers = document.querySelector("#comboUsers");
            comboUsers.value = window.localStorage.getItem("#comboUsers");
            comboUsers.innerHTML += "<option value=" + user.id + ">" + user.name + "</option>";

        })

        .catch(error => console.log(error));
}

window.addEventListener("load", llenarCombo)