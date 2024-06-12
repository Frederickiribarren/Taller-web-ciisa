function eliminarFila(element){
    $(element).parent().parent().remove()
}


function agregarFilaTabla(form) {
    var name = "<td>" + form[0].value + "</td>"
    var seccion = "<td>" + form[1].value + "</td>"
    var profesor = "<td>" + form[2].value + "</td>"
    var nota = "<td>" + form[3].value + "</td>"
    var accion = "<td><button onclick=\"eliminarFila(this)\" class=\"btn btn-outline-warning\">Hakai</button></td>"
    var htmlFila = "<tr>" + name + seccion + profesor + nota + accion + "</tr>"

    $("#periodica").append(htmlFila)

}