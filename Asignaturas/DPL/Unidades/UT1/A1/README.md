<div align="justify">

# UT1-A1: Trabajando con git

## Alumnos:

[Víctor Manuel Cabrera Abreu (alu1)](https://github.com/vmcabreu)

[Romen Ramos Díaz (alu2)](https://github.com/RomenRD)

## 1. Crear Repositorio

Creamos el repositorio desde GitHub y lo llamamos git-work. Tras crearlo con un README.md y una licencia MIT lo clonamos a nuestra máquina con `git clone https://github.com/vmcabreu/git-work.git`

### Creación del repositorio:
 <div align="center"> 
<img src="img\0.png">

<img src="img\1.png">
</div>

## 2. Creación de ficheros

Tras crear el repositorio y clonarlo, añadiremos tres ficheros al proyecto: index.html, cover.css,bootstrap.min.css
<div align="center"> 
<img src="img\2.png">
</div>

Después de crear estos ficheros, subiremos los cambios al upstream mediante varios comandos:
- `git add .` Primero preparamos los cambios realizados en nuestro proyecto
- `git commit -m` Confirmamos mediante un commit junto a un mensaje descriptivo de los cambios
- `git push` Finalizamos subimos las modificaciones hechas al upstream

<div align="center"> 
<img src="img\3.png">
</div>

## 3. Fork
Mediante la opción en GitHub de Fork, el alu2 creará un fork del repositorio git-work.

<div align="center"> 
<img src="img\3_1.png">
</div>

Tras esto clonará, el fork para poder colaborar en el proyecto.

## 4. Creación de ramas
Alu2 creará una rama en su repo, llamada custom-text mediante `git branch custom-text`.
Tras la creación de la rama, alu2 se mueve a ella con un `git switch custom-text` y se asegura de que esta en la rama correcta con el comando `git branch` .
El alu2 añadirá cambio al index.html y lo subirá al upstream como ya hicimos antes:
- `git add index.html`
- `git commit -m "Cambios en el index.html"` 
- `git --set-upstream origin custom-text`

## 5. Pull Request
El siguiente paso es que alu2 le solicite un pull request a alu1 mediante la web de GitHub.
Para poder aprobar este Pull Request, alu1 probará los cambios en su máquina. Para ello, alu1 necesita acceder a la rama custom-text en el remoto de alu2.
Por lo tanto alu1 añade el remoto en su máquina (`git add RomenRD https://github.com/RomenRD/git-work.git`) y descargamos la rama que queremos con `git fetch RomenRD custom-text` y ahora alu1 se situa en la rama con `git switch custom-text` y probará los cambios propuestos al proyecto

<div align="center"> 
<img src="img\4_1.png">
</div>

Luego alu1 y alu2 tienen una pequeña conversación sobre los cambios realizados por cada parte.

<div align="center"> 
<img src="img\5.png">
</div>

## 6. Merge

Ambos han hecho varios cambios y el las propuestas hechas por alu2 han convencido a alu1 por lo tanto, este procede al merge.

<div align="center"> 
<img src="img\6.png">
</div>

Tras confirmar el merge, el pull request se cierra y la rama main del proyecto de alu1 se fusiona con los cambios de alu2.

<div align="center"> 
<img src="img\7.png">
</div>


## 7. Conflicto
El proyecto sigue adelante y alu1 cambia la linea 10 del cover.css a:
```css
color: purple;
```

<div align="center"> 
<img src="img\8.png">
</div>

Luego de realizar los cambios, alu1 lo sube al upstream del repositorio y realiza un commit local en el main.

<div align="center"> 
<img src="img\9.png">
</div>

Mientras tanto alu2 crea una nueva rama a la vez que se mueve a ella (`git switch -c cool-colors`), realiza los estos cambios
```css
color: darkgreen;
```
Y los sube a su repositorio y envia un Pull Request para alu1. Este hará lo mismo que la anterior vez, se bajará la rama cool-colors y probara los cambios en su máquina.

<div align="center"> 
<img src="img\10.png">
</div>

Pero, tras probar los cambios propuestos por alu2, hay un conflicto entre el proyecto y el archivo editado del alu2.

<div align="center"> 
<img src="img\11.png">
</div>

Alu1 tendrá que resolver los conflictos de los ficheros para poder realizar el merge. Al parecer el conflicto son los cambios al cover.css por lo tanto hay que resolverlo. 

<div align="center"> 
<img src="img\12.png">

<img src="img\13.png">
</div>

Despues de que alu1 resolviera el conflicto, ya es posible realizar el merge del Pull Request en la rama principal del proyecto.

<div align="center"> 
<img src="img\14.png">
</div>

## 8. Release

Tras todos los cambios realizados por alu1 y alu2, el proyecto esta preparado para su primer lanzamiento. Por ello procedemos al etiquetado de versiones.
La primera versión de este proyecto será la 0.1.0 por lo tanto necesitamos crear la etiqueta para esta versión.

<div align="center"> 
<img src="img\15.png">
</div>

Finalmente tras etiquetar y lanzar el proyecto ya esta disponible en la pestaña de releases del repositorio git-work

<div align="center"> 
<img src="img\16.png">

<img src="img\17.png">
</div>
 
</div>
