<template>
  <div id="app">
    <header class="main-header">
     <nav class="main-nav">
      <ul class="nav-links">
        <router-link to="/" tag="li" class="nav-link"><a>Home</a></router-link>
        <router-link to="/lotr" tag="li" class="nav-link"><a>LOTR</a></router-link>
        <router-link to="/got" tag="li" class="nav-link"><a>GOT</a></router-link>
        <router-link to="/starwars" tag="li" class="nav-link"><a>STAR WARS</a></router-link>
        <div class="search">
          <input type="text"/>
          <button>Search</button>
        </div>
      </ul>
    </nav>
  </header>
   <router-view></router-view>
   <home :gifs=gifs></home>
  </div>
</template>

<script>
import Home from './components/Home'
export default {
  name: 'App',  
  components:{Home},
  data() {
    return {
      isLoading: true,
      gifs: []
    }
  },
   methods: {
    doQuery(url) {
      fetch(url)
      .then((res) => { return res.json() } )
      .then((res) => {
        this.gifs = res.data;
        this.isLoading = false;
      })
    },
   },
    created() {
      const url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC';
      this.doQuery(url);
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
  .main-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #022d30;
    height: 4.5rem;
  }

  .main-nav {
    height: 100%;
  }

  .nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .nav-link {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    padding: 0.3rem;
  }
  .nav-link a {
    display: block;
    text-decoration: none;
    color: white;
  }

  .nav-link a:hover,
  .nav-link a:active,
  .nav-link.router-link-exact-active a {
    color: #06c4d1;
  }
  .search input {
    padding: 10px 20px;
    border: 1px solid #CCC;
    border-radius: 5px;
    width: 400px;
  }
  .search button {
    padding: 5px 15px;
    border: 1px solid #CCC;
    background-color: #4183c4;
    color: #FFF;
    font-size: 16px;
    border-radius: 5px;
  }
</style>
