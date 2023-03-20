let room = document.body
let roomName = document.getElementById("roomName")
let nextId = 0

function Add() {
    room.style.backgroundImage = frame[nextId].room
    console.log(nextId)
    //------------------------------------------------------ 
}

document.body.addEventListener("keypress", function (event) {
    if (event.key == "w") {
        nextId = (frame[nextId].mapId)
        Add()
    }
    if (event.key == "a") {
        nextId = (frame[nextId].leftmapId)
        Add()
    }
    if (event.key == "s") {
        nextId = (frame[nextId].backmapId)
        Add()
    }
    if (event.key == "d") {
        nextId = (frame[nextId].rightmapId)
        Add()
    }
})

const frame = [
    {//0
        room: "url('https://cdn.discordapp.com/attachments/678621053026828309/1073160741273731082/image.png')",
        mapId: 1, rightmapId: 1, leftmapId: 1, backmapId: 1, roomId: "room"
    },
    {//0
        room: "url('https://cdn.discordapp.com/attachments/678621053026828309/1073160741273731082/image.png')",
        mapId: 0, rightmapId: 0, leftmapId: 0, backmapId: 0, roomId: "room"
    },
]