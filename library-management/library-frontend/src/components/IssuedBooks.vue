<template>
    <div class="p-5 bg-white m-10 rounded-md"> 
        <div class="flex">
            <h2 class="font-bold text-2xl ml-4 mb-5">Books Issued</h2>
            <button class="bg-gray-500 text-black rounded-md ml-180 p-2 tracking-wide mb-3">Issue Book</button>
        </div>
      <table class="w-full border-collapse bg-white shadow-md rounded-lg p-4">
        <thead class="bg-gray-200 sticky top-0">
          <tr>
            <th class="p-4 text-left">Member ID</th>
            <th class="p-4 text-left">Member</th>
            <th class="p-4 text-left">Book</th>
            <th class="p-4 text-left">Issue Date</th>
            <th class="p-4 text-left">Return Date</th>
            <th class="p-4 text-left"></th>
            <th class="p-4 text-left"></th>


          </tr>
        </thead>
        <tbody>
          <tr v-for="book in issuebooks" :key="book.book_id" class="hover:bg-gray-50">
            <td class="p-4">{{ book.member_id }}</td>
            <td class="p-4">{{ book.member }}</td>
            <td class="p-4">{{ book.book }}</td>
            <td class="p-4">{{ book.issue_date }}</td>
            <td class="p-4">{{ book.return_date }}</td>            
            <th class="p-4 text-left tracking-wide">Details</th>

            <td>
                <button class="bg-gray-500 text-white px-3 py-1 rounded tracking-wide">Return</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { IssuedBooks } from '../services/frappe.js';

const issuebooks = ref([]);

const fetchIssueBooks = async () => {
    try {
    const books = await IssuedBooks();
    issuebooks.value = books.filter(book => book.status === "Issued"); 
    } catch (error) {
    console.error("Error fetching issued books:", error);
    }
};

onMounted(fetchIssueBooks);
</script>
  