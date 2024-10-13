var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sumberairminumtahun2021_1 = new ol.format.GeoJSON();
var features_sumberairminumtahun2021_1 = format_sumberairminumtahun2021_1.readFeatures(json_sumberairminumtahun2021_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumberairminumtahun2021_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumberairminumtahun2021_1.addFeatures(features_sumberairminumtahun2021_1);
var lyr_sumberairminumtahun2021_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sumberairminumtahun2021_1, 
                style: style_sumberairminumtahun2021_1,
                popuplayertitle: "sumber air minum tahun 2021",
                interactive: true,
    title: 'sumber air minum tahun 2021<br />\
    <img src="styles/legend/sumberairminumtahun2021_1_0.png" /> 54.9 - 76.7<br />\
    <img src="styles/legend/sumberairminumtahun2021_1_1.png" /> 76.7 - 84.4<br />\
    <img src="styles/legend/sumberairminumtahun2021_1_2.png" /> 84.4 - 90<br />\
    <img src="styles/legend/sumberairminumtahun2021_1_3.png" /> 90 - 93.4<br />\
    <img src="styles/legend/sumberairminumtahun2021_1_4.png" /> 93.4 - 99.9<br />'
        });
var format_sumberairminumtahum2022_2 = new ol.format.GeoJSON();
var features_sumberairminumtahum2022_2 = format_sumberairminumtahum2022_2.readFeatures(json_sumberairminumtahum2022_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumberairminumtahum2022_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumberairminumtahum2022_2.addFeatures(features_sumberairminumtahum2022_2);
var lyr_sumberairminumtahum2022_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sumberairminumtahum2022_2, 
                style: style_sumberairminumtahum2022_2,
                popuplayertitle: "sumber air minum tahum 2022",
                interactive: true,
    title: 'sumber air minum tahum 2022<br />\
    <img src="styles/legend/sumberairminumtahum2022_2_0.png" /> 65.4 - 77.8<br />\
    <img src="styles/legend/sumberairminumtahum2022_2_1.png" /> 77.8 - 86.1<br />\
    <img src="styles/legend/sumberairminumtahum2022_2_2.png" /> 86.1 - 90.4<br />\
    <img src="styles/legend/sumberairminumtahum2022_2_3.png" /> 90.4 - 93.8<br />\
    <img src="styles/legend/sumberairminumtahum2022_2_4.png" /> 93.8 - 98.4<br />'
        });
var format_sumberairminumtahun2023_3 = new ol.format.GeoJSON();
var features_sumberairminumtahun2023_3 = format_sumberairminumtahun2023_3.readFeatures(json_sumberairminumtahun2023_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sumberairminumtahun2023_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sumberairminumtahun2023_3.addFeatures(features_sumberairminumtahun2023_3);
var lyr_sumberairminumtahun2023_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sumberairminumtahun2023_3, 
                style: style_sumberairminumtahun2023_3,
                popuplayertitle: "sumberair minum tahun 2023",
                interactive: true,
    title: 'sumberair minum tahun 2023<br />\
    <img src="styles/legend/sumberairminumtahun2023_3_0.png" /> 66.5 - 78.6<br />\
    <img src="styles/legend/sumberairminumtahun2023_3_1.png" /> 78.6 - 86.6<br />\
    <img src="styles/legend/sumberairminumtahun2023_3_2.png" /> 86.6 - 90.8<br />\
    <img src="styles/legend/sumberairminumtahun2023_3_3.png" /> 90.8 - 94.2<br />\
    <img src="styles/legend/sumberairminumtahun2023_3_4.png" /> 94.2 - 99.4<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_sumberairminumtahun2021_1.setVisible(true);lyr_sumberairminumtahum2022_2.setVisible(true);lyr_sumberairminumtahun2023_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_sumberairminumtahun2021_1,lyr_sumberairminumtahum2022_2,lyr_sumberairminumtahun2023_3];
lyr_sumberairminumtahun2021_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'OBJECTID': 'OBJECTID', });
lyr_sumberairminumtahum2022_2.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'OBJEKTID': 'OBJEKTID', });
lyr_sumberairminumtahun2023_3.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'OBJEKTID': 'OBJEKTID', });
lyr_sumberairminumtahun2021_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'OBJECTID': 'TextEdit', });
lyr_sumberairminumtahum2022_2.set('fieldImages', {'PROVINSI': 'TextEdit', 'OBJEKTID': 'TextEdit', });
lyr_sumberairminumtahun2023_3.set('fieldImages', {'PROVINSI': 'TextEdit', 'OBJEKTID': 'TextEdit', });
lyr_sumberairminumtahun2021_1.set('fieldLabels', {'PROVINSI': 'no label', 'OBJECTID': 'no label', });
lyr_sumberairminumtahum2022_2.set('fieldLabels', {'PROVINSI': 'no label', 'OBJEKTID': 'no label', });
lyr_sumberairminumtahun2023_3.set('fieldLabels', {'PROVINSI': 'no label', 'OBJEKTID': 'no label', });
lyr_sumberairminumtahun2023_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});