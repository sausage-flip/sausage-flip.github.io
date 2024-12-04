const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let players = {}; // Lưu danh sách người chơi

// API lấy danh sách người chơi
app.get("/players", (req, res) => {
  res.json(players);
});

// API thêm/cập nhật người chơi
app.post("/players", (req, res) => {
  const { ip, name, score } = req.body;

  if (!ip || !name) {
    return res.status(400).json({ error: "Thiếu thông tin IP hoặc tên!" });
  }

  if (!players[ip]) {
    players[ip] = { name, score: score || 0 };
  } else {
    players[ip].score += score || 0;
  }

  res.json({ message: "Cập nhật thành công!", players });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
});
