module.exports = (socket) => {
  try {
    console.log("Controller");
    socket.on("code", (data, callback) => {
      socket.broadcast.emit("code", data);
    });
  } catch (ex) {
    console.log(ex.message);
  }
};
