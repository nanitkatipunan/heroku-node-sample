<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
  <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
</head>
<title>Socket.IO chat</title>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font: 13px Helvetica, Arial;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKj__FbbeB6FcB6XGC6G1Z-tp8tB84P0eFjDSTPzQ1vEBHBN6R");
    background-repeat: no-repeat;
    background-size: cover;
  }

  

 

  #messages {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  #messages li {
    padding: 5px 10px;
  }

  #messages li:nth-child(odd) {
    background: #eee;
  }

  #messages {
    margin-bottom: 40px
  }

  #heade {
    background-color: mediumblue;
    color: white;
  }


  .left {
    text-align: left;
    font-size: 24px;
  }

  .right {
    text-align: right;
    font-size: 24px;
  }

  .container {
    border: 2px solid #dedede;
    background-color: #f1f1f1;
    border-radius: 5px;
    padding: 10px;
    margin-left: 500px;
    margin-right: 500px;
  }



  .container::after {
    content: "";
    clear: both;
    display: table;
  }
  #first{
    border: 5px solid blue;

  }
  #second{
    background-image:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZH8IC18GYtDl0v1u0_WK9TcLxj5YWadAKmUvZ5Gh9KDNbC_Fl"); 
    background-repeat: no-repeat;
    background-size: cover; /* Resize the background image to cover the entire container */
    border: 4px dotted blue;

  }

#heade{
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPb-gf1fX0jATQSmDVQ4Gj4757wvS1dNYS3WuWupn0ylqs5UM");
  color:cyan;
}

#he{
  font-size:32px;
}

  
</style>
</head>

<body>


  <div id='heade' class="jumbotron text-center">
   <b> <h1 id ="he">Welcome to Messenger</h1></b>
    <p>Find someone to chat now!</p>
  </div>

  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <div id="first" class="card-body">
          <a href="#" class="btn btn-primary">Active Users</a>
          <br> <br>
          <br>
          <div id='online'>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div id = "second" class="card-body">
          <center>
            </cente><a href="#" class="btn btn-primary">Chat Here</a></center>
          <br> <br>
          <div id='message-container'>
          </div>
          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          <br><br><br><br><br><br>
          <br><br>
          <br><br>
          <br><br>
          <br><br>


          <form id='send-container'>
            <div class="input-group">
              <button  id='send-button' type="button" class="btn btn-primary">Send Message</button>
              <input id="message-input"autocomplete="off" type="text" class="form-control" name="msg" placeholder="Input Message">
            </div>
          </form>
         
        </div>
      </div>
    </div>

  </div>











  <script src="https://cdn.socket.io/socket.io-1.2.0.js"></script>
  <script src="https://code.jquery.com/jquery-1.11.1.js"></script>
  <script>

    $(function () {
      const socket = io();
      const messageForm = document.getElementById('send-conatainer')
      const messageInput = document.getElementById('message-input')
      const messageContainer = document.getElementById('message-container')
      const UserContainer = document.getElementById('online')
      const users = [];
      



      const namei = prompt('Input Your Name: ')
      users.push(namei);
      appendMessage('you joined');
      socket.emit('newuser', { name: namei });
      socket.emit('userconnected', { name: namei });

      socket.on('newuser', data => {
        addUser(data.name + ' is active');
      })

      socket.on('userconnected', data => {
        appendMessage(data.name + ' :' + ' connected');
      })


      socket.on('chatmessage', data => {
        if (data.name == namei) {
          appendMessage(data.msg, "right");
        } else {
          appendMessage(data.name + ": " + data.msg, "left");
        }

      })

      $('form').submit(function (e) {
        e.preventDefault()
        const message = messageInput.value
        $('#message-input').val('typing ........');
        socket.emit('chatmessage', { name: namei, msg: message });
        $('#message-input').val('');
        return false;
      })

      



      function appendMessage(message, cls) {
        const messageElement = document.createElement('div')
        messageElement.classList.add(cls);
        messageElement.innerText = message
        messageContainer.append(messageElement)
      }

      function addUser(name) {
        const newUser = document.createElement('div')
        newUser.innerText = name;
        UserContainer.append(newUser);

      }


    })


  </script>
</body>

</html>