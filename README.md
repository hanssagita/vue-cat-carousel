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
    :hide-indicators="false"
    :indicators-item-size="10"
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
| item-per-page           | number                           | 5    | List of items in one page                                                        |
| hide-indicators           | boolean                           | false    | show and hide carousel indicators                                                        |
| indicators-item-size          | Number                           | 16    | define carousel indicators item size                                                       |

## Slots

slot | slot-scope | description
--- | --- | ---
item | data, index | customize the design of carousel item
prev-navigation | prev | customize slide left navigation
next-navigation | next | customize slide right navigation

Previous navigation:
```HTML
<cat-carousel
    :items="items"
    :item-per-page="5"
    :hide-indicators="false"
    :indicators-item-size="10"
  >
    <template
      slot="prev-navigation"
      slot-scope="{prev}"
    >
      <div class="custom-navigation" @click="prev"></div>
    </template>
  </cat-carousel>
```

Next navigation:
```HTML
<cat-carousel
    :items="items"
    :item-per-page="5"
    :hide-indicators="false"
    :indicators-item-size="10"
  >
    <template
      slot="prev-navigation"
      slot-scope="{next}"
    >
      <div class="custom-navigation" @click="next"></div>
    </template>
  </cat-carousel>
```

# License

MIT
