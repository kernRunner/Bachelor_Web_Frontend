import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

export const useAttractionStore = defineStore('counter', () => {
  const favorite = ref<Array<{ id: string, name: string, description: string, img: string }>>([]);
  const message = ref('');
  const route = useRoute();
  const someData = ref('');
  const allItems = ref(getAllLocalStorageItems());


  function toggelFavorite(item: { id: any, name: string, description: string, img: string }, region: string) {
    const index = favorite.value.findIndex(fav => fav.id === item.id);

    if (index !== -1) {
      favorite.value.splice(index, 1);
    } else {
      favorite.value.push(item);
    }

    message.value = region.toLowerCase();
    setItems(); 
  }

  function deleteOne(id: string, region: string) {
    getItems(region.toLowerCase());  // Load the favorites from local storage for the specified region

    console.log("Favorites before deletion:", favorite.value); // Log current favorites

    // Use `findIndex` to locate the index of the object with the matching `id`
    const index = favorite.value.findIndex(item => item.id === id);

    console.log("Index to delete:", index);  // Log the index to be deleted

    if (index !== -1) {  // Check if the index was found
      favorite.value.splice(index, 1);  // Remove the item if found
      console.log("Favorites after deletion:", favorite.value);  // Log favorites after deletion
      setItems();  // Update local storage
    } else {
      console.log("No item found with ID:", id);  // Log if no item was found
    }
  }


  function deleteAll() {
    favorite.value = [];
    setItems()
  }

  function setItems() {
    localStorage.setItem(message.value, JSON.stringify(favorite.value));
  }

  function getItems(msg: string): void {

    message.value = msg.toLowerCase();
    const storageKey = message.value;
    
    // Get the item from localStorage
    const item:any = localStorage.getItem(storageKey);
  
    try {
      const parsedData = JSON.parse(item);
      favorite.value = Array.isArray(parsedData) ? parsedData : [];
      console.log("Loaded favorites:", favorite.value);
    } catch (error) {
      console.error("Failed to parse favorites from localStorage:", error);
      favorite.value = [];
    }
  }


  function getAllLocalStorageItems() {
    let localStorageArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        const value: any = localStorage.getItem(key);
        try {
          localStorageArray.push({ key: key, value: JSON.parse(value) });  // Push an object with key and parsed value
        } catch (e) {
          console.error('Error parsing JSON from localStorage for key:', key, 'Error:', e);
          localStorageArray.push({ key: key, value: value });  // Push with original string if parsing fails
        }
      }
    }
    return localStorageArray;
  }

  return { favorite, someData, toggelFavorite, deleteOne, deleteAll, getItems, getAllLocalStorageItems }
})
