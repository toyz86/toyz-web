<template>
  <section class="gallery-slider">
    <VueSlickCarousel v-bind="settings">
      <div v-for="item in images" :key="item.key"><img :src="item.image" /></div>
    </VueSlickCarousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {id: 1, image: '/img/hero/device.png'},
        {id: 2, image: '/img/hero/koran.png'},
        {id: 3, image: '/img/hero/ozy.png'},
        {id: 4, image: '/img/hero/hero-05.png'},
      ],
      settings: {
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        // speed: 200,
        slideToShow: 1
      }
    }
  },
  computed: {
    removeProperty() {
      const element = document.styleSheets[0].cssRules[0].style;
      element.removeProperty('transform');
      return element;
    }
  }
}
</script>

<style lang="scss">
.gallery-slider {
  width: 80%;
  position: relative;
  @media(max-width: 480px) {
    transform: translate(50px, -80px);
    margin-bottom: 3em;
  }
  @media(max-width: 375px) {
    transform: translate(40px, -90px);
  }
}

ul.slick-dots {
  position: absolute;
  bottom: 25px;
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
}

.slick-slide img {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.slick-list {
  overflow: visible !important;
}

.slick-dots li, .slick-dots li button {
  height: 10px;
  cursor: pointer;
}

.slick-dots li {
  position: relative;
  display: inline-block;
  margin: 0 5px;
  padding: 0;
  background-color: #ccc;
  border-radius: 50px;
}

li.slick-active {
  background-color: #999999;
}

.slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  padding: 5px;
  color: transparent;
  border: 0;
  outline: none;
  background: transparent;
}

.slick-slider[data-v-aa003c28] .slick-dots button:before {
    color: var(--v-secondary-base);
    opacity: .25;
}
.slick-dots li button:before {
    // font-family: slick;
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: "•";
    text-align: center;
    opacity: .25;
    color: #000;
    -webkit-font-smoothing: antialiased;
}
.carousel-indicators li {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  &:focus {
    outline: none;
  }
}
.carousel-page {
  width: 50%;
}

// .carousel-indicators {
//   bottom: 5em;
// }
</style>
