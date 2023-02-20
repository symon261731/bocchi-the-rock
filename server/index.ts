const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs/promises');
const cors = require('cors');

dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json())


app.use(cors())

app.get('/', async(req: any,res: any)=>{
  try{
  const fileNames: any = await fs.readdir("./assets", (err: Error,files : Response)=> {
    if(err) console.log(err);
    else{
     return (files);
    };
  });
  fileNames.pop();
  res.json(fileNames);
  } catch(e){
    res.sendStatus(500);
  }
})



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});




