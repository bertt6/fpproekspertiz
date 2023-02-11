function showImage(imgName) {
  var curImage = document.getElementById("epi");
   curImage.src = imgName;
}
function sendData() {
     var xhr = new XMLHttpRequest();
     xhr.open("POST", "/var/www/html/php/db2.php", true);
     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
     xhr.onreadystatechange = function() {
       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
         alert("Veri başarıyla gönderildi!");
       }
     };
     var name = document.getElementById("name").value;
     var email = document.getElementById("phone-number").value;
     xhr.send("name=" + name + "&email=" + email);
   }