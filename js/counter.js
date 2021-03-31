const genNumber = () => {
    document.querySelector(".counter").style.setProperty("--percent", Math.random());
  };
  
  setInterval(genNumber, 2000);
  setTimeout(genNumber);
  