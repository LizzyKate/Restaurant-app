<template>
  <router-view />
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
.__form {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
}

form {
  width: 50%;
  margin: auto;
}

input {
  width: 96%;
  margin: 10px 0;
  padding: 10px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #00bcd4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
