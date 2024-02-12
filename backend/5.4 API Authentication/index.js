import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "toastmost";
const yourPassword = "mosttoast";
const yourAPIKey = "3aa49d00-5648-4bd7-8ae3-8d82d92d7dd4";
const yourBearerToken = "3b4f0ea3-cab8-4034-a370-fa9b37450745";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */

    try
  {
    const result = await axios.get(API_URL + "/all?page=2", 
    {
      auth: {
        username: yourUsername,
        password: yourPassword,
      }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch(error)
  {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  try
  {
    const result = await axios.get(API_URL + "/filter", 
    {
      params: { score: 5, apiKey: yourAPIKey }
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch(error)
  {
    res.status(404).send(error.message);
  }
});

const config = {
  headers: { Authorization: `Bearer ${yourBearerToken}` },
};

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 try
 {
  const result = await axios.get(API_URL + "/secrets/42",  config);
  res.render("index.ejs", { content: JSON.stringify(result.data) })
 } catch (error) 
 {
  res.status(404).send(error.message);
 }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
