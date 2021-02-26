const run = () => {
    let html = document.getElementById("html").value;
    let css = "<style>" + document.getElementById("css").value + "</style>";
    let js = document.getElementById("js").value;
    let output = document.getElementById("output");

    // console.log(html, css,js,output);
    output.contentDocument.body.innerHTML = html + css;
    output.contentWindow.eval(js);
}

let html = document.getElementById("html").addEventListener("keyup", () => run());
let css = document.getElementById("css").addEventListener("keyup", () => run());
let js = document.getElementById("js").addEventListener("keyup", () => run());