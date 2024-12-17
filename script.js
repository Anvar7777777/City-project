// Weather Example
function showWeather() {
    const weatherDisplay = document.getElementById('weatherDisplay');
    weatherDisplay.textContent = "It's sunny and 15°C in Dagda.";
}

// Notice Board Functionality
function postNotice() {
    const input = document.getElementById('noticeInput').value;
    const output = document.getElementById('noticeOutput');

    if (input.trim() !== "") {
        const message = document.createElement('p');
        message.textContent = input;
        output.appendChild(message);
        document.getElementById('noticeInput').value = "";
    } else {
        alert("Please write a message first!");
    }
}