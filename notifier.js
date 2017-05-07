
 window.addEventListener('load', function() {
  var status = document.getElementById("stat");
  function updateOnlineStatus(event) {
    var condition = navigator.onLine ? "online" : "offline";
    stat.className = condition;
    stat.innerHTML = condition.toUpperCase();
   
  }
  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});
