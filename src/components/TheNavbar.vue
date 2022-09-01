<template>
  <nav class="main-nav">
    <!-- ***** Logo Start ***** -->
    <a href="index.html" class="logo">
      <img src="@/assets/images/logo.png" alt="">
    </a>
    <!-- ***** Logo End ***** -->
    <!-- ***** Search End ***** -->
    <div class="search-input">
      <form id="search" action="#">
        <input type="text" placeholder="Введите что-нибудь..." id="searchText" name="searchKeyword" onkeypress="handle">
        <i class="fa fa-search"></i>
      </form>
    </div>
    <!-- ***** Search End ***** -->
    <!-- ***** Menu Start ***** -->
    <ul class="nav">
      <li><a href="index.html" class="active">Home</a></li>
      <li><a href="browse.html">Browse</a></li>
      <li><a href="details.html">Details</a></li>
      <li><a href="streams.html">Корзина</a></li>
      <li><a href="profile.html">Профиль <img src="@/assets/images/profile-header.jpg" alt=""></a></li>
    </ul>
    <a class="menu-trigger">
      <span>Menu</span>
    </a>
    <!-- ***** Menu End ***** -->
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  setup(){



    return{

    }
  }
}
</script>

<style scoped>

</style>