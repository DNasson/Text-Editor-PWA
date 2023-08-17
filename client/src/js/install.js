const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the event for later use
    window.defferedPrompt = event;

    // Remove the `hidden` attribute from the install button
    butInstall.removeAttribute('hidden', false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.defferedPrompt;
    if (!promptEvent) return;

// show promp
    promptEvent.prompt();

// reset prompt vairable
    window.defferedPrompt = null;

    butInstall.setAttribute('hidden', true);
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    window.defferedPrompt = null;
});
