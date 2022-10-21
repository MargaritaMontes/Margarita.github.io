let tareas = [
    {materia:"fisica", detalles:"Hacer lab fisica", fecha:new Date(2020, 4, 25)},
    {materia:"mate", detalles:"Hacer lab fisica", fecha:new Date(2020, 4, 25)},
]

let crearTabla = function(lista){
    let stringTabla = <tr><th>Año</th><th>Monto</th></tr>
    for(let tarea of lista){
        let fila = "<tr> <td>"
        fila += tarea.anio;
        fila += "</td>"

        fila += "<td>"
        fila += tarea.monto;
        fila += "</td>"

        fila += "</tr>"
        stringTabla += fila;
    }
    return stringTabla;
};

document.getElementById("tabla").innerHTML = crearTabla(tareas)