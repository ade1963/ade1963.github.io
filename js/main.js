document.addEventListener('DOMContentLoaded', () => {
    const calculatorIcon = document.getElementById('calculator-icon');
    const scannerIcon = document.getElementById('scanner-icon');
    const calculatorDiv = document.getElementById('calculator');
    const scannerDiv = document.getElementById('scanner');

    // Initialize Telegram data
    Telegram.initData();

    // Display user info
    document.getElementById('chat-id').textContent = Telegram.chatId;
    document.getElementById('username').textContent = Telegram.username;

    // Toolbox navigation
    calculatorIcon.addEventListener('click', () => {
        calculatorDiv.style.display = 'block';
        scannerDiv.style.display = 'none';
        calculatorIcon.classList.add('active');
        scannerIcon.classList.remove('active');
    });

    scannerIcon.addEventListener('click', () => {
        calculatorDiv.style.display = 'none';
        scannerDiv.style.display = 'block';
        calculatorIcon.classList.remove('active');
        scannerIcon.classList.add('active');
    });
});
