# Demo de iframe con alto ajustado al contenido

En esta demo un sitio (http://localhost:8080 servido desde `./host`) carga un iframe
de un origen distinto (http://localhost:8081 servido desde `./iframe`), cuyo alto es
ajustado dinámicamente de acuerdo a su contenido, evitando la barra de scrolling
vertical en el iframe.

Para ejecutar la demo crear dos servidores con live-server:

- Servidor del host (http://localhost:8080):

  ```
  docker run --rm --name host-server -w /src -v $(pwd)/host:/src -p 8080:8080 node npx live-server
  ```

- Servidor para el sitio del iframe (http://localhost:8081)
  ```
  docker run --rm --name iframe-server -w /src -v $(pwd)/iframe:/src -p 8081:8080 node npx live-server
  ```

Ir a http://localhost:8080 en el navegador para ver la demo.

Para detener los contenedores `docker stop host-server iframe-server`.