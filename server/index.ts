const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs/promises');

dotenv.config();

const port = process.env.PORT;
const app = express();
app.use(express.json())


app.get('/', async(req: any,res: any)=>{
  try{
  const fileNames: any = await fs.readdir("./assets", (err: Error,files : Response)=> {
    if(err) console.log(err);
    else{
     return (files);
    };
  });
  res.json(fileNames);
  } catch(e){
    res.sendStatus(500);
  }
})



app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});




