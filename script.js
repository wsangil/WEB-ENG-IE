document.addEventListener('DOMContentLoaded', () => {
    const statusEl = document.getElementById('server-status');

    // Attempt to connect to Node.js backend
    fetch('http://localhost:3000/api/status')
        .then(response => response.json())
        .then(data => {
            statusEl.textContent = "Server: " + data.status;
            statusEl.style.color = "#aeffae"; // Light green text for 'Online'
        })
        .catch(err => {
            console.error("Backend offline:", err);
            statusEl.textContent = "Server: Offline";
            statusEl.style.color = "#ffaeae"; // Light red text for 'Offline'
        });
});