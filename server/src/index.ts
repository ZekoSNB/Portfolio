import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { createGame, joinGame, makeMove } from "./gameManager.js";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

const PORT = 4000;

// --- API route to create a new game ---
app.get("/create", (req, res) => {
  const pin = createGame();
  res.json({ pin });
});

// --- Socket.IO events ---
io.on("connection", (socket) => {
  console.log("Connected:", socket.id);

  socket.on("joinGame", ({ pin, playerName }) => {
    const result = joinGame(pin, socket.id, playerName);
    if (!result.success) {
      socket.emit("errorMsg", result.message);
      return;
    }
    socket.join(pin);
    io.to(pin).emit("updateGame", result.game);
  });

  socket.on("makeMove", ({ pin, index }) => {
    const result = makeMove(pin, socket.id, index);
    if (!result.success) return;
    io.to(pin).emit("updateGame", result.game);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
  });
});

httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
