Mis Contactos
==================

Aplicación para conectar con los contactos en la cuenta de [Alegra](http://www.alegra.com/ "Alegra") a través del API de Alegra. Puedes acceder a la aplicación en [http://myhelloclud.azurewebsites.net](http://myhelloclud.azurewebsites.net "Mis Contactos")

Para empezar
==================

Agregar un contacto
----------------------

Para agregar un contacto ve a [/client/add](http://myhelloclud.azurewebsites.net/client/add) y llena los datos para agregar un nuevo contacto.

Ver un contactos
------------------
En la pagina [/client](http://myhelloclud.azurewebsites.net/client) puedes ver todos los contactos. En esta vista tendras disponible unos botones con las acciones de Agregar, Editar y Borrar un contacto.

Para ver un contacto ve a [/client/show/:id](http://myhelloclud.azurewebsites.net/client/) y puedes ver la información de ese contacto

### Clientes y Proveedores

Los contactos pueden ser de dos tipos, clientes y proveedores. Puedes consultar estos clientes en [/client/clients](http://myhelloclud.azurewebsites.net/client/clients) y [/client/providers](http://myhelloclud.azurewebsites.net/client/providers)

### Buscar un contactos

Puedes buscar un contacto con su nombre, en el menu de navegación, se encuentra el buscador, escribe el nombre de tu contacto y podras obtenerlo en los resultados.

## Editar y Eliminar

En la tabla donde se muestran los contactos al seleccionar uno, se habilitan los botones a las acciones de Editar y Eliminar, aunque tambien puede eliminar un contacto accediendo a [/client/delete/:id](http://myhelloclud.azurewebsites.net/client/) o editarlo en [/client/edit/:id](http://myhelloclud.azurewebsites.net/client/), donde :id es el id del contacto

# Sobre la Aplicación

Aplicación diseñada usando **Zend Framework 1.12.0** y **ExtJs 6.0.0**, ademas del tema de Bootstrap y Font Awesome.
