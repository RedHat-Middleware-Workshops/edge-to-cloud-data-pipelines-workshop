window.enableMQTT = false;

const hideButtons = () => {
  if (window.location.href.indexOf("lab2-edge") > -1) {
    const ingestion = document.getElementById("btn-ingestion");
    if (ingestion) ingestion.style.display = "block";
    window.enableMQTT = true;
  } 
  // else {
    const ingestion = document.getElementById("btn-ingestion");
    if (ingestion) ingestion.style.display = "none";
  // }
};

hideButtons();
