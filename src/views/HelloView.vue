<template>
<center>
  <img class="hello" src="https://em-content.zobj.net/source/telegram/386/money-with-wings_1f4b8.webp">
  <h1>Workiks</h1>
  <p>Find an affordable job at<br>Workiks</p>

  <button class="go"><RouterLink style="text-decoration: none; color: inherit;" to="/home"><h2><b>Go Workiks</b></h2></RouterLink></button>
</center> 
</template>

<style scoped>
body {
  overflow: hidden;
  background-attachment: fixed;
}

button {
  background-color: #0388fc;
  border: none;
  border-radius: 15px;
  width: 400px;
  height: 50px;
  margin-top: 120px;
  cursor: pointer;
  }
  
  .hello {
  border-radius: 20%;
  width: 350px;
  height: 350px;
  margin-top: 50px;
  }
  
  h1 {
  font-family: Roboto;
  font-size: 24px;
  color: white;
  margin-top: 50px;
  }
  
  p {
  color: white;
  font-family: Roboto;
  }

  h2 {
  color: white;
  font-family: Roboto;
  }

  @media screen and (min-width: 355px) and (max-width: 380px) {
    .hello {
      width: 300px;
      height: 300px;
      margin-top: 30px;
    }
    button {
      width: 340px;
      margin-top: 120px;
    }
  }

  @media screen and (min-width: 381px) and (max-width: 450px) {
    .hello {
      width: 350px;
      height: 350px;
      margin-top: 50px;
    }
    button {
      width: 380px;
      margin-top: 130px;
    }
  }
</style>
