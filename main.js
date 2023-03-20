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
    {//1
        room: "url('https://cdn.discordapp.com/attachments/691020853248262184/1087302953666359296/image.png')",
        mapId: 0, rightmapId: 1, leftmapId: 3, backmapId: 2, roomId: "room 1"
    },
    {//2
        room: "url('https://cdn.discordapp.com/attachments/691020853248262184/1087303612402769941/image.png')",
        mapId: 0, rightmapId: 2, leftmapId: 0, backmapId: 3, roomId: "room 2"
    },
    {//3
        room: "url('https://cdn.discordapp.com/attachments/691020853248262184/1087303376473169990/image.png')",
        mapId: 0, rightmapId: 3, leftmapId: 1, backmapId: 0, roomId: "room 3"
    }, {//4
        room: "url('https://cdn.discordapp.com/attachments/691020853248262184/1087303191613411418/image.png')",
        mapId: 0, rightmapId: 0, leftmapId: 2, backmapId: 1, roomId: "room 4"
    },
]

Add()