<template>
  <div class="nav-container">
    <ul class="clearfix">
      <li><router-link to="/">主页</router-link></li>
      <li><router-link to="/about">关于我们</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.nav-container {
  background-color: #f8f8f8;
  width: 100%;
  height: 60px;
}
.nav-container ul {
  font-weight:800;
}
.clearfix::after {
  display: block;
  content: "";
  clear: both;
}
.nav-container ul li {
  list-style: none;
  float: left;
  margin: 20px 20px;
}
.nav-container ul li a {
  text-decoration: none;
  color: #777;
}
.nav-container ul li a:hover {
  text-decoration: none;
  color: #333;
}
</style>