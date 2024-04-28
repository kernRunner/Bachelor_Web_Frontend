import { ref, computed, onMounted  } from 'vue'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

export const useAttractionStore = defineStore('counter', () => {
  const favorite = ref<Array<String>>([]);
  const message = ref('');
  const route = useRoute();
  const someData = ref('');
  const allItems = ref(getAllLocalStorageItems());

  // function someMethodThatUsesRouteName(routeName) {
  //   message.value = routeName;
  //   console.log(message.value);
  // }
  
  function toggelFavorite(id:string, region:string){
    console.log(id);
    console.log(favorite.value);
    console.log(id);
    if(favorite.value.includes(id)){
      const index = favorite.value.indexOf(id);
      favorite.value.splice(index, 1);
      message.value = region.toLowerCase()
      setItems()
      setItemsJSON()
    }else{
      message.value = region.toLowerCase()
      favorite.value.push(id);
      setItems()
      setItemsJSON()
    }
  }

  function deleteOne(id:string, region:string){

    getItems(region.toLowerCase());
    if(favorite.value.includes(id)){

      const index = favorite.value.indexOf(id);
      favorite.value.splice(index, 1);
      setItems()
    }
  }

  function deleteAll(){
    favorite.value = [];
    setItems()
  }

  function setItems() {
    localStorage.setItem('f-' + message.value, JSON.stringify(favorite.value));
  }
  function setItemsJSON() {
    localStorage.setItem('f-JSON-' + message.value, JSON.stringify([favorite.value, message.value]));

  }

  function getItems(msg:string){

    message.value = msg.toLowerCase();


    const val =  JSON.parse(localStorage.getItem('f-' + message.value));

    if(val){
      favorite.value = val;
    }else{
      favorite.value = [];
    }
  }

  function getAllLocalStorageItems() {
    var localStorageItems = {};
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      localStorageItems[key] = value;
    }

    return localStorageItems;
  }

  return { favorite, someData, toggelFavorite, deleteOne, deleteAll, getItems, getAllLocalStorageItems }
})
