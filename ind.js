var imgdatauri;

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      document.querySelector("#image1").src = e.target.result;
      imgdatauri = e.target.result;
    };
  }
  reader.readAsDataURL(input.files[0]);
}

function hideText() {
  document.querySelector("#image2").src = steg.encode(document.querySelector('#text').value, imgdatauri);
}

function storeKey(key) {
  // Make an API call to the server to store the key
  // You can use AJAX, fetch(), or any other method to send the data to the server
  // Example using fetch():
  fetch('/storeKey', {
    method: 'POST',
    body: JSON.stringify({ key }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Key stored successfully:', data);
    })
    .catch((error) => {
      console.error('Error storing key:', error);
    });
}

function retrieveKey() {
  // Make an API call to the server to retrieve the key
  // You can use AJAX, fetch(), or any other method to retrieve the data from the server
  // Example using fetch():
  fetch('/retrieveKey')
    .then((response) => response.json())
    .then((data) => {
      if (data.key) {
        encodingKey = data.key;
        localStorage.setItem('imageKey', encodingKey);
      }
    })
    .catch((error) => {
      console.error('Error retrieving key:', error);
    });
}


function decode(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const encodedImage = e.target.result;
      const decodingKey = prompt("Enter the key to decode the message:");

      if (decodingKey && decodingKey === encodingKey) {
        const decodedMessage = steg.decode(encodedImage, decodingKey);
        document.querySelector("#decoded").innerText = decodedMessage;
        
      }
      else {
        alert("Invalid key. Please enter the correct key used during encoding.");
      }
      
    };

    reader.readAsDataURL(input.files[0]);
  }
}





let encodingKey =localStorage.getItem('imageKey') || '';

function ok() {
  const message = document.querySelector("#text").value;
  const key = document.querySelector("#keyInput").value;

  if (message && key) {

    localStorage.setItem('imageKey', key);
    encodingKey = key;

    // Store the key on the server
    storeKey(key);

    const encodedImage = steg.encode(message, imgdatauri, key);
    document.querySelector("#image2").src = encodedImage;
    document.querySelector("#downloadEncodedImageBtn").href = encodedImage;
    document.querySelector("#downloadEncodedImageBtn").style.display = "block";
  }
  
}

// Retrieve the key when the page loads
window.addEventListener('load', retrieveKey);