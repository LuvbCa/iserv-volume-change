window.onload = () => {
    console.log("iserv volume aktiviert");
}
if (typeof browser != "undefined") {
    browser.storage.onChanged.addListener((changes) => {
        document.querySelector("audio").volume = changes.val.newValue / 100;
        console.log(document.querySelector("audio").volume);
    });
}
if (typeof chrome != "undefined") {
    chrome.storage.onChanged.addListener((changes) => {
        document.querySelector("audio").volume = changes.val.newValue / 100;
        console.log(document.querySelector("audio").volume);
    });
}