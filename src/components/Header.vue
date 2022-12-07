<template>
  <div class="big-head">
    <div class="left">
      <div id="logo">
        <router-link to="/">Houses</router-link>
      </div>
    </div>
    <div class="right">
      <div class="up">
        <div class="up-left">
          <div class="links">
            <router-link to="/">Home</router-link>
            <router-link to="/grid">Our Properties</router-link>
          </div>
        </div>
        <div class="up-right">
          <div class="links">
            <router-link to="/login">Login</router-link>
            <span>|</span>
            <router-link to="/register">Register</router-link>
          </div>
        </div>
      </div>
      <hr />
      <div class="down">
        <div class="down-left">
          <div class="links"></div>
        </div>
        <div class="down-right">
          <div class="links">
            <a href="#">
              <button class="post-property"><b>Post a Property</b></button>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="hambugger">
      <div id="menu">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </div>
</template>

<style>
.big-head{
    height: 108px;
    background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
    display: grid;
    grid-template-columns: .3fr 1fr;
    gap: .08%;
}

.left{
    padding-top: 7%;
}

#logo{
    margin-left: auto;
    margin-right: auto;
    padding: 5%;
    text-align: center;
    background-color: black;
    text-transform: uppercase;
    color: white;
    width: 50%;
    height: 25px;
}

#logo a{
    text-decoration: none;
    color: white;
}

.right{
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

.down-left,.down-right{
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

.hambugger{
    display: none;
}

/* responsiveness */

@media (max-width: 720px){
    .big-head{
        height: 108px;
        padding-top: 4%;
        background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
        display: grid;
        grid-template-columns: 1fr .5fr;
        gap: 20px;
    }

    .left{
        height: 100%;
        padding-top: 3%;
    }

    #logo{
        margin-left: 13%;
        margin-right: auto;
        padding: 5%;
        text-align: center;
        background-color: black;
        text-transform: uppercase;
        color: white;
        width: 50%;
        height: 30px;
    }

    .hambugger{
        display: grid;
        margin-left: 20%;
        height: 100%;
    }

    #menu{
        padding: 8%;
        margin-top: 8%;
        text-align: center;
        font-size: 40px;
        background-color: black;
        text-transform: uppercase;
        cursor: pointer;
        color: white;
        width: 50%;
        height: 40px;
    }    

    .right{
        display: none;
    }
}
</style>

<script>
  export default {
    name: "Header_component",
  };
</script>
