const clickOutside = {
  beforeMount(el:any, binding:any) {
      el.clickOutsideEvent = function(event:any) {
          // Check that click was outside the el and its children, and the handler is defined
          if (!(el === event.target || el.contains(event.target))) {
              binding.value(event); // Call the provided method
          }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
  },
  unmounted(el:any) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
  },
};

export default clickOutside;
