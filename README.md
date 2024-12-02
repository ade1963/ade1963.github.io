# Telegram Mini App

This repository contains a Telegram Mini App (Web App) that provides various tools such as a Sales Tax Calculator, QR Code Scanner, Wallpaper Calculator, and Unit Converter.

## Features

- **Sales Tax Calculator**: Calculate the total price including tax.
- **QR Code Scanner**: Scan QR codes from images.
- **Wallpaper Calculator**: Calculate the number of wallpaper rolls needed for a room.
- **Unit Converter**: Convert between different units of measurement (length, weight, volume).

## Project Structure

```
├── assets/
│   ├── qr_scanner.png
│   ├── tax_sales_calc.png
│   ├── unit_converter.png
│   └── wallpaper_calc.png
├── css/
│   └── style.css
├── js/
│   ├── calculator.js
│   ├── main.js
│   ├── scanner.js
│   ├── telegram.js
│   ├── unitConverter.js
│   └── wallpaperCalculator.js
└── index.html
```

## Key Files

- **index.html**: Main HTML file that includes all necessary scripts and styles.
- **js/main.js**: Contains the main logic for handling tool navigation and initialization.
- **js/telegram.js**: Handles Telegram-specific functionality, such as fetching user data.
- **css/style.css**: Styles for the web app.

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Open `index.html` in a browser to view and use the app:
   ```bash
   xdg-open index.html  # For Linux
   open index.html      # For macOS
   start index.html     # For Windows
   ```

## Dependencies

- **jsQR**: Used for QR code scanning.
  - Included via CDN in `index.html`.

## Contributing

Feel free to contribute by opening issues or pull requests. Make sure to follow the existing coding conventions and structure.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
