function send() {
    (async function () {
        const postData = {
            name: document.querySelector('#nameInput').value
        };
        const response = await fetch(`/api/message`, {
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