function send() {
    (async function () {
        const name = document.querySelector('#nameInput').value;
        const postData = {
            name: name
        };
        const response = await fetch(`/api/user/send-message`, { // `/api/message?name=${name}`, /api/user/send-message?name=${name}
            // method: "GET",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(postData)
        });
        const { text } = await response.json();
        document.querySelector('#message').textContent = text;
    }());
}