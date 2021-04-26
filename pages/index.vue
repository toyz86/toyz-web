<template>
  <section class="home-page" id="home-page">
    <!-- SHOW LOADING BEFORE PAGE ARE LOADED -->
    <div class="page-loader d-flex justify-content-center align-items-center" id="page-loader">
      <div class="lds-dual-ring"></div>
    </div>

    <div class="page-cover">
        <div class="cover-bg bg-img" data-image-src="/img/bg_geometric"></div>
        <div class="cover-bg-mask bg-color" data-bgcolor="rgba(2, 3, 10, 0.7)"></div>
    </div>    

    <!-- BEGIN SECTION FULLPAGE.JS -->
    <full-page ref="fullpage" :options="options">
      <div class="section main-page" data-section="home">
        <!-- <Header class="header" /> -->
        <div class="d-none d-lg-block">
          <b-row>
            <b-col cols="8">
              <div class="home-title">
                <h1 class="title__text js-letter" style="transform: translateX(0%) translateZ(0px);">Gatot<br><strong>Prastyo</strong></h1>
                <div class="stripe" style="transform: translateX(0%) translateZ(0px);">
                  <span></span>
                  <span class="js-letter" style="transform: translateX(0%) translateZ(0px);"></span>
                </div>
                <p class="title__lead js-letter" style="transform: translateX(0%) translateZ(0px);">graphic /<br>web designer.</p>
              </div>
            </b-col>

            <b-col cols="4">
              <div class="title-portfolio">portfolio</div>
            </b-col>

          </b-row>
        </div>

        <div class="d-block d-lg-none">
          <h1 class="title-portfolio">portfolio</h1>
          <div class="home-title">
            <h1 class="title__text js-letter" style="transform: translateX(0%) translateZ(0px);">Gatot<br><strong>Prastyo</strong></h1>
            <div class="stripe" style="transform: translateX(0%) translateZ(0px);">
              <span></span>
              <span class="js-letter" style="transform: translateX(0%) translateZ(0px);"></span>
            </div>
            <p class="title__lead js-letter" style="transform: translateX(0%) translateZ(0px);">graphic /<br>web designer.</p>
          </div>
        </div>

        <footer class="section-footer scrolldown">
          <a class="down d-none d-lg-block" @click="$refs.fullpage.api.moveSectionDown()" >
            <span class="icon"></span>
            <span class="txt">show me more</span>
          </a>
        </footer>   
      </div>

      <div class="section" data-section="mywork">
        <div class="d-none d-lg-block">
          <b-row>
            <b-col cols="6">
              <div class="mywork-title">
                <h1 class="title__text">My<br><strong>Works</strong></h1>
                <div class="stripe" style="transform: translateX(0%) translateZ(0px);">
                  <span></span>
                  <span class="js-letter" style="transform: translateX(0%) translateZ(0px);"></span>
                </div>                
                <a href='/works' class="button-works">Show More Works</a>
              </div>
            </b-col>
            <b-col cols="6">
              <Carousel />
            </b-col>
          </b-row>
        </div>

        <div class="d-block d-lg-none">
          <Carousel />
          <div class="mywork-title">
            <h1 class="title__text">My<br><strong>Works</strong></h1>
            <div class="stripe" style="transform: translateX(0%) translateZ(0px);">
              <span></span>
              <span class="js-letter" style="transform: translateX(0%) translateZ(0px);"></span>
            </div>              
            <!-- <a href='/works' class="button-works">Show More Works</a> -->
          </div>
          <footer class="scrolldown">
            <a href='/works' class="down">
              <span class="txt">Show More Works</span>
            </a>
          </footer>
        </div>        
      </div>

      <div class="section" data-section="about">
        <div class="d-none d-lg-block">
          <b-row>
            <b-col cols="6">
              <div class="about-title" style="position:relative;margin-left:20%">
                <h1 class="title__text">About<br><strong>Me</strong></h1>
                <div class="stripe" style="transform: translateX(0%) translateZ(0px);">
                  <span></span>
                  <span class="js-letter" style="transform: translateX(0%) translateZ(0px);"></span>
                </div>
                <!-- <p class="title__lead js-letter" style="transform: translateX(0%) translateZ(0px);">I love Design &<br>Technology.</p> -->
                <p class="title__about mr-4">
                  Hello, I'm Gatot Prastyo, a graphic designer based out of Bogor, Indonesia. 
                  I'm passionate about creating clean and elegant on-brand designs for print and web. 
                </p>                        
              </div>
            </b-col>
            <b-col cols="6" class="content-profile">
              <!-- <div class="content-profile"></div> -->
              <!-- <img src="/img/katabapaksayaganteng.jpeg" alt="gatot prastyo" class="profile"> -->
              <!-- <h6 class="title-about">
                Thanks for wanting to get to know about me. I'm Gatot Prastyo, a graphic designer based out of Bogor, Indonesia. 
                I've been in the graphic design industry field more than 10 years. I'm passionate about creating clean and elegant on-brand designs for print and web. 
                I love a good challenge and learning new skills. I understand the world through my visual experiences and love to to be challenged by new opportunities. 
                If you think you have one for me, I'd love to hear from you.
              </h6> -->
              <!-- <h6 class="title-about">
                Hello, I'm Gatot Prastyo, a graphic designer based out of Bogor, Indonesia. 
                I'm passionate about creating clean and elegant on-brand designs for print and web. 
              </h6> -->
            </b-col>
          </b-row>
          <Footer />
        </div>

        <div class="d-block d-lg-none">
          <div id="box1">
            <img src="/img/katabapaksayaganteng.jpeg"  />
          </div>

          <div class="about-title">
            <h1 class="title__text">About<br><strong>Me</strong></h1>
            <div class="stripe" style="transform: translateX(0%) translateZ(0px);">
              <span></span>
              <span class="js-letter" style="transform: translateX(0%) translateZ(0px);"></span>
            </div>
            <!-- <p class="title__lead js-letter" style="transform: translateX(0%) translateZ(0px);">I love Design &<br>Technology.</p> -->
            <p class="title__about mr-4">
              Hello, I'm Gatot Prastyo, a graphic designer based out of Bogor, Indonesia. 
              I'm passionate about creating clean and elegant on-brand designs for print and web. 
            </p>                        
          </div>          
        </div>
      </div>
      </full-page>
  </section>
