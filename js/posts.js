document.addEventListener("DOMContentLoaded", function() {
    const jsonData = document.querySelector("#data").textContent;

    const data = JSON.parse(jsonData);

    document.querySelector("#title").textContent = data.title;
    document.querySelector("#date").textContent = data.date;
    document.querySelector("#topic").textContent = data.topic;
    document.querySelector("#content").textContent = data.content;
})