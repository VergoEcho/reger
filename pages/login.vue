<template>
    <el-card
        shadow="always"
        :style="{width: '500px'}"
    >
  <el-form
    :model="controls"
    :rules="rules"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <h1>Добавить комментарий</h1>

    <el-form-item label="Логин" prop="login">
      <el-input v-model.trim="controls.login" />
    </el-form-item>

    <el-form-item label="Пароль" prop="password">
      <el-input v-model.trim="controls.password" type="password"/>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        native-type="submit"
        :loading="loading"
      >
        Войти
      </el-button>
    </el-form-item>
  </el-form>
    </el-card>
</template>

<script>
export default {
    loading: false,
    layout: 'empty',
    data() {
        return {
        controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Введите логин', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Введите пароль', trigger: 'blur' },
          { min: 6, message: 'Пароль должен быть не менее 6 символов', trigger: 'blur'}
        ]
      }
        }
    },
    methods: {
        onSubmit(){
            console.log('submit')
        }
    }
}
</script>