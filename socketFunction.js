class SocketFuntion {
  publicRooms = (server) => {
    const sids = server.sockets.adapter.sids;
    const rooms = server.sockets.adapter.rooms;
    // 윗 코드 두 줄은 아래 코드 const~~ = server와 같다.
    // const {
    //   sockets: {
    //     adapter: { sids, rooms },
    //   },
    // } = server;
    const publicRooms = [];
    rooms.forEach((_, key) => {
      if (sids.get(key) === undefined) {
        publicRooms.push(key);
      }
    });
    return publicRooms;
  };

  //방안에 몇명이나 있는지 세주는 함수
  countUser = (server, roomName) => {
    return server.sockets.adapter.rooms.get(roomName)?.size;
  };
}
module.exports = SocketFuntion;

// module.exports = () => {
//   publicRooms = () => {
//     // const sids = server.sockets.adapter.sids;
//     // const rooms = server.sockets.adapter.rooms;
//     // 윗 코드 두 줄은 아래 코드 const~~ = server와 같다.
//     const {
//       sockets: {
//         adapter: { sids, rooms },
//       },
//     } = server;
//     const publicRooms = [];
//     rooms.forEach((_, key) => {
//       if (sids.get(key) === undefined) {
//         publicRooms.push(key);
//       }
//     });
//     return publicRooms;
//   };

//   //방안에 몇명이나 있는지 세주는 함수
//   countUser = (roomName) => {
//     return server.sockets.adapter.rooms.get(roomName)?.size;
//   };
// };
