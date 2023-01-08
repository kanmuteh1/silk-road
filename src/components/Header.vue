<template>
<meta name="viewport" content="width=device-width, initial-scale=1">
  <div class="top-nav">
    <div class="left">
      <div id="logo">
        <router-link to="/"><b>SILKROAD</b></router-link>
      </div>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
      <div class='menu-button'></div>
    </label>
    <div class="menu">
      <li>
        <div class="right">
          <div class="up">
            <div class="up-left">
              <div class="links">
                <router-link to="/">Home</router-link>
                <router-link to="/properties">Our Properties</router-link>
              </div>
            </div>
            <div class="up-right">
              <div class="links">
                <div class="logout" v-if="isLogout">
                  <router-link to="/login">Login</router-link>
                  <span>|</span>
                  <router-link to="/register">Register</router-link>
                </div>
                <div class="logout" v-if="isLogin">
                  <router-link to="/login">John Wayne</router-link>
                  <span>|</span>
                  <router-link to="/login">Logout</router-link>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div class="down">
            <div class="down-left">
              <div class="links"></div>
            </div>
            <div class="down-right">
              <div class="links">
                <router-link to="/post-property">
                  <button class="post-property"><b>Post a Property</b></button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<style>
  .top-nav {
    height: 17vh;
    background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    display: grid;
    grid-template-columns: .3fr 1fr;
    gap: .06%;
  }

  .left{
    padding-top: 7%;
  }

  #logo{
    margin-left: 22%;
    margin-right: auto;
    padding: 5%;
    text-align: center;
    background-color: black;
    text-transform: uppercase;
    color: white;
    width: 52%;
    height: 5.8vh;
  }

  #logo a{
    text-decoration: none;
    font-size: 1.8em;
    color: white;
  }

  .menu > li {
    margin-top: -1.9%;
    height: 18vh;
    overflow: hidden;
  }

  .right{
    margin-top: .5%;
    width: 94%;
  }

  .right hr{
    margin-top: 1.5%;
  }

  .up, .down{

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
  }

  .up-left, .down-left{
    height: 34px;
    width: 100%;
  }

  .down-left{
    padding-top: 1.5%;
  }

  .up-right, .down-right{
    height: 1px;
    width: 100%;
    text-align: right;
  }

  .down-left, .down-right{
    margin-top: -2.5%;
  }

  .links{
    margin-top: 16px;
    padding-bottom: 4%;
  }

  .up-left .links a, .down-left a,.up-right a,.down-right a{
    text-decoration: none;
    color: white;
    font-size: 18px;
    margin: 5px;
  }

  span{
    color: white;
    font-size: 18px;
  }

  .post-property{
    width: 36%;
    background-color: blue;
    color: white;
    padding: 1%;
    border: 2px solid blue;
    border-radius: 5px 5px 5px 5px;
    cursor: pointer;
  }

  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: #fff;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: '';
    margin-top: -8px;
  }

  .menu-button::after {
    content: '';
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media (max-width: 700px) {
    .menu-button-container {
      display: flex;
    }
    .menu {
      position: relative;
      top: 50%;
      width: 135%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle:checked ~ .menu li {
      border: 1px solid #333;
      height: 5.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu > li {
      display: grid;
      justify-content: center;
      margin: 0;
      width: 100%;
      color: white;
      background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7));
    }

    .menu > li:not(:last-child) {
      border-bottom: 1px solid #444;
    }

    #logo{
      margin-left: 13%;
      margin-right: auto;
      padding: 5%;
      text-align: center;
      background-color: black;
      text-transform: uppercase;
      color: white;
      width: 70%;
      height: 30px;
    }
  }
</style>

<script>
  export default {
    name: "Header_component",
    data:function (){
      return{
        isLogout: true,
        isLogin: false, 
      }
    },
    methods:{
      toLogin(){
        this.isLogin = true
        this.isLogout = false
      },
      toLogout(){
        this.isLogout = true
        this.isLogin = false   
      },
    },
  };
</script>
