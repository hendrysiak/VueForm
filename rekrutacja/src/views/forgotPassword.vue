<template>
  <div class="container">
    <section class="forgot-password">
      <h1 class="forgot-password__title">Reset Password</h1>
      <label for class="forgot-password__label">Username</label>
      <input
        type="text"
        class="forgot-password__input"
        placeholder="type here your name"
        v-model="username"
      />
      <label for class="forgot-password__label">E-mail</label>
      <input
        type="email"
        class="forgot-password__input"
        placeholder="type here your e-mail"
        v-model="email"
      />
      <button type="submit" class="forgot-password__sign" @click.prevent="submit">Reset password</button>
    </section>
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
  name: "forgotPassword",
  data() {
    return {
      username: "",
      email: "",
      errors: []
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      if (this.checkForm()) {
        this.$router.push("/home/login-form");
      }
    },
    checkForm() {
      this.errors.length = 0;
      if (!this.username || this.username.length < 4) {
        this.errors.push("Username is not valid or to short!");
      }
      if (!this.checkEmail(this.email)) {
        this.errors.push("E-mail is not valid!");
      }
      if (this.errors.length === 0) {
        return true;
      }
    },
    checkEmail(email) {
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;

      return re.test(String(email).toLowerCase());
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
.forgot-password {
  display: flex;
  flex-direction: column;
  &__title {
    margin: 10px 0 30px 0;
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
  }
}
</style>
