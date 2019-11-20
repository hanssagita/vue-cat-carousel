vue-cat-carousel

npm run dev to start development mode
go to demo folder and open index.html from your browser
every changes automaticaly watched but you need to hard 
refresh your browser
use the latest template

To use it 

```
<CatCarousel
    :items="${your list}">
    template
          slot="item"
          slot-scope="{data, index}"
        >
          <div class="item">
            Put your html code here 
          </div>
        </template>
</CatCarousel>
```
