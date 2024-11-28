document.addEventListener('DOMContentLoaded', () => {
    const roomWidthInput = document.getElementById('room-width');
    const roomHeightInput = document.getElementById('room-height');
    const wallpaperWidthInput = document.getElementById('wallpaper-width');
    const wallpaperLengthInput = document.getElementById('wallpaper-length');
    const calculateWallpaperButton = document.getElementById('calculate-wallpaper');
    const rollsNeededSpan = document.getElementById('rolls-needed');

    calculateWallpaperButton.addEventListener('click', () => {
        const roomWidth = parseFloat(roomWidthInput.value);
        const roomHeight = parseFloat(roomHeightInput.value);
        const wallpaperWidth = parseFloat(wallpaperWidthInput.value);
        const wallpaperLength = parseFloat(wallpaperLengthInput.value);

        if (isNaN(roomWidth) || isNaN(roomHeight) || isNaN(wallpaperWidth) || isNaN(wallpaperLength)) {
            rollsNeededSpan.textContent = 'Invalid input';
            return;
        }

        const roomPerimeter = 2 * (roomWidth + roomHeight);
        const stripsPerRoll = Math.floor(wallpaperLength / roomHeight);
        const stripsNeeded = Math.ceil(roomPerimeter / wallpaperWidth);
        const rollsNeeded = Math.ceil(stripsNeeded / stripsPerRoll);

        rollsNeededSpan.textContent = rollsNeeded;
    });
});
