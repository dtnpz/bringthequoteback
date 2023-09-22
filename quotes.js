    // ==UserScript==
    // @name         Twitter and X Script v5.4.0
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
        var tries = 0;
        var tryNow = function() {
            var elem = document.querySelector(readySelector);
            if (elem) {
                callback(elem);
            } else {
                tries++;
                if (tries >= 25) {
                    console.warn('Giving up after 34 attempts. Could not find: ' + readySelector);
                } else {
                    setTimeout(tryNow, 250 * Math.pow(1.1, tries));
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
            console.log("retweetArticle: ",retweetArticle);
            var alreadyRetweeted = document.querySelector("div[data-testid='unretweet']");
            console.log("alreadyRetweeted: ",alreadyRetweeted);
            if (retweetArticle !== null) {
                retweetArticle.style.position = 'relative';
                retweetArticle.style.left = '-20px';
        
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
                cssCircle.style.opacity = '10%';

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
        
            }
            if (alreadyRetweeted !== null){
                console.log("alreadyRetweeted: ",alreadyRetweeted);
                console.log('okey')
                alreadyRetweeted.style.position = 'relative';
                alreadyRetweeted.style.left = '-20px';
        
                var newDiv2 = document.createElement('div');
                newDiv2.id = 'quotesnewbt';
                newDiv2.style.padding = '5px';
                newDiv2.style.marginTop = '7px';
                newDiv2.style.backgroundColor = 'transparent';
                newDiv2.style.color = '#808d9a';
                newDiv2.style.position = 'relative';
                newDiv2.style.marginLeft = '-9px';
                newDiv2.style.marginRight = '16px';

                var newAnchor2 = document.createElement('a');
                newAnchor2.href = newURL;

                var svgElement2 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svgElement2.setAttribute('viewBox', '0 0 24 24');
                svgElement2.setAttribute('aria-hidden', 'true');
                svgElement2.classList.add('r-vlxjld', 'r-4qtqp9', 'r-yyyyoo', 'r-1q142lx', 'r-1xvli5t', 'r-dnmrzs', 'r-bnwqim', 'r-1plcrui', 'r-lrvibr');

                var svgPath2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                svgPath2.setAttribute('d', 'M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z');
                svgPath2.style.fill = '#808d9a';

                var svgGroup2 = document.createElement('div');
                svgGroup2.style.display = 'flex';
                svgGroup2.style.flexDirection = 'column';
                svgGroup2.style.alignItems = 'center';
                svgElement2.style.zIndex = '10';
                svgElement2.appendChild(svgPath);

                svgElement2.addEventListener('mouseenter', function() {
                    newButton2.style.color = '#FFD700';
                    svgPath2.style.fill = '#fcec03';
                    cssCircle2.style.backgroundColor = 'rgba(255, 215, 0, 0.75)';
                    cssCircle2.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                    cssCircle2.style.width = '39px';
                    cssCircle2.style.height = '39px';
                    cssCircle2.style.borderRadius = '50%';
                    cssCircle2.style.top = '-28px';
                    cssCircle2.style.left = '-11px';
                    svgPath2.style.opacity = '100%';
                    cssCircle2.style.opacity = '15%';
                });

                svgElement2.addEventListener('mouseleave', function() {
                    newButton2.style.color = '#808d9a';
                    svgPath2.style.fill = '#808d9a';
                    cssCircle2.style.backgroundColor = 'transparent';
                    cssCircle2.style.opacity = '0%';
                });

                var cssCircle2 = document.createElement('div');
                cssCircle2.classList.add('css-circle');
                svgPath2.style.fill = '#808d9a';
                cssCircle2.style.width = '39px';
                cssCircle2.style.height = '39px';
                cssCircle2.style.borderRadius = '50%';
                cssCircle2.style.position = 'relative';
                cssCircle2.style.top = '-28px';
                cssCircle2.style.left = '-11px';
                svgPath2.style.opacity = '100%';
                cssCircle2.style.opacity = '10%';

                newAnchor2.appendChild(svgElement2);
                newAnchor2.appendChild(cssCircle2);

                var newButton2 = document.createElement('button');
                newButton2.textContent = 'คำพูด';
                newButton2.style.width = '57px';
                newButton2.style.padding = '5px';
                newButton2.style.backgroundColor = 'transparent';
                newButton2.style.border = 'none';
                newButton2.style.color = '#808d9a';
                newButton2.style.fontSize = '14px';
                newButton2.style.fontWeight = 'bold';
                newButton2.style.cursor = 'pointer';

                newButton2.style.position = 'absolute';
                newButton2.style.left = '29px';
                newButton2.style.top = '2px';

                var isHovered2 = false;

                newButton2.addEventListener('mouseenter', function() {
                    isHovered2 = true;
                    setTimeout(function() {
                        if (isHovered2) {
                            newButton2.style.color = '#FFD700';
                            svgPath2.style.fill = '#FFD700';
                            cssCircle2.style.backgroundColor = 'rgba(255, 215, 0, 0.75)';
                            cssCircle2.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                            cssCircle2.style.width = '39px';
                            cssCircle2.style.height = '39px';
                            cssCircle2.style.borderRadius = '50%';
                            cssCircle2.style.top = '-28px';
                            cssCircle2.style.left = '-11px';
                            svgPath2.style.opacity = '100%';
                            cssCircle2.style.opacity = '03%';
                        }
                    }, 250);
                });

                newButton2.addEventListener('mouseleave', function() {
                    isHovered2 = false;
                    newButton2.style.color = '#808d9a';
                    svgPath2.style.fill = '#808d9a';
                    cssCircle2.style.backgroundColor = 'transparent';
                });

                newAnchor2.appendChild(newButton2);

                newDiv2.appendChild(newAnchor2);

                alreadyRetweeted.insertAdjacentElement('afterend', newDiv2);
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
