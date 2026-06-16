import fs from "fs";
import path from "path";

export function getGalleryImages() {
  const roomPicsDir = path.join(process.cwd(), "public", "room_pics");

  const folders = fs.readdirSync(roomPicsDir);

  const images: { src: string; alt: string }[] = [];

  folders.forEach((folder) => {
    const folderPath = path.join(roomPicsDir, folder);

    if (fs.statSync(folderPath).isDirectory()) {
      const files = fs.readdirSync(folderPath);

      files.forEach((file) => {
        if (
          file.endsWith(".jpg") ||
          file.endsWith(".jpeg") ||
          file.endsWith(".png") ||
          file.endsWith(".webp") ||
          file.endsWith(".PNG")
        ) {
          images.push({
            src: `/room_pics/${folder}/${file}`,
            alt: folder.replace(/-/g, " "),
          });
        }
      });
    }
  });

  return images;
}