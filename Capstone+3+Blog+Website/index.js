import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let posts = 
[
   {
    id: 1,
    title: "A Blog About Nothing",
    content: "There's nothing to see here, go elsewhere if you want to get any benefit out of your time.",
    date: "4/21/2024, 10:06:19 PM",
   }

];

let lastId = 1;

app.get("/", (req, res) =>
{
    res.render("index.ejs", {posts: posts});
});

app.get("/post", (req, res) =>
{
    res.render("post.ejs");
});

app.post("/submit", (req, res) => 
{
    let rawDate = new Date();
    const newId = lastId += 1;
    const newPost =
    {
        id: newId,
        title: req.body["title"],
        content: req.body["content"],
        date: rawDate.toLocaleString(),
    }
    lastId = newId;
    posts.push(newPost);
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`App is running on localhost:${port}`);
});