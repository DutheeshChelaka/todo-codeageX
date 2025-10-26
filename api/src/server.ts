import express from "express";
import { openapi } from "./openapi.js";
const app = express();
app.get("/api/docs.json", (_,res)=>res.json(openapi));
