/**
 * Created by root on 10/01/16.
 */
define([
    'dojo/_base/declare',
    'dojo/_base/lang',
    'dojo/on',
    'dojo/Deferred',
    'esri/map'
], function(declare, lang, on, Deferred, Map){
    return declare (null, {
        map:         null,
        options:    {},

    constructor:    function(options){
        this.options    = lang.mixin(this.options, options);
    },

    load:   function (){
        var deffered  = new Deferred()
            , mapLoaded = lang.hitch(this, function() {
            deffered.resolve(this.map);
        });
        this.map = new Map(this.options.elem, this.options.mapOptions);
        on.once(this.map, 'load', mapLoaded);
        return deferred.promise;
    }
    });
});
