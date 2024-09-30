import express from "express";
import publicRoutes from "./routes/public.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/", publicRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
