var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Oman_EEZ_1 = new ol.format.GeoJSON();
var features_Oman_EEZ_1 = format_Oman_EEZ_1.readFeatures(json_Oman_EEZ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Oman_EEZ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oman_EEZ_1.addFeatures(features_Oman_EEZ_1);
var lyr_Oman_EEZ_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oman_EEZ_1, 
                style: style_Oman_EEZ_1,
                popuplayertitle: 'Oman_EEZ',
                interactive: true,
                title: '<img src="styles/legend/Oman_EEZ_1.png" /> Oman_EEZ'
            });
var format_fronts_oman_2_line_2 = new ol.format.GeoJSON();
var features_fronts_oman_2_line_2 = format_fronts_oman_2_line_2.readFeatures(json_fronts_oman_2_line_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fronts_oman_2_line_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fronts_oman_2_line_2.addFeatures(features_fronts_oman_2_line_2);
var lyr_fronts_oman_2_line_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fronts_oman_2_line_2, 
                style: style_fronts_oman_2_line_2,
                popuplayertitle: 'fronts_oman_2_line',
                interactive: true,
                title: '<img src="styles/legend/fronts_oman_2_line_2.png" /> fronts_oman_2_line'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Oman_EEZ_1.setVisible(true);lyr_fronts_oman_2_line_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Oman_EEZ_1,lyr_fronts_oman_2_line_2];
lyr_Oman_EEZ_1.set('fieldAliases', {'MRGID': 'MRGID', 'GEONAME': 'GEONAME', 'MRGID_TER1': 'MRGID_TER1', 'POL_TYPE': 'POL_TYPE', 'MRGID_SOV1': 'MRGID_SOV1', 'TERRITORY1': 'TERRITORY1', 'ISO_TER1': 'ISO_TER1', 'SOVEREIGN1': 'SOVEREIGN1', 'MRGID_TER2': 'MRGID_TER2', 'MRGID_SOV2': 'MRGID_SOV2', 'TERRITORY2': 'TERRITORY2', 'ISO_TER2': 'ISO_TER2', 'SOVEREIGN2': 'SOVEREIGN2', 'MRGID_TER3': 'MRGID_TER3', 'MRGID_SOV3': 'MRGID_SOV3', 'TERRITORY3': 'TERRITORY3', 'ISO_TER3': 'ISO_TER3', 'SOVEREIGN3': 'SOVEREIGN3', 'X_1': 'X_1', 'Y_1': 'Y_1', 'MRGID_EEZ': 'MRGID_EEZ', 'AREA_KM2': 'AREA_KM2', 'ISO_SOV1': 'ISO_SOV1', 'ISO_SOV2': 'ISO_SOV2', 'ISO_SOV3': 'ISO_SOV3', 'UN_SOV1': 'UN_SOV1', 'UN_SOV2': 'UN_SOV2', 'UN_SOV3': 'UN_SOV3', 'UN_TER1': 'UN_TER1', 'UN_TER2': 'UN_TER2', 'UN_TER3': 'UN_TER3', });
lyr_fronts_oman_2_line_2.set('fieldAliases', {'front_numb': 'front_numb', 'begin': 'begin', 'end': 'end', });
lyr_Oman_EEZ_1.set('fieldImages', {'MRGID': 'TextEdit', 'GEONAME': 'TextEdit', 'MRGID_TER1': 'TextEdit', 'POL_TYPE': 'TextEdit', 'MRGID_SOV1': 'TextEdit', 'TERRITORY1': 'TextEdit', 'ISO_TER1': 'TextEdit', 'SOVEREIGN1': 'TextEdit', 'MRGID_TER2': 'TextEdit', 'MRGID_SOV2': 'TextEdit', 'TERRITORY2': 'TextEdit', 'ISO_TER2': 'TextEdit', 'SOVEREIGN2': 'TextEdit', 'MRGID_TER3': 'TextEdit', 'MRGID_SOV3': 'TextEdit', 'TERRITORY3': 'TextEdit', 'ISO_TER3': 'TextEdit', 'SOVEREIGN3': 'TextEdit', 'X_1': 'TextEdit', 'Y_1': 'TextEdit', 'MRGID_EEZ': 'TextEdit', 'AREA_KM2': 'TextEdit', 'ISO_SOV1': 'TextEdit', 'ISO_SOV2': 'TextEdit', 'ISO_SOV3': 'TextEdit', 'UN_SOV1': 'TextEdit', 'UN_SOV2': 'TextEdit', 'UN_SOV3': 'TextEdit', 'UN_TER1': 'TextEdit', 'UN_TER2': 'TextEdit', 'UN_TER3': 'TextEdit', });
lyr_fronts_oman_2_line_2.set('fieldImages', {'front_numb': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Oman_EEZ_1.set('fieldLabels', {'MRGID': 'no label', 'GEONAME': 'no label', 'MRGID_TER1': 'no label', 'POL_TYPE': 'no label', 'MRGID_SOV1': 'no label', 'TERRITORY1': 'no label', 'ISO_TER1': 'no label', 'SOVEREIGN1': 'no label', 'MRGID_TER2': 'no label', 'MRGID_SOV2': 'no label', 'TERRITORY2': 'no label', 'ISO_TER2': 'no label', 'SOVEREIGN2': 'no label', 'MRGID_TER3': 'no label', 'MRGID_SOV3': 'no label', 'TERRITORY3': 'no label', 'ISO_TER3': 'no label', 'SOVEREIGN3': 'no label', 'X_1': 'no label', 'Y_1': 'no label', 'MRGID_EEZ': 'no label', 'AREA_KM2': 'no label', 'ISO_SOV1': 'no label', 'ISO_SOV2': 'no label', 'ISO_SOV3': 'no label', 'UN_SOV1': 'no label', 'UN_SOV2': 'no label', 'UN_SOV3': 'no label', 'UN_TER1': 'no label', 'UN_TER2': 'no label', 'UN_TER3': 'no label', });
lyr_fronts_oman_2_line_2.set('fieldLabels', {'front_numb': 'no label', 'begin': 'no label', 'end': 'no label', });
lyr_fronts_oman_2_line_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});