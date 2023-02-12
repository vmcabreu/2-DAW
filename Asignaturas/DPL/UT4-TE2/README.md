# UT4-TE2: Framework Web

## Indice

- [Laravel](#laravel)
- [Express](#express)
- [Spring](#spring)
- [Ruby on Rails](#ruby-on-rails)
- [Django](#django)

# Laravel

- [Instalación](#laravel-instalación)
- [Configuración Nginx](#laravel-configuración-nginx)
- [Lógica de Negocio](#laravel-lógica-de-negocio)
- [Depliegue](#laravel-depliegue)
- [Aplicación Desplegada](#laravel-aplicación)

## Laravel: Instalación

El primer framework web con el que interactuaremos sera Laravel, que esta orientado a desarrollar aplicaciones y servicios web con PHP.

El primer paso sera instalar el gestor de dependencias para PHP llamado **Composer**. Tras instalarlo comprobamos su version y luego, como necesitamos que ciertos módulos de PHP este habilitados en el sistema, instalamos algunos paquetes de soporte.

![](screenshots/laravel/0.png)

Ya con todo lo necesario podemos crear la estructura de la aplicación indicando que paquete queremos usar en este caso _laravel/laravel_. Una vez terminado podemos ver el _scaffolding_ o andamio para ya poder empezar a trabajar.

![](screenshots/laravel/1.png)
![](screenshots/laravel/2.png)

Comprobamos dentro de nuestra carpeta de trabajo si se ha instalado **Artisan**, la interfaz de línea de comandos de Laravel. Tras comprobarlo, durante el andamiaje de nuestra aplicación se ha creado un fichero de configuración _.env_ el cual abriremos y modificaremos ciertos valores para especificar las credenciales de acceso a la base de datos de PostgreSQL. En este caso haremos uno en desarrollo y otro en produccion.

![](screenshots/laravel/3.png)

### Config.env Desarrollo

![](screenshots/laravel/4.png)

### Config.env Produccion

![](screenshots/laravel/4%20produccion.png)

## Laravel: Configuración Nginx

Para nuestra configuración de Nginx,primero debemos fijar los permisos adecuados a los ficheros del proyecto para que los servicios tanto de Nginx como PHP-FPM puedan trabajar sin ningún tipo de problema.

![](screenshots/laravel/5.png)

Luego haremos la configuración del virtual host para nuestra aplicación en producción y local.

![](screenshots/laravel/6.png)
![](screenshots/laravel/6%20produccion.png)

Ya creada, comprobamos la sintaxis del archivo y si todo va bien, recargamos el servicio de Nginx y entramos a la URL de nuestra [aplicación](http://laravel.travelroad.alu6618.arkania.es/).

![](screenshots/laravel/7.png)
![](screenshots/laravel/8.png)

## Laravel: Lógica de Negocio

Nos quedaría cambiar el comportamiento de la aplicación para que cargue los datos y los muestre en una plantilla. En este caso tendremos que realizar una serie de pasos para que se nos muestre tal y como se pide.

Primero, dentro de nuestra aplicación, nos moveremos a la carpeta _routes_ y modificaremos el archivo **web.php** para que nos cargue los datos según en que página estemos.

![](screenshots/laravel/10.png)

Luego tenemos que realizar las plantillas que renderiza los datos. Nos moveremos a la carpeta `resources/views/travelroad.blade.php` y crearemos las plantillas, en este caso crearemos 3: El inicio (_travelroad_), lo que hemos visitado (_visited_) y lo que queremos visitar (_wished_).

Por lo tanto la estructura de carpetas nos quedaría como hemos editado en el archivo `routes/web.php`:

![](screenshots/laravel/11.png)

Si quieren echar un ojo al código lo pueden encontrar [aquí]()

Una vez terminado entraremos en el enlace de nuestra aplicación para comprobar que todo esta bien.

![](screenshots/laravel/12.png)
![](screenshots/laravel/13.png)
![](screenshots/laravel/14.png)

Lo último que faltaría es, validar nuestra página mediante **Certbot**:

![](screenshots/laravel/certbot.png)

Y ya tendremos nuestra página certificada

![](screenshots/laravel/final.png)

## Laravel: Depliegue

Por último nos encargaremos del despligue, el cual lo subiremos a nuestro repositorio los cambios en la aplicación para luego desplegarla en producción. Lo primero, tendremos que confirmar que la carpeta _vendor_ esta incluida en el _.gitignore_ ya que este contiene todas las dependencias del proyecto.

![](screenshots/laravel/15.png)

Una vez comprobado, lo subimos a nuestro repositorio y descargamos nuestra aplicación en producción.

![](screenshots/laravel/16.png)

Para instalar de nuevo todas las dependencias debemos realizar el comando _composer install_ para que instale todas las dependencias.

![](screenshots/laravel/17.png)

Pero para automatizar esta tarea crearemos un script en local, el cual actualizará nuestra aplicación conectandose a producción, realizando un _pull_ desde nuestro repositorio e instala las dependencias.

`ssh arkania "cd $(dirname $0)/git/dpl22-23; git pull; cd /UT4/A2/src/laravel/travelroad; composer install;"`

## Laravel: Aplicación

[Travel Road - Laravel](https://laravel.travelroad.alu6618.arkania.es/)

# Express

## Express - Indice

- [Instalación](#express---instalación)
- [Conexión a Base de Datos](#express---conexión-base-de-datos)
- [Rutas](#express---rutas)
- [Vistas](#express---vistas)
- [Despliegue](#express---despliegue)
- [Aplicación](#express---aplicación)

## Express - Instalación

El siguiente framework web a instalar será **Express**.

Nuestro primer paso será instalar **Node.js**, un entorno de ejecución de JavaScript, en nuestro equipo. Esta vez utilizaremos un instalador que nos facilita el añadir los repositorios oficiales de Node.js.

![](screenshots/express/0.png)

Una vez añadidos los repositorios instalamos Node y cuando termine comprobamos la versión para ver si la instalación ha sido realizada con éxito.

![](screenshots/express/1.png)
![](screenshots/express/2.png)

Comenzaremos con andamiaje de nuestro proyecto lo cual usaremos una herramienta llamada _express-generator_ que nos creará la estructura de nuestro poryecto.

![](screenshots/express/3.png)

Una vez instalado, creamos el andamio de nuestra aplicación con el motor de plantillas _Pug_

![](screenshots/express/4.png)

Como podemos ver, la estructura de nuestro proyecto ha sido creada en la carpeta _travelroad/_ tal y como hemos indicado antes.

![](screenshots/express/5.png)

Antes de empezar debemos instalar las dependencias que estan guardadas en el _package.json_ mediante el siguiente comando:

![](screenshots/express/6.png)

Ahora lanzamos la siguiente sentencia: `DEBUG=travelroad:* npm start`.
Esto nos permite probar nuestra aplicación tal y como nos indica en **localhost:3000**

![](screenshots/express/7.png)

Ahora necesitamos configurar la conexión a la base de datos de PostgreSQL por lo tanto añadimos una dependecia llamada _node-postgres_.

![](screenshots/express/8.png)

Luego para las credenciales de la base de datos necesitamos guardalas dentro de un archivo, por lo tanto instalaremos el paquete **dotenv** para poder leer los ficheros _.env_.

![](screenshots/express/9.png)

Ahora añadimos las credenciales de la base de datos a un archivo _.env_ para realizar la conexión con PostgreSQL.

![](screenshots/express/10.png)

## Express - Conexión base de datos

Ahora modificaremos la aplicación para que pueda cargar los datos y que los muestre en pantalla, por lo tanto primero creamos una carpeta _config_ y dentro de este nuevo directorio, creamos el fichero _database.js_ que nos conectará con la base de datos.

![](screenshots/express/11.png)

## Express - Rutas

Luego creamos un archivo en la carpeta _routes_ llamado _index.js_ en el cual requiere el archivo creado previamente para conectarse a la base de datos y realizar la consulta dependiendo en la ruta que estemos.

![](screenshots/express/12.png)

## Express - Vistas

Tras esto creamos las vistas correspondientes en nuestro proyecto.

![](screenshots/express/13.png)
![](screenshots/express/14.png)
![](screenshots/express/15.png)

Y probamos nuestra aplicación en acción para ver si todo ha sido configurado correctamente.

![](screenshots/express/16.png)
![](screenshots/express/17.png)
![](screenshots/express/18.png)

Para gestionar los procesos de nuestra aplicación, haremos uso de **pm2** un gestor de procesos orientado a Node. Por lo tanto lo instalamos y lo ejecutamos en segundo plano en la carpeta de la aplicación. Si entramos en nuestro navegador y vamos a localhost:3000 podemos ver nuestra aplicación corriendo sin problemas.

![](screenshots/express/19.png)
![](screenshots/express/20.png)

Luego creamos nuestro host virtual en Nginx. En este caso los nombraremos _express.local_ para nuestra máquina de **desarrollo** y _express.travelroad.alu6618.arkania.es_ en **producción**

![](screenshots/express/21.png)
![](screenshots/express/22.png)

Con todo configurado pasaremos nuestra aplicación por **Certbot** para que valide nuestra página:

![](screenshots/express/certbot.png)

Y tras esto nuestra aplicación web ya tiene certificado:

![](screenshots/express/final.png)

## Express - Despliegue

Como en el framework anterior crearemos un script de despliegue en local para que se actualice nuestra aplicación en producción, este lo que hará será actualizar, si no tiene las dependencias instalarlas con _npm install_ y reiniciar el gestor de procesos **pm2**.

`ssh arkania "cd $(dirname $0)/git/dpl22-23; git pull; cd /UT4/A2/src/express/travelroad; npm install; pm2 restart travelroad --update-env;"`

## Express - Aplicación:

[Travel Road - Express](https://express.travelroad.alu6618.arkania.es/)

# Spring

## Spring - Indice

- [Instalación](#spring---instalación)
- [Creación del Proyecto](#spring---creación-proyecto)
- [Compilación](#spring---compilación)
- [Despliegue](#spring---despliegue)
- [Aplicación](#spring---aplicación)

## Spring - Instalación

El siguiente framework a trabajar será **Spring** orientado a aplicaciones y webs basadas en **Java**.

Necesitaremos el **JDK** _(Java Development Kit)_ o en su defecto la versión _open source_ llamada **OpenJDK**. Lo descargaremos desde la página oficial de OpenJDK y lo enviamos a la carpeta temporal.

![](screenshots/spring/0.png)

Una vez descargado lo descomprimimos en la carpeta _/usr/lib/jvm_

![](screenshots/spring/1.png)

Comprobamos que todo ha sido descomprimido correctamente.

![](screenshots/spring/2.png)

Para que el OpenJDK funcione correctamente debemos realizar dos pasos, primero, establecer variables de entorno en _/etc/profile.d/jdk_home.sh_ indicando donde se encuentran los ejecutables de Java y segundo, actualizar las alternativas de los ejecutables los cuales son _java_, la herramienta para ejecutar los programas hechos en Java y _javac_, el compilador de Java.

![](screenshots/spring/3.png)
![](screenshots/spring/4.png)

Una vez hecho, comprobamos las versiones de Java y Javac que tenemos instaladas. Si todo fue bien, cerraremos y abriremos de nuevo la sesión de usuario para que los cambios se apliquen.

![](screenshots/spring/5.png)

### SDKMAN

Nuestro siguiente paso será instalar **SDKMAN**, una herramienta que permite gestionar versiones de kits de desarrollo de software en los cuales está incluido Java. Para ello primero instalaremos **.zip**

![](screenshots/spring/6.png)

Luego ejecutamos el siguiente script, para realizar la instalación de SDKMAN

![](screenshots/spring/7.png)
![](screenshots/spring/8.png)

Activamos el punto de entrada para la herramienta y si no ha dado ningún problema, comprobamos la versión para afirmar que se ha instalado correctamente.

![](screenshots/spring/9.png)

Ahora con **SDKMAN** instalaremos dos herramientas importantes para nuestro proyecto. **SpringBoot** una herramienta que facilita la preparación de aplicaciones Spring para producción y **Maven** el cual sería el constructor de proyectos y el que permite la gestión de las dependencias.

### SpringBoot

![](screenshots/spring/10.png)
![](screenshots/spring/11.png)

### Maven

![](screenshots/spring/12.png)
![](screenshots/spring/13.png)

---

## Spring - Creación Proyecto

Con todo instalado, empezamos a crear el proyecto como los anteriores frameworks, primero la estructura la cual la realizaremos con **SpringBoot** y usará **Maven** para las dependencias y construir la aplicación.

![](screenshots/spring/14.png)
![](screenshots/spring/15.png)

Ahora dentro de la carpeta _src/main_ organizaremos los distintos módulos los cuales son el **Modelo,Controlador y las Plantillas**. Por lo tanto creamos las carpetas y los archivos correspondientes para luego configurarlos

![](screenshots/spring/16.png)
![](screenshots/spring/17.png)

Primero empezaremos por el **Controlador** el cual se alojará en el archivo _HomeController.java_. Será el encargado en solicitar los datos que necesitaremos de la base de datos a nuestra aplicación.

![](screenshots/spring/18.png)

Lo siguiente será el **Modelo**, la cual realizaremos la clase _Place_ donde se guardará el nombre del sitio y un booleano el cual nos indicará si ha sido visitado o no y los métodos que nos ayudarán a modificar o conseguir estos datos.

![](screenshots/spring/19.png)

Luego en la carpeta _/repositories_, el archivo _PlaceRepository.java_ realizará la consulta de seleccionar todo aquellos lugares los cuales se han o no visitado y devolverá una lista con objetos de la clase _Place_.

![](screenshots/spring/20.png)

Lo que quedaría sería realizar las plantillas, el cual utilizaremos un motor moderno de plantillas llamado _Thyleaf_. Por lo tanto crearemos 3 plantillas: home,visited,wished.

### Home

![](screenshots/spring/21.png)

### Visited

![](screenshots/spring/22.png)

### Wished

![](screenshots/spring/23.png)

Por último, creamos las credenciales para que nuestra aplicación pueda conectarse a nuestra base de datos.

### Desarrollo

![](screenshots/spring/24.png)

### Producción

![](screenshots/spring/24produccion.png)

## Spring - Compilación

Para poner en funcionamiento nuestra aplicación, en nuestra carpeta de proyecto lanzamos el comando `./mvnw package` y el resultado será un _.jar_

![](screenshots/spring/25.png)

Para lanzar la aplicación lanzaremos el _.jar_ generado `java -jar target/travelroad-0.0.1-SNAPSHOT.jar` en el cual podremos acceder en la dirección _localhost:8080_ y probar la aplicación, pero crearemos un script para que realice los pasos del proceso de construcción.

![](screenshots/spring/26.png)

Le asignamos permisos de ejecución al script y creamos un fichero de servicio pero para usuario asi podremos desplegarlo más adelante:

![](screenshots/spring/27.png)

Recargamos todos los servicios, activamos nuestro nuevo servicio y lo habilitamos para que cuando reiniciemos el equipo, el servicio se active automáticamente.

![](screenshots/spring/28.png)

Cuando tengamos todo listo realizamos el host virtual en Nginx tanto en desarrollo como en producción.

### Desarrollo

![](screenshots/spring/29.png)

### Producción

![](screenshots/spring/29%20produccion.png)

Y la tras comprobar la sintaxis y recargar el servicio Nginx probamos nuestra aplicación.

![](screenshots/spring/30local.png)
![](screenshots/spring/30produccion.png)

Ahora como último paso utilizamos Certbot para que nuestra aplicación este certificada.

![](screenshots/spring/31certbot.png)
![](screenshots/spring/32.png)

## Spring - Despliegue

Para desplegar nuestra aplicación usaremos un _script_ llamado **deploySpring.sh** al cual le pasaremos los siguientes comandos:

```
#!/bin/bash

ssh arkania "
  cd $(dirname $0)/git/dpl22-23
  git pull
  systemctl --user restart travelroad.service
"
```

## Spring - Aplicación

[Travel Road - Spring](https://spring.travelroad.alu6618.arkania.es/)

# Ruby on Rails

## RoR - Indice

- [Instalación](#ror---instalación)
- [Creación Aplicación](#ror---creando-aplicación)
- [Lógica de negocio](#ror---lógica-de-negocio)
- [Configuración Nginx](#ror---configuración-nginx)
- [Resultados](#ror---resultados)

## RoR - Instalación

Para trabajar con **Ruby on Rails** primero necesitamos el Ruby Version Manager que nos permite gestionar, instalar y trabajar con múltiples entornos de **Ruby**. Nuestro primer paso será añadir las claves GPG y luego lanzar el script de instlación 

![](screenshots/rubyrails/0.png)
![](screenshots/rubyrails/1.png)

Comprobamos que todo ha ido bien lanzando el comando `rvm --version` y si nos muestra la versión entonces ya podemos empezar a instalar **Ruby** usando **RVM**

![](screenshots/rubyrails/2.png)

Tras instalar *Ruby* establecemos la versión por defecto y comprobamos la version tanto de Ruby como de **Gem**, el gestor de paquetes

![](screenshots/rubyrails/4.png)

Ahora mediante Gem, instalamos **Ruby on Rails** y comprobamos la versión para ver si lo hemos instalado con éxito.

![](screenshots/rubyrails/5.png)
![](screenshots/rubyrails/6.png)

Para pasos posteriores tenemos que instalar un par de paquetes en el sistema, en este caso para acceso a base de datos **PostgreSQL**

![](screenshots/rubyrails/7.png)

## RoR - Creando Aplicación

Ya una vez todo configurado y descargado podemos empezar a crear nuestra aplicación en *RoR*, por lo tanto empezamos creando el andamieaje de nuestro proyecto indicando la base de datos que usaremos.

![](screenshots/rubyrails/8.png)

Tras la creación debemos borrar *.git* dentro de la carpeta del proyecto ya que para luego subir los cambios a nuestro repositorio, nos daría conflicto. 

Luego configuramos las credenciales para poder acceder a la base de datos.

![](screenshots/rubyrails/10.png)

Luego probamos que todo funciona lanzando la aplicación con el siguiente comando y luego iremos a nuestro navegador y entraremos a *localhost:3000* ya que es donde nuestra aplicación esta funcionando.

![](screenshots/rubyrails/11.png)
![](screenshots/rubyrails/12.png)

## RoR - Lógica de negocio

Ahora empezaremos a crear la aplicación.

Lo primero que editaremos serán las ruta, lo cual cargará la vista dependiendo en que ruta estemos.

![](screenshots/rubyrails/13.png)

Luego creamos el modelo mediante la herramienta que nos proporciona *RoR*

![](screenshots/rubyrails/14.png)

Ahora nuestro siguiente paso será el controlador, nuestro código base será creado, como hicimos anteriormente, mediante las herramientas que nos proporciona *RoR*

![](screenshots/rubyrails/15.png)

Aquí definimos que consulta realizaremos

![](screenshots/rubyrails/16.png)

Lo único que nos quedaría sería crear las vistas, tanto para *visited*,*wished* y *index*

### Index

![](screenshots/rubyrails/17.png)

### Wished

![](screenshots/rubyrails/18.png)

### Visited

![](screenshots/rubyrails/19.png)

Una vez creadas las vistas, modificamos el fichero *config/environments/development.rb* y deshabilitamos las migraciones ya que tenemos una base de datos y tabla ya creadas.

![](screenshots/rubyrails/20.png)

Ahora solo queda probar la aplicación levantando el servidor en desarrollo (`bin/rails server`)

![](screenshots/rubyrails/21.png)

## RoR - Configuración Nginx

Para conectar Nginx con Ruby on Rails necesitamos el módulo **Passanger**

![](screenshots/rubyrails/22.png)

Luego instalaremos las dependencias del módulo para el proceso de compilación de después.

![](screenshots/rubyrails/23.png)
![](screenshots/rubyrails/24.png)

Para poder compilar el módulo, descargaremos la versión de Nginx que tengamos instalada en nuestro sistema y compilamos y creamos el módulo.

![](screenshots/rubyrails/25.png)

Cuando termine nos creará un fichero llamado `ngx_http_passenger_module.so` lo cual copiamos y pegamos en la carpeta donde se cargan los módulos de Nginx y configuramos */etc/nginx/nginx.conf* para que cargue el módulo de **Passanger**

![](screenshots/rubyrails/26.png)

El siguiente paso será conseguir la ruta raíz del **Passanger** y volvemos a editar el */etc/nginx/nginx.conf* en este caso añadiendo el *passenger_root* dentro del bloque *http{ }*

![](screenshots/rubyrails/27.png)

Comprobamos la sintaxis de nuestras modificaciones con `sudo nginx -t`, si todo esta correcto procedemos a configurar nuestro host virtual en desarrollo.

![](screenshots/rubyrails/28.png)

Y por último probar en local si todo ha ido bien

![](screenshots/rubyrails/29.png)

## RoR - Resultados

Lamentablemente no podremos desplegarla en producción ya que la máquina no tiene la suficiente la capacidad para realizar algunos de los pasos anterior y por lo tanto peta. 


# Django

## Django - Índice

- [Instalación](#django---instalación---instalación)
- [Código de Aplicación](#django---código-de-aplicación)
- [Entorno de Producción](#django---entorno-de-producción)
- [Script Despliegue](#django---script-de-despliegue)
- [Aplicación](#django---aplicacion)

## Django - Instalación

Nuestro último framework será **Django**, escrito en **Python**.

Si no tienen **Python** instalado, lo mejor será instalarlo primero para poder seguir, en caso contrario creamos y activamos un entorno virtual para aislar las dependencias de nuestro proyecto.

Para crear el entorno virtual lanzamos el siguiente comando y luego lo activamos:

`python -m venv --prompt travelroad .venv`

![](screenshots/django/0.png)

Una vez activado, instalamos Django mediante el gestor de paquetes **pip** y comprobamos la versión de Django para comprobar que todo se ha instalado con éxito

![](screenshots/django/1.png)               
![](screenshots/django/2.png)

Creamos nuestro proyecto mediante la herramienta *django-admin* que nos proporciona la creación de la estructura de nuestro proyecto.

![](screenshots/django/3.png)

Como prueba iniciamos el servidor de desarrollo con la herramienta *manage.py* y accedemos al *localhost:8000*.

![](screenshots/django/4.png)

## Django - Código de aplicación

Ya que un proyecto en Django esta formado por "aplicaciones", crearemos nuestra aplicación.

![](screenshots/django/5.png)

Para que Django sea consciente de nuestra aplicación, la añadimos a `main/settings.py`:

![](screenshots/django/6.png)

Si queremos tener acceso a nuestra base de datos instalaremos un paquete llamado *psycopg* el cual permite conectar Python con PostgreSQL

![](screenshots/django/7.png)

Añadimos las credenciales para conectar con nuestra base de datos.

![](screenshots/django/8.png)

Comprobamos que la sintaxis de nuestros cambios fue correcta mediante:

![](screenshots/django/9.png)

Ahora creamos el modelo de lugares:

![](screenshots/django/10.png)

Creamos la vista que gestionará las peticiones:

![](screenshots/django/11.png)

Y a continuación creamos las plantillas de nuestra aplicación:

![](screenshots/django/12.png)
![](screenshots/django/12visited.png)
![](screenshots/django/12wished.png)

Para que se muestre estas plantillas, necesitamos vincular cada URL con la vista que la gestionará.

![](screenshots/django/13.png)

Y ahora enlazamos las URLs desde el fichero principal:

![](screenshots/django/14.png)

Ahora probamos nuestra aplicación en local para comprobar que todo funciona perfectamente.

![](screenshots/django/15.png)
![](screenshots/django/15visited.png)
![](screenshots/django/15wished.png)

Como último paso queremos que las credenciales de la base de datos sea un elemento configurable dependiendo de en que entorno estemos trabajando, por lo tanto instalaremos el paquete *prettyconf*, mediante el comando `pip install prettyconf`, para cargar variables de entorno mediante un fichero de configuración.

Para que el *prettyconf* funcione modificamos el fichero `main/settings.py` de tal manera:

![Alt text](screenshots/django/15.1.png)
![Alt text](screenshots/django/15.2.png)

## Django - Entorno de producción

En producción pasaremos nuestros cambios desde local mediante un `git pull` evitando que se envie el entorno virtual. Por lo tanto tenemos que crearlo en producción y activarlo. Una vez creado y activado realizamos un *pip install -r* de un archivo de texto que hemos llamado *requirements.txt* el cual debemos añadir todas las dependencias que hemos instalado anteriormente.

![](screenshots/django/16.png)

Crearemos un archivo *.env* con las credenciales de la base de datos. Este archivo quedara fuera del control de versiones.

![](screenshots/django/17.png)

Para poder desplegar la aplicación en Django instalamos *gunicorn*, como servidor **WSGI** *(Web Server Gateway Interface)*, y lanzamos un script de gestión que nos permite lanzar el servidor.

![](screenshots/django/18.png)

Para poder gestionar el servidor WSGI y mantenerlo activo instalaremos un sistema cliente/servidor llamado  **Supervisor**, si todo fue bien buscaremos el servicio de Supervisor mediante *systemctl*

![](screenshots/django/19.png)

Supervisor viene con la herramienta *supervisorctl*, pero no tendremos los permisos necesarios para usarla:

![](screenshots/django/20.png)

Por lo tanto añadimos el grupo *supervisor* mediante `sudo groupadd supervisor` y editamos la configuración:

![](screenshots/django/21.png)

Reiniciamos el servicio para que los cambios se apliquen y añadimos a nuestro usuario al grupo de *supervisor*

![](screenshots/django/22.png)

Cerraremos sesión y volveremos a entrar para que los cambios surtan efecto y como podemos ver ya tenemos los permisos necesarios para usar la herramienta *supervisorctl*

![](screenshots/django/23.png)

Luego creamos un script de servicio para levantar *gunicorn*

![](screenshots/django/24.png)

y creamos la configuración de un proceso supervisor que lance el servicio WSGI para la aplicación Django.

![](screenshots/django/25.png)

Añadimos este proceso:

![](screenshots/django/26.png)

Y por último creamos el host virtual de Nginx y probamos la aplicación:

![](screenshots/django/27.png)

Si todo funciona correctamente usaremos certbot para que nuestra aplicación tenga la certificación:

![](screenshots/django/29.png)

## Django - Script de despliegue

Creamos el script de despliegue:

![](screenshots/django/28.png)


## Django - Aplicacion

[Travel Road - Django](https://django.travelroad.alu6618.arkania.es)




---
