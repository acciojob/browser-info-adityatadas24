//your JS code here. If required.
 const browserInfoDiv = document.getElementById("browser-info");

        // Get the user agent string, browser name, and version from the navigator object
        const userAgent = navigator.userAgent;
        const browserName = navigator.appName;
        const browserVersion = navigator.appVersion;

        // Create a message with the browser information
        const message = "You are using " + browserName + " version " + browserVersion;

        // Display the message in the browser-info div
        browserInfoDiv.textContent = message;