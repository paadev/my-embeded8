<template>
  <div id="app">
    <HelloWorld msg="Welcome Embeded App"/>

    <router-link to="/emberone">To Ember One</router-link> |
    <router-link to="/embertwo">To Ember Two</router-link> |
    <router-link to="/emberthree">To Ember Three</router-link> |

    <hr>
    == {{ countValue }} ==

    <router-view></router-view>
  </div>
</template>

<script>
// import EmberOneVue from './components/EmberOne.vue';
// import EmberTwoVue from './components/EmberTwo.vue';
import HelloWorld from './components/HelloWorld.vue'
// const componentUnqId = Symbol('myEmbeded8');

export default {
  name: 'MyEmbeded8',
  components: {
    HelloWorld
  },
  computed: {
    countValue() {
      return this.$store.state.count;
    }
  },
  mounted() {
    // console.log('router ember', this.$router);
    // if (!this.$router[componentUnqId]) {
    //   console.log("Install myEmbeded8 routes");
    //   this.$router[componentUnqId] = true;
    //   this.$router.addRoute({ path: '/emberone', component:  EmberOneVue})
    //   this.$router.addRoute({ path: '/embertwo', component:  EmberTwoVue})
    // }

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
