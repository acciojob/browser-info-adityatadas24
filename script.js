//your JS code here. If required.
 const browserInfoDiv = document.getElementById("browser-info");

        const userAgent = navigator.userAgent;
        const browserName = navigator.appName;
        const browserVersion = navigator.appVersion;

        const message = "You are using " + browserName + " version " + browserVersion;

        browserInfoDiv.textContent = message;