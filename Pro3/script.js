window.addEventListener("load",function() {
  var req = new XMLHttpRequest();
  req.open('GET', 'students.json', true);

  req.addEventListener('readystatechange', function () {
    if (req.readyState == 4) {
       if(req.status == 200){
            console.log(req.responseText);
       } else {
          console.log("Error loading page\n");
       }
    }
  });
  req.send();
});
