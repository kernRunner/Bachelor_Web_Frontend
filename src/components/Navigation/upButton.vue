<template>
  <button @click="topFunction" id="myBtn" ref="bt" class="bg-secondaryColor" title="To Top">Top</button>
</template>

<script scoped lang="ts">
export default {
  mounted() { // Changed from 'created' to 'mounted'
    window.addEventListener('scroll', this.handleScroll);
    this.scrollFunction(); // Added this line to run scrollFunction initially
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event: any) {
      this.scrollFunction();
    },
    scrollFunction() {
      var mybutton: any = document.getElementById("myBtn");

      if (mybutton) { // Check if mybutton is not null
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          mybutton.classList.add('activeBt');
        } else {
          mybutton.classList.remove('activeBt');
        }
      }
    },
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }

  }
}
</script>

<style scoped>
#myBtn {
  display: block;
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: -60px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  border: 1px solid white;
  color: white;
  cursor: pointer;
  font-weight: 600;
  padding: 5px;
  border-radius: 10px;
  transition: 0.2s;
}

.activeBt {
  bottom: 30px !important;
}

@media screen and (max-width: 600px) {
  #myBtn {
    display: none;
  }
}
</style>
