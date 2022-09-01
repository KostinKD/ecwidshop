<template>
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav class="main-nav">
            <!-- ***** Logo Start ***** -->
            <a href="index.html" class="logo">
              <img :src="img" alt="Test">
            </a>
            <!-- ***** Logo End ***** -->
            <!-- ***** Search End ***** -->
            <div class="search-input">
              <form id="search" action="#">
                <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                <i class="fa fa-search"></i>
              </form>
            </div>
            <!-- ***** Search End ***** -->
            <!-- ***** Menu Start ***** -->
            <ul class="nav">
              <li><a href="#" class="active">Home</a></li>
              <li><a href="#">Browse</a></li>
              <li><a href="#">Details</a></li>
              <li><a href="#">Streams</a></li>
              <li><a href="#">Profile <img :src="imgprofile" alt=""></a></li>
            </ul>
            <a class='menu-trigger'>
              <span>Menu</span>
            </a>
            <!-- ***** Menu End ***** -->
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import img from  '@/assets/assets/images/logo.png'
import imgprofile from '@/assets/assets/images/profile-header.jpg'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },

  setup(){

    return {
      img, imgprofile
    }
  }
}
</script>
