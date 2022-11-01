function startMap(){
    var coord = {lat: -32.6876871,lng: -61.5230243};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
};