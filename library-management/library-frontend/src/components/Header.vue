<template>
    <div class="flex items-center justify-between bg-white p-4 rounded-lg shadow-md w-9/11 mx-auto">

      <img src="@/images/frappelogo.png"
           alt="logo"
           class="w-12 h-auto">
      
      <h1 class="text-2xl font-bold text-gray-800 tracking-wide-3">Library Dashboard</h1>
  

      <div class="relative flex items-center">
        <input id="searchInput"
               type="text"
               placeholder="Search Books and Members..."
               class="border border-gray-300 rounded-l-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400">
        <button id="search-btn"
                class="bg-gray-300 px-4 py-2 rounded-r-md border border-gray-300 hover:bg-gray-400">
          Search
        </button>
      </div>
  
      <div class="flex items-center space-x-4">
        <div>
          <h4 class="text-lg font-semibold text-pink-600">Pratiksha</h4>
          <p class="text-gray-600 text-sm">Librarian</p>
        </div>
        <img id="profile"
             src="@/images/profilePhoto.jpeg"
             alt="profile"
             class="w-16 h-16 rounded-full border-2 border-gray-300">
      </div>
    </div>
  </template>
  