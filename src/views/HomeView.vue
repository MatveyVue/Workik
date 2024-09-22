<template>
<h3>Announcement:</h3>

<button style="background-color: #1c1c1d; border: none; margin-left: 15px;  margin-top: 20px"><RouterLink style="text-decoration: none; color: white;" to=/home><b style="font-family: Roboto; font-size: 16px">All<div class="line"></div></b></RouterLink></button>
<button style="background-color: #1c1c1d; border: none; margin-left: 15px;  margin-top: 20px"><RouterLink style="text-decoration: none; color: white;" to=/verif><p style="font-family: Roboto; font-size: 16px">Verif</p></RouterLink></button>

<div class="announcement1">
<center><div class="photo"></div></center>
<div class="profile" style="margin-top: -40px; margin-left: 20px;"><img class="imfp" src="https://i.postimg.cc/FK8K0bcd/IMG-1157.png"><p style="font-family: Roboto; color: #000000; margin-top: -25px; margin-left: 30px; font-size: 14px">Stinsik</p></div>
<div class="price" style="margin-top:-30px; margin-left: 105px"><img class="usdt" src="https://workinnet.ru/wp-content/uploads/2021/06/tether-usdt-logo-png-1280.png"><p style="font-family: Roboto; color: #000000; margin-top: -26px; font-size: 15px; margin-left: 2px">10</p></div>

<RouterLink style="text-decoration: none; color: white;" to="/stins"><p style="color: #ffffff; font-family: Roboto; font-size: 20px; margin-left: 15px; margin-top: 15px"><b>Programm this a mini-app telegram</b></p></RouterLink>
</div> 
</template>

<script>

</script>

<style scoped>
.photo {
  background-color: #000000;
  width: 400px;
  height: 200px;
  border: none;
  border-radius: 30px;
  color: #727272; 
  margin-top: 25px
}

.profile {
  background-color: #ffffff;
  width: 80px;
  height: 30px;
  margin-left: 1px;
  border: none;
  border-radius: 30px;
}

.imfp {
 width: 25px;
 height: 25px;
 margin-left: 5px;
 margin-top: 2px
}

.price {
  background-color: #ffffff;
  width: 50px;
  height: 30px;
  margin-left: 1px;
  border: none;
  border-radius: 30px;
}

.usdt {
   width: 25px;
   height: 25px;
   margin-left: 20px;
   margin-top: 3px
}

h3 {
  color: white;
  font-family: Arial;
  font-size: 26px;
  }
  
  h4 {
  color: #404049;
  }
  
  h2 {
  color: white;
  font-family: Roboto;
  margin-left: 15px;
  margin-top: 50px;
  }
  
  .announcement1 {
  background-color: #2c2c2e;
  width: 400px;
  height: 250px;
  margin-left: 1px;
  border: none;
  border-radius: 30px;
  color: #727272;
  }
   
  .line {
  background-color: #618ec2;
  width: 30px;
  height: 3px;
  }

    h4 {
      margin-left: 320px;
      margin-top: -65px;
      background-color: rgb(36, 36, 44);
      border-radius: 50%;
      border: none;
      cursor: pointer;
    }

  @media screen and (width: 375px) {
    .announcement1 {
      width: 355px;
      height: 255px;
    }
    .photo {
      width: 355px;
      height: 200px;
    }
  }

  @media screen and (min-width: 380px) and (max-width: 404px) {
    .announcement1 {
      width: 385px;
    }
    .photo {
      width: 385px;
      height: 200px;
    }
    h4 {
      margin-left: 340px;
    }
  }

  @media screen and (width: 390px) {
    .announcement1 {
      width: 370px;
    }
    .photo {
      width: 370px;
      height: 200px;
    }
  }

  @media screen and (min-width: 405px) and (max-width: 417px) {
    .announcement1 {
      width: 400px;
    }
    .photo {
      width: 400px;
      height: 200px;
    }
    h4 {
      margin-left: 350px; 
    }
  }

  @media screen and (min-width: 417px) and (max-width: 440px) {
    .announcement1 {
      width: 410px;
    }
    .photo {
      width: 410px;
      height: 200px;
    }
  }
</style>
