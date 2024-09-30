<template>
    <h3>Announcement:</h3>
    
    <button style="background-color: #1c1c1d; border: none; margin-left: 15px;  margin-top: 20px"><RouterLink style="text-decoration: none; color: white;" to=/home><b style="font-family: Roboto; font-size: 16px">All<div class="line"></div></b></RouterLink></button>
    <button style="background-color: #1c1c1d; border: none; margin-left: 15px;  margin-top: 20px"><RouterLink style="text-decoration: none; color: white;" to=/verif><p style="font-family: Roboto; font-size: 16px">Verif</p></RouterLink></button>
    
    <center><div class="announcement1">
    <center><div class="photo"></div></center>
    
    <div class="profile" style="margin-top: -40px; margin-left: -265px;"><img class="imfp" src="https://i.postimg.cc/FK8K0bcd/IMG-1157.png"><p style="font-family: Geologica; color: #000000; margin-top: -25px; margin-left: 22px; font-size: 15px">Stinsik</p></div>
    <div class="price" style="margin-top:-30px; margin-left: -90px"><p style="font-family: Geologica; color: #000000; margin-top: -25px; padding-top: 7px; font-size: 15px; margin-left: 2px">10 USD₮</p></div>
    
    <RouterLink style="text-decoration: none; color: white;" to="/stins"><p style="color: #ffffff; font-family: Roboto; font-size: 20px; margin-left: -20px; margin-top: 15px"><b>Programm this a mini-app telegram</b></p></RouterLink>
    </div></center>
    </template>
    
    <script>
    
    </script>
    
    <style scoped>
    .photo {
      background-color: #000000;
      width: 90vw;
      height: 40vw;
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
     margin-left: -52px;
     margin-top: 2px
    }
    
    .price {
      background-color: #ffffff;
      width: 70px;
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
      width: 90vw;
      height: 50vw;
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
    </style>
