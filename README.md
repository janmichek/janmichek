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


## Bit.dev
we use [bit.dev](https://bit.dev/plnt/planetary-component) for reusable components among projects

### Bit Best Practices
- do not extend component for possible future features
- better code project specific component, when you see repeated pattern among projects, its a good sign to  import it into Bit
- there are 3 ways how to configure bit component - css variables (style), slot (element, component), prop (plain content, value, function) - prioritized by this order.
- do not use <h#> elements in components (hierarchy issue)
- its a good practise to disconnect bit component, when it starts to be more project specific
- use default styles for configurable component styles `background: var(--button-background, #777);`
 
 ### How to init Bit in new project
 - `bit init && bit login`
 
 ### How to add Bit component
 - /components/new-component/index.vue
 - `bit add components/new-component`
 - `bit status`
 - `bit tag new-component 1.0.0`
 - `bit export plnt.planetary-components`
 
 ### How to edit Bit component
 - `bit import plnt.planetary-components/component`
 - re-run `yarn run dev`
 - edit code
 - `bit add`
 - `bit status`
 - `bit tag component 1.0.x`
 - `bit export plnt.planetary-components`
 - code review through github
 - regenerate yarn.lock
 - `bit eject component`
