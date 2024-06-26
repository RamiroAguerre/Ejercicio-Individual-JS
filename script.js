// Function to calculate days lived since a birthdate
function calculateDaysLived(dateOfBirth) {
    let now = new Date();
    let birthDate = new Date(dateOfBirth);
    let difference = now.getTime() - birthDate.getTime();
    let daysLived = Math.floor(difference / (1000 * 60 * 60 * 24));
    return daysLived;
}

// Ask the user to input their date of birth
let dateOfBirth = prompt("Ingresa tu fecha de cumpleaños en este formato: 'YYYY-MM-DD'");

// Calculate days lived since the entered date of birth
let daysLived = calculateDaysLived(dateOfBirth);

// Create a styled message to display the calculated days lived
let message = document.createElement('div');
message.textContent = `Desde que naciste, has vivido aproximadamente ${daysLived} días.`;
message.style.backgroundColor = '#dff0d8';
message.style.border = '1px solid #d0e9c6';
message.style.color = '#3c763d';
message.style.padding = '10px';
message.style.margin = '20px auto';
message.style.maxWidth = '400px';
message.style.borderRadius = '5px';
message.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
message.style.textAlign = 'center';

// Append the message to the body
document.body.appendChild(message);
