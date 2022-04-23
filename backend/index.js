
import express from "express";
import cors from "cors";
import helmet from "helmet";
import database from './database.json' assert {type: "json"}


const PORT= 8000

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/gallery', (req,res) => {
    const q = req.query.q
    const page = req.query.page
    const limit = req.query.limit
    const startPoint = (page - 1) * limit
    const endPoint = page*limit
    const result = database[q].slice(startPoint,endPoint)
    res.send(database[q])
})

app.get('/details',(req,res) => {
    res.send(database)
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});