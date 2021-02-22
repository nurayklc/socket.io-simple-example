$(function(){
    var socket = io.connect("http://localhost:3000")
    
    var message = $("#message")
    var username = $("#username")
    var send_message = $("#send_message")
    var send_username = $("#send_username")
    var messages_display = $("#messages_display") //gelen mesajların kullanıcı

    
    send_username.click(function(){
        socket.emit('change_username' ,{username: username.val()}) //servere veriyi yollamaya yarar emit fonksiyonu
    })
    
    send_message.click(function(){
        socket.$broadcast.emit('new_message' , {message: message.val()})
    })
    
       socket.on('new_message' , (data) => {
        console.log(data)
        messages_display.append("<p>" +data.username + ":" + data.message + "<p>")
    })

});