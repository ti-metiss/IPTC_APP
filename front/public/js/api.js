const URL = "http://127.0.0.1:3000";

const updateMetaData = (img, desc) => {
  const data = {
    description: desc ? desc : " ",
  };

  console.log(`${URL}/${img} data : ${data}`);
  fetch(`${URL}/${img}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const getMetaData = (img) => {
  console.log(`${URL}`);
  fetch(`${URL}/`, {
    method: "get",
  })
    .then((res) => res.json())
    .then((res) => {
      createListImg(res);
    })
    .catch((err) => console.log(err));
};