# UT4-TE1: Administración de servidores web (PostgreSQL)

## Indice

- [Instalación de PostgreSQL + Carga de datos](#instalación-de-postgresql--carga-de-datos)
- [Instalación de pgAdmin + Registro de servidor](#instalación-de-pgadmin--registro-de-servidor)
- [Aplicación PHP en desarrollo](#aplicación-php-en-desarrollo)
- [Aplicación PHP en producción](#aplicación-php-en-producción)
- [Despliegue](#despliegue)

---

## Instalación de PostgreSQL + Carga de datos

La instalación de PostgreSQL la tenemos que hacer tanto en desarrollo como en producción lo cual solo mostraré uno de ellos ya que el proceso es el mismo, por lo tanto, primero realizamos una actualización de los repositorios, instalamos algunos paquetes de soporte,descargamos la clave de firma para el repositorio oficial de PostgreSQL y añadimos el repositorio oficial de PostgreSQL en el sistema.

![](screenshots/1.png)

Actualizamos los repositorios de nuevo. Seguramente dispondremos de más de una versión, por lo tanto con el siguiente comando buscamos que versiones tenemos disponibles y descargamos la última.

![](screenshots/2.png)

Tras la instalación verificamos la que la versión que hemos añadido es la que nosotros deseamos y ,si todo ha ido bien, mostramos el estado del servicio de PostgreSQL

![](screenshots/3.png)

Entraremos a PostgreSQL con el siguiente comando y luego creamos un usuario con contraseña y la base de datos que utilizaremos en este ejercicio.

![](screenshots/4.png)

Salimos de PostgreSQL y volvemos a entrar pero esta vez con el usuario que hemos creado. Creamos la tabla *places* que nos será necesaria para nuestro ejercicio.

![](screenshots/5.png)
![](screenshots/6.png)

Una vez creada la tabla añadimos los datos a la base de datos mediante un archivo *.csv*

![](screenshots/7.png)
![](screenshots/8.png)

Cuando ya tengamos los datos cargados, tenemos que configurar PostgreSQL para que pueda "escuchar" desde cualquier IP ya que por defecto solo permite conexiones desde *localhost*. Para esto debemos modificar una linea específica en el archivo: ` /etc/postgresql/15/main/postgresql.conf `

![](screenshots/9.png)

Luego vamos a permitir el acceso del usuario anteriormente creado a la base de datos desde cualquier IP de origen. Para ello añadimos lo siguiente al final fichero de configuración (`/etc/postgresql/15/main/pg_hba.conf`) :

![](screenshots/10.png)

Tras realizar todas estas configuraciones, reiniciamos el servicio de PostgreSQL para que surtan efecto y comprobamos que ya esta escuchando todas las IPs.

![](screenshots/11.png)

El siguiente paso es crear la aplicación en desarrollo y un host virtual tanto en desarrollo como producción. En el caso de producción el nombre sera `php.travelroad.alu6618.arkania.es` y el de desarrollo `php.travelroad.local`.


![](screenshots/12.png)
![](screenshots/13.png)

Entraremos en el host virtual de desarrollo para probar la aplicación y la conexión con la base de datos de producción y ver que carga bien los datos. La aplicación es realizada en el entorno de desarrollo tal y como se explica [aquí](#aplicación-php-en-desarrollo).

![](screenshots/14.png)


---

## Instalación de pgAdmin + Registro de servidor

Para poder realizar la administación de PostgreSQL instalaremos **pgAdmin** pero antes instalaremos previamente **Python** en nuestro sistema, como se nos es indicado [aquí](https://github.com/sdelquin/pro/blob/main/ut0/python-install.md), para luego proceder con la instalación de pgAdmin.

Lo primero creamos las carpetas de trabajo con los permisos necesarios.

![](screenshots/15.png)

Luego, creamos un entorno virtual en Python e instalamos el paquete *pgadmin4*.  

![](screenshots/16.png)

Tras instalarlo nos pedir unos datos para, posteriormente, entrar a nuestra cuenta. 

![](screenshots/17.png)

Una vez terminemos, nos mostrará lo siguiente, lo cual debemos dejar corriendo, en caso contrario no funcionará pero de momento lo detendremos el proceso.

![](screenshots/17.2.png)

Para poderlo lanzar en modo producción y con garantías, usaremos un procesador de peticiones WSGI llamado *gunicorn*. Lo instalaremos como paquete Python y lo levantaremos
![](screenshots/18.png)

Pero no es ideal tener el proceso *gunicorn* funcionando en una terminal por lo tanto crearemos un servicio del sistema. Para ello creamos el siguiente archivo(`/etc/systemd/system/pgadmin.service`) con el contenido a continuación:

![](screenshots/pgAdmin%20Servicio/1.png)

Recargamos todos los servicios e iniciamos el que acabamos de crear una vez vemos que esta activo, lo habilitamos en caso del reinicio del sistema.

![](screenshots/pgAdmin%20Servicio/2.png)

Para finalizar creamos un host virtual en Nginx para que nos sirva como aplicación web.

![](screenshots/19.png)

Recargamos la configuración de Nginx, levantamos el servicio *pgadmin4* y vamos a la URL especificada.

![](screenshots/20.png)

Registramos el servidor con el nombre de nuestra base de datos.

![](screenshots/21.png)

Y añadimos los datos de nuestra base de datos indicando host, puerto, el nombre de la base de datos y la contraseña.

![](screenshots/22.png)

Cuando le demos a *Save* ya lo tenemos listo para administrar nuestra base de datos.

![](screenshots/23.png)

Por último añadimos el certificado al virtual host

![](screenshots/certificado.png)

---

## Aplicación PHP en desarrollo

Para desplegar nuestra aplicación primero debemos crearla en el entorno de desarrollo y luego llevarla a producción. Para ello nuestra aplicación de PHP debemos instalar el *php8.2-pgsql* para poder realizar la conexión con la base de datos por lo tanto lanzamos el siguiente comando:

`sudo apt install -y php8.2-pgsql`

Una vez instalado, empezamos a realizar nuestra aplicación la cual puede ver el código [aquí](./index.php). Luego tendremos que crear el archivo *config.php* donde insertamos las credenciales para acceder a la base de datos. Este archivo lo leeremos en nuestra aplicación mediante `require_once(<ruta del archivo>)` lo cual lee e importa el archivo dentro de nuestra aplicación para poder usar las variables de la base de datos que hemos definido previamente en el *config.php*


![](screenshots/14.png)


Ya una vez la aplicación completa, lo subiremos a nuestro repositorio de git para pasarlo a producción. Por lo tanto realizaremos los siguientes comandos:




---

## Aplicación PHP en producción



---

## Despliegue

---