# Videoteca

Web para buscar películas y series. Podemos ver detalles y añadir a favoritos las que más nos gusten.

Proyecto:

-   Diseño en Figma
-   Crear una SPA con varias páginas en React, gestionando el estado común con context + reducer. La app debe ser responsive (mobile + desktop) / mobile first.
-   Mínimo de páginas (vistas): Lista API pública, lista API privada y detail. Alguna/s de ellas se tiene que cargar mediante lazy loading.
-   La app se conectará a una API de vuestra elección y listará los elementos. En dicho listado tiene que haber paginación y también un filtro como mínimo. A partir de este listado tendréis que crear otro listado conectado a una API local, donde implementaréis CRUD.
-   La interfaz debe dar feedback de cuando se está esperando una response de las APIs, y también debe gestionar los errores de éstas.
-   Debemos usar un login de usuarios que se refleje en el API privada.
-   Hooks de git y GitHub Actions
-   HTML semántico (validado)
-   Testing con coverage
-   Autenticación y API privada

Para su desarrollo he intentado utilizar todas las tecnologías aprendidas durante el curso:

-   Como Framework: React con patrón Flux
-   Para el código: Typescrip,
-   Para el css: Sass y BEM
-   Para los tests: Jest
-   Como api pública: The movie database API
-   Para la persistencia: Firebase Realtime Database
-   Para el login: Firebase Authentication
-   Para comprobar la calidad del código: Git Action y Sonar (https://sonarcloud.io/project/overview?id=Michaeldam88_videoteca)

Así es como se presenta:
![This is an image](https://github.com/Michaeldam88/videoteca/blob/main/public/assets/videoteca-desktop-image.png)
![This is an image](https://github.com/Michaeldam88/videoteca/blob/main/public/assets/videoteca-mobile-image.png)

La podéis probar aquí: https://michaeldam88-videoteca.netlify.app/
