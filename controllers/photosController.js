import axios from "axios";
import Redis from "redis";
import dotenv from "dotenv";
dotenv.config();

const redisClient = Redis.createClient({
  legacyMode: true,
  socket: {
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
  },
});

redisClient.connect().catch(console.error);

export const getPhotos = async (req, res) => {
  const albumId = req.query.albumId;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos`,
    {
      params: {
        albumId,
      },
    }
  );
  res.json(data);
};

export const getPhotoById = async (req, res) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/$${req.params.id}`
  );
  res.json(data);
};

export const setData = async (req, res) => {
  redisClient.set("name", "Caleb");
  redisClient.get("name", (error, reply) => {
    if (error) res.json({ status: "fail", error });
    res.json({ reply });
  });
};
