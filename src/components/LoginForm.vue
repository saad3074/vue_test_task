<template>
  <form name="login-form" class="login-form">
    <div class="form-group">
      <label for="username">Username:</label>
      <input
        type="text"
        id="username"
        v-model="username"
        class="form-control"
      />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        v-model="password"
        class="form-control"
      />
    </div>
    <button class="btn btn-primary" type="submit" @click.prevent="login">
      Login
    </button>
  </form>
</template>

<script>
import router from "../router/index"; // Update with the actual path to your router configuration
import axios from "axios";
export default {
  name: "LoginView",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    getData() {
      const data = JSON.parse(localStorage.getItem("user"));
      if (data) {
        router.push("/dashboard");
      }
    },
    login() {
      if (this.username && this.password) {
        axios
          .get("http://localhost:3000/users")
          .then((response) => {
            const { data } = response;

            const user = data.find((item) => {
              return (
                item.userName == this.username && item.password == this.password
              );
            });
            if (user) {
              localStorage.setItem("user", JSON.stringify(user));
              alert("Login successful");
              this.isLoggedIn = true;
              router.push("/dashboard");
            } else {
              alert("Incorrect username or password");
              // Authentication failed
              this.isLoggedIn = false;
              console.error("Login failed");
            }
          })
          .catch((error) => {
            console.error("Error during login:", error);
          });
      } else {
        alert("Username and password cannot be empty");
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin: auto;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f5f5f5;
}

.form-group {
  margin-bottom: 15px;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.btn {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
