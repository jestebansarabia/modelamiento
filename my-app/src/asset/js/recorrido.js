
function correr(array) {
    const marker = document.querySelector('#marker');
    
    array.forEach((item, i) => {
        console.log("andando..", item);
        setTimeout(() => {
            marker.setLatLng([item.lat, item.lng]);
        }, 100 * i)
    })
}