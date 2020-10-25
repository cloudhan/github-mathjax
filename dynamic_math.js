document.addEventListener("pjax:end", () => {
    if (RegExp(".*/blob/.*").test(document.URL)) {
        // This is a source file page. Only typeset *.md files.
        if (document.URL.endsWith(".md")) {
            window.MathJax.typeset();
        }
    }
    else {
        window.MathJax.typeset();
    }
});
