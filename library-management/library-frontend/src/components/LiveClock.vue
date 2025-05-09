<template>
    <div class="ml-30 mt-10">
        <h2 class="text-2xl font-bold text-gray-800 mb-2 tracking-wide">Hello Pratiksha !</h2>
        <p id="date-time">{{ dateTime }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const dateTime = ref("");
  
  const updateDateTime = () => {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
  
    dateTime.value = `${monthName} ${date}, ${year} | ${dayName}, ${hours}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`;
  };
  
  onMounted(() => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
  });
  </script>
  