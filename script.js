const searchContainer = document.querySelector("#main-container");
const audioSearch = document.querySelector(".audiosearch");
const close = document.querySelector(".close");
const close1 = document.querySelector(".close-1");
const settings = document.querySelector("#span");
const settingsBar = document.querySelector(".settingsbar");
const selectMe = document.querySelector(".select-me");

audioSearch.addEventListener("click", ()=> {
  if(searchContainer.style.display ==="none"){
    searchContainer.style.display = "block";
  } else {
    searchContainer.style.display = "none";
  }
  });

close.addEventListener("click", () => {
  if(searchContainer.style.display === "block"){
      searchContainer.style.display = "none";
    } else {
      searchContainer.style.display = "block";
    }
});
settings.addEventListener("click", ()=> {
  if(settingsBar.style.display ==="none"){
    settingsBar.style.display = "block";
  } else {
    settingsBar.style.display = "none";
  }
  });

close1.addEventListener("click", () => {
  if(settingsBar.style.display === "block"){
    settingsBar.style.display = "none";
    } else {
      settingsBar.style.display = "block";
    }
});

settings.addEventListener("click", ()=> {
  if(selectMe.style.display === "flex"){
    selectMe.style.display  = "none";
  } else {
    selectMe.style.display ="flex";
  }
  });
close1.addEventListener("click", ()=> {
  if(selectMe.style.display === "none"){
    selectMe.style.display  = "flex";
  } else {
    selectMe.style.display ="none";
  }
  });


function listen() {
  let inputArea = document.getElementById("input-area");
  let outputArea = document.getElementById("output-area");

  var recognition = new window.webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = function (event) {
    const response =
      "NFT otherwise known as Non-Fungible Token is a digital file that is recorded on the blockchain. NFT occurs in various categories, namely: digital art, game assets, music, among others. These can be transferred (i.e. ownership) albeit very unique in its own right in contrast to cryptos which are fungible or interchangeable.";
    let transcript = event.results[0][0].transcript;
    if (transcript.includes("non-fungible token", "NFT", "non fungible token")) {
      speechSynthesis.speak(new SpeechSynthesisUtterance(response));
    } else if (transcript.includes("documentation")) {
      window.open("https://github.com/vintage-creator/ygg");
    } else if (transcript.includes("web3", "Web3", "web 3")) {
      speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          "This is the internet our current web is transitioning to - noted for its decentralized and permissonless state - where users can own their contents."
        )
      );
    } else {
      speechSynthesis.speak(
        new SpeechSynthesisUtterance(
          "You can only search for web3 terms and terminologies."
        )
      );
      outputArea.innerHTML =
        "You can only search for web3 terms and terminologies.";
    }
    inputArea.innerHTML = event.results[0][0].transcript;
  };
}

