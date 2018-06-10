const express = require("express");
const Eos = require("eosjs");
const fs = require("fs");
const bodyParser = require("body-parser");
Fcbuffer = require("fcbuffer");
const request = require("request");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

const port = process.env.PORT || 5000;
// Optional configuration..
config = {
  chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f", // 32 byte (64 char) hex string
  httpEndpoint: "http://10.101.1.216:8888",
  keyProvider: [
    "5K7k3Wc6HiKbjYaemkrvgkQD9CFGa4uofJ1z4qTbKHe1ocgnEPC",
    "5K2bKqicDsx77EzyaE3xYJTSf2ZUL1swU6ifkrCNch8yVVxchMM"
  ],
  expireInSeconds: 120,
  broadcast: true,
  debug: false, // API and transactions
  sign: true
};
eos = Eos(config);
const appAdmin = "eosloanblock";
// API doc
// POST api/applyForLoan
// Body {json key value pairs} will contain  SSN + public key??
// GET api/borrowerList (Will return all details)
// POST api/setRating/ body {ssn=****&rating=xx&reviewer_ssn=*****}
// GET api/reviewedBorrowerList/ (will return name, SSN, loan amount requested and Credit score)
// POST api/lendMoney/ body {ssn=****&amount=xxxx }

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Team Loan-Block" });
});

app.get("/api/borrowerList/", (req, res) => {
  let tableQuery = {
    json: true,
    table_key: "uint64_t",
    scope: "eosloanblock",
    code: "eosloanblock",
    table: "userdetail"
  };
  eos.getTableRows(tableQuery).then(result => {
    console.log(JSON.stringify(result));
    //send array of reviewed borower details
    res.send(result.rows);
  });
});

app.post("/api/applyForLoan/", (req, res) => {
  console.log(JSON.stringify(req.body));
  eos
    .transaction({
      actions: [
        {
          account: "eosloanblock",
          name: "updatedetails",
          authorization: [
            {
              actor: appAdmin,
              permission: "active"
            }
          ],
          data: req.body
        }
      ]
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

app.post("/api/setRating/", (req, res) => {
  console.log(JSON.stringify(req.body));
  const ssn = req.body.ssn;

  const reviewer_ssn = req.body.reviewer_ssn;
  const rating = req.body.rating;
  eos
    .transaction({
      actions: [
        {
          account: "eosloanblock",
          name: "endorse",
          authorization: [
            {
              actor: appAdmin,
              permission: "active"
            }
          ],
          data: {
            ssnfrom: reviewer_ssn,
            ssnto: ssn,
            endorsescore: rating
          }
        }
      ]
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});
app.get("/api/reviewedBorrowerList", (req, res) => {
  let tableQuery = {
    json: true,
    table_key: "uint64_t",
    scope: "eosloanblock",
    code: "eosloanblock",
    table: "userdetail"
  };
  eos.getTableRows(tableQuery).then(result => {
    console.log(JSON.stringify(result));
    //send array of reviewed borower details
    res.send(result.rows);
  });
});

app.post("/api/lendMoney", (req, res) => {
  const ssn = req.ssn;
  const lender_ssn = lender_ssn;
  const amount = req.amount;
  eos
    .transaction({
      actions: [
        {
          account: "eosloanblock",
          name: "createreq",
          authorization: [
            {
              actor: appAdmin,
              permission: "active"
            }
          ],
          data: {
            ssnto: ssn,
            ssnfrom: lender_ssn,
            amount: amount
          }
        }
      ]
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});
app.get("/test", (req, res) => {
  //TODO Call EOSjs here
  let tableQuery = {
    json: true,
    table_key: "uint64_t",
    scope: "eosloanblock",
    code: "eosloanblock",
    table: "userdetail"
  };
  eos.getTableRows(tableQuery).then(result => {
    console.log(JSON.stringify(result));
    //send array of reviewed borower details
    res.send(result.rows);
  });

  // eos.transaction({
  //   actions: [
  //     {
  //       account: 'eosio.token',
  //       name: 'transfer',
  //       authorization: [{
  //         actor: 'user2',
  //         permission: 'active'
  //       }],
  //       data: {
  //         "from": "user2",
  //         "to": "user1",
  //         "quantity": "1.7290 RP",
  //         "memo": "Build3r says Ni Hao"
  //       }
  //     }
  //   ]
  // }).then((res) => {
  //   console.log(JSON.stringify(res));
  //   res.send(res);
  // }).catch((err) => {
  //   res.send(err);
  // });
  // eos.transfer({
  //   "code": "appOwner",
  //   "from": "user2",
  //   "to": "user1",
  //   "quantity": "1.729 RP",
  //   "memo": "Build3r says Ni Hao"
  // }).then((res) => {
  //   res.send(res);
  // }).catch((err) => {
  //   res.send(err);
  // });
  //   eos.getBlock(1).then(result => {
  //     const data = result;
  //     //console.log(data)});
  //     res.send(200);
  // });
});
app.listen(port, () => console.log(`Listening on port ${port}`));
