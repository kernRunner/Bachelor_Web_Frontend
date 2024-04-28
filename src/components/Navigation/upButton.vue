<template>
  <button @click="topFunction()" id="myBtn" ref="bt" class="bg-secondaryColor" title="To Top">Top</button>
</template>

<script scoped lang="ts">
export default {
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(event: any) {
      this.scrollFunction();
    },
    scrollFunction() {
      // var mybutton:any = this.$refs.bt
      var mybutton:any = document.getElementById("myBtn");

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.classList.add('activeBt');
      } else {
        mybutton.classList.remove('activeBt');
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
  border: 1px Solid white;
  color: white;
  cursor: pointer;
  font-weight: 600;
  padding: 5px;
  border-radius: 10px;
  transition: .2s;
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