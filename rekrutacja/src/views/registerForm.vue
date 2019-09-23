<template>
  <div class="container">
    <section class="register">
      <h1 class="register__title">Registration</h1>
      <label for class="register__label">Username</label>
      <input
        type="text"
        class="register__input"
        placeholder="type here your name"
        v-model="username"
      />
      <label for class="register__label">E-mail</label>
      <input
        type="email"
        class="register__input"
        placeholder="type here your e-mail"
        v-model="email"
      />
      <label for class="register__label">Password</label>
      <input
        type="password"
        class="register__input"
        placeholder="type here your password"
        v-model="password"
      />
      <label for class="register__label">Repeat password</label>
      <input
        type="password"
        class="register__input"
        placeholder="type here another one your password"
        v-model="repeatPassword"
      />
      <button class="register__sign" type="submit" @click.prevent="submit">Register</button>
      <div class="validation" v-if="this.errors.length">
        <p>Some errors to fix!</p>
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{error}}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "registerForm",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      repeatPassword: "",
      errors: []
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      if (this.checkForm()) {
        this.$router.push("home/login-form");
      }
    },
    checkForm() {
      this.errors.length = 0;
      if (!this.username || this.username.length < 4) {
        this.errors.push("Username is not valid or to short!");
      }
      if (!this.email || !this.checkEmail(this.email)) {
        this.errors.push("Email is not valid!");
      }
      if (!this.checkPassword(this.password)) {
        this.errors.push(
          "Password must contain minimum 8 characters, at least one letter, one number and one special character!"
        );
      }
      if (this.password !== this.repeatPassword) {
        this.errors.push("Passwords must be the same!");
      }
      if (this.errors.length === 0) {
        return true;
      }
    },
    checkPassword(password) {
      const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      return re.test(password);
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
.register {
  display: flex;
  flex-direction: column;
  &__title {
    margin: 10px 0 30px 0;
    @media (max-width: 768px) {
      margin: 5px 0 15px 0;
    }
    @media (max-width: 1024px) and (orientation: landscape) {
      margin: 4px 0 0 0;
    }
  }
  &__label {
    margin: 5px 0;
    @media (max-width: 1024px) and (orientation: landscape) {
      margin: 4px 0;
    }
  }
  &__input {
    font-size: 0.8rem;
    padding-left: 15px;
    margin: 10px 0;
    border: none;
    border-bottom: 1.5px solid black;
    @media (max-width: 768px) {
      margin: 5px 0;
    }
    @media (max-width: 1024px) and (orientation: landscape) {
      margin: 4px 0;
    }
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
    margin: 15px 0 15px 0;
    padding: 10px 0;
    font-size: 1.5rem;
    border: none;
    background-color: rgb(19, 108, 241);
    color: white;
    cursor: pointer;
    @media (max-width: 768px) {
      margin: 10px 0 10px 0;
    }
    @media (max-width: 1024px) and (orientation: landscape) {
      margin: 6px 0px 6px 0;
    }
  }
}
</style>
