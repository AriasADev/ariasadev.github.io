function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function loadThemeStylesheet() {
    // Check if the theme stylesheet link element already exists
    let themeLink = document.getElementById('theme-stylesheet');
    
    // If it doesn't exist, create a new <link> element and append it to the head
    if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.rel = 'stylesheet';
        themeLink.id = 'theme-stylesheet';
        document.head.appendChild(themeLink);
    }

    // Set the href attribute based on the color scheme preference
    themeLink.href = isDarkMode() ? 'css/darkmode.css' : 'css/lightmode.css';
}

// Call the function on page load to apply the correct theme
loadThemeStylesheet();

// Listen for changes in the user's color scheme preference and reload the theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', loadThemeStylesheet);

// VANTA fog effect settings with dynamic color adjustments
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

// Prompt the user to whitelist the site if a dark mode extension is detected
window.onload = function() {
    const computedStyle = getComputedStyle(document.documentElement);
    if (computedStyle.colorScheme.includes('dark')) {
        alert("It looks like you're using a dark mode extension. Please whitelist our site for the best experience, as extensions may affect the animated background.");
    }
};
