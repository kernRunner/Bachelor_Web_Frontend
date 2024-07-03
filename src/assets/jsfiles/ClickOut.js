
const clickOutside = {
    beforeMount(el, binding) {
      el.clickOutsideEvent = function (event) {
        // Check that click was outside the el and its children, and the handler is defined
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event);  // Call the provided method
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener('click', el.clickOutsideEvent);
    },
  };
  
  export default clickOutside;
  