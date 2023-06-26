document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("myInput");
  var iframe = document.getElementById("myIframe");

  input.addEventListener("input", function (e) {
    var doc = iframe.contentWindow.document;
    doc.open();
    doc.write(input.value);
    doc.close();
  });
});

window.onload = function () {
  var iframe = document.getElementById("myIframe");
  var toggleTailwind = document.getElementById("toggleTailwind");

  function updateIframe() {
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    var existingLink = iframeDoc.querySelector(
      'link[href="tailwind.css"]'
    );
    if (toggleTailwind.checked && !existingLink) {
      var link = iframeDoc.createElement("link");
      link.href = "tailwind.css";
      link.rel = "stylesheet";
      iframeDoc.head.appendChild(link);
    } else if (!toggleTailwind.checked && existingLink) {
      existingLink.parentNode.removeChild(existingLink);
    }
  }

  toggleTailwind.addEventListener("change", updateIframe);

  // Call once to set initial state
  updateIframe();
};
