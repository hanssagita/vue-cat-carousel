<template>
  <div class="h-carousel__item">
    <div class="h-carousel__item__image">
      <img src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-2629219/nike_nike-men-air-presto-mid-acronym-sepatu-sneakers-pria--ah7832-_full12.jpg?output-format=webp">
    </div>
    <div class="h-carousel__item__name">
      NIKE Men Air Presto Mid Acronym Sepatu Sneakers Pria</div>
    <div class="h-carousel__item__price">
      <div class="h-carousel__item__price--strikethrough">Rp6.000.000</div>
      <div class="h-carousel__item__price__display">Rp5.400.000
        <span class="h-carousel__item__price--discount">(-10%)</span>
      </div>
    </div>
    <div class="h-carousel__item__info">
      <div class="h-carousel__item__info__installment">Cicilan 0%</div>
    </div>
    <div class="h-carousel__item__rating">
      <span class="h-carousel__item__rating__star"><img src="https://i.imgur.com/GutCBw7.png"></span>
      <span class="h-carousel__item__rating__star"><img src="https://i.imgur.com/GutCBw7.png"></span>
      <span class="h-carousel__item__rating__star"><img src="https://i.imgur.com/GutCBw7.png"></span>
      <span class="h-carousel__item__rating__star"><img src="https://i.imgur.com/qqJxaGC.png"></span>
      <span class="h-carousel__item__rating__star"><img src="https://i.imgur.com/qqJxaGC.png"></span>
      <span class="h-carousel__item__rating__info"> 9 Ulasan</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CarouselItem"
  }
</script>

<style lang="scss" scoped>
  .h-carousel {
    &__item {
      display: inline-block;
      width: 18%;
      padding: 0 1%;
      @media only screen and (max-width: 768px) {
        width: 50%;
      }
      &__image {
        img {
          width: 100%;
          height: 100%;
        }
      }
      &__name {
        white-space: normal;
        color: #333;
        line-height: 16px;
        font-weight: bold;
      }
      &__price {
        &--strikethrough {
          color: #bbb;
          font-size: 11px;
          text-decoration: line-through;
        }
        &__display {
          color: #f7931e;
          font-size: 15px;
          font-weight: bold;
        }
        &--discount {
          color: #FF5400;
          font-weight: bold;
          margin-left: 5px;
          font-size: 13px;
        }
      }
      &__info {
        &__installment {
          color: #009900;
          font-size: 11px;
        }
      }
      &__rating {
        display: flex;
        align-items: center;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
        margin: 8px 0;
        &__star {
          margin: 4px .5px;
          img {
            width: 16px;
            height: 16px;
          }
        }
        &__info {
          margin-left: 4px;
          color: #bbb;
          font-size: 11px;
        }
      }
    }
    &__left-arrow {
      width: 32px;
      height: 72px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      top: calc(50% - 32px);
      border-radius: 5px;
      box-shadow: 1px 2px 5px -1px #b0b0b0;
      border-right: 1px solid #eee;
      background-color: rgba(255, 255, 255, 0.2);
      cursor: pointer;
      img {
        width: 32px;
        height: 32px;
        transform: rotate(180deg);
      }
    }
    &__right-arrow {
      width: 32px;
      height: 72px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      top: calc(50% - 32px);
      right: 0;
      border-radius: 5px;
      box-shadow: 1px 2px 5px -1px #b0b0b0;
      border-right: 1px solid #eee;
      background-color: rgba(255, 255, 255, 0.2);
      cursor: pointer;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
</style>
