<template>
  <div class="p-6">

    <div class="mt-4 h-96 overflow-y-auto border rounded-lg p-4 bg-gray-100">
      <div class="flex justify-between items-center p-5">
        <h1 class="text-2xl font-bold">Books list</h1>
        <button class="px-4 py-2 bg-gray-400 text-black rounded hover:bg-blue-600">
          Add New book
        </button>
      </div>

      <table class="w-full border-collapse bg-white shadow-md rounded-lg">
        <thead class="bg-gray-200 sticky top-0">
          <tr>
            <th class="p-3 text-left ">Title</th>
            <th class="p-3 text-left ">Author</th>
            <th class="p-3 text-left ">ISBN</th>
            <th class="p-3 text-left ">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in books" :key="book.name" class="hover:bg-gray-50">
            <td class="p-3 text-sm whitespace-nowrap">{{ book.title }}</td>
            <td class="p-3 text-sm whitespace-nowrap">{{ book.author }}</td>
            <td class="p-3 text-sm">{{ book.isbn }}</td>
            <td class="p-3  flex">

              <button @click="editBook(book.name)" class="w-8 h-8 flex items-center justify-center hover:bg-blue-600 rounded-md">
                <img src="@/assets/edit.png" alt="Edit" class="w-4 h-4">
              </button>

              <button @click="removeBook(book.name)" class="w-8 h-8 flex items-center justify-center hover:bg-blue-600 rounded-md">
                <img src="@/assets/delete.png" alt="Delete" class="w-4 h-4">
              </button>

            </td>
          </tr>
        </tbody>
      </table>

      <p v-if="books.length === 0" class="text-center mt-4">Loading books... WAIT</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getBooks } from '../services/frappe.js';

const books = ref([]);

const fetchBooks = async () => {
  books.value = await getBooks();
};

onMounted(fetchBooks);
</script>
