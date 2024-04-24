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
    res.render("enter.ejs");
});

app.get("/post", (req, res) =>
{
    res.render("post.ejs");
});

app.get("/posts", (req, res) =>
{
    res.render("index.ejs", {posts, posts});
});


app.get("/update/:id", (req, res) => {
    let index = req.params.id;
    let post = posts[index];
    res.render("post.ejs", {postId: index, title: post.title, content: post.content});
});

app.get("/update", (req, res) => {
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
    res.redirect("/posts");
});

// app.post("/delete", (req, res) => 
// {
//     let index = req.body["id"];
//     posts.splice(index, 1);
//     res.redirect("/posts");
// });

app.delete("/posts/:id", (req, res) => 
{
  const deleteId = req.params.id;
  const post = posts.find((p) => p.id === deleteId);
  posts.splice(post, 1);
  res.redirect("/posts");
});


app.post("/update", (req, res) => 
{
    let title = req.body["title"];
    let content = req.body["content"]
    let index = req.body["id"];
    posts[index] = new Post(title, content);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`App is running on localhost:${port}`);
});