window.addEventListener("load", function(){
  var req = new XMLHttpRequest();
  var imageGallery = new ImageGallery('#imageGallery'),
      imageURLs = [""];
  req.open('GET', 'test.json', true);
    req.addEventListener('readystatechange', function () {
      if (req.readyState == 4) {
         if(req.status == 200){
            imageURLs = JSON.parse(req.responseText);
            imageGallery.setData(imageURLs);
            console.log(imageURLs);
         } else {
            console.log("Error loading page\n");
         }
      }
    });



    //imageGallery.loadData("http://sdlfkjsdflksdfj.nl/gallery.php");



    req.send();
});
