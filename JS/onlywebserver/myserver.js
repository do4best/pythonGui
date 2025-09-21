import { route } from "./app.js"
import { routes as hello } from "./oneapp.js";
import express from 'express'
let app = express();
app.use('/app', route)
app.use('/one',hello)
app.listen(3000)