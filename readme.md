#Gould

**Gould** is a super simple Node module to display your backend console logs on the frontend console. It works by the following steps:

1. Writing the backend logs to a file called 'temp.log'
2. Establishing a socket connection with the frontend using 'socket.io'
3. Utilizing the 'fs' module's 'watch' method to watch for every new log message
4. Utilizing the 'fs' module's 'read' method to get each new log message from 'temp.log'
5. Piping each of these messages to the front end socket
6. Console logging the messages once they arrive on the front end

The process is nearly simultaneous.

Setup is easy. On your backend app.js or server.js file, ensure you initialize a server using http:

```javascript
const server = http.createServer(app);
```

On the front end of any page where you want simultaneous logging, simply include the following lines, switching out the appropriate localhost port or remote URL as needed:

```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.2/socket.io.min.js"> </script>
<script type="text/javascript">
    let socket = io.connect('http://localhost:3000');
    socket.on('stuff', function (data) {
      console.log(data);
    });
</script>
```

That's it. You're done.


Notes:
Gould must be required after server instantiated
This is for express
