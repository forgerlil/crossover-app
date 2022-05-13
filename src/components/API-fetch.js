const fetchData = (from, to, amount) => {
  console.log(from, to, amount)
  let myHeaders = new Headers();
  myHeaders.append("apikey", process.env.REACT_APP_API_KEY);
  // myHeaders.append("apikey", 'API_KEY');

  let requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export default fetchData;