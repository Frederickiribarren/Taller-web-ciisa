$(document).ready(function(){
    $.ajax({
        url:'https://huachitos.cl/api/animales',
        datatype:'json',
        success:function(data){
            var animales = data.data
            console.log(animales)
            for(var i = 0; i < animales.length; i++){
                var fila = ""
                fila = "<tr><td>"+animales[i].nombre+"</td><td>"+animales[i].tipo+"</td><td>"+animales[i].genero+"</td><td>"+animales[i].edad+"</td><td>"+animales[i].vacunas+"</td></tr>"
                $("#mascot").append(fila)
            }

            document.getElementById('tbody').innerHTML = fila

            new DataTable('#mascot', {
                "data": animales,
                "columns": [
                    {"data" : 'nombre'},
                    {"data" : 'tipo'},
                    {"data" : 'genero'},
                    {"data" : 'edad'},
                    {"data" : 'vacunas'}
            
                ],
                layout: {
                    topStart: {
                        buttons: ['copyHtml5', 'excelHtml5', 'csvHtml5', 'pdfHtml5']
                    }
                }
            
            })
        }
    })
})


