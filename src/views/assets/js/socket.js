const socket = io.connect("https://topic.xyz");

socket.on('userCount', userCount => {
        document.getElementById('connectionCount').innerHTML = userCount;
  })