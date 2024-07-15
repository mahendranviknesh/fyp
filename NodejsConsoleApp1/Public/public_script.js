document.getElementById('backupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const data = document.getElementById('backupData').value;

    fetch('/backup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: data })
    }).then(response => response.text())
        .then(data => {
            document.getElementById('responseMessage').innerText = data;
        }).catch(error => {
            document.getElementById('responseMessage').innerText = 'An error occurred during backup.';
        });
});

document.getElementById('recoveryForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fileName = document.getElementById('fileName').value;

    fetch(`/recover?file=${fileName}`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('responseMessage').innerText = data;
        })
        .catch(error => {
            document.getElementById('responseMessage').innerText = 'An error occurred during recovery.';
        });
});
