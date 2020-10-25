let head = document.querySelector("head");
// inject scripts into head
["mathjax_config.js", "MathJax/es5/tex-mml-chtml.js", "dynamic_math.js"].forEach(item => {
    let script = document.createElement("script");
    script.src = chrome.extension.getURL(item);
    head.appendChild(script);
});
