import fastify from "fastify";
import multipart from "@fastify/multipart";
import { convertFile } from "./router/convert-file";

const app = fastify();

app.register(multipart);

app.get("/", (req, res) => {
  res.send({
    message: "Running",
  });
});

app.register(convertFile);

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server is running on ${address}`);
});
