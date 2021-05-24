<template>
  <div class="add-container">
    <h2>添加用户</h2>
    <div class="form-container">
      <el-form
        :model="user"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="form"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="user.name"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="user.phone"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="user.email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" size="mini" @click="submitForm('ruleForm')"
            >确认添加</el-button
          >
          <el-button size="mini" @click="handleBack">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Add",
  data() {
    return {
      user: {},
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
    submitForm(ruleForm) {
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          let newUser = {
            name: this.user.name,
            phone: this.user.phone,
            email: this.user.email,
          };

          axios
            .post("http://localhost:3000/users", newUser)
            .then((response) => {
              console.log(response);
              this.$router.push({ path: "/" });
              this.$message({
                message: "用户添加成功!",
                type: "success",
              });
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
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
