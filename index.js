const express =  require('express')
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const cors = require('cors');
const router = require('./routes/userRoutes');

app.use(cors());
const connectToDatabase = require('./db/database');
app.use(connectToDatabase);
app.use('/api/v1', router)

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})