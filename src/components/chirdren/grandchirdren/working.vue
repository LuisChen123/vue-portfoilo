<template>
  <div class="outer-container">
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2018-Present" placement="top">
          <el-card>
            <h4>Front End Developer</h4>
            <p>AVGD ,GuangZhou,China</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2014-2016" placement="top">
          <el-card>
            <h4>Marketing Assistant</h4>
            <p>Tianjin Tianyun Eng.& Tech. Co., Ltd - Tianjin, China</p>        
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template> 

<script>
export default {
  name: "working",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
.outer-container {
  padding: 0;
  margin: 0;
}
</style>