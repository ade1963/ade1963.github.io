document.addEventListener('DOMContentLoaded', async () => {
    const calculatorIcon = document.getElementById('calculator-icon');
    const scannerIcon = document.getElementById('scanner-icon');
    const wallpaperIcon = document.getElementById('wallpaper-icon');
    const unitIcon = document.getElementById('unit-icon');
    const calculatorDiv = document.getElementById('calculator');
    const scannerDiv = document.getElementById('scanner');
    const wallpaperCalculatorDiv = document.getElementById('wallpaper-calculator');
    const unitConverterDiv = document.getElementById('unit-converter');

    UserData.Init();
    await TelegramApp.initData();
    await UserData.getTools();
    // Display user info
    document.getElementById('chat-id').textContent = TelegramApp.chatId;
    //document.getElementById('username').textContent = TelegramApp.username;

    const toolSettings = await UserData.fetchToolSettings(TelegramApp.chatId, UserData.currentToolId);
    if (toolSettings != null)
        document.getElementById('tax-rate').value = toolSettings.taxRate;

    /*
    // Create an element to display the tools
    const toolsList = document.createElement('ul');
    toolsList.id = 'tools-list';

    // Append each tool to the list
    UserData.toolsData.forEach(tool => {
        const toolItem = document.createElement('li');
        toolItem.textContent = `${tool.name} - ${tool.tool_id}`;
        toolsList.appendChild(toolItem);
    });

    // Append the tools list to the username span's parent element
    document.querySelector('#username').parentElement.appendChild(toolsList);
    */

    await UserData.getFavorities(TelegramApp.chatId);

    // Toolbox navigation
    calculatorIcon.addEventListener('click', () => {
        calculatorDiv.style.display = 'block';
        scannerDiv.style.display = 'none';
        wallpaperCalculatorDiv.style.display = 'none';
        unitConverterDiv.style.display = 'none';
        calculatorIcon.classList.add('active');
        scannerIcon.classList.remove('active');
        wallpaperIcon.classList.remove('active');
        unitIcon.classList.remove('active');
        UserData.currentToolId = 1;
    });

    scannerIcon.addEventListener('click', () => {
        calculatorDiv.style.display = 'none';
        scannerDiv.style.display = 'block';
        wallpaperCalculatorDiv.style.display = 'none';
        unitConverterDiv.style.display = 'none';
        calculatorIcon.classList.remove('active');
        scannerIcon.classList.add('active');
        wallpaperIcon.classList.remove('active');
        unitIcon.classList.remove('active');
        UserData.currentToolId = 2;
    });

    wallpaperIcon.addEventListener('click', () => {
        calculatorDiv.style.display = 'none';
        scannerDiv.style.display = 'none';
        wallpaperCalculatorDiv.style.display = 'block';
        unitConverterDiv.style.display = 'none';
        calculatorIcon.classList.remove('active');
        scannerIcon.classList.remove('active');
        wallpaperIcon.classList.add('active');
        unitIcon.classList.remove('active');
        UserData.currentToolId = 3;
    });

    unitIcon.addEventListener('click', () => {
        calculatorDiv.style.display = 'none';
        scannerDiv.style.display = 'none';
        wallpaperCalculatorDiv.style.display = 'none';
        unitConverterDiv.style.display = 'block';
        calculatorIcon.classList.remove('active');
        scannerIcon.classList.remove('active');
        wallpaperIcon.classList.remove('active');
        unitIcon.classList.add('active');
        UserData.currentToolId = 4;
    });

});
