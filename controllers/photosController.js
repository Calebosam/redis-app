import axios from "axios";

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
