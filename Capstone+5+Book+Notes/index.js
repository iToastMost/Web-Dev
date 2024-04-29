import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client(
    {
      user: "postgres",
      host: "localhost",
      database: "books",
      password: "Akali213Erina213!",
      port: 5432,
    })
  
db.connect();
  
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let reviews = [
    {
        title: "",
        author: "",
        isbn: "",
        publication_year: "",
        genre: "",
        review_text: "",
    }
];

//Display home page
app.get("/", async (req, res) =>
{
    try
    {
        const result = await db.query("SELECT * FROM books ORDER BY id");
        reviews = result.rows;

        res.render("books.ejs", {reviewItems: reviews});
    }catch(err)
    {
        console.log(err);
    }
    
});

//Display page to add book/review
app.get("/review", (req, res) =>
{
    res.render("review.ejs");
});

app.post("/submit", async (req, res) => {
    const title = req.body.title;
    const author = req.body.author;
    const ISBN = req.body.ISBN;
    const review = req.body.review;
    const genre = req.body.genre;
    const publication_year = req.body.year;

    const result = await db.query("INSERT INTO books (title, author, ISBN, review_text, genre, publication_year) VALUES ($1, $2, $3, $4, $5, $6)", [title, author, ISBN, review, genre, publication_year])

    res.redirect("/");
});

app.listen(port, () => 
{
    console.log(`Server is running at http://localhost:${port}`);
});