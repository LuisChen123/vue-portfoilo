<template>
  <div class="nav-box clearfix">
    <div class="myName">
      <el-tooltip class="item" effect="dark" content="About me" placement="right">
        <el-button>
          <router-link to="/aboutme" alt="about me">
            <img src="../../assets/pic/cat.jpg" alt>
          </router-link>
        </el-button>
      </el-tooltip>
    </div>
    <ul class="navList">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <a href="#">Gallery</a>
      </li>
      <li>
        <a href="#">Portfolio</a>
      </li>
      <li>
        <router-link to="/contact">Contact Me</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "nav",
  data() {
    return {};
  },
  methods: {
    downLink() {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
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

.nav-box {
  width: 1140px;
  margin: 0 auto;

  .myName {
    margin: 10px;
    display: inline-block;
    color: #fff;
    .el-button {
      margin: 0;
      padding: 0;
      border-radius: 100%;
      a {
        text-decoration: none;
        color: #fff;
        img {
          width: 59px;
          height: 59px;
          border-radius: 100%;
        }
      }
    }
  }
  .navList {
    list-style: none;
    float: right;
    font-size: 24px;
    height: 32px;
    line-height: 32px;

    li {
      float: left;
      padding: 0 10px;

      a {
        text-decoration: none;
        color: black;
        font-size: 20px;
        color: rgb(192, 156, 126);
      }
    }
  }
}

.topNav .nav-box .navList li:hover {
  background-color: rgba(192, 156, 126, 0.1);
  border-radius: 0.1875rem;
}
</style>