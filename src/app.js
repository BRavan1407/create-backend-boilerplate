import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

// import routeName from "path"
import testRoute from "./routes/test.routes.js"

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors("*"));

// app.use("/api", routeName)
app.use("/api", testRoute);





export default app;
