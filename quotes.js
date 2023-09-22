// ==UserScript==
// @name         Twitter and X Script v5.0.2
// @match        https://twitter.com/*
// @match        https://x.com/*
// @run-at       document-idle
// ==/UserScript==

var excludedUrls = [
    "https://twitter.com/home",
    "https://twitter.com/",
    "https://x.com/",
    "https://x.com/home"
    // Add more URLs as needed
];

function shouldRunScript() {
    var currentURL = window.location.href;
    return !excludedUrls.includes(currentURL);
}

function runWhenReady(readySelector, callback) {
    var numAttempts = 0;
    var tryNow = function() {
        var elem = document.querySelector(readySelector);
        if (elem) {
            callback(elem);
        } else {
            numAttempts++;
            if (numAttempts >= 34) {
                console.warn('Giving up after 34 attempts. Could not find: ' + readySelector);
            } else {
                setTimeout(tryNow, 250 * Math.pow(1.1, numAttempts));
            }
        }
    };
    tryNow();
}

function reloadDOM() {
    var existingDiv = document.getElementById('quotesnewbt');
    if (existingDiv) {
        existingDiv.remove();
    }

    runWhenReady("article[data-testid='tweet']", function(articleElement) {
        var currentURL = window.location.href;
        console.log(currentURL)
        var newURL = currentURL + "/quotes";
        var retweetArticle = document.querySelector("div[data-testid='retweet']");
        var alreadyRetweeted = document.querySelector("div[data-testid='unretweet']");
        console.log("retweetArticle: ",retweetArticle);
        console.log("alreadyRetweeted: ",alreadyRetweeted);
        if (retweetArticle !== null || alreadyRetweeted !== null) {
            retweetArticle.style.position = 'relative';
            retweetArticle.style.left = '-20px';
            alreadyRetweeted.style.position = 'relative';
            alreadyRetweeted.style.left = '-20px';
            var newDiv = document.createElement('div');
            newDiv.id = 'quotesnewbt';
            newDiv.style.padding = '5px';
            newDiv.style.marginTop = '7px';
            newDiv.style.backgroundColor = 'transparent';
            newDiv.style.color = '#808d9a';
            newDiv.style.position = 'relative';
            newDiv.style.marginLeft = '-9px';
            newDiv.style.marginRight = '16px';

            var newAnchor = document.createElement('a');
            newAnchor.href = newURL;

            var svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svgElement.setAttribute('viewBox', '0 0 24 24');
            svgElement.setAttribute('aria-hidden', 'true');
            svgElement.classList.add('r-vlxjld', 'r-4qtqp9', 'r-yyyyoo', 'r-1q142lx', 'r-1xvli5t', 'r-dnmrzs', 'r-bnwqim', 'r-1plcrui', 'r-lrvibr');

            var svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            svgPath.setAttribute('d', 'M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z');
            svgPath.style.fill = '#808d9a';

            var svgGroup = document.createElement('div');
            svgGroup.style.display = 'flex';
            svgGroup.style.flexDirection = 'column';
            svgGroup.style.alignItems = 'center';
            svgElement.style.zIndex = '10';
            svgElement.appendChild(svgPath);

            svgElement.addEventListener('mouseenter', function() {
                newButton.style.color = '#FFD700';
                svgPath.style.fill = '#fcec03';
                cssCircle.style.backgroundColor = 'rgba(255, 215, 0, 0.75)';
                cssCircle.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                cssCircle.style.width = '39px';
                cssCircle.style.height = '39px';
                cssCircle.style.borderRadius = '50%';
                cssCircle.style.top = '-28px';
                cssCircle.style.left = '-11px';
                svgPath.style.opacity = '100%';
                cssCircle.style.opacity = '15%';
            });

            svgElement.addEventListener('mouseleave', function() {
                newButton.style.color = '#808d9a';
                svgPath.style.fill = '#808d9a';
                cssCircle.style.backgroundColor = 'transparent';
                cssCircle.style.opacity = '0%';
            });

            var cssCircle = document.createElement('div');
            cssCircle.classList.add('css-circle');
            svgPath.style.fill = '#808d9a';
            cssCircle.style.width = '39px';
            cssCircle.style.height = '39px';
            cssCircle.style.borderRadius = '50%';
            cssCircle.style.position = 'relative';
            cssCircle.style.top = '-28px';
            cssCircle.style.left = '-11px';
            svgPath.style.opacity = '100%';
            cssCircle.style.opacity = '15%';

            newAnchor.appendChild(svgElement);
            newAnchor.appendChild(cssCircle);

            var newButton = document.createElement('button');
            newButton.textContent = 'คำพูด';
            newButton.style.width = '57px';
            newButton.style.padding = '5px';
            newButton.style.backgroundColor = 'transparent';
            newButton.style.border = 'none';
            newButton.style.color = '#808d9a';
            newButton.style.fontSize = '14px';
            newButton.style.fontWeight = 'bold';
            newButton.style.cursor = 'pointer';

            newButton.style.position = 'absolute';
            newButton.style.left = '29px';
            newButton.style.top = '2px';

            var isHovered = false;

            newButton.addEventListener('mouseenter', function() {
                isHovered = true;
                setTimeout(function() {
                    if (isHovered) {
                        newButton.style.color = '#FFD700';
                        svgPath.style.fill = '#FFD700';
                        cssCircle.style.backgroundColor = 'rgba(255, 215, 0, 0.75)';
                        cssCircle.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                        cssCircle.style.width = '39px';
                        cssCircle.style.height = '39px';
                        cssCircle.style.borderRadius = '50%';
                        cssCircle.style.top = '-28px';
                        cssCircle.style.left = '-11px';
                        svgPath.style.opacity = '100%';
                        cssCircle.style.opacity = '03%';
                    }
                }, 250);
            });

            newButton.addEventListener('mouseleave', function() {
                isHovered = false;
                newButton.style.color = '#808d9a';
                svgPath.style.fill = '#808d9a';
                cssCircle.style.backgroundColor = 'transparent';
            });

            newAnchor.appendChild(newButton);

            newDiv.appendChild(newAnchor);

            retweetArticle.insertAdjacentElement('afterend', newDiv);
            alreadyRetweeted.insertAdjacentElement('afterend', newDiv);
        }
    });
}

function checkAndReloadDOM() {
    var currentURL = window.location.href;
    var lastVisitedURL = localStorage.getItem('lastVisitedURL');
    if (currentURL !== lastVisitedURL) {
        localStorage.setItem('lastVisitedURL', currentURL);
        if (shouldRunScript()) {
            reloadDOM();
            console.log('domReload Triggered');
        }
    }
}

// Initial check
checkAndReloadDOM();

// Periodic check for URL change
setInterval(checkAndReloadDOM, 1000); // Check every 1 second

// Event listener for manual trigger
document.addEventListener('click', function() {
    if (shouldRunScript()) {
        reloadDOM();
        console.log('Manual domReload Triggered');
    }
});
