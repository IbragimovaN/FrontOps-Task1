const btn = document.getElementById("btn");
const dataField = document.getElementById("data-field");

let data = "";
btn.addEventListener("click", () => {
  fetch("http://87.228.79.211:3001/")
    .then((response) => response.json())
    .then((data) => {
      dataField.textContent = data.message;
    })
    .catch((error) => {
      console.error("Error:", error);
      dataField.textContent = "Error fetching data!";
    });
});
