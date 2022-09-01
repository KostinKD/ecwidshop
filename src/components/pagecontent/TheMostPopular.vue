<template>
  <div class="most-popular">
    <div class="row">
      <div class="col-lg-12">
        <div class="heading-section" v-for="r in requests">
          <h4><em>{{ r.name }}</em></h4>
        </div>
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <img src="@/assets/images/popular-01.jpg" alt="">
              <h4>Fortnite<br><span>Sandbox</span></h4>
              <ul>
                <li><i class="fa fa-star"></i> 4.8</li>
                <li><i class="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <img src="@/assets/images/popular-02.jpg" alt="">
              <h4>PubG<br><span>Battle S</span></h4>
              <ul>
                <li><i class="fa fa-star"></i> 4.8</li>
                <li><i class="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <img src="@/assets/images/popular-03.jpg" alt="">
              <h4>Dota2<br><span>Steam-X</span></h4>
              <ul>
                <li><i class="fa fa-star"></i> 4.8</li>
                <li><i class="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <img src="@/assets/images/popular-04.jpg" alt="">
              <h4>CS-GO<br><span>Legendary</span></h4>
              <ul>
                <li><i class="fa fa-star"></i> 4.8</li>
                <li><i class="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <img src="@/assets/images/popular-07.jpg" alt="">
              <h4>Warface<br><span>Max 3D</span></h4>
              <ul>
                <li><i class="fa fa-star"></i> 4.8</li>
                <li><i class="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <img src="@/assets/images/popular-07.jpg" alt="">
              <h4>Warface<br><span>Max 3D</span></h4>
              <ul>
                <li><i class="fa fa-star"></i> 4.8</li>
                <li><i class="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <img src="@/assets/images/popular-07.jpg" alt="">
              <h4>Warface<br><span>Max 3D</span></h4>
              <ul>
                <li><i class="fa fa-star"></i> 4.8</li>
                <li><i class="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="item">
              <img src="@/assets/images/popular-08.jpg" alt="">
              <h4>Warcraft<br><span>Legend</span></h4>
              <ul>
                <li><i class="fa fa-star"></i> 4.8</li>
                <li><i class="fa fa-download"></i> 2.3M</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="main-button">
              <a href="browse.html">Discover Popular</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['requests']
}
</script>

<style scoped>

</style>