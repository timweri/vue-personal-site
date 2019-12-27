<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section section1">
      <div class="container-bound">
        <span class="title">Duc Thanh Nguyen</span>
      </div>
    </div>
    <div class="section section2 fp-auto-height">
      <div class="section-container container-bound">
        <h1>About Me</h1>
        <p>
          I'm an enthusiastic developer interested in backend development and solving optimization problems.
          I specialize in building high-quality tools and applications.
          In particular, I am skilled in <b>C/C++</b>, <b>OOP</b>, <b>NodeJS</b>, <b>Python</b> and <b>Java (Android)</b> through various personal and commercial projects.
          Moreover, I have worked with <b>MongoDB</b>, <b>SQL</b>, <b>Docker</b>, <b>JNI (Android)</b> and <b>VueJS</b>.
        </p>
        <p>
          Currently, I am a 3rd-year Computer Science (with a Combinatorics & Optimization minor) student at the University of Waterloo.
          As part of my program, I have the opportunity to spend 24 months as a coop student to solve real problems.
          So far, I have spent 12 months in total at Carbon8, BlackBerry and Wayfair.
          <i>At the moment, I am looking for a Software Engineer position for Summer/Fall 2020 and/or Winter 2021.</i>
        </p>
      </div>
    </div>
    <div class="section fp-auto-height">
      <div class="section-container container-bound">
        <h1>Experience</h1>
        <b-card
          title="Wayfair"
          sub-title="Software Engineer"
          tag="wayfair"
          class="mb-2"
        >
          <h6 class="experience-date">Boston, MA | Jan 2020 - April 2020</h6>
          <b-card-text>
            <ul>
              <li>Developed and maintained Wayfair's backend components.</li>
            </ul>
          </b-card-text>
        </b-card>
        <b-card
          title="BlackBerry"
          sub-title="Software Development Student"
          tag="blackberry"
          class="mb-2"
        >
          <h6 class="experience-date">Mississauga, ON | May 2019 - Aug 2019</h6>
          <b-card-text>
            <ul>
              <li>Implemented a prototype SDK in <b>Java</b> and a proof-of-concept <b>Android</b> app to check for malicious APKs using an internal ML model.</li>
              <li>Optimised the APK scanning process in the production SDK by implementing in <b>C++</b> a two-layer cache for efficient key lookup.</li>
              <li>Implemented a APK scoring <b>ExpressJS</b> backend server using an internal ML model for testing purposes. Distributed the server using <b>Docker</b>.</li>
            </ul>
          </b-card-text>
        </b-card>
        <b-card
          title="Carbon8"
          sub-title="Web Developer"
          tag="carbon8"
          class="mb-2"
        >
          <h6 class="experience-date">Nha Trang, Vietnam | May 2018 - Aug 2018</h6>
          <b-card-text>
            <ul>
              <li>Web development utilizing <b>HTML5</b>, <b>CSS3</b>, <b>Javascript</b>, <b>JQuery</b>, Bootstrap, PHP and Wordpress development stack.</li>
              <li>Used <b>Webpack</b> and <b>Gulp</b> to build assets and deploy websites.</li>
              <li>Animated web components using Fullpage, MagicScroll, SlickSlider and <b>Javascript</b>.</li>
            </ul>
          </b-card-text>
        </b-card>
        <b-card
          title="Institute of High Performance Computing @ ASTAR"
          sub-title="Research Intern"
          tag="astar"
          class="mb-2"
        >
          <h6 class="experience-date">Singapore | Feb 2017 - Jul 2017</h6>
          <b-card-text>
            <ul>
              <li>Designed a GUI app for a MATLAB mode solver script using <b>Python</b> and <b>GTK3</b> and mproved the accessibility of the solver.</li>
              <li>Analyzed the differences between commercial/open-source simulators.</li>
              <li>Implemented multiprocessing to run multiple computations in parallel using <b>Python</b>.</li>
            </ul>
          </b-card-text>
        </b-card>
      </div>
    </div>
    <div class="section fp-auto-height">
      <div class="section-container container-bound">
        <h1>Project</h1>
        <b-card
          title="Simple GLTF/GLB Builder"
          tag="simplegltfglbbuilder"
          class="mb-2"
        >
          <b-card-text>
            <p>
              A simple demo API written in <b>Python</b> to build GLTF/GLB files according to Khronos Group's glTF 2.0 specifications. It was put together to show how to export simple 3D models in glTF/GLB format.
            </p>
            <p>
              <b-button href="https://github.com/timweri/simple-gltf-glb" variant="primary">Github Repo</b-button>
            </p>
          </b-card-text>
        </b-card>
        <b-card
          title="Goosenet Backend"
          sub-title="Hack The North 2019"
          tag="goosenetbackend"
          class="mb-2"
        >
          <b-card-text>
            <p>
              Developed a backend server using purely <b>Firebase's</b> <b>Firestore</b> and <b>Functions</b> to power a social media
              for people living in the same building. The features include:
              <ul>
                <li>Secure sign up by invite code.</li>
                <li>Daily random generated name is used to provide anonymity.</li>
                <li>A friend system used to retain contact and disable anonymity with selected people.</li>
              </ul>
            </p>
            <p>
              <b-button href="https://github.com/Hack-The-Loo-2019/goosenet-backend" variant="primary">Github Repo</b-button>
            </p>
          </b-card-text>
        </b-card>
        <b-card
          title="Basic Cart API"
          tag="basiccartapi"
          class="mb-2"
        >
          <b-card-text>
            <p>
            Developed a <b>GraphQL</b> API using <b>Ruby on Rails</b> to manage shopping carts and products. The features include:
            </p>
            <p>
              <b-button href="https://github.com/timweri/basic-cart-api" variant="primary">Github Repo</b-button>
            </p>
          </b-card-text>
        </b-card>
      </div>
    </div>
    <div class="section fp-auto-height">
      <div class="section-container container-bound">
        <h1>Get In Touch</h1>
        <p>Want me to be part of your team? Looking to chat? Shoot me an email at <b-link href="mailto:ng.duc.tahn@gmail.com">ng.duc.tahn@gmail.com</b-link>!</p>
        <p align="center">You can also find me via:</p>
        <p>
          <b-container class="social-media-container">
            <b-row class="social-media-row">
              <b-col><b-link href="https://github.com/timweri" target="_blank"><b-img class="social-media-img" alt="Github" src="github.svg"/></b-link></b-col>
              <b-col><b-link href="https://www.linkedin.com/in/d-thanh-nguyen/" target="_blank"><b-img class="social-media-img" alt="Linkedin" src="linkedin.svg"/></b-link></b-col>
            </b-row>
          </b-container>
        </p>
        <p align="center">Also, here's a copy of my resume:</p>
        <p align="center">
          <b-row>
            <b-col><b-button href="resume.pdf" variant="outline-primary">Resume</b-button></b-col>
          </b-row>
        </p>
      </div>
    </div>
  </full-page>
