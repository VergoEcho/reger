<template>
    <el-card
    shadow='hover'
    :body-style="{padding: 0}"
    class='card'
    >
    <header slot="header" class="post-header">
        <h3>Card-title</h3><span></span>
    </header>
    <div class="post-body">
        <img
          src="/img1.jpg"
          alt=""
          class="post-img"
        >
    </div>
    <footer class="post-footer">
        <el-slider style="{cursor: 'pointer'}" type="danger" :format-tooltip="formatTooltip" v-model="ml" disabled></el-slider>
        <el-button type="danger" @click="openItem">Подробнее</el-button>
    </footer>
    </el-card>
</template>

<script>
export default {
    data(){
        return {
            ml: 40
        }
    },
    methods:{
        openItem(){
            const id = 'test-id'
            this.$router.push(`/product/${id}`)
        },
        formatTooltip(val){
            var info = val + ' мл'
            return info
        }
    }
}
</script>

<style lang="scss" scoped>

    .el-slider__runway.disabled .el-slider__button-wrapper.dragging,
    .el-slider__runway.disabled .el-slider__button-wrapper.hover,
    .el-slider__runway.disabled .el-slider__button-wrapper:hover{
        cursor: default !important;
    }
    .post-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .post-body{
        display: flex;
        justify-content: center;
    }
    .post-img{
        width: 100%;
    }
    .post-footer {
        padding: 10px;
        display: flex;
        justify-content: space-between;
    }
    .el-slider{
        width: 100%;
        padding: 0 10px;
    }
    .el-slider__bar{
        background-color: red;
    }
    .el-slider__runway.disabled .el-slider__bar {
    background-color: red;
}
</style>