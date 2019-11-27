# 🐱🐱🐱 Vue-Cat-Carousel 🐱🐱🐱


Simple and lightest Carousel 


## Install

```bash
npm i -S vue-cat-carousel
or
npm install --save vue-cat-carousel
```

## Usage

Plugin install:

Global install
```js
import Vue from 'vue'
import CatCarousel from 'vue-cat-carousel'

Vue.use(CatCarousel)

```

Local install
```js
components: {
  CatCarousel: () => import('vue-cat-carousel')
}
```

How to use it in HTML
```HTML
<cat-carousel
    :items="items"
    :item-per-page="5"
  >
    <template
      slot="item"
      slot-scope="{data, index}"
    >
      <div class="item">{{index}} {{data.name}} </div>
    </template>
  </cat-carousel>
```

```JavaScript
import { CatCarousel } from 'vue-cat-carousel'

new Vue({
  el: 'body',
  components: {
    CatCarousel
  },
  data() {
    return {
      items: [{name: 'hans'}, {name: 'sagita'}]
    }
  }
})
```

## Props

Slider：

| name            | type                             | default    | description                                                            |
| --------------- | -------------------------------- | ---------- | ---------------------------------------------------------------------- |
| items           | list                           | []       | List of items in loop                                                        |
| itemPerPage           | number                           | 5    | List of items in one page                                                        |


# License

MIT
