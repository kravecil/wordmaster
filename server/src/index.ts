import { Server } from "socket.io";
import {ServerToClientEvents, ClientToServerEvents} from "./types"

const SERVER_PORT = 34343;
const io = new Server<ServerToClientEvents,ClientToServerEvents>(SERVER_PORT, {});

console.log("Сервер запущен")

io.on("connection", (socket) => {});
