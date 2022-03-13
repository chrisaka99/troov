<template>
  <div class="container-fluid">
    <div class="row" id="row-layer">
      <div class="first-col col-md-6"></div>
      <div class="second-col col-md-6">
        <div class="row">
          <h3 class="lead mx-auto my-5 title">Connexion</h3>
        </div>
        <div class="row">
          <div class="col-md-10 mx-auto">
            <form v-on:submit.prevent="login" method="POST">
              <div class="form-group">
                <label for="email">Identifiant</label>
                <b-form-input
                  id="email"
                  type="email"
                  autocomplete="off"
                  v-model="email"
                  required
                ></b-form-input>
              </div>
              <div class="form-group">
                <label for="password">Mot de passe</label>
                <b-form-input
                  id="password"
                  type="password"
                  v-model="password"
                  required
                ></b-form-input>
              </div>

              <!-- <p style="color: red">{{ msg }}</p> -->

              <div class="form-group">
                <router-link to="/password-forgotten"
                  >Mot de passe oublié ?</router-link
                >
              </div>
              <div class="form-group">
                <button type="submit" tag="button" class="button btn-block">
                  Se connecter
                </button>
              </div>

              <div class="form-group">
                <p>
                  Vous n'avez pas de compte ?
                  <router-link to="/inscription">Inscrivez-vous</router-link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const credentials = {
        email: this.email,
        password: this.password,
      };
      await axios
        .post("http://localhost:4000/api/login", credentials)
        .then((res) => {
          this.msg = res.data.msg;
          console.log(res.data.msg);
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            this.$router.push("/addItem");
          }
        })
        .catch((err) => {
          this.msg = err.response.data.msg;
          console.log(err.response);
        });
    },
  },
};
</script>

<style>
.first-col {
  background: url("~/assets/find.jpg") no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#row-layer {
  min-height: 100vh;
}
.title {
  font-size: 50px;
  letter-spacing: 2;
  font-weight: bold;
}
.cmargin {
  margin: 40px !important;
}
img {
  width: 100% \9;
}
.title {
  font-size: 50px;
  letter-spacing: 2;
  font-weight: bold;
}
.form-control {
  border-radius: 0;
}
.typing-part {
  margin-top: 20px;
  padding: 0;
}
.half-part {
  padding-top: 40px;
}
.button {
  background-color: #06f;
  border: none;
  border-radius: 0;
  color: white;
  padding: 10px 15px;
  transition: all 0.1s;
}
.error {
  color: white;
  background-color: red;
}
</style>
