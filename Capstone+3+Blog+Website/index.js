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
    res.render("post.ejs", {post: {}});
});

app.get("/posts", (req, res) =>
{
    res.render("index.ejs", {posts, posts});
});

//TODO finish post edit in post.ejs
app.get("/updatePost/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((p) => p.id === id);
    res.render("post.ejs", {post: post});
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

app.post("/update/:id", (req, res) => 
{
  const patchId = parseInt(req.params.id);
  const patchPost = posts.find((post) => post.id === patchId);
  const newPost = 
  {
    id: patchId,
    title: req.body.title || patchPost.title,
    author: req.body.author || patchPost.author,
    content: req.body.content || patchPost.content,
  }
  const searchIndex = posts.findIndex((post) => post.id === patchId);
  posts[searchIndex] = newPost;
  res.redirect("/posts");
});

app.post("/delete/:id", (req, res) => 
{
    const deleteId = parseInt(req.params.id);
    const postIndex = posts.findIndex((p) => p.id === deleteId);
    if(postIndex !== -1) 
    {
        posts.splice(postIndex, 1);
    }
    res.redirect("/posts");
});


app.listen(port, () => {
    console.log(`App is running on localhost:${port}`);
});