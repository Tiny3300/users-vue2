<template>
  <div>
    <!-- <h1 class="page-header">用户管理系统</h1> -->

    <el-row class="input-container">
      <el-col :span="9">
        <el-input
          placeholder="请输入查找内容"
          prefix-icon="el-icon-search"
          v-model="filterInput"
        ></el-input>
      </el-col>
    </el-row>
    <el-row class="addBtn-container">
      <el-button size="mini" @click="handleAdd" type="success">添加</el-button>
    </el-row>

    <el-table :data="customers" border style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        align="center"
      ></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleDetail(scope.$index, scope.row)"
            >详情</el-button
          >
          <el-button
            size="mini"
            type="success"
            @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      customers: [],
      filterInput: "",
    };
  },
  methods: {
    handleDetail(index, row) {
      const row1 = JSON.stringify(row);
      this.$router.push("/detail/" + row1);
    },
    handleEdit(index, row) {
      const row1 = JSON.stringify(row);
      this.$router.push("/edit/" + row1);
    },
    handleAdd() {
      this.$router.push("/add/");
    },
    handleDelete(index, row) {
      axios.delete("http://localhost:3000/users/" + row.id).then(() => {
        this.$message({
          message: "用户删除成功!",
          type: "success",
        });
        this.fetchUsers();
      });
    },
    fetchUsers() {
      axios
        .get("http://localhost:3000/users/")
        .then((response) => {
          this.customers = response.data;
          console.log(this.customers);
        })
        .catch((res) => {
          console.log("error::", res);
        });
    },
  },
  computed: {
    // filterBy: {
    //   get() {
    //     return this.customers.filter((customer) => {
    //       return customer.name.match(this.filterInput);
    //     });
    //   },
    // },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.addBtn-container {
  margin: 20px;
}
.input-container {
  margin: 20px;
}
</style>


