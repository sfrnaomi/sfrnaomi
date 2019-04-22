// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/_base/html"],function(k,h,g,e){var b={defaultColor:"#dadada",handlerPosition:{top:null,bottom:null,left:null,right:null},_isNewAddedLayer:function(a,d){d=d.getLayerInfoArrayOfWebmap();for(var c=0,b=d.length;c<b;c++)if(d[c].id===a.id)return!1;return!0},zoomToCurrentLayer:function(a){var d=a.config.isZoom,c=a.layerInfosObj;a=a.getSelection();var b;a&&a[0]&&(b=a[0]);d&&b&&(d=c.getLayerInfoById(b))&&d.zoomTo&&d.zoomTo()},shouldHideInfoWindow:function(a,
b){if(!b.map.infoWindow.isShowing)return!1;var c=b.map.infoWindow.getSelectedFeature();return a&&h.some(a,function(a){var d=c&&c.getLayer&&c.getLayer(),f=b.layerInfosObj.getLayerInfoById(a.id),f=d&&f&&f.traversal(function(a){return a.id===d.id});return d===a||f},b)},getVisibleLayerInfos:function(a,b){a=a.getLayerInfoArray();if(b){for(var c=[],d=0,l=a.length;d<l;d++){var f=a[d];if(f.isShowInMap())c.push(f);else for(var e=0,g=b.length;e<g;e++)b[e]===f.id&&c.push(f)}return c}return h.filter(a,function(a){return a.isShowInMap()})},
isDefaultSelectedLayerAndInShow:function(a,b,c,e){if("mult"===e){if(c&&c.defaultLayers&&c.defaultLayers.length){a=a.value;for(var d=0,f=c.defaultLayers.length;d<f;d++)if(a===c.defaultLayers[d]&&(e=b.getLayerInfoById(a),e.isShowInMap()))return!0}}else if(c&&c.layer&&(a=a.value,a===c.layer&&(e=b.getLayerInfoById(a),e.isShowInMap())))return!0;return!1},isTherePreconfiguredLayer:function(a,b){if(b)return!0;if(a&&a.layerState){a=a.layerState;for(var c in a)if(a.hasOwnProperty(c)&&!0===a[c].selected)return!0}return!1},
processColor:function(a){return a?new g(a):new g(b.defaultColor)},getScreenMiddle:function(a){var b=0,c=0;a&&(a.root?(a=e.getMarginBox(a.root),b=a.w/2,c=a.h/2):a.width&&a.height&&(b=a.width/2,c=a.height/2));return{left:b,top:c}},hideSelectorPopup:function(a){e.addClass(a,"hide")},showSelectorPopup:function(a){e.removeClass(a,"hide")},hackToRefreshSwipe:function(a){setTimeout(k.hitch(a,function(){a.swipeDijit.swipe&&a.swipeDijit.swipe()}),200)},cleanHandlerPosition:function(){b.handlerPosition={top:null,
bottom:null,left:null,right:null}},isCacheHandlerPosition:function(){return b.handlerPosition.top||b.handlerPosition.bottom||b.handlerPosition.left||b.handlerPosition.right?!0:!1},saveHandlerPosition:function(a){a&&(b.handlerPosition.top=a.top,b.handlerPosition.bottom=a.bottom,b.handlerPosition.left=a.left,b.handlerPosition.right=a.right)},setHandlerPosition:function(a,d,c){d.style&&"scope"===d.style?(b.handlerPosition.top&&(a.top=b.handlerPosition.top-9),b.handlerPosition.bottom&&(a.bottom=b.handlerPosition.bottom),
b.handlerPosition.left&&(a.left=b.handlerPosition.left-9),b.handlerPosition.right&&(a.right=b.handlerPosition.right)):d.invertPlacement?(b.handlerPosition.right&&(a.right=b.handlerPosition.right),b.handlerPosition.left&&(a.left=b.handlerPosition.left),b.handlerPosition.bottom&&(a.bottom=b.handlerPosition.bottom),b.handlerPosition.top&&(a.top=b.handlerPosition.top)):(b.handlerPosition.right&&(a.left=b.handlerPosition.right),b.handlerPosition.left&&(a.right=b.handlerPosition.left),b.handlerPosition.bottom&&
(a.top=b.handlerPosition.bottom),b.handlerPosition.top&&(a.bottom=b.handlerPosition.top));0>a.top&&(a.top=0);a.top>c.height&&(a.top=c.height);0>a.left&&(a.left=0);a.left>c.width&&(a.left=c.width)},getLayerNode:function(a){return a._heatmapManager&&a._heatmapManager.imageLayer&&a._heatmapManager.imageLayer._div||a._div},getLayerTransform:function(a,d){var c=a.layer;a={dx:0,dy:0};if(c.getNavigationTransform)a=c.getNavigationTransform();else if(c._getTransform){if(d=c._getTransform())a.dx=d.dx,a.dy=
d.dy}else(c=b.getLayerNode(c).style)&&"css-transforms"===d.map.navigationMode&&(c=d._getTransformValue(c))&&(d=d._parseTransformValue(c),a.dx=d.x,a.dy=d.y);return a}};return b});