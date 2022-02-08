# Demo de iframe con alto ajustado al contenido

En esta demo un sitio (http://localhost:8080 servido desde `./host`) carga un iframe
de un origen distinto (http://localhost:8081 servido desde `./iframe`), cuyo alto es
ajustado dinámicamente de acuerdo a su contenido, evitando la barra de scrolling
vertical en el iframe.

Para correr la demo se debe ejecutar `docker-compose up`. Esto creará un contenedor para
cada sitio.

Ir a http://localhost:8080 en el navegador para ver la demo.
