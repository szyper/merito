document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Zapobiegaj domyślnemu wysyłaniu formularza
  
  // Pobieranie wartości z pól
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Pobieranie wartości z pól typu radio
  const gender = document.querySelector('input[name="gender"]:checked')?.value || "Nie podano";

  // Pobieranie wartości z checkboxów
  const interests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
                         .map(checkbox => checkbox.value)
                         .join(", ") || "Brak zainteresowań";

  // Wyświetlanie danych w podsumowaniu
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h3>Podsumowanie:</h3>
    <p><strong>Imię:</strong> ${name}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Płeć:</strong> ${gender}</p>
    <p><strong>Zainteresowania:</strong> ${interests}</p>
    <p><strong>Wiadomość:</strong> ${message}</p>
  `;
});
