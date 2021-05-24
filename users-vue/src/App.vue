<template>
  <div id="app">
     <my-nav></my-nav>
    <RouterView />
  </div>
</template>

<script>
import Nav from "./views/Nav";

export default {
  name: "App",
  components: {
    myNav:Nav
  },
};
</script>


