import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = typeof req.query.q === "string" ? req.query.q : "";
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${query}&days=1&aqi=yes&alerts=yes`;
  try {
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (err) {
    res.status(400).json(err.response.data);
  }
};
