let typeBrowser = "";

document.getElementById("volume_range").oninput = async (e) => {
    document.getElementById("val_range").innerText = e.target.value + "%"
    if (typeBrowser == "firefox") {
        await browser.storage.local.set({ val: e.target.value });
    }
    if (typeBrowser == "chrome") {
        await chrome.storage.local.set({ val: e.target.value });
    }
}
window.onload = async () => {
    if (typeof browser != "undefined") {
        document.getElementById("browser_type").innerText = "firefox etc."
        typeBrowser = "firefox";
    } else
        if (typeof chrome != "undefined") {
            document.getElementById("browser_type").innerText = "chromium etc."
            typeBrowser = "chrome";
        }

    if (typeBrowser == "firefox") {
        let getted = await browser.storage.local.get();
        document.getElementById("val_range").innerText = getted.val + "%";
        document.getElementById("volume_range").value = getted.val;
    }
    if (typeBrowser == "chrome") {
        chrome.storage.local.get("val", (items) => {
            document.getElementById("val_range").innerText = items.val + "%";
            document.getElementById("volume_range").value = items.val;
        });
    }
}