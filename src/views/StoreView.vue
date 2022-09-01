<template>
  <header class="header-area header-sticky">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <the-navbar></the-navbar>
        </div>
      </div>
    </div>
  </header>


  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="page-content">
          <the-main-banner></the-main-banner>
          <the-most-popular :requests="requests"></the-most-popular>
        </div>
      </div>
    </div>
  </div>
  <TheFooter></TheFooter>
<!--  <HelloWorld></HelloWorld>-->
</template>

<script>
// @ is an alias to /src
import TheNavbar from "@/components/TheNavbar.vue";
import TheStorebody from "@/components/TheStorebody";
import TheMainBanner from "@/components/pagecontent/TheMainBanner";
import TheMostPopular from "@/components/pagecontent/TheMostPopular";
import TheFooter from "@/components/TheFooter";
import {onMounted, computed} from "vue";
import {useStore} from 'vuex'

export default {
  name: 'StoreView',
  components: {
    TheNavbar,
    TheStorebody,
    TheMainBanner,
    TheMostPopular,
    TheFooter
  },

  setup(){
    const store = useStore()

    const requests = computed(()=> store.getters["request/requests"])
    onMounted(async ()=>{
      await store.dispatch('request/loadCategory')
      console.log(store.getters["request/requests"])
      console.log(store.state["request/requests"])
    })
    return{
      requests
    }
  }
}
</script>
