<template>
  <div class="add-container">
    <h2>用户信息详情</h2>
    <div class="form-container">
      <el-form :model="user" ref="ruleForm" label-width="80px" class="form">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="user.name" readonly></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="user.phone" readonly></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="user.email" readonly></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="mini" type="success" @click="handleBack">返回主页</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    // console.log('this.$route.params:',this.$route.params.id);
    const rowObj = JSON.parse(this.$route.params.id);
    console.log("rowObj:", rowObj);
    this.user = rowObj;
  },
};
</script>

<style scoped>
.add-container {
  width: 100%;
}
.add-container h2 {
  width: 300px;
  margin: 20px auto;
  font-size: 18px;
}
.add-container .form-container {
  border: 1px solid #ccc;
  width: 600px;
  margin: 20px auto;
}
.add-container .form {
  width: 500px;
  margin: 20px auto;
}
</style>