// Pobieramy element, w którym wyświetlimy tekst
let result = document.getElementById("result");

// Sprawdzamy, czy tekst powitalny został już wyświetlony
if (localStorage.getItem("tekstWyświetlony") !== "true") {
  // Wyświetlamy tekst powitalny
  result.textContent = "Witaj w formularzu kontaktowym! Wypełnij dane, aby wysłać wiadomość.";
  // Zapisujemy informację, że tekst został wyświetlony
  localStorage.setItem("tekstWyświetlony", "true");
}

// Obsługa wysyłania formularza
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Zapobiegamy domyślnemu wysyłaniu
  result.textContent = "Dziękujemy za przesłanie formularza!";
});