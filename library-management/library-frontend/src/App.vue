<template>
  <div class="app">
    <Header />
    <LiveClock />

    <div class="flex space-x-4 p-4 Container"> 
      <DisplayBook />
      <DisplayMembers />
    </div>
    <TopChoices /> 
    <OverdueBooks />   
    <IssuedBooks />
  </div>
</template>

<script setup>

import Header from './components/Header.vue'
import LiveClock from './components/LiveClock.vue'
import DisplayBook from './components/DisplayBooks.vue'
import DisplayMembers from './components/DisplayMembers.vue'
import TopChoices from './components/TopChoices.vue'
import OverdueBooks from './components/OverdueBooks.vue'
import IssuedBooks from './components/IssuedBooks.vue'
</script>

<style>
.app{
  background-color: rgba(179, 177, 177, 0.438);
  height: 80%;
  width: 60%;
  margin: 10px auto;
  border-radius: 16px;
  padding-top: 20px;
}


</style>