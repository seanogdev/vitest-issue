<script setup>
import { ref } from 'vue';
import { VBtn } from 'vuetify/components';
const count = ref(0);
</script>

<template>
  {{ count }}
  <VBtn @click="count++">button</VBtn>
  <VBtn @click="count++">button</VBtn>
  <VBtn @click="count++">button</VBtn>
  <VBtn @click="count++">button</VBtn>
</template>
