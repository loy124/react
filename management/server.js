const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          id: 1,
          name: "이온유",
          image: "https://placeimg.com/64/64/1",
          birthday: "940103",
          gender: "male",
          job: "프로그래머"
        },
        {
          id: 2,
          name: "홍길동",
          image: "https://placeimg.com/64/64/2",
          birthday: "96508",
          gender: "male",
          job: "대학생"
        },
        {
          id: 3,
          name: "신짱구",
          image: "https://placeimg.com/64/64/3",
          birthday: "970907",
          gender: "male",
          job: "대학생"
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));