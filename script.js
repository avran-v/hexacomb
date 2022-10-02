function onScanSuccess(decodedText, decodedResult) {
  formattedText = `${decodedText}`;
  console.log(formattedText);
  const qrResult = document.getElementById("qr-result");
  const shareButton = document.getElementById("share-button");
  const addToAccButton = document.getElementById("add-to-acc-button");
  qrResult.innerHTML = "<pre>" + formattedText + "</pre>";
  qrResult.style.visibility = "visible"; 
  shareButton.style.visibility = "visible";
  addToAccButton.style.visibility = "visible"; 
  console.log(formattedText);
}
var html5QrcodeScanner = new Html5QrcodeScanner(
  "qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);