<template>
  <div class="hello">
    <!-- v-bind -->
    <!-- v-bind short code -->
  <div v-bind:class="backgroundClassName"> Some Class with background</div>

  <!-- v-on -->
  <button v-on:click="handleClick">Click This</button>

  <!-- v-once -->
  <div v-once> the first message will never change: {{ message }}</div> 
  <div> the first message will never change: {{ message }}</div> 
  <!-- v-html -->
  <div v-html="anchorTag"></div>
  <!-- v-model -->
  <lable for="firstName">First Name</lable>
  <input type="text" name ="firstName" v-model="nameInput">
  <!-- computed -->
  <div>{{ message }} => reversed: {{ reversMessage }}</div>

  <!-- watch -->
  <input type="text" name ="firstName" v-model="nameInput">
  </div>
</template>

<script src="./PlayGround.js"></script>
<style src="./PlayGround.css" scoped></style>
