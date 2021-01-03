import express from "express";
import {
    bookedRooms,
    bookRoom,
    createRoom,
    roomDetails,
    showRooms
} from "../controllers/hall.js"

const router = express.Router();

router.get('/', showRooms); //get list of all rooms

router.post('/', createRoom); // create a room

router.get('/bookedRooms', bookedRooms); // get list of all bookedRooms

router.post('/bookRoom', bookRoom); // create a room

router.get('/:id', roomDetails); // get room info for a particular id

export default router;