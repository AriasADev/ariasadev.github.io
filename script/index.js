function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}


const baseColor = isDarkMode() ? 0x000000 : 0xffffff; // black for dark mode, white for light mode
const highlightColor = isDarkMode() ? 0xc200b7 : 0xfd00ff; // darker purple for dark mode
const midtoneColor = isDarkMode() ? 0x7a00cc : 0x9300ff; // darker midtone for dark mode


VANTA.FOG({
    el: "#background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    highlightColor: highlightColor,
    midtoneColor: midtoneColor,
    baseColor: baseColor
});
