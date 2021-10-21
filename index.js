const express = require("express");

const app = express();
const port = process.env.PORT || "8080";
app.set("port", port);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => console.log(`Server running on localhost:${port}`));