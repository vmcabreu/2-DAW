# UT3-TE1: Administración de servidores web

---

## Índice

- [Instalación y carga del módulo](#instalación-y-carga-del-módulo)
- [Creación del virtual host](#creación-del-virtual-host)
- [Implementación de la aplicación](#implementación-de-la-aplicación)
- [Certificado de seguridad](#certificado-de-seguridad)
- [Redirección www](#redirección-www)

---

## Instalación y carga del módulo

Realizaremos una instalación de un módulo y lo cargaremos dinámicamente en Nginx. Lo primero realizaremos unos preparativos en nuestro virtual host para que la instalación del módulo sea un éxito.

```
sudo apt update
sudo apt install gcc
sudo apt install libpcre3-dev
```

Instalamos el gcc para tener un compilador de C y las librerías de desarrollo de pcre, sino el proceso fallará

Tras realizar estas instalaciones comenzamos:

Primero descargamos el código fuente de Nginx y lo pondremos en la carpeta temporal. Tenemos que instalar la misma versión que tenemos instalado en el sistema

![](screenshots/1.png)

Luego descargamos el módulo de ngx_small_light, clonando el repositorio de este y añadiendolo a la carpeta temporal de la máquina

![](screenshots/2.png)

Tras completar estos pasos necesitaremos unas dependencias obligatorias para que el ngx_small_light funcione. Estas dependencias son:

- [PCRE](http://www.pcre.org/)
- [ImageMagick](http://www.imagemagick.org/script/index.php)
- [Imlib2 (opcional)](http://docs.enlightenment.org/api/imlib2/html/)
- [GD  (opcional)](https://bitbucket.org/)

Empezaremos instalando el PCRE, actualizmos los repositorios y lo instalamos:

![](screenshots/3.png)

---

Tras instalar PCRE, instalaremos el ImageMagick, clonamos el repositorio de esta dependencia:

![](screenshots/4.png)

---
Nos movemos a la carpeta de la dependencia y lanzamos el comando para configurarla:

![](screenshots/5.png)

---

Si lo intentamos compilar nuestro *virtual host* no tiene instalado el comando *make* por lo tanto lo instalaremos mediante el build-essentials  

![](screenshots/6.png)

Nos encontraremos con otro problema el cual es:

```
/bin/bash: ./libtool no such file or directory
```
Para solucionar este problema tuve que instalar libtool reconfigurar la dependencia y lanzar el comando:

![](screenshots/7.png)

---

Todo correcto. Ahora instalamos la dependencia sin problemas

![](screenshots/8.png)

---

Tras terminar la instalación, configurados el linkeado dinámico (*dynamic linker run-time bindings*) y probamos si funciona y efectivamente, todo funciona a la prefección.

![](screenshots/9.png)

## Creación del virtual host


images.alu6618.arkania
`scp -r -P2222 dev/ victor@alu6618.arkania.es:/home/victor/`

## Implementación de la aplicación
 
## Certificado de seguridad

## Redirección www