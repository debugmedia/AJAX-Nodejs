const input = document.querySelector("input");
const addUserButton = document.querySelector("button");
const detailsContainer = document.querySelector(".details");

addUserButton.onclick = () => {
    fetch("http://localhost:3001/addUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            id: Date.now(),
            name: input.value,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            displayUser();
        });

    input.value = "";
};

function displayUser() {
    let section = "";
    fetch("http://localhost:3001/displayUser")
        .then((res) => res.json())
        .then((data) => {
            data.forEach((element) => {
                section = `<section>${element.name}</section>`;
            });
            detailsContainer.insertAdjacentHTML("beforeend", section);
        });
}
