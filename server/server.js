const express = require("express");
const Eos = require("eosjs");
const fs = require("fs");

const request = require("request");

const app = express();
const port = process.env.PORT || 5000;
// Optional configuration..
config = {
  chainId: "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f", // 32 byte (64 char) hex string
  httpEndpoint: "http://10.101.1.216:8888",
  keyProvider: "5K7k3Wc6HiKbjYaemkrvgkQD9CFGa4uofJ1z4qTbKHe1ocgnEPC",
  expireInSeconds: 120,
  broadcast: true,
  debug: false, // API and transactions
  sign: true
};
eos = Eos(config);
const appAdmin = "appowner";
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

app.post("/api/setRating/", (req, res) => {
  const ssn = req.ssn;
  const reviewer_ssn = req.reviewer_ssn;
  const rating = req.rating;
  eos
    .transaction({
      actions: [
        {
          account: "eosloanblock",
          name: "createendorse",
          authorization: [
            {
              actor: appAdmin,
              permission: "active"
            }
          ],
          data: {
            ssn: ssn,
            reviewer_ssn,
            rating
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
          name: "",
          authorization: [
            {
              actor: appAdmin,
              permission: "active"
            }
          ],
          data: {
            ssn: ssn,
            lender_ssn,
            amount
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
