//your JS code here. If required.
// Function to get a cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    let [key, value] = cookie.split('=');
    if (key === name) return decodeURIComponent(value);
  }
  return null;
}

// Apply saved preferences from cookies
function applyPreferences() {
  const savedFontSize = getCookie('fontsize');
  const savedFontColor = getCookie('fontcolor');

  if (savedFontSize) {
    document.documentElement.style.setProperty('--fontsize', `${savedFontSize}px`);
    document.getElementById('fontsize').value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty('--fontcolor', savedFontColor);
    document.getElementById('fontcolor').value = savedFontColor;
  }
}

// Handle form submission
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  // Save to cookies
  document.cookie = `fontsize=${encodeURIComponent(fontSize)}; path=/`;
  document.cookie = `fontcolor=${encodeURIComponent(fontColor)}; path=/`;

  // Apply changes immediately
  document.documentElement.style.setProperty('--fontsize', `${fontSize}px`);
  document.documentElement.style.setProperty('--fontcolor', fontColor);
});

// Initial call to apply saved preferences
applyPreferences();
