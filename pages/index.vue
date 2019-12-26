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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel justo scelerisque, commodo magna eget, lacinia elit. Proin ipsum diam, egestas vitae nunc sit amet, tempus porttitor lectus. Curabitur ut turpis felis. Nunc felis arcu, convallis nec placerat vitae, sagittis at lectus. Mauris eleifend egestas orci, eget euismod nulla consectetur at. Proin quis massa non diam malesuada aliquam. Quisque sit amet convallis orci, eget aliquet dolor. Nulla volutpat accumsan arcu in semper. Sed luctus, quam eget pretium rutrum, orci purus ullamcorper ex, at tincidunt nisi augue vitae sapien.</p>
        <p>Aliquam sed mauris id enim suscipit placerat in at orci. Duis eu purus vel sem vehicula sodales ut at augue. Sed consectetur tristique ultrices. Aliquam mi metus, aliquam vel accumsan at, consequat ut purus. Sed vel ante non arcu malesuada malesuada eu eu risus. Sed a justo vel nulla scelerisque lobortis. Aenean sed consequat risus. In faucibus pharetra est, in mattis purus auctor lobortis. Pellentesque imperdiet nunc sit amet commodo pharetra. Aliquam consequat dui vestibulum, lacinia leo ac, placerat purus. Curabitur augue nisl, condimentum ut ligula iaculis, dictum feugiat dolor. Aliquam volutpat dolor non dui pulvinar, eget pellentesque sapien pharetra. Vivamus rutrum erat mollis vehicula bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse non consectetur leo. In congue tempus felis nec porta.</p>
        <p>Sed quis purus quis ligula porta varius. Cras hendrerit a odio vel dapibus. Aenean viverra semper mi, id cursus nibh malesuada lobortis. Donec luctus, justo sit amet lobortis posuere, turpis dui dictum purus, nec pharetra nunc mauris non ipsum. Pellentesque consequat nibh a lorem suscipit varius. Vestibulum dapibus ipsum sem, et commodo nisi congue ut. Pellentesque dolor risus, convallis vestibulum enim non, scelerisque viverra purus. Aenean consectetur aliquam turpis. Ut ornare magna eu odio blandit cursus. Aliquam erat volutpat. Duis ex est, accumsan non odio vitae, sodales cursus arcu. Etiam iaculis sit amet erat vitae porttitor.</p>
      </div>
    </div>
    <div class="section fp-auto-height">
      <div class="section-container container-bound">
        <h1>Get In Touch</h1>
        <p></p>
        <p>Aliquam sed mauris id enim suscipit placerat in at orci. Duis eu purus vel sem vehicula sodales ut at augue. Sed consectetur tristique ultrices. Aliquam mi metus, aliquam vel accumsan at, consequat ut purus. Sed vel ante non arcu malesuada malesuada eu eu risus. Sed a justo vel nulla scelerisque lobortis. Aenean sed consequat risus. In faucibus pharetra est, in mattis purus auctor lobortis. Pellentesque imperdiet nunc sit amet commodo pharetra. Aliquam consequat dui vestibulum, lacinia leo ac, placerat purus. Curabitur augue nisl, condimentum ut ligula iaculis, dictum feugiat dolor. Aliquam volutpat dolor non dui pulvinar, eget pellentesque sapien pharetra. Vivamus rutrum erat mollis vehicula bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse non consectetur leo. In congue tempus felis nec porta.</p>
        <p>Sed quis purus quis ligula porta varius. Cras hendrerit a odio vel dapibus. Aenean viverra semper mi, id cursus nibh malesuada lobortis. Donec luctus, justo sit amet lobortis posuere, turpis dui dictum purus, nec pharetra nunc mauris non ipsum. Pellentesque consequat nibh a lorem suscipit varius. Vestibulum dapibus ipsum sem, et commodo nisi congue ut. Pellentesque dolor risus, convallis vestibulum enim non, scelerisque viverra purus. Aenean consectetur aliquam turpis. Ut ornare magna eu odio blandit cursus. Aliquam erat volutpat. Duis ex est, accumsan non odio vitae, sodales cursus arcu. Etiam iaculis sit amet erat vitae porttitor.</p>
      </div>
    </div>
  </full-page>
</template>

<script>
import jQuery from 'jquery';
const $ = jQuery;

export default {
    data() {
        return {
            scrollPrev: window.scrollY,
            handlingScroll: false,
            options: {
                // scrollOverflow: true,
                // scrollOverflowReset: true,
                fitToSection: false,
                autoScrolling: false,
                menu: '#myMenu',
                anchors: ['opening', 'about', 'experience', 'contact', 'lastPage'],
                // navigation: true,
                // navigationTooltips: ['', 'About', 'Experience'],
                // showActiveTooltip: true,
                onLeave: function (index, nextIndex, direction){
                    if (nextIndex === 1) {
                        console.log('next = 1');
                    } else if (nextIndex === 2) {
                        console.log('next = 2');
                    }
                },
            },
        };
    },
    methods: {
        handleScroll(event) {
            if (this.handlingScroll) return;
            this.handlingScroll = true;
            const that = this;

            let direction = null;
            if (this.scrollPrev > window.scrollY) {
                direction = 'up';
            } else if (this.scrollPrev < window.scrollY) {
                direction = 'down';
            }
            this.scrollPrev = window.scrollY;

            if (direction === 'down' && document.documentElement.scrollTop < window.innerHeight * 3 / 4) {
                $('html, body').animate({
                    scrollTop: $('.section.section2').offset().top,
                }, 500, function () {
                    that.handlingScroll = false;
                });
            } else if (direction === 'up' && document.documentElement.scrollTop < window.innerHeight * 3 / 4) {
                $('html, body').animate({
                    scrollTop: $('.section.section1').offset().top,
                }, 500, function () {
                    that.handlingScroll = false;
                });
            } else {
                this.handlingScroll = false;
            }
        },
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
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

  @media all and (min-width: $large) {
    .container-bound {
      margin-left: auto;
      margin-right: auto;
      width: $large;
    }
  }
</style>
