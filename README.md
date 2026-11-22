# CustomTiers Wiki

Documentación de CustomTiers para CraftEngine.

- Español: raíz del repositorio.
- English: `en/`.

## Publicación

GitHub Pages publica la rama `main` desde la raíz. No hay que compilar nada.
El archivo `.nojekyll` evita que Pages procese el sitio con Jekyll.

Para activarlo: **Settings → Pages → Deploy from a branch → `main` → `/ (root)`**.

## Archivos

```
index.html              Portada
instalacion.html        Instalación
primer-item.html        Primer item
argumentos.html         Argumentos
mmoitems.html           MMOItems
armas.html              Armas
armadura.html           Armadura y escudo
en/                     Versión en inglés
assets/css/style.css    Estilos
assets/js/site.js       Navegación, tema, copiado y selector de idioma
assets/img/             Capturas y placeholders
LICENSE.txt
```

## Edición

Cada página es un HTML independiente. La cabecera, el menú lateral, el footer y
los enlaces anterior/siguiente se generan en `site.js` a partir de `NAV` y `FILES`.

Si añades una página:

1. Duplica una existente.
2. Cambia `data-page`, el título y el contenido.
3. Añádela a `NAV` y `FILES` para que aparezca en el menú y en el selector de idioma.

La versión española está en la raíz y la inglesa en `en/`. Las dos usan el mismo
CSS y JS. El idioma se detecta con el atributo `lang` del elemento `<html>`.

## Licencia

El texto legal está en `LICENSE.txt`.
