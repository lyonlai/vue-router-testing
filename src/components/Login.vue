<template>
  <div class="hello">
    <h1>Boom you are in login page</h1>
    <div>Please click on the button to login</div>
    <div>
      <button @click='login'>{{label}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      label: 'Login?',
    };
  },
  methods: {
    login() {
      debugger;
      window.isLoggedIn = true;
      this.$router.push('/hello');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
