<template>
  <section class="works" id="works">
    <div class="page-loader d-flex justify-content-center align-items-center" id="page-loader">
        <div class="lds-dual-ring"></div>
    </div>
    <div class="button-group d-flex justify-content-center" id="filterNav">
      <button v-for="(val, key) in option.getFilterData" :key="val.key" class="button" :class="[key===filterOption? 'is-checked' : '']" @click="filter(key)">{{key}}
      </button>
    </div>

    <CoolLightBox 
      :items="list" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <isotope ref="cpt" id="root_isotope" 
      :item-selector="'element-item'" 
      :list="list" 
      :options='option' 
      @filter="filterOption=arguments[0]" 
      @layout="currentLayout=arguments[0]">
      <div v-for="(element,listIndex) in list" :key="listIndex" @click="index = listIndex">
        <img class="list-complete-img" :src="element.src" />
        <div class="overlay"></div>
        <h3 class="works-title">{{ element.name }}</h3>
      </div>
    </isotope>
    <Footer />
  </section>
</template>

<script>
import Footer from '~/components/footer.vue';
export default {
  components: {
    Footer
  },
  data() {
    return {
      layouts: [
        "masonry",
      ],      
      list: [
        {
            // id: 1, 
            // title: "Creano Web Logo",
            // description: "Colorfull Design Concept", 
            src: "/img/creano.jpg", 
            category: "logo", 
            name: "Creano Web", 
        },
        {
          src: "/img/mount.jpg",
          category: "logo",
          name: "Mountain Wicks Candle Co."
        },
        {
            // id: 2, 
            // title: "LOGO", 
            src: "/img/catchcarrie.jpg", 
            category: "logo",
            name: "Catch Carrie", 
        },
        {
            // id: 3, 
            // title: "LOGO", 
            src: "/img/blue-fox.jpg", 
            category: "logo",
            name: "Blue Fox", 
        },
        {
            // id: 4, 
            // title: "LOGO", 
            src: "/img/black-bear.jpg", 
            category: "logo", 
            name: "Black Bear Outdoor", 
        },
        {
            // id: 5, 
            // title: "LOGO", 
            src: "/img/marcia.jpg", 
            category: "logo",
            name: "Marcia Reis", 
        },
        {
            // id: 6, 
            // title: "LOGO", 
            src: "/img/phoenix2.jpg", 
            category: "logo",
            name: "Phoenix inc.", 
        },
        {
            // id: 7, 
            // title: "LOGO", 
            src: "/img/rusa.jpg", 
            category: "logo",
            name: "The Abide Farm", 
        },
        {
            // id: 8, 
            // title: "LOGO", 
            src: "/img/WL4.jpg", 
            category: "logo",
            name: "Wilma & Louise", 
        },
        {
            // id: 9, 
            // title: "ANNUAL REPORT", 
            src: "/img/tppi.jpg", 
            category: "print",
            name: "TPPI", 
        },
        {
            // id: 10, 
            // title: "ANNUAL REPORT", 
            src: "/img/kresna.jpg", 
            category: "print",
            name: "Kresna Insurance", 
        },
        {
            // id: 11, 
            // title: "ANNUAL REPORT", 
            src: "/img/enseval.jpg", 
            category: "print",
            name: "Enseval Insurance", 
        },
        {
            // id: 12, 
            // title: "ANNUAL REPORT", 
            src: "/img/kmi.jpg", 
            category: "print",
            name: "KMI Wire & Cable", 
        },
        {
            // id: 13, 
            // title: "ANNUAL REPORT", 
            src: "/img/pjb.jpg", 
            category: "print",
            name: "PJB Indonesia", 
        },
        {
            // id: 14, 
            // title: "ANNUAL REPORT", 
            src: "/img/mareincover.jpg", 
            category: "print",
            name: "Marein Insurance", 
        },
        {
            // id: 15, 
            // title: "LOGO", 
            src: "/img/ozymandias2.jpg", 
            category: "logo",
            name: "Ozymandias Capital", 
        },
        {
            // id: 16, 
            // title: "GRAPHIC", 
            src: "/img/Dig2.jpg", 
            category: "print",
            name: "Live to Dig", 
        },
        {
            // id: 17, 
            // title: "CALENDAR", 
            src: "/img/falken-cover.jpg", 
            category: "print",
            name: "Falken Indonesia", 
        },
        {
            // id: 18, 
            // title: "GRAPHIC", 
            src: "/img/lariat1.jpg", 
            category: "print",
            name: "Lariat", 
        },
        {
            // id: 19, 
            // title: "SIGNAGE", 
            src: "/img/woolf.jpg", 
            category: "print",
            name: "Woolf Aircraft inc.", 
        },
        {
            // id: 20, 
            // title: "CALENDAR", 
            src: "/img/dunlop2021.jpg", 
            category: "print",
            name: "Dunlop", 
        },
        {
            // id: 21, 
            // title: "CALENDAR", 
            src: "/img/falken2020.jpg", 
            category: "print",
            name: "Falken Indonesia", 
        },
        {
          // id: 22, 
          // title: "ANNUAL REPORT", 
          src: "/img/waskita.jpg", 
          category: "print",
          name: "Waskita Realty", 
        },  
        {
          src: "/img/mie-gaga.jpg",
          category: "print",
          name: "Mie 100 Gaga",
        },
        {
          src: "/img/tokio.jpg",
          category: "print",
          name: "Tokio Marine",
        }, 
        {
          src: "/img/Bisnis.jpg",
          category: "print",
          name: "Bisnis Indonesia",
        },   
        {
          src: "/img/dunlop-leaflet.jpg",
          category: "print",
          name: "Dunlop",
        },                       
        {
          src: "/img/Showcase-Devices-Presentation.jpg", 
          category: "web",
          name: "Antv Klik", 
        },
        {
          src: "/img/hut28.jpg", 
          category: "web",
          name: "Antv Klik", 
        }, 
        {
          src: "/img/web2.jpg", 
          category: "web",
          name: "Bay Shore Systems, Inc", 
        }                    

      ],
      index: null,
      currentLayout: 'masonry',
      selected: null,
      filterOption: "show all",
      option: {
        getFilterData: {
          "All": function() {
            return true;
          },
          "Logo": function(el) {
            return el.category === "logo";
          },
          "Print Design": function(el) {
            return el.category === "print";
          },
          "Web Design": function(el) {
            return el.category === "web";
          },          
        }
      }
    }
  },
  mounted() {
    this.onLoading();
    // window.onscroll = this.isFilterNavFixed;
  },

  methods: {
    onLoading() {
      const loader = document.getElementById('page-loader');
      loader.classList.add('p-hidden');
    },
    filter: function(key) {
    	this.$refs.cpt.filter(key);
    },
    // isFilterNavFixed() {
    //   const nav = document.getElementById("filterNav");
    //   const navSticky = nav.offsetTop;
    //   console.log('ini nav', navSticky);

    //   if(window.pageYOffset > 40) {
    //     nav.classList.add("sticky");
    //     console.log('top');
    //   } else {
    //     nav.classList.remove("sticky");
    //   }
    // }
  },  

  // destroyed() {
  //   window.removeEventListener('scroll', this.isFilterNavFixed);
  // },  
}
</script>
