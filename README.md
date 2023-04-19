API - ANGULAR MATERIAL _ HTTPCLIENT

Se consume api y se muestran la info
Prueba Técnica Desarrollador Angular

Nombre de la Prueba: Equipos de Fútbol
Objetivo de la Prueba: evaluar las habilidades técnicas que posee el candidato en
el lenguaje Angular al nivel requerido para el cargo.
Lenguajes de Programación Evaluados: Angular.
Tiempo Estimado: 2 horas
Descripción del Problema
La FIFA nos ha contratado para que implementemos una aplicación web que le
permita llevar el registro de los equipos de fútbol.
Las necesidades definidas por el cliente son las siguientes:
1. Implementar una pantalla que permite visualizar el listado de Equipos
registrados en el sistema.
2. Formulario que permita realizar el registro de un nuevo Equipo.
3. Formulario que permita modificar la información del Equipo seleccionado.
4. Un botón que permita eliminar el Equipo seleccionado.
5. Consultar equipos a través de los siguientes campos:
○ Id.
○ Fecha de fundación (rango inicio y fin) formato: DD-MM-YYYY.
Definición Técnica:
Un equipo almacena la siguiente información:
● Nombre
● Estadio
● Sitio Web
● Nacionalidad
● Año de Fundación
● Entrenador
● Capacidad
● Valor
Autenticación:
● Los servicios de consulta son públicos.
● Los servicios de creación, modificación y eliminación requieren login.
◦ Usuario: cualquiera
◦ Password: cualquiera

API RESTful para consumir:
URL: https://wo-fifa.azurewebsites.net/
Método
HTTP

URI Descripción

POST /login Permite loguearse
frente al sistema.
POST /logout Permite cerrar la

sesión.
GET /equipos/listar Recupera los
equipos registrados
en la base de datos.
POST /equipos/crear Registra un nuevo
equipo en la Base
de Datos.
GET /equipos/consultar/{fechaInicio}/{fechaFin} Recupera los
equipos cuya fecha
de fundación se
encuentra entre las
dos fechas
recibidas.
GET /equipos/consultar{id} Recupera el
proveedor a partir
de su id.
PUT /equipos/actualizar/{id} Actualiza la
información de un
equipo.

DELETE /equipos/eliminar/{id} Elimina el equipo
con el id recibido.
A manera de guía para el consumo de los servicios REST, se hace entrega al
aspirante de un proyecto de Insomnia donde se consume cada uno de los servicios
web. Allí es posible observar la manera de invocar cada servicio, sus parámetros de
entrada y el resultado arrojado por cada uno.

Artefactos a Entregar:
1. Proyecto Angular con las pantallas implementadas.
