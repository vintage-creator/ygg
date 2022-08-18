function listen() {
  let inputArea = document.getElementById("input-area");
  let outputArea = document.getElementById("output-area");

  var recognition = new webkitSpeechRecognition();
  recognition.lang = "en-GB";
  recognition.start();

  recognition.onresult = function (event) {
    const response = "Non-Fungible Token commonly called - NFT - is a digital file that is recorded on the blockchain. NFT occurs in various categories, namely: digital art, game assets, music, among others. These can be transferred (i.e. ownership) albeit very unique in its own right in contrast to cryptos which are fungible or interchangeable.";
    let transcript = event.results[0][0].transcript;
    if (transcript.includes("Non-Fungible Token")) {
      speechSynthesis.speak(new SpeechSynthesisUtterance(response));
    } else if (transcript.includes("full documentation")) {
      window.open("https://github.com/vintage-creator/ygg");

    } else if (transcript.includes("web 3")) {
      speechSynthesis.speak(new SpeechSynthesisUtterance("This is the internet our current web is transitioning to - noted for its decentralized and permissonless state - where users can own their contents."));
      
    } else {
      speechSynthesis.speak(new SpeechSynthesisUtterance("You can only search for web3 terms and terminologies."));
      outputArea.innerHTML = "You can only search for web3 terms and terminologies.";
    }
    inputArea.innerHTML = event.results[0][0].transcript;
  };
}
