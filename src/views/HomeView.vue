<template>
  <the-navbar></the-navbar>
</template>

<script>
// @ is an alias to /src

import img from  '@/assets/assets/images/logo.png'
import imgprofile from '@/assets/assets/images/profile-header.jpg'
import TheNavbar from "@/components/TheNavbar";

export default {
  name: 'HomeView',
  components: {
    TheNavbar
  },
  
  setup(){
    
    return {
      img, imgprofile,
    }
  }
}
</script>