</template>

<script>
export default {
    data() {
        return {
            keys: {37: 1, 38: 1, 39: 1, 40: 1},
            scrollPrev: window.scrollY,
            handlingScroll: false,
            options: {
                // scrollOverflow: true,
                // scrollOverflowReset: true,
                fitToSection: false,
                autoScrolling: false,
                menu: '#myMenu',
                anchors: ['opening', 'about', 'experience', 'project', 'contact'],
            },
        };
    },
    methods: {
        preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;
        },
        preventDefaultForScrollKeys(e) {
            if (this.keys[e.keyCode]) {
                this.preventDefault(e);
                return false;
            }
        },
        disable_scroll() {
            if (window.addEventListener) // older FF
                window.addEventListener('DOMMouseScroll', this.preventDefault, false);
            document.addEventListener('wheel', this.preventDefault, {passive: false}); // Disable scrolling in Chrome
            window.onwheel = this.preventDefault; // modern standard
            window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
            window.ontouchmove  = this.preventDefault; // mobile
            document.onkeydown  = this.preventDefaultForScrollKeys;
        },
        enable_scroll() {
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
            document.removeEventListener('wheel', this.preventDefault, {passive: false}); // Enable scrolling in Chrome
            window.onmousewheel = document.onmousewheel = null;
            window.onwheel = null;
            window.ontouchmove = null;
            document.onkeydown = null;
        },
        handleScroll(event) {
            if (this.handlingScroll || ['#experience', '#contact'].includes(window.location.hash)) {
                this.scrollPrev = window.scrollY;
                return;
            }
            this.handlingScroll = true;
            this.disable_scroll();
            const that = this;

            let direction = null;
            if (this.scrollPrev > window.scrollY) {
                direction = 'up';
            } else if (this.scrollPrev < window.scrollY) {
                direction = 'down';
            }
            this.scrollPrev = window.scrollY;

            if (direction === 'down' && document.documentElement.scrollTop < window.innerHeight * 3 / 5) {
                $('html, body').animate({
                    scrollTop: $('.section.section2').offset().top - 50,
                }, 500, function () {
                    that.handlingScroll = false;
                    that.enable_scroll();
                });
            } else if (direction === 'up' && document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < window.innerHeight * 3 / 5) {
                $('html, body').animate({
                    scrollTop: 0,
                }, 500, function () {
                    that.handlingScroll = false;
                    that.enable_scroll();
                });
            } else {
                this.handlingScroll = false;
                this.enable_scroll();
            }
        },
    },
    created() {
        window.addEventListener('scroll', this.handleScroll, {passive: false});
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll, {passive: false});
    },
};
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,700');
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .section-container {
    display: block;
    padding: 0 15px;
    margin-top: 70px;
    margin-bottom: 70px;
  }
  .section-top-blank {
    height: 70px;
    width: 100%;
  }
  .section1 {
    text-align: center;
    margin: 15px 0;
    .title {
      font-family: 'Quicksand', sans-serif;
      font-weight: 700;
      color: $color;
      font-size: 3rem;
      text-decoration: none;
      word-wrap: break-word;
    }
  }

  #fp-nav.fp-show-active a.active + .fp-tooltip {
    color: $color;
  }

  #fp-nav ul li .fp-tooltip {
    color: $color;
  }

  .experience-date {
    color: #7F828B;
  }

  .social-media-container {
    min-height: auto;
  }

  .social-media-img {
    height: 30px;
  }

  @media all and (min-width: $large) {
    .container-bound {
      margin-left: auto;
      margin-right: auto;
      width: $large;
    }
  }
</style>
