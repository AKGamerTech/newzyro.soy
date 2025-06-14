document.getElementById('Original').addEventListener('click', function() {
document.documentElement.style.setProperty('--anwc-current', getComputedStyle(document.documentElement).getPropertyValue('--anwc-orange'));
document.documentElement.style.setProperty('--anwc-current-dark', getComputedStyle(document.documentElement).getPropertyValue('--anwc-orange-dark'));
document.documentElement.style.setProperty('--back-current', getComputedStyle(document.documentElement).getPropertyValue('--back-orange'));
document.documentElement.style.setProperty(
    '--back-current-dark-less',
    getComputedStyle(document.documentElement).getPropertyValue('--back-orange-dark-less')
  );
});

document.getElementById('Blue').addEventListener('click', function() {
document.documentElement.style.setProperty('--anwc-current', getComputedStyle(document.documentElement).getPropertyValue('--anwc-blue'));
document.documentElement.style.setProperty('--anwc-current-dark', getComputedStyle(document.documentElement).getPropertyValue('--anwc-blue-dark'));
document.documentElement.style.setProperty('--back-current', getComputedStyle(document.documentElement).getPropertyValue('--back-blue'));
document.documentElement.style.setProperty(
    '--back-current-dark-less',
    getComputedStyle(document.documentElement).getPropertyValue('--back-blue-dark-less')
  );

});

document.getElementById('Green').addEventListener('click', function() {
document.documentElement.style.setProperty('--anwc-current', getComputedStyle(document.documentElement).getPropertyValue('--anwc-green'));
document.documentElement.style.setProperty('--anwc-current-dark', getComputedStyle(document.documentElement).getPropertyValue('--anwc-green-dark'));
document.documentElement.style.setProperty('--back-current', getComputedStyle(document.documentElement).getPropertyValue('--back-green'));
document.documentElement.style.setProperty(
    '--back-current-dark-less',
    getComputedStyle(document.documentElement).getPropertyValue('--back-green-dark-less')
  );

  
});

document.getElementById('Pink').addEventListener('click', function() {
document.documentElement.style.setProperty('--anwc-current', getComputedStyle(document.documentElement).getPropertyValue('--anwc-pink'));
document.documentElement.style.setProperty('--anwc-current-dark', getComputedStyle(document.documentElement).getPropertyValue('--anwc-pink-dark'));
document.documentElement.style.setProperty('--back-current', getComputedStyle(document.documentElement).getPropertyValue('--back-pink'));
document.documentElement.style.setProperty(
    '--back-current-dark-less',
    getComputedStyle(document.documentElement).getPropertyValue('--back-pink-dark-less')
  );
});

document.getElementById('Red').addEventListener('click', function() {
document.documentElement.style.setProperty('--anwc-current', getComputedStyle(document.documentElement).getPropertyValue('--anwc-red'));
document.documentElement.style.setProperty('--anwc-current-dark', getComputedStyle(document.documentElement).getPropertyValue('--anwc-red-dark'));
document.documentElement.style.setProperty('--back-current', getComputedStyle(document.documentElement).getPropertyValue('--back-red'));
document.documentElement.style.setProperty(
    '--back-current-dark-less',
    getComputedStyle(document.documentElement).getPropertyValue('--back-red-dark-less')
  );
});