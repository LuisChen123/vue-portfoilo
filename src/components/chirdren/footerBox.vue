<template>
  <div class="outer-container">
    <div class="leftbox">
      <p>© 2019 Yuhang Chen. All Rights Reserved.</p>
    </div>
    <div class="icons">
      <a href="https://www.facebook.com">
        <img src="../../assets/pic/social-facebook.png" alt="fb">
      </a>
      <a href="https://www.instagram.com">
        <img src="../../assets/pic/social-instagram.png" alt="ins">
      </a>
      <a href="https://www.linkedin.com/in/luischen1990">
        <img src="../../assets/pic/social-linkedin.png" alt="linkedin">
      </a>
       <a href="https://github.com/LuisChen123">
        <img src="../../assets/pic/GitHub.png" alt="GitHub">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
.outer-container {
  height: 100px;
  background-color: black;
  display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  .leftbox {
    
    p {
        color: rgb(253, 184, 17);
    }
  }
  .icons {
    
    a {
      img {
        filter: grayscale(100%);
        width: 20px;
        height: 20px;
      }
    }
  }
}

.outer-container .icons a:hover img {
  filter: grayscale(0%);
}
</style>