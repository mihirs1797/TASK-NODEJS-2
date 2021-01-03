import { v4 as uuidv4 } from 'uuid'; 
//uuidv4(); ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

let bookingDetails = [];
let rooms = [];

//displays list of all the rooms entered
export const showRooms = (req,res)=>{
    console.log("Rooms information is sent!")
    res.send(rooms);
}

//endpoint to create a room
export const createRoom = (req,res)=>{
    let roomInfo = req.body;
    rooms.push({
        ...roomInfo,
        "id":uuidv4()
    });   
    res.send(`The required room was created.`); 
}

//get data of all bookedRooms and the customer information for the booked room
export const bookedRooms = (req,res)=>{
    res.send(bookingDetails);
}

//functionality to book a room
export const bookRoom = (req,res)=>{
    let customerInfo = req.body;
    let i = 0;
    bookingDetails.push({
        ...customerInfo,
        "roomID":rooms[i].id
    })
    res.send(`Room was booked on the name of ${customerInfo.name}`);
}

export const roomDetails = (req,res)=>{
    let {id} = req.params;
    const findRoom = rooms.find(e=>e.id===id);
    res.send(findRoom);
}