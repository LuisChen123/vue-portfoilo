<template>
  <div class="out-container">
    <div class="topNav">
      <Nav-box/>

      <div class="introduce">
        <h1>About Me</h1>
        <p>heelo heelo worldheelohehlo wooheelo wworldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheelo worldheeloheeloheelo worldheeloheelo worldheeloheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo worldheelo world</p>
      </div>
    </div>
    <div class="switcher">
      <ul>
        <li>
          <router-link to="/aboutme/education">
            <img src="../assets/pic/education.png" alt>
          </router-link>
        </li>
        <li>
          <router-link to="/aboutme/working">
            <img src="../assets/pic/working.png" alt>
          </router-link>
        </li>
      </ul>
      <div class="switcherBody">
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div class="skillPanelName">
      <h1>My Skills</h1>
    </div>
    <div class="skillPanel">
      <div class="skillPanelInner">
        <ul class="skillUl">
          <li>
            <img src="../assets/pic/css3.png" alt="css3">
            <el-progress type="circle" :percentage="55"></el-progress>
          </li>
          <li>
            <img src="../assets/pic/html5.png" alt="html5.png">
            <el-progress type="circle" :percentage="76"></el-progress>
          </li>
          <li>
            <img src="../assets/pic/jquery.png" alt>
            <el-progress type="circle" :percentage="60"></el-progress>
          </li>
          <li>
            <img src="../assets/pic/sql.png" alt>
            <el-progress type="circle" :percentage="79"></el-progress>
          </li>
        </ul>
        <ul class="skillUl">
          <li>
            <img src="../assets/pic/vue.png" alt>
            <el-progress type="circle" :percentage="86"></el-progress>
          </li>
          <li>
            <img src="../assets/pic/bootstrap.png" alt>
            <el-progress type="circle" :percentage="69"></el-progress>
          </li>
          <li>
            <img src="../assets/pic/Sass.png" alt>
            <el-progress type="circle" :percentage="77"></el-progress>
          </li>
          <li>
            <img src="../assets/pic/react.png" alt>
            <el-progress type="circle" :percentage="80"></el-progress>
          </li>
        </ul>
      </div>
    </div>
    <footer-box/>
  </div>
</template>

<script>
import Navbox from "../components/chirdren/navBox";
import footerBox from "./chirdren/footerBox";
export default {
  name: "aboutme",
  data() {
    return {};
  },
  components: {
    "Nav-box": Navbox,
    "footer-box": footerBox
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

/* 此段代码是设置了元素离开与进入的方式 */
.clearfix {
}
:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.clearfix {
  *zoom: 1;
}
/* 这段代码是除去float的副作用 */

@mixin box-shadow {
  //make this box has a white box shadow
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  transition: 0.3s;
  box-shadow: 7px 7px 10px 0 rgba(56, 56, 56, 0.21);
  border-radius: 4px;
  overflow: hidden;
}

@mixin background-picLay {
  //the way that background pic layout
  background-repeat: no-repeat;
  background-size: contain;
}

@mixin title-style {
  text-align: center;
  color: #303133;
  font-family: "Courier New", Courier, monospace;
  font-size: 56px;
  margin-top: 100px;
}

$web-heartWidth: 1226px; //
.out-container {
  .topNav {
    background-image: url("../assets/pic/banner.jpg");
    @include background-picLay;
    .introduce {
      margin: 0 auto;
      width: 1166px;
      padding: 0 61px;

      h1 {
        @include title-style;
      }
      p {
        margin: 0 auto;
        padding: 20px;
        text-indent: 50px;
        line-height: 30px;
        word-spacing: 10px;
        text-align: start;
        @include box-shadow;
      }
    }
  }
  .switcher {
    width: $web-heartWidth;
    margin: 0 auto;
    margin-top: 100px;

    ul {
      display: flex;
      justify-content: center;
      margin: 20px auto;
      padding: 0;
      li {
        list-style: none;
        padding: 0 20px;
        img {
        }
      }
    }

    .switcherBody {
      margin: 0 auto;
    }
  }

  .skillPanelName {
    height: 30px;
    line-height: 30px;
    h1 {
       @include title-style;
    }
  }
  .skillPanel {
    display: flex;
    height: 500px;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    margin-top: 40px;
    .skillPanelInner {
      width: $web-heartWidth;
      .skillUl {
        display: flex;
        justify-content: center;
        padding: 10px 0;
        li {
          list-style-type: none;
          padding: 0 10px;
          border-radius: 22%;
          img {
          }
        }
      }
    }
  }
}

.topNav .nav-box .navList li:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.1875rem;
}

.out-container .switcher ul li:hover {
  opacity: 1;
  transform: translate(0, -8px);
  transition: all 0.8s ease;
  /* 这段代码是鼠标悬停于一个object上时，此obeject悬浮 */
}

.out-container .skillPanel .skillPanelInner .skillUl li:hover {
  opacity: 1;
  transform: translate(0, -8px);
  transition: all 0.8s ease;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}
</style>