</template>

<script>
// import Header from '~/components/header.vue';
import Carousel from '~/components/carousel.vue';
import Footer from '~/components/footer.vue';

export default {
  data() {
    return {
      options: {
        licenseKey: 'YOUR_KEY_HERE',
        controlArrows: true,
        anchors: ['home', 'mywork', 'about'],
        navigation: true,
        navigationPosition: 'left',
        autoScrolling: true,
        // sectionsColor: ['#000', '#ff4d5a', '#000b19'],
        fixedElements: ".header",
        onLeave: (origin,destination,direction) => {
          const section = destination.item;
          const t1 = this.$gsap.timeline({ delay: 0.5 });
          const title = document.querySelectorAll(".home-title");
          const port = document.querySelector('.title-portfolio');
          t1.fromTo(port, 1, { x: "150%", opacity: 0 }, { x: "0", opacity: 1 });

          if(destination.index === 1){
            const carousel = document.querySelector(".gallery-slider");
            t1.fromTo(carousel, 1, { x: "150%" }, { x: "0" });
          }

          if(destination.index === 2) {
            const myPic = document.querySelector('.content-profile');
            t1.fromTo(myPic, 1, { x: "150%" }, { x: "0" });
          }
        },
        afterLoad: (origin, direction, index) => {
          const homeBg = document.querySelector('.page-cover');
          console.log('ini hal', direction);
          // const siteHeaderFooter = $('.home-footer, .page-header');
          if (direction.index > 0){
            // console.log('gelap');
            homeBg.classList.add('expanded');
          } else {
            homeBg.classList.remove('expanded');
          }
        }        
      },   
    }
  },
  components: {
    // Header,
    Carousel,
    Footer
  },
  // asyncData () {
  //   return new Promise((resolve) => {
  //     setTimeout(function () {
  //       resolve({})
  //     }, 1000)
  //   })
  // },
  mounted() {
    this.onLoading();
  },
  methods: {
    onLoading() {
      const loader = document.getElementById('page-loader');
      loader.classList.add('p-hidden');
    },
    // openWorks() {
    //   return this.$router.push(`/works`);
    // }
  },
}
</script>
