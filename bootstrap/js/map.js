function initMap() {
        var uluru = {lat:26.7649978, lng:83.3791823};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom:15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
