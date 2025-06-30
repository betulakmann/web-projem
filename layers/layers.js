var wms_layers = [];

var format_bina_0 = new ol.format.GeoJSON();
var features_bina_0 = format_bina_0.readFeatures(json_bina_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bina_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bina_0.addFeatures(features_bina_0);
var lyr_bina_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bina_0, 
                style: style_bina_0,
                popuplayertitle: 'bina',
                interactive: true,
    title: 'bina<br />\
    <img src="styles/legend/bina_0_0.png" /> AKARYAKIT ISTASYONU<br />\
    <img src="styles/legend/bina_0_1.png" /> DINI TESIS<br />\
    <img src="styles/legend/bina_0_2.png" /> MESKEN<br />\
    <img src="styles/legend/bina_0_3.png" /> RESMI<br />\
    <img src="styles/legend/bina_0_4.png" /> SPOR_TESISLERI<br />\
    <img src="styles/legend/bina_0_5.png" /> TICARI<br />\
    <img src="styles/legend/bina_0_6.png" /> <br />' });
var format_yol_1 = new ol.format.GeoJSON();
var features_yol_1 = format_yol_1.readFeatures(json_yol_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_yol_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_yol_1.addFeatures(features_yol_1);
var lyr_yol_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_yol_1, 
                style: style_yol_1,
                popuplayertitle: 'yol',
                interactive: true,
    title: 'yol<br />\
    <img src="styles/legend/yol_1_0.png" /> D300<br />\
    <img src="styles/legend/yol_1_1.png" /> <br />' });
var format_nokt_2 = new ol.format.GeoJSON();
var features_nokt_2 = format_nokt_2.readFeatures(json_nokt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nokt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nokt_2.addFeatures(features_nokt_2);
var lyr_nokt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nokt_2, 
                style: style_nokt_2,
                popuplayertitle: 'nokt',
                interactive: true,
    title: 'nokt<br />\
    <img src="styles/legend/nokt_2_0.png" /> hospital<br />\
    <img src="styles/legend/nokt_2_1.png" /> pharmacy<br />\
    <img src="styles/legend/nokt_2_2.png" /> <br />' });

lyr_bina_0.setVisible(true);lyr_yol_1.setVisible(true);lyr_nokt_2.setVisible(true);
var layersList = [lyr_bina_0,lyr_yol_1,lyr_nokt_2];
lyr_bina_0.set('fieldAliases', {'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'Z_Mean': 'Z_Mean', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_yol_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_nokt_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_bina_0.set('fieldImages', {'Entity': '', 'Handle': '', 'Layer': '', 'LyrFrzn': '', 'LyrOn': '', 'Color': '', 'Linetype': '', 'Elevation': '', 'LineWt': '', 'RefName': '', 'DocUpdate': '', 'DocId': '', 'Z_Mean': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_yol_1.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_nokt_2.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_bina_0.set('fieldLabels', {'Entity': 'no label', 'Handle': 'no label', 'Layer': 'inline label - visible with data', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'Z_Mean': 'no label', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_yol_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'no label', 'ref': 'inline label - visible with data', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_nokt_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_nokt_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});