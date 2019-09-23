<template>
  <div class="container">
    <form class="login">
      <h1 class="login__title">Log in</h1>
      <label for class="login__label">Username</label>
      <input type="text" class="login__input" placeholder="type here your name" v-model="username" />
      <label for class="login__label">Password</label>
      <input
        type="password"
        class="login__input"
        placeholder="type here your password"
        v-model="password"
      />
      <button type="submit" class="login__sign" @click.prevent="submit">Sign In</button>
      <div class="login__link">
        <router-link class="login__link-route" to="forgot-password">Forgot Password?</router-link>
        <router-link class="login__link-route" to="register-form">
          Not a
          <span class="login__link-route--underscore">Member</span> yet?
        </router-link>
      </div>
    </form>
    <div class="validation" v-if="this.errors.length">
      <p>Some errors to fix!</p>
      <ul>
        <li v-for="(error, index) in errors" :key="index">{{error}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginForm",
  data() {
    return {
      username: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      if (this.checkForm()) {
        this.$router.push("/landing-page");
      }
    },
    checkForm() {
      this.errors.length = 0;
      if (!this.username || this.username.length < 4) {
        this.errors.push("Username is not valid or to short!");
      }
      if (!this.checkPassword(this.password)) {
        this.errors.push(
          "Password must contain minimum 8 characters, at least one letter, one number and one special character!"
        );
      }
      if (this.errors.length === 0) {
        return true;
      }
    },
    checkPassword(password) {
      const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      return re.test(password);
    }
  }
};
</script>

<style lang="scss">
.container {
  width: 70%;
  align-self: center;
  margin-bottom: 30%;
}
.login {
  display: flex;
  flex-direction: column;
  &__title {
    margin: 10px 0 30px 0;
    @media (max-width: 768px) {
      margin: 5px 0 15px 0;
    }
    @media (max-width: 1024px) {
      margin: 5px 0 10px 0;
    }
  }
  &__label {
    margin: 5px 0;
  }
  &__input {
    font-size: 0.8rem;
    padding-left: 15px;
    margin: 10px 0;
    border: none;
    border-bottom: 1.5px solid black;
  }
  &__link {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
      margin: 5px 0;
    }

    &-route {
      text-decoration: none;
      color: black;
      &--underscore {
        text-decoration: underline;
      }
    }
  }
  &__sign {
    margin: 20px 0 20px 0;
    padding: 10px 0;
    font-size: 1.5rem;
    border: none;
    background-color: rgb(19, 108, 241);
    color: white;
    cursor: pointer;
    @media (max-width: 1024px) {
      margin: 10px 0 10px 0;
    }
    @media (max-width: 1024px) and (orientation: landscape) {
      margin: 5px 0 5px 0;
    }
  }
}
.validation {
  border: 2px solid red;
  background-color: white;
  font-size: 0.8rem;
  color: red;
}
</style>
