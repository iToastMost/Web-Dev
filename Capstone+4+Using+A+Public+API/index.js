import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

async function getRandomArt()
{

}

app.get("/", async (req, res) => {

    const selectedDepartment = req.query.department || "all";

    const response = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects?hasImages");
    
    const musuemIDs = response.data.objectIDs;
    
    const response2 = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/departments");
    const departments = response2.data.departments;

    let randomIndex;
    let randomMusuemID;
    let randomArt;

    do 
    {
        randomIndex = Math.floor(Math.random() * musuemIDs.length);
        randomMusuemID = musuemIDs[randomIndex].toString();

        const objectRespone = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomMusuemID}`);
        randomArt = objectRespone.data;
        
    } while (!randomArt.primaryImage);
    
    const img = randomArt.primaryImage;
    const title = randomArt.title;
    const artist = randomArt.artistDisplayName;
    const date = randomArt.objectDate;
    const medium = randomArt.medium;
    const wiki = randomArt.objectWikidata_URL;
    const isPublicDomain = randomArt.isPublicDomain;
    
    res.render("index.ejs", {
        imgURL: img, 
        title: title, 
        artist: artist, 
        date: date, 
        medium: medium, 
        wikiURL: wiki,
        publicDomain: isPublicDomain,
        departments: departments,
        selectedDepartment: selectedDepartment
    });
})

app.listen(port, () => {
    console.log(`App is running on localhost:${port}`);
});