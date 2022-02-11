import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query as { q: string; type: string };
  const apiUrl = `https://api.weatherapi.com/v1/${query.type}.json?key=${process.env.API_KEY}&q=${query.q}&days=3`;
  try {
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      res.status(400).json(err?.response?.data);
    } else {
      res.status(400).json({ error: "Unknown error" });
    }
  }
};
