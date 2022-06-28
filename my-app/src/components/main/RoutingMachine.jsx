import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "lrm-graphhopper";

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(props.origen),
      L.latLng(props.destino)
    ],
    lineOptions: {
      styles: [
        {
          color: 'red',
          opacity: 1,
          weight: 4,
        }
      ]
    },
    //serviceUrl: 'http://my-osrm/route/v1',
    router: L.Routing.graphHopper('fba33f5e-8135-4e8b-8ef7-11d72cf286b1'),
    
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
    showAlternatives: false,
    routeWhileDragging: false
  }).on('routesfound', function (event) {
    console.log("event: ",event);
    props.setCoordenadas(event?.routes[0]?.coordinates);
  });

  

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;