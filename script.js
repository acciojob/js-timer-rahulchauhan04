function updateTimer() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // JavaScript months are 0-based.
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const formattedTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
    document.getElementById('timer').textContent = formattedTime;
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initialize the timer immediately
updateTimer();
