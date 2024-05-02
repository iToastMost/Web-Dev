import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

function getRandomImage()
{

}

app.get("/", async (req, res) => {
    const response = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects");
    const musuemIDs = response.data.objectIDs;

    let randomIndex;
    let randomMusuemID;
    let randomPainting;

    do 
    {
        randomIndex = Math.floor(Math.random() * musuemIDs.length);
        randomMusuemID = musuemIDs[randomIndex].toString();

        const objectRespone = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomMusuemID}`);
        randomPainting = objectRespone.data;
        
    } while (!randomPainting.primaryImage);
    
    const img = randomPainting.primaryImage;
    
    res.render("index.ejs", {imgURL: img});
})

app.listen(port, () => {
    console.log(`App is running on localhost:${port}`);
});