const tabla = document.getElementById('table');
let libros = [];

fetch('http://localhost:5086/api/libroautor')
    .then(response => response.json())
    .then(response => {
        libros = response;
        llenarTabla(libros);
    })
    .catch(error => console.error('Error al obtener los libros:', error));



const llenarTabla = (response) => {
    const tbody = document.getElementById('tbody');
    tbody.innerHTML = ""; // Limpiar el tbody antes de volver a llenarlo

    for(i = 0; i< response.length; i++){
        htmlCode = '<tr>'+
                        "<td>" + response[i].title + "</td>" +
                        "<td>" + response[i].author + "</td>" +
                        "<td>" + response[i].chapters + "</td>" +
                        "<td>" + response[i].pages + "</td>" +
                        "<td> $ " + response[i].price + "</td>" +
                    "</tr>";
        tbody.insertAdjacentHTML("beforeend", htmlCode);
    }
}    

const filtrarPorTitulo = () => {
    const filtroTitulo = document.getElementById('filtroTitulo').value.toLowerCase();
    const librosFiltrados = libros.filter(libro => libro.title.toLowerCase().includes(filtroTitulo));
    llenarTabla(librosFiltrados);
};

// Llenar la tabla con todos los libros al inicio
llenarTabla(libros);