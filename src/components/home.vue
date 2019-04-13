<template>
  <div class="topNav">
    <!-- navbar start -->
    <nav-box/>
    <!-- navbar end -->
    <div class="intro-box">
      <h1 class="firstLine">"Helloooo down there ".</h1>
      <h1
        class="secondLine"
      >My name is Yuhang Chen, a front-end web designer from Irvine who creates clean and modern design for clients all over the world.</h1>
      <div class="button-box">
        <a target="www.baidu.com" href="http://www.baidu.com">
          <el-tooltip content="Download My Resume" placement="top">
            <el-button icon="el-icon-download" circle></el-button>
          </el-tooltip>
        </a>
      </div>
    </div>
    <div class="carouselTitle">
      <h1>MY PROJECTS</h1>
    </div>
    <!-- carousel start -->
    <div class="carousel-box">
      <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="item in car_info" :key="item.id">
          <a href="#" alt="myWorkLinks">
            <img :src="item.img_url" alt width="951px" height="500px">
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- navbar end -->

    <!-- footer start -->
    <footer-box/>
    <!-- navbar end -->
  </div>
</template>

<script>
import navBox from "./chirdren/navBox";
import footerBox from "./chirdren/footerBox";

export default {
  name: "home",
  data() {
    return {
      car_info: []
    };
  },
  components: {
    "nav-box": navBox,
    "footer-box": footerBox
  },
  methods: {
    getImg() {
      this.$axios.get("/api/home.json").then(result => {
        if (result.status === 200) {
          console.log(result);
          this.car_info = result.data.title;
        } else {
          console.log(
            "failed to connect the service, please check internet connection."
          );
        }
      });
    }
  },
  created() {
    this.getImg();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
@mixin tt {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.topNav {
  background-image: url("../assets/pic/banner.jpg");
  background-repeat: no-repeat;
  background-size: contain;

  .carouselTitle {
    margin: 10px auto;
    height: 140px;
    background-color: rgb(238, 238, 238);
    line-height: 140px;

    h1 {
      color: black;
      text-align: center;
      background-color: #f5f5f5;
    }
  }

  .intro-box {
    text-align: left;
    margin: 8% auto 1em;

    .firstLine {
      color: rgb(192, 156, 126);
      margin: 0 auto;
      font-size: 4em;
      padding: 0;
      font-weight: 300;
      text-align: left;
      line-height: 1.4em;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
      width: 1226px;
      text-align: center;
    }
    .secondLine {
      color: rgb(192, 156, 126);
      font-size: 2em;
      text-align: left;
      font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
      font-weight: 400;
      margin: 175px auto 70px auto;
          
      line-height: 1.7em;
      width: 1226px;
      text-indent: 1em;
    }
    .button-box {
      margin: 0 auto;
      width: 40px;
      .downLoadButton {
      }
    }
  }
}
.carousel-box {
}
</style>
