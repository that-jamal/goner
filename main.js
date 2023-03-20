let room = document.body
let roomName = document.getElementById("roomName")
let nextId = 0

function mapAdd() {
    back.style.backgroundImage = (frame[nextId].view)
    //------------------------------------------------------ 
}

document.body.addEventListener("keypress", function (event) {
    if (event.key == "w") {
        nextId = (frame[nextId].mapId)
        mapAdd()
    }
    if (event.key == "a") {
        nextId = (frame[nextId].leftmapId)
        mapAdd()
    }
    if (event.key == "s") {
        nextId = (frame[nextId].backmapId)
        mapAdd()
    }
    if (event.key == "d") {
        nextId = (frame[nextId].rightmapId)
        mapAdd()
    }
})

const frame = [
    {//0
        room: "url('https://cdn.discordapp.com/attachments/678621053026828309/1073160741273731082/image.png')",
        mapId: 0, rightmapId: 1, leftmapId: 0, backmapId: 0, roomId: "room"
    },
]