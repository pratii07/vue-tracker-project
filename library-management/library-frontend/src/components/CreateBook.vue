<template>
    <div>
      <h3>Add New Book</h3>
      <form @submit.prevent="addBook">
        <input v-model="newBook.title" placeholder="Title" required />
        <input v-model="newBook.author" placeholder="Author" required />
        <input v-model="newBook.isbn" placeholder="ISBN" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const newBook = ref({
    title: '',
    author: '',
    isbn: ''
  });
  
  const addBook = async () => {
    try {
      const response = await axios.post('http://site1.local:8000/api/resource/Books', {
        title: newBook.value.title,
        author: newBook.value.author,
        isbn: newBook.value.isbn
      }, {
        headers: {
          'Authorization': `token 483ee347c0fa0f9:427b7da01019459`  
        }
      });
      console.log('Book added:', response.data);
      newBook.value = { title: '', author: '', isbn: '' };
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };
  </script>
  