document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Zapobiegaj domyślnemu wysyłaniu formularza
  
  // Pobierz dane z formularza
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Wyświetl dane w elemencie 'result'
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h3>Podsumowanie:</h3>
    <p><strong>Imię:</strong> ${name}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Wiadomość:</strong> ${message}</p>
  `;
});
