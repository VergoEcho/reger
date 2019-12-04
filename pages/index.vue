<template>
  <el-row class="content-row" type='flex' align="middle">
    <el-carousel height="450px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      
      <h2 class="subTitle">Lorem ipsum dolor sit.</h2>
      </el-carousel-item>
    </el-carousel>
    <el-col :xs="24" :sm='18' :md="12" :lg='10'>
      <app-card
        v-for="post in 3"
        :key="post"
       />
    </el-col>
  </el-row>
</template>

<script>
import AppCard from '@/components/main/Card'
export default {
  head: {
    title: 'Главная'
  },
  components: {
    AppCard
  }
}
</script>

<style scoped>
  .content-row{
    flex-direction: column;
  }
  .el-carousel{
    width: 100%;
  }
  .el-carousel__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .subTitle{
    margin-bottom: 40px;
  }
</style>
