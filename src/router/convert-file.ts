import { FastifyInstance } from "fastify";
import sharp from "sharp";

export async function convertFile(app: FastifyInstance) {
  app.get("/convert-file", async (req, res) => {
    return res.send({
      message: "Running",
    });
  });
}
