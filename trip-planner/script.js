
function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.7749, lng: -122.4194},
        zoom: 8
      });
document.addEventListener('DOMContentLoaded', function() { var originInput = document.getElementById('origin-input');
      var destinationInput = document.getElementById('destination-input');
      var waypointsInput = document.getElementById('waypoints-input');
      var originAutocomplete = new google.maps.places.Autocomplete(originInput);
      var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);
      var waypointsAutocomplete = new google.maps.places.Autocomplete(waypointsInput);
      originAutocomplete.bindTo('bounds', map);
      destinationAutocomplete.bindTo('bounds', map);
      waypointsAutocomplete.bindTo('bounds', map);
      var directionsService = new google.maps.DirectionsService();
      var directionsRenderer = new google.maps.DirectionsRenderer({
        map: map
      });
      document.getElementById('plan-trip-button').addEventListener('click', function() {
        var origin = originInput.value;
        var destination = destinationInput.value;
        var waypoints = waypointsInput.value.split(',');
        var request = {
          origin: origin,
          destination: destination,
          waypoints: waypoints,
          travelMode: 'DRIVING'
        };
        directionsService.route(request, function(response, status) {
          if (status == 'OK') {
            directionsRenderer.setDirections(response);
          } else {
            alert('Directions request failed due to ' + status);
          
    });
});

        
        
        document.addEventListener('DOMContentLoaded', function() {
    const plannerForm = document.getElementById('planner-form');
    plannerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Get user input data
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const destination = document.getElementById('destination').value;
        const numPeople = document.getElementById('num-people').value;

        // You would typically send this data to your backend for AI planning here.
        // For this example, we'll just display the data.
        alert(`Plan a trip from ${startDate} to ${endDate} for ${numPeople} people to ${destination}`);
    });
});
