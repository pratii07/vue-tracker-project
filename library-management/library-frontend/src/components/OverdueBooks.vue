<template>    
    <div class="p-5 bg-white m-10 rounded-md"> 
      <h2 class="font-bold text-2xl ml-4 mb-5">Overdue Books</h2>

      <table class="w-full border-collapse bg-white shadow-md rounded-lg">
        <thead class="bg-gray-200 sticky top-0">
          <tr>
            <th class="p-4 text-left">Member ID</th>
            <th class="p-4 text-left">Member Name</th>
            <th class="p-4 text-left">Book ID</th>
            <th class="p-4 text-left">Title</th>
            <th class="p-4 text-left">Author</th>
            <th class="p-4 text-left">Overdue</th>
            <th class="p-4 text-left">Status</th>
            <th class="p-2 text-left">Return Date</th>
            <th class="p-4 text-left">Fine</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in overduebooks" :key="book.book_id" class="hover:bg-gray-50">
            <td class="p-4">{{ book.member_id }}</td>
            <td class="p-4">{{ book.member }}</td>
            <td class="p-4">{{ book.book_id }}</td>
            <td class="p-4">{{ book.book }}</td>
            <td class="p-4">{{ book.author }}</td>
            <td class="p-4">{{ book.overdue_days }}</td>
            <td class="p-4">{{ book.status }}</td>
            <td class="p-4">{{ book.return_date }}</td>
            <td class="p-4">{{ book.fine }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { OverdueBooks } from '../services/frappe.js';
  
  const overduebooks = ref([]);
  
  const fetchTransactions = async () => {
    try{
      const books = await OverdueBooks();
      overduebooks.value = books.filter(book => book.status == "Return")
    }
    catch(error){
      console.log("Error fetching return books : ",error)
    }
  };

  onMounted(fetchTransactions);
  </script>
  