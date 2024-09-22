<template>
<button style="background-color: #1c1c1d; border: none;"><RouterLink style="text-decoration: none; color: white;" to="/home"><img src="https://i.postimg.cc/YCM1Hfyw/54-DA4-F23-496-F-4-DB4-9478-D1-B5-FCAA5-F79.png" style="width: 40px; margin-top: 30px; "></RouterLink></button>


<h1 style="font-family: Roboto; color: #7d8085; font-size: 16px; margin-left: 20px">Description</h1>
<center><div class="description"><p style="font-family: Roboto; color: white; padding-top: 10px">You should write a mini app for telegrams, with a fully<br>working database and correct requests.<br>You should also write smart contracts for the application.</p></div></center>

<h2 style="font-family: Roboto; color: #7d8085; font-size: 16px; margin-left: 20px">Skills Required</h2>
<center><div class="skill"><p style="font-family: Roboto; color: white; padding-top: 15px; margin-left: -210px">Vue js, UI/UX Design</p></div></center>
</template>

<style scoped>
.description {
    background-color: #2c2c2e; 
    width: 450px; 
    height: 80px; 
    border-radius: 25px; 
    margin-top: -15px 
}

.skill {
    background-color: #2c2c2e; 
    width: 450px; 
    height: 50px; 
    border-radius: 25px; 
    margin-top: -12px
}

@media screen and (width: 375px) {
    .description {
      width: 355px;
      height: 120px;
    }
    .skill {
    width: 355px;
    height: 50px;
    }
  }

  @media screen and (min-width: 380px) and (max-width: 390px) {
    .description {
        width: 370px;
        height: 120px;
    }
    .skill {
        width: 370px;
        height: 50px;
    }
  }

@media screen and (min-width: 400px) and (max-width: 414px) {
    .description {
        width: 390px;
        height: 100px;
    }
    .skill {
        width: 390px;
        height: 50px;
    }
}

@media screen and (width: 430px) {
    .description {
        width: 390px;
        height: 100px;
    }
    .skill {
        width: 390px;
        height: 50px;
    }
}
</style>
