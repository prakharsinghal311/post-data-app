import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // API endpoint URL
    const apiUrl = "https://chimpu.xyz/api/post.php";

    // data to be sent in the POST request
    const postData = {
      phonenumber: 11111111,
    };

    // POST request using axios
    axios
      .post(apiUrl, postData)
      .then((response) => {
        const headers = response.headers;
        setResponseData(headers);
      })
      .catch((error) => {
        console.error("Error making POST request:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Data received in headers:</h1>
      <ul>
        {responseData &&
          Object.keys(responseData).map((key, index) => (
            <li key={index}>
              {key}: {responseData[key]}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
