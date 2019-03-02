import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

/**
 * This fixes issues with image URL sourcing when using Webpack
 * and Leaflet (specifically the marker images)
 **/
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
/** 
 * end Leaflet/Webpack fix 
 **/

 export default L;

