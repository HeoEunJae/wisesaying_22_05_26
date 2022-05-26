import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const pool = mysql.createPool({
  host: "localhost",
  user: "sbsst",
  password: "sbs123414",
  database: "WiseSaying",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true,
});

const app = express();
app.use(express.json());
app.use(cors());
const port = 3002;

//====================== 랜덤 조회 받아오기 ============================
app.get("/wise-sayings/random", async (req, res) => {
  const [[rows]] = await pool.query(
    `
    SELECT * 
    FROM WS
    ORDER BY RAND()
    LIMIT 1
    `
  );

  if (rows === undefined) {
    res.status(404).json({
      msg: "404 not found",
    });
    return;
  }

  rows.hit++; // 이렇게 먼저 써줄 경우 조회가 되는 동시에 조회수 증가

  await pool.query(
    `
    UPDATE WS
    SET hit = ?
    WHERE id = ?
    `,
    [rows.hit, rows.id]
  );

  /*await pool.query( // 이렇게 쓸 경우 처음 조회가 되는 동안에는 조회수가 증가 x
    `
    UPDATE WS
    SET hit = hit + 1
    WHERE id = ?
    `,
    [rows.id]
  );*/

  res.json({
    msg: `성공`,
    data: rows,
  });
});

//======================== DB 수 정 하 기 ==============================
app.patch("/wise-sayings/:id", async (req, res) => {
  // 수정될 번호 찾기
  const { id } = req.params;

  const [[rows]] = await pool.query(
    `
    SELECT * 
    FROM WS
    WHERE id = ?
    `,
    [id]
  );

  if (rows === undefined) {
    res.status(404).json({
      msg: "404 not found",
    });
    return;
  }
  // 수정될 DB 내용들 확인
  const {
    wise_say = rows.wise_say, // 값이 없을대는 기본 값을 불러온다
    name = rows.name,
    good = rows.good,
    dislike = rows.dislike,
  } = req.body;

  await pool.query(
    `
    UPDATE WS
    SET wise_say = ?,
    name = ?,
    good = ?,
    dislike = ?
    WHERE id = ?
    `,
    [wise_say, name, good, dislike, id]
  );

  // 수정 된 DB를 불러옴
  const [[Justmodifiedrows]] = await pool.query(
    `
    SELECT * 
    FROM WS
    WHERE id = ?
    `,
    [id]
  );

  res.json({
    msg: `성공`,
    data: Justmodifiedrows,
  });
});

app.listen(port);
