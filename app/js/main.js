require([
             'controllers/appcontroller',
             'dojo/domReady!'
        ], function (appCtrl) {
    appCtrl.init({
        elem: 'map-div',
        mapOptions: {
        basemap: 'gray',
        center: [-7.737103, 110.584224],
        zoom: 12
        }
    });
    });
