var wms_layers = [];

var format_mosque_0 = new ol.format.GeoJSON();
var features_mosque_0 = format_mosque_0.readFeatures(json_mosque_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mosque_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mosque_0.addFeatures(features_mosque_0);
var lyr_mosque_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mosque_0, 
                style: style_mosque_0,
                interactive: true,
                title: '<img src="styles/legend/mosque_0.png" /> mosque'
            });
var format_hotel_1 = new ol.format.GeoJSON();
var features_hotel_1 = format_hotel_1.readFeatures(json_hotel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hotel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hotel_1.addFeatures(features_hotel_1);
var lyr_hotel_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hotel_1, 
                style: style_hotel_1,
                interactive: true,
                title: '<img src="styles/legend/hotel_1.png" /> hotel'
            });
var format_supermarket_2 = new ol.format.GeoJSON();
var features_supermarket_2 = format_supermarket_2.readFeatures(json_supermarket_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_supermarket_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_supermarket_2.addFeatures(features_supermarket_2);
var lyr_supermarket_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_supermarket_2, 
                style: style_supermarket_2,
                interactive: true,
                title: '<img src="styles/legend/supermarket_2.png" /> supermarket'
            });
var format_street_3 = new ol.format.GeoJSON();
var features_street_3 = format_street_3.readFeatures(json_street_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_street_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_street_3.addFeatures(features_street_3);
var lyr_street_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_street_3, 
                style: style_street_3,
                interactive: true,
                title: '<img src="styles/legend/street_3.png" /> street'
            });
var format_schools_4 = new ol.format.GeoJSON();
var features_schools_4 = format_schools_4.readFeatures(json_schools_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_schools_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_schools_4.addFeatures(features_schools_4);
var lyr_schools_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_schools_4, 
                style: style_schools_4,
                interactive: true,
                title: '<img src="styles/legend/schools_4.png" /> schools'
            });
var format_restaurant_5 = new ol.format.GeoJSON();
var features_restaurant_5 = format_restaurant_5.readFeatures(json_restaurant_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_restaurant_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurant_5.addFeatures(features_restaurant_5);
var lyr_restaurant_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_restaurant_5, 
                style: style_restaurant_5,
                interactive: true,
                title: '<img src="styles/legend/restaurant_5.png" /> restaurant'
            });
var format_majorroad_6 = new ol.format.GeoJSON();
var features_majorroad_6 = format_majorroad_6.readFeatures(json_majorroad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_majorroad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_majorroad_6.addFeatures(features_majorroad_6);
var lyr_majorroad_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_majorroad_6, 
                style: style_majorroad_6,
                interactive: true,
                title: '<img src="styles/legend/majorroad_6.png" /> major road'
            });
var format_minorroad_7 = new ol.format.GeoJSON();
var features_minorroad_7 = format_minorroad_7.readFeatures(json_minorroad_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_minorroad_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_minorroad_7.addFeatures(features_minorroad_7);
var lyr_minorroad_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_minorroad_7, 
                style: style_minorroad_7,
                interactive: true,
                title: '<img src="styles/legend/minorroad_7.png" /> minor road'
            });
var format_boundary_8 = new ol.format.GeoJSON();
var features_boundary_8 = format_boundary_8.readFeatures(json_boundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_8.addFeatures(features_boundary_8);
var lyr_boundary_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundary_8, 
                style: style_boundary_8,
                interactive: true,
                title: '<img src="styles/legend/boundary_8.png" /> boundary'
            });
var format_healthcarefacility_9 = new ol.format.GeoJSON();
var features_healthcarefacility_9 = format_healthcarefacility_9.readFeatures(json_healthcarefacility_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_healthcarefacility_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_healthcarefacility_9.addFeatures(features_healthcarefacility_9);
var lyr_healthcarefacility_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_healthcarefacility_9, 
                style: style_healthcarefacility_9,
                interactive: true,
                title: '<img src="styles/legend/healthcarefacility_9.png" /> healthcare facility'
            });
var format_governmentstructure_10 = new ol.format.GeoJSON();
var features_governmentstructure_10 = format_governmentstructure_10.readFeatures(json_governmentstructure_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_governmentstructure_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_governmentstructure_10.addFeatures(features_governmentstructure_10);
var lyr_governmentstructure_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_governmentstructure_10, 
                style: style_governmentstructure_10,
                interactive: true,
                title: '<img src="styles/legend/governmentstructure_10.png" /> government structure'
            });
var format_fillingstation_11 = new ol.format.GeoJSON();
var features_fillingstation_11 = format_fillingstation_11.readFeatures(json_fillingstation_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fillingstation_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fillingstation_11.addFeatures(features_fillingstation_11);
var lyr_fillingstation_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fillingstation_11, 
                style: style_fillingstation_11,
                interactive: true,
                title: '<img src="styles/legend/fillingstation_11.png" /> filling station'
            });
var format_church_12 = new ol.format.GeoJSON();
var features_church_12 = format_church_12.readFeatures(json_church_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_church_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_church_12.addFeatures(features_church_12);
var lyr_church_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_church_12, 
                style: style_church_12,
                interactive: true,
                title: '<img src="styles/legend/church_12.png" /> church'
            });
var format_bank_13 = new ol.format.GeoJSON();
var features_bank_13 = format_bank_13.readFeatures(json_bank_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bank_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bank_13.addFeatures(features_bank_13);
var lyr_bank_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bank_13, 
                style: style_bank_13,
                interactive: true,
                title: '<img src="styles/legend/bank_13.png" /> bank'
            });

