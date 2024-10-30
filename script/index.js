// Function to detect if dark mode is preferred
function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Function to load the appropriate theme stylesheet
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

    // Set the href attribute based on the color scheme preference with cache-busting query
    themeLink.href = isDarkMode() ? 'css/darkmode.css?v=1.0' : 'css/lightmode.css?v=1.0';
    console.log(`Applied ${themeLink.href}`); // Debugging line to confirm the correct stylesheet is loaded
}

// Variable to hold the Vanta effect instance for resetting
let vantaEffect;

// Function to initialize or update the Vanta fog effect based on the theme
function setVantaEffect() {
    // Destroy existing Vanta effect if already active
    if (vantaEffect) vantaEffect.destroy();

    const baseColor = isDarkMode() ? 0x000000 : 0xffffff; // black for dark mode, white for light mode
    const highlightColor = isDarkMode() ? 0xc200b7 : 0xfd00ff; // darker purple for dark mode
    const midtoneColor = isDarkMode() ? 0x7a00cc : 0x9300ff; // darker midtone for dark mode

    // Initialize the Vanta effect with new colors
    vantaEffect = VANTA.FOG({
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
}

// Combined function to apply theme stylesheet and Vanta effect together
function applyThemeAndEffect() {
    loadThemeStylesheet();
    setVantaEffect();
}

// Run the function on initial load after DOM is ready
document.addEventListener('DOMContentLoaded', applyThemeAndEffect);

// Listen for changes in the user's color scheme preference and reapply theme and effect
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyThemeAndEffect);
