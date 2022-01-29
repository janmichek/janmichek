# Jan Michek personal page

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev
```

## Deployment

``` bash
# deploy to Firebase hosting
$ yarn global add firebase-tools (first time)
$ yarn deploy
```

## Images minimization
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

