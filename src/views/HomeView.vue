<template>
    <div class="min">
        <div>
            <h3>Announcement:</h3>
        </div>
        <div style="display: flex; gap: 10px;">
            <button style="background-color: #1c1c1d; border: none;"><RouterLink style="text-decoration: none; color: white;" to=/home><b style="font-family: Roboto; font-size: 16px">All<div class="line"></div></b></RouterLink></button>
            <button style="background-color: #1c1c1d; border: none;"><RouterLink style="text-decoration: none; color: white;" to=/verif><p style="font-family: Roboto; font-size: 16px">Verif</p></RouterLink></button>
        </div>
        <nav class="announcement1">
            <div class="photo">
                <div class="profile">
                    <img class="imfp" src="https://i.postimg.cc/FK8K0bcd/IMG-1157.png">
                    <p style="font-family: Geologica; color: #000000; font-size: 15px">Stinsik</p>
                </div>
                <div class="price">
                    <p style="font-family: Geologica; color: #000000; font-size: 15px;">10 USD₮</p>
                </div>
            </div>
            <div style="display: flex; padding: 10px;">
                <RouterLink style="text-decoration: none; color: white;" to="/stins"><p style="color: #ffffff; font-family: Roboto; font-size: 20px;"><b>Programm this a mini-app telegram</b></p></RouterLink>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.photo {
  background-color: #000000;
  width: 100%;
  height: 40vw;
  border: none;
  border-radius: 25px;
  color: #727272; 
  display: flex;
  align-items: end;
  gap: 5px;
  padding: 10px;
}

.profile {
  background-color: #ffffff;
  width: auto;
  height: 30px;
  border: none;
  border-radius: 25px;
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  align-items: center;

}

.imfp {
 width: 25px;
 height: 25px;
}

.price {
  background-color: #ffffff;
  width: auto;
  height: 30px;
  border: none;
  border-radius: 25px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  align-items: center;
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
  height: 55vw;
  margin-left: 1px;
  border: none;
  border-radius: 25px;
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

.min {
    padding: 10px;
    display: grid;
    gap: 15px;
    justify-content: center;
}
</style>
