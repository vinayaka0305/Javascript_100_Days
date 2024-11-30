const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1999c0e81cmsh9067930e536e347p148535jsn658c2251c4c7",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};

const params = new URLSearchParams({
  query: "Node Js developer in Bengaluru, India",
});

const fetchData = async () => {
  try {
    const url = `https://jsearch.p.rapidapi.com/search?${params}`;
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("failed");
    }
    const responseData = await response.json();
    console.log(responseData.data[0]);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
