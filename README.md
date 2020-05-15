# Jan Michek personal page

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```


## Styleguide

### Vue
- 2 words component name with PascalCase but filename should be named in kebab-case.vue

### CSS
- 1 component = 1 block = 1 class domain (.component-name__)
- nested selectors of 3 levels max (linted). When its  nested too deep its sign of poor design and you should separate to more components
- confusing keywords for class naming: 'info', 'text'
- frontend template contains automatic webp conversion for .jpg and .png assets, but needs to use browser fallback for CSS backgrounds [Caniuse webp](https://caniuse.com/#feat=webp) .
Use this snippet for fallbacks. `.no-webp` class is added by [modernizer](https://modernizr.com) 

```
  .component {
    background-image: url("image.jpg?webp");
    .no-webp & {
      background-image: url("image.jpg");
    }
  }
```

#### Prefixes
**c-:** for components (do not use in Vue files)

**u-:** for utilities

**is-, has-:**: for global states (bem convention break)


