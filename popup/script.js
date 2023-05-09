const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notification = document.createElement("div");
    notification.classList.add("notification");

    notification.innerText = "This is your day!";

    container.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);

};