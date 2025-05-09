<template>
    <div class="p-6">
  
      <div class="mt-4 h-96 overflow-y-auto border rounded-lg p-4 bg-gray-100">
        <div class="flex justify-between items-center p-5">
        <h1 class="text-2xl font-bold">Member list</h1>
        <button class="px-4 py-2 bg-gray-400 text-black rounded hover:bg-blue-600">
          Add New member
        </button>
      </div>
        <table class="w-full border-collapse bg-white shadow-md rounded-lg">
          <thead class="bg-gray-200 sticky top-0">
            <tr>
              <th class="p-3 text-left ">Member</th>
              <th class="p-3 text-left ">Email</th>
              <th class="p-3 text-left ">Contact</th>
              <th class="p-3 text-left ">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in members" :key="member.name" class="hover:bg-gray-50">
              <td class="p-3 text-sm">{{ member.name1 }}</td>
              <td class="p-3 text-sm">{{ member.email }}</td>
              <td class="p-1 text-sm whitespace-nowrap">{{ member.contact }}</td>
              <td class="p-3  flex">

                <button @click="editMember(member.name)" class="w-8 h-8 flex items-center justify-center hover:bg-blue-600 rounded-md">
                  <img src="@/assets/edit.png" alt="Edit" class="w-4 h-4">
                </button>
                <button @click="removeMember(member.name)" class="w-8 h-8 flex items-center justify-center hover:bg-blue-600 rounded-md">
                  <img src="@/assets/delete.png" alt="delete" class="w-4 h-4">
                </button>

              </td>
            </tr>
          </tbody>
        </table>
  
        <p v-if="members.length === 0" class="text-center mt-4">Loading members... WAIT</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getMembers } from '../services/frappe.js';
  
  const members = ref([]);
  
  const loadMembers = async () => {
    members.value = await getMembers();
  };
  
  onMounted(loadMembers);
  </script>
  