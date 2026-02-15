document.addEventListener('DOMContentLoaded', () => {
    console.log("IE Department Website Loaded");

    // Check backend status
    fetch('http://localhost:3000/api/status')
        .then(response => response.json())
        .then(data => {
            const statusEl = document.getElementById('server-status');
            statusEl.textContent = "Server: " + data.status;
            statusEl.style.color = "#aeffae";
        })
        .catch(err => {
            console.log("Backend not connected");
            document.getElementById('server-status').textContent = "Offline";
        });
});