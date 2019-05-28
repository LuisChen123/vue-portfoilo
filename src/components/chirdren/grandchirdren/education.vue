<template>
  <div class="outer-container">
  <div class="block">
  <el-timeline>
    <el-timeline-item timestamp="04/2017-06/2017" placement="top">
      <el-card>
        <h4>Full Stack Developer</h4>
        <p>UCLA Extension Coding Bootcamp</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2009-09/2013" placement="top">
      <el-card>
        <h4>B.A. in Economics</h4>
        <p>Michigan State University ,East Lansing</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>
  </div>
</template>

<script>
export default {
  name: 'education',
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
.outer-container{
  padding: 0;
  margin: 0;
}
</style>