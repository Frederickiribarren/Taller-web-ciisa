$(document).ready(function(){
    $.ajax({
        url:'https://huachitos.cl/api/animales',
        datatype:'json',
        success:function(data){
            var animales = data.data


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


