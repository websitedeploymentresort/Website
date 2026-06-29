import fs from "fs";
import path from "path";

export function getRoomImages(roomId: string) {
  const folder = path.join(
    process.cwd(),
    "public",
    "room_pics",
    roomId
  );

  if (!fs.existsSync(folder)) return [];

  return fs
    .readdirSync(folder)
    .filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    )
    .map(file => `/room_pics/${roomId}/${file}`);
}