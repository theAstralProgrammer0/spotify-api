import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const backgroundColor = req.query.background_color as string || "FFFFFF";
  const borderColor = req.query.border_color as string || "000000";

  res.status(200).json({
    message: "Spotify API endpoint",
    backgroundColor: `#${backgroundColor}`,
    borderColor: `#${borderColor}`
  });
}
