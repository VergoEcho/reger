<template>
<el-row class="nav" type="flex" justify="space-between">

    <nuxt-link class="logo-block" to="/">
        <img class="logo" src="@/assets/logo.svg" alt="">
        <h1 class="logo-text">Парфюмерия на распив</h1>
    </nuxt-link>
<el-menu class="" active-text-color="#775696" mode="horizontal">
  <el-submenu index="4">
    <template slot="title">User</template>
    <el-menu-item index="2-1"><i class="el-icon-s-custom"></i>My page</el-menu-item>
    <el-menu-item index="2-2"><i class="el-icon-shopping-cart-2"></i> Cart</el-menu-item>
    <el-menu-item index="2-3"><i class="el-icon-delete"></i> Logout</el-menu-item>
  </el-submenu>
    <el-menu-item index="3">Войти</el-menu-item>
    <el-menu-item index="5">Зарегистрироваться</el-menu-item>
</el-menu>
</el-row>
</template>

<script>
export default {
    data (){
        return {
            activeIndex: '1'
        }
    }
    
}
</script>

<style lang="scss" scoped>
    .logo-block{
        display: flex;
    }
    .logo{
        height: 71px;
        top: 0;
        position: fixed;
    }
    .logo-text{
        font-family: 'Marck Script', cursive;
        font-size: 20px;
        margin-left: 75px;
        color: #645288;
    }
    h1{
        text-align: center;
        align-self: center;
    }
    .nav{
        width: calc(100vw - 56px);
        background-color: white;
        border-bottom: 1px solid #e6e6e6;
    }
    .el-menu{
        border-bottom: none;
    }
</style>