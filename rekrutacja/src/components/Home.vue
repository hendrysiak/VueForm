<template>
  <div class="home-page">
    <main class="home-page__main">
      <section class="home-page__image">
        <h1 class="home-page__image-title">Get Started</h1>
        <button class="home-page__image-button">Sign in with Google+</button>
        <button class="home-page__image-button">Sign in with Facebook</button>
      </section>
      <section class="home-page__form">
        <div class="router">
          <router-link class="router-link" to="login-form" active-class="active">Log in</router-link>
          <router-link class="router-link" to="register-form" active-class="active">Register</router-link>
        </div>
        <router-view></router-view>
      </section>
    </main>
  </div>
</template>

<script>
import loginForm from "../views/loginForm.vue";
export default {
  name: "Home",
  components: {
    loginForm
  }
};
</script>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: arial;
  font-size: 18px;
  // h1 {
  //   font-size: 1.8rem;
  // }
  @media (max-width: 736px) {
    font-size: 8px;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  @media (max-width: 1024px) and (orientation: landscape) {
    font-size: 10px;
  }
  @media (max-width: 1024px) and (orientation: portrait) {
    font-size: 10px;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
}

.home-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("../assets/FreeVector-Blue-Background-Graphics.jpg");

  background-repeat: no-repeat;
  background-size: cover;

  &__main {
    height: 80%;
    width: 80%;
    background-color: white;
    box-shadow: 0 0 30px -10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    // @media (min-width: 736px) {
    //   flex-direction: row;
    // }
  }
  &__image {
    position: relative;
    height: 100%;
    width: 50%;
    background-image: url("../assets/FreeVector-Blue-Background-Graphics.jpg");
    background-repeat: no-repeat;
    background-size: 247%;
    background-position: 17% 14%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    color: white;
    &::after {
      content: "";
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
    }
    &-title {
      z-index: 2;
    }
    &-button {
      margin: 25px 0px;
      padding: 15px 15px;
      width: 40%;
      background-color: rgba(0, 0, 0, 0);
      font-size: 1rem;
      color: white;
      border: 2px solid white;
      cursor: pointer;
      z-index: 2;
      @media (max-width: 736px) {
        width: 80%;
      }
      @media (max-width: 1024px) {
        padding: 10px 10px;
        margin: 8px 0px;
      }
    }
    :nth-last-child(1) {
      margin-bottom: 80px;
      @media (max-width: 736px) {
        margin-bottom: 15px;
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      height: 40%;
    }
  }
  &__form {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 768px) {
      width: 100%;
      height: 60%;
    }
  }
}
.router {
  margin: 30px 30px;
  align-self: flex-end;
  @media (max-width: 768px) {
    margin: 15px 15px;
  }
  @media (max-width: 1024px) and (orientation: landscape) {
    margin: 15px 10px 5px 0;
  }
  &-link {
    text-decoration: none;
    padding: 10px 10px;
    border: 1px solid grey;
  }
}
.active {
  background-color: rgb(19, 108, 241);
  color: white;
}
</style>