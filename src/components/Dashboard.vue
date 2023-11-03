<template>
  <div class="login-container">
    <h1>Welcome to the Dashboard Page</h1>
  </div>
  <div class="login-container">
    <span>User: {{ username }}</span>
  </div>

  <div class="login-container">
    <span>Email :{{ email }}</span>
  </div>
  <div class="flex">
    <CardComponent title="Sales Overview" content="34" />
    <CardComponent title="Sales Overview" content="34" />
  </div>
  <button @click.prevent="logout">logout</button>
</template>

<script>
import router from "../router/index"; // Update with the actual path to your router configuration
import CardComponent from "./Card.vue"; // Adjust the path to your card component file

export default {
  name: "DashboardPage",
  props: {
    msg: String,
  },
  components: {
    CardComponent,
  },

  data() {
    return {
      username: "",
      email: "",
    };
  },
  methods: {
    getData() {
      const data = JSON.parse(localStorage.getItem("user"));
      if (!data) {
        router.push("/");
      } else {
        this.username = data.userName;
        this.email = data.email;
      }
    },
    logout() {
      localStorage.removeItem("user");
      router.push("/");
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

h2 {
  font-size: 24px;
}
.flex{
    display:flex;
    justify-content:center;
}
.form-group {
  margin: 10px 0;
}

label {
  display: block;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 4px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
