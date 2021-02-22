const express = require("express");
const app = express()

app.use(express.static("public"))

app.get("/" , (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})

server = app.listen(3000)
console.log("ahesjhdjsdsakakda");

const io = require("socket.io")(server)

io.on('connection', (socket) => { //siteye talep arttığı zaman kullanılacak fonksiyon
    console.log("Yeni kullanıcı bağlandı.")
    //io.emit("halil","nuray")
    
    socket.username = 'bilinmeyen'
    
    socket.on('change_username', (data) => {
        console.log(socket.username + "kullanıcı adını değiştirdi: " + data.username)
        socket.username = data.username;
    })
    
    socket.on('new_message' , (data) => {
        console.log(socket.username + ': ' + data.message)
        io.sockets.emit('new_message' , {message: data.message,username:socket.username})
    })
    
})