lyr_mosque_0.setVisible(true);lyr_hotel_1.setVisible(true);lyr_supermarket_2.setVisible(true);lyr_street_3.setVisible(true);lyr_schools_4.setVisible(true);lyr_restaurant_5.setVisible(true);lyr_majorroad_6.setVisible(true);lyr_minorroad_7.setVisible(true);lyr_boundary_8.setVisible(true);lyr_healthcarefacility_9.setVisible(true);lyr_governmentstructure_10.setVisible(true);lyr_fillingstation_11.setVisible(true);lyr_church_12.setVisible(true);lyr_bank_13.setVisible(true);
var layersList = [lyr_mosque_0,lyr_hotel_1,lyr_supermarket_2,lyr_street_3,lyr_schools_4,lyr_restaurant_5,lyr_majorroad_6,lyr_minorroad_7,lyr_boundary_8,lyr_healthcarefacility_9,lyr_governmentstructure_10,lyr_fillingstation_11,lyr_church_12,lyr_bank_13];
lyr_mosque_0.set('fieldAliases', {'Id': 'Id', 'masjid': 'masjid', });
lyr_hotel_1.set('fieldAliases', {'Id': 'Id', 'hotel': 'hotel', });
lyr_supermarket_2.set('fieldAliases', {'Id': 'Id', 'Srmarkets': 'Srmarkets', });
lyr_street_3.set('fieldAliases', {'Id': 'Id', 'street': 'street', });
lyr_schools_4.set('fieldAliases', {'Id': 'Id', 'school': 'school', });
lyr_restaurant_5.set('fieldAliases', {'Id': 'Id', 'restaurant': 'restaurant', });
lyr_majorroad_6.set('fieldAliases', {'Id': 'Id', 'major_road': 'major_road', });
lyr_minorroad_7.set('fieldAliases', {'Id': 'Id', 'minor_road': 'minor_road', });
lyr_boundary_8.set('fieldAliases', {'Id': 'Id', });
lyr_healthcarefacility_9.set('fieldAliases', {'Id': 'Id', 'healthcare': 'healthcare', });
lyr_governmentstructure_10.set('fieldAliases', {'Id': 'Id', 'government': 'government', });
lyr_fillingstation_11.set('fieldAliases', {'Id': 'Id', 'filling_st': 'filling_st', });
lyr_church_12.set('fieldAliases', {'Id': 'Id', 'church': 'church', });
lyr_bank_13.set('fieldAliases', {'Id': 'Id', 'bank': 'bank', });
lyr_mosque_0.set('fieldImages', {'Id': 'Range', 'masjid': 'TextEdit', });
lyr_hotel_1.set('fieldImages', {'Id': 'Range', 'hotel': 'TextEdit', });
lyr_supermarket_2.set('fieldImages', {'Id': 'Range', 'Srmarkets': 'TextEdit', });
lyr_street_3.set('fieldImages', {'Id': '', 'street': '', });
lyr_schools_4.set('fieldImages', {'Id': 'Range', 'school': 'TextEdit', });
lyr_restaurant_5.set('fieldImages', {'Id': 'Range', 'restaurant': 'TextEdit', });
lyr_majorroad_6.set('fieldImages', {'Id': 'Range', 'major_road': 'TextEdit', });
lyr_minorroad_7.set('fieldImages', {'Id': 'Range', 'minor_road': 'TextEdit', });
lyr_boundary_8.set('fieldImages', {'Id': 'Range', });
lyr_healthcarefacility_9.set('fieldImages', {'Id': 'Range', 'healthcare': 'TextEdit', });
lyr_governmentstructure_10.set('fieldImages', {'Id': 'Range', 'government': 'TextEdit', });
lyr_fillingstation_11.set('fieldImages', {'Id': 'Range', 'filling_st': 'TextEdit', });
lyr_church_12.set('fieldImages', {'Id': 'Range', 'church': 'TextEdit', });
lyr_bank_13.set('fieldImages', {'Id': 'Range', 'bank': 'TextEdit', });
lyr_mosque_0.set('fieldLabels', {'Id': 'no label', 'masjid': 'header label', });
lyr_hotel_1.set('fieldLabels', {'Id': 'no label', 'hotel': 'header label', });
lyr_supermarket_2.set('fieldLabels', {'Id': 'no label', 'Srmarkets': 'header label', });
lyr_street_3.set('fieldLabels', {'Id': 'no label', 'street': 'no label', });
lyr_schools_4.set('fieldLabels', {'Id': 'no label', 'school': 'header label', });
lyr_restaurant_5.set('fieldLabels', {'Id': 'no label', 'restaurant': 'header label', });
lyr_majorroad_6.set('fieldLabels', {'Id': 'no label', 'major_road': 'header label', });
lyr_minorroad_7.set('fieldLabels', {'Id': 'no label', 'minor_road': 'header label', });
lyr_boundary_8.set('fieldLabels', {'Id': 'no label', });
lyr_healthcarefacility_9.set('fieldLabels', {'Id': 'no label', 'healthcare': 'header label', });
lyr_governmentstructure_10.set('fieldLabels', {'Id': 'no label', 'government': 'header label', });
lyr_fillingstation_11.set('fieldLabels', {'Id': 'no label', 'filling_st': 'header label', });
lyr_church_12.set('fieldLabels', {'Id': 'no label', 'church': 'header label', });
lyr_bank_13.set('fieldLabels', {'Id': 'no label', 'bank': 'header label', });
lyr_bank_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});