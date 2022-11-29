<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset= "UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href=" ">
    <title>Ejercicio 1 - GRUD</title>
    <script>
        function eliminarProducto(id){
            var confirmar=confirm("Estas seguro que quieres eliminar el producto "+id+"?");
            if (confirmar) {
                var form=document.createElement("form");
                form.setAttribute("action","../controlador/Productos/eliminar.php");
                form.setAttribute("method","post");
                form.setAttribute("enctype","multipart/form-data");
                let input=document.createElement("input");
                input.setAttribute("name","id");
                input.setAttribute("value",id);
                form.appendChild(input);
                fetch(form.action,{
                    body: new FormData(form),
                    method: "post"
                }).then( respuesta => respuesta.text()).then(
                    respTxt => {
                        try{
                            var resultado = JSON.parse(respTxt).resultado;
                        } catch(e){
                            console.log("Error en cadena JSON: "+respTxt);
                        }
                        if(resultado==true){
                            alert("Producto "+id+" eliminado exitosamente. ");
                        }else{
                            alert("Error eliminando producto "+id);
                        }
                    }
                )
                window.location.reload();
            }
        }
    </script>
</head>
<body>
    <h1>Catálogo de Productos - Impresa S.A</h1>
    <table>
        <tr><th>ID</th><th>Descripción</th><th>Nombre</th><th>Precio</th><th>Imagen</th></tr>
    <?php
    
    ?>
    </table>
</body>
</html>