var wms_layers = [];


        var lyr_satelit_0 = new ol.layer.Tile({
            'title': 'satelit',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SUTR_1 = new ol.format.GeoJSON();
var features_SUTR_1 = format_SUTR_1.readFeatures(json_SUTR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUTR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUTR_1.addFeatures(features_SUTR_1);
var lyr_SUTR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUTR_1, 
                style: style_SUTR_1,
                popuplayertitle: "SUTR",
                interactive: true,
                    title: '<img src="styles/legend/SUTR_1.png" /> SUTR'
                });
var format_Serat_Optik_2 = new ol.format.GeoJSON();
var features_Serat_Optik_2 = format_Serat_Optik_2.readFeatures(json_Serat_Optik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Serat_Optik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Serat_Optik_2.addFeatures(features_Serat_Optik_2);
var lyr_Serat_Optik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Serat_Optik_2, 
                style: style_Serat_Optik_2,
                popuplayertitle: "Serat_Optik",
                interactive: true,
                    title: '<img src="styles/legend/Serat_Optik_2.png" /> Serat_Optik'
                });
var format_Pengembangan_Jaringan_Jalan_3 = new ol.format.GeoJSON();
var features_Pengembangan_Jaringan_Jalan_3 = format_Pengembangan_Jaringan_Jalan_3.readFeatures(json_Pengembangan_Jaringan_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pengembangan_Jaringan_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pengembangan_Jaringan_Jalan_3.addFeatures(features_Pengembangan_Jaringan_Jalan_3);
var lyr_Pengembangan_Jaringan_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pengembangan_Jaringan_Jalan_3, 
                style: style_Pengembangan_Jaringan_Jalan_3,
                popuplayertitle: "Pengembangan_Jaringan_Jalan",
                interactive: true,
                    title: '<img src="styles/legend/Pengembangan_Jaringan_Jalan_3.png" /> Pengembangan_Jaringan_Jalan'
                });
var format_Jaringan_Sumber_Daya_Air_4 = new ol.format.GeoJSON();
var features_Jaringan_Sumber_Daya_Air_4 = format_Jaringan_Sumber_Daya_Air_4.readFeatures(json_Jaringan_Sumber_Daya_Air_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Sumber_Daya_Air_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Sumber_Daya_Air_4.addFeatures(features_Jaringan_Sumber_Daya_Air_4);
var lyr_Jaringan_Sumber_Daya_Air_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Sumber_Daya_Air_4, 
                style: style_Jaringan_Sumber_Daya_Air_4,
                popuplayertitle: "Jaringan_Sumber_Daya_Air",
                interactive: true,
                    title: '<img src="styles/legend/Jaringan_Sumber_Daya_Air_4.png" /> Jaringan_Sumber_Daya_Air'
                });
var format_Jaringan_Evakuasi_Bencana_5 = new ol.format.GeoJSON();
var features_Jaringan_Evakuasi_Bencana_5 = format_Jaringan_Evakuasi_Bencana_5.readFeatures(json_Jaringan_Evakuasi_Bencana_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Evakuasi_Bencana_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Evakuasi_Bencana_5.addFeatures(features_Jaringan_Evakuasi_Bencana_5);
var lyr_Jaringan_Evakuasi_Bencana_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Evakuasi_Bencana_5, 
                style: style_Jaringan_Evakuasi_Bencana_5,
                popuplayertitle: "Jaringan_Evakuasi_Bencana",
                interactive: true,
                    title: '<img src="styles/legend/Jaringan_Evakuasi_Bencana_5.png" /> Jaringan_Evakuasi_Bencana'
                });
var format_Drainase_Tersier_6 = new ol.format.GeoJSON();
var features_Drainase_Tersier_6 = format_Drainase_Tersier_6.readFeatures(json_Drainase_Tersier_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drainase_Tersier_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drainase_Tersier_6.addFeatures(features_Drainase_Tersier_6);
var lyr_Drainase_Tersier_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drainase_Tersier_6, 
                style: style_Drainase_Tersier_6,
                popuplayertitle: "Drainase_Tersier",
                interactive: true,
                    title: '<img src="styles/legend/Drainase_Tersier_6.png" /> Drainase_Tersier'
                });
var format_TPS3R_7 = new ol.format.GeoJSON();
var features_TPS3R_7 = format_TPS3R_7.readFeatures(json_TPS3R_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPS3R_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPS3R_7.addFeatures(features_TPS3R_7);
var lyr_TPS3R_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPS3R_7, 
                style: style_TPS3R_7,
                popuplayertitle: "TPS 3R",
                interactive: true,
                    title: '<img src="styles/legend/TPS3R_7.png" /> TPS 3R'
                });
var format_Gardu_Distribusi_8 = new ol.format.GeoJSON();
var features_Gardu_Distribusi_8 = format_Gardu_Distribusi_8.readFeatures(json_Gardu_Distribusi_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gardu_Distribusi_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gardu_Distribusi_8.addFeatures(features_Gardu_Distribusi_8);
var lyr_Gardu_Distribusi_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gardu_Distribusi_8, 
                style: style_Gardu_Distribusi_8,
                popuplayertitle: "Gardu_Distribusi",
                interactive: true,
                    title: '<img src="styles/legend/Gardu_Distribusi_8.png" /> Gardu_Distribusi'
                });
var format_IPAL_Kawasan_9 = new ol.format.GeoJSON();
var features_IPAL_Kawasan_9 = format_IPAL_Kawasan_9.readFeatures(json_IPAL_Kawasan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPAL_Kawasan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPAL_Kawasan_9.addFeatures(features_IPAL_Kawasan_9);
var lyr_IPAL_Kawasan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IPAL_Kawasan_9, 
                style: style_IPAL_Kawasan_9,
                popuplayertitle: "IPAL_Kawasan",
                interactive: true,
                    title: '<img src="styles/legend/IPAL_Kawasan_9.png" /> IPAL_Kawasan'
                });
var format_BTS_10 = new ol.format.GeoJSON();
var features_BTS_10 = format_BTS_10.readFeatures(json_BTS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BTS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BTS_10.addFeatures(features_BTS_10);
var lyr_BTS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BTS_10, 
                style: style_BTS_10,
                popuplayertitle: "BTS",
                interactive: true,
                    title: '<img src="styles/legend/BTS_10.png" /> BTS'
                });
var format_Bak_Penampungan_11 = new ol.format.GeoJSON();
var features_Bak_Penampungan_11 = format_Bak_Penampungan_11.readFeatures(json_Bak_Penampungan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bak_Penampungan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bak_Penampungan_11.addFeatures(features_Bak_Penampungan_11);
var lyr_Bak_Penampungan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bak_Penampungan_11, 
                style: style_Bak_Penampungan_11,
                popuplayertitle: "Bak_Penampungan",
                interactive: true,
                    title: '<img src="styles/legend/Bak_Penampungan_11.png" /> Bak_Penampungan'
                });
var format_Pusat_Pelayanan_12 = new ol.format.GeoJSON();
var features_Pusat_Pelayanan_12 = format_Pusat_Pelayanan_12.readFeatures(json_Pusat_Pelayanan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pusat_Pelayanan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pusat_Pelayanan_12.addFeatures(features_Pusat_Pelayanan_12);
var lyr_Pusat_Pelayanan_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pusat_Pelayanan_12, 
                style: style_Pusat_Pelayanan_12,
                popuplayertitle: "Pusat_Pelayanan",
                interactive: true,
    title: 'Pusat_Pelayanan<br />\
    <img src="styles/legend/Pusat_Pelayanan_12_0.png" /> Pusat Pelayanan Desa<br />\
    <img src="styles/legend/Pusat_Pelayanan_12_1.png" /> Pusat Pelayanan Kampung<br />\
    <img src="styles/legend/Pusat_Pelayanan_12_2.png" /> Sub Pusat Pelayanan Desa<br />\
    <img src="styles/legend/Pusat_Pelayanan_12_3.png" /> <br />'
        });
var format_PolaRuang_13 = new ol.format.GeoJSON();
var features_PolaRuang_13 = format_PolaRuang_13.readFeatures(json_PolaRuang_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PolaRuang_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PolaRuang_13.addFeatures(features_PolaRuang_13);
var lyr_PolaRuang_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PolaRuang_13, 
                style: style_PolaRuang_13,
                popuplayertitle: "Pola Ruang",
                interactive: true,
    title: 'Pola Ruang<br />\
    <img src="styles/legend/PolaRuang_13_0.png" /> <br />\
    <img src="styles/legend/PolaRuang_13_1.png" /> Badan Air<br />\
    <img src="styles/legend/PolaRuang_13_2.png" /> Badan Jalan<br />\
    <img src="styles/legend/PolaRuang_13_3.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/PolaRuang_13_4.png" /> Kawasan Permukiman Desa<br />\
    <img src="styles/legend/PolaRuang_13_5.png" /> Pariwisata<br />\
    <img src="styles/legend/PolaRuang_13_6.png" /> Perkebunan<br />\
    <img src="styles/legend/PolaRuang_13_7.png" /> Sempadan Sungai<br />\
    <img src="styles/legend/PolaRuang_13_8.png" /> SPU SKala Kelurahan<br />\
    <img src="styles/legend/PolaRuang_13_9.png" /> Tanaman Pangan<br />'
        });

lyr_satelit_0.setVisible(true);lyr_SUTR_1.setVisible(true);lyr_Serat_Optik_2.setVisible(false);lyr_Pengembangan_Jaringan_Jalan_3.setVisible(false);lyr_Jaringan_Sumber_Daya_Air_4.setVisible(false);lyr_Jaringan_Evakuasi_Bencana_5.setVisible(false);lyr_Drainase_Tersier_6.setVisible(false);lyr_TPS3R_7.setVisible(false);lyr_Gardu_Distribusi_8.setVisible(false);lyr_IPAL_Kawasan_9.setVisible(false);lyr_BTS_10.setVisible(false);lyr_Bak_Penampungan_11.setVisible(false);lyr_Pusat_Pelayanan_12.setVisible(false);lyr_PolaRuang_13.setVisible(true);
var layersList = [lyr_satelit_0,lyr_SUTR_1,lyr_Serat_Optik_2,lyr_Pengembangan_Jaringan_Jalan_3,lyr_Jaringan_Sumber_Daya_Air_4,lyr_Jaringan_Evakuasi_Bencana_5,lyr_Drainase_Tersier_6,lyr_TPS3R_7,lyr_Gardu_Distribusi_8,lyr_IPAL_Kawasan_9,lyr_BTS_10,lyr_Bak_Penampungan_11,lyr_Pusat_Pelayanan_12,lyr_PolaRuang_13];
lyr_SUTR_1.set('fieldAliases', {'Id': 'Id', 'OBJECTID': 'OBJECTID', 'KODE_UNSUR': 'KODE_UNSUR', 'NAMA_UNSUR': 'NAMA_UNSUR', 'TOPONIM': 'TOPONIM', 'PELAKSANA': 'PELAKSANA', 'UPDATED': 'UPDATED', 'Shape_Leng': 'Shape_Leng', 'Status_Jal': 'Status_Jal', 'Nama_Ruas': 'Nama_Ruas', 'Pj_jalan': 'Pj_jalan', });
lyr_Serat_Optik_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODE_UNSUR': 'KODE_UNSUR', 'NAMA_UNSUR': 'NAMA_UNSUR', 'TOPONIM': 'TOPONIM', 'PELAKSANA': 'PELAKSANA', 'UPDATED': 'UPDATED', 'Shape_Leng': 'Shape_Leng', 'Status_Jal': 'Status_Jal', 'Nama_Ruas': 'Nama_Ruas', 'Pj_jalan': 'Pj_jalan', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Pengembangan_Jaringan_Jalan_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODE_UNSUR': 'KODE_UNSUR', 'NAMA_UNSUR': 'NAMA_UNSUR', 'TOPONIM': 'TOPONIM', 'PELAKSANA': 'PELAKSANA', 'UPDATED': 'UPDATED', 'Shape_Leng': 'Shape_Leng', 'Status_Jal': 'Status_Jal', 'Nama_Ruas': 'Nama_Ruas', 'Pj_jalan': 'Pj_jalan', });
lyr_Jaringan_Sumber_Daya_Air_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODE_UNSUR': 'KODE_UNSUR', 'NAMA_UNSUR': 'NAMA_UNSUR', 'TOPONIM': 'TOPONIM', 'PELAKSANA': 'PELAKSANA', 'UPDATED': 'UPDATED', 'Shape_Leng': 'Shape_Leng', 'Status_Jal': 'Status_Jal', 'Nama_Ruas': 'Nama_Ruas', 'Pj_jalan': 'Pj_jalan', });
lyr_Jaringan_Evakuasi_Bencana_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODE_UNSUR': 'KODE_UNSUR', 'NAMA_UNSUR': 'NAMA_UNSUR', 'TOPONIM': 'TOPONIM', 'PELAKSANA': 'PELAKSANA', 'UPDATED': 'UPDATED', 'Shape_Leng': 'Shape_Leng', 'Status_Jal': 'Status_Jal', 'Nama_Ruas': 'Nama_Ruas', 'Pj_jalan': 'Pj_jalan', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Drainase_Tersier_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KODE_UNSUR': 'KODE_UNSUR', 'NAMA_UNSUR': 'NAMA_UNSUR', 'TOPONIM': 'TOPONIM', 'PELAKSANA': 'PELAKSANA', 'UPDATED': 'UPDATED', 'Shape_Leng': 'Shape_Leng', 'Status_Jal': 'Status_Jal', 'Nama_Ruas': 'Nama_Ruas', 'Pj_jalan': 'Pj_jalan', 'OBJECTID_1': 'OBJECTID_1', 'Shape_Le_1': 'Shape_Le_1', });
lyr_TPS3R_7.set('fieldAliases', {'Id': 'Id', });
lyr_Gardu_Distribusi_8.set('fieldAliases', {'Id': 'Id', });
lyr_IPAL_Kawasan_9.set('fieldAliases', {'Id': 'Id', });
lyr_BTS_10.set('fieldAliases', {'Id': 'Id', });
lyr_Bak_Penampungan_11.set('fieldAliases', {'Id': 'Id', });
lyr_Pusat_Pelayanan_12.set('fieldAliases', {'Id': 'Id', 'PP': 'PP', });
lyr_PolaRuang_13.set('fieldAliases', {'POLA_RUANG': 'POLA_RUANG', });
lyr_SUTR_1.set('fieldImages', {'Id': '', 'OBJECTID': '', 'KODE_UNSUR': '', 'NAMA_UNSUR': '', 'TOPONIM': '', 'PELAKSANA': '', 'UPDATED': '', 'Shape_Leng': '', 'Status_Jal': '', 'Nama_Ruas': '', 'Pj_jalan': '', });
lyr_Serat_Optik_2.set('fieldImages', {'OBJECTID': '', 'KODE_UNSUR': '', 'NAMA_UNSUR': '', 'TOPONIM': '', 'PELAKSANA': '', 'UPDATED': '', 'Shape_Leng': '', 'Status_Jal': '', 'Nama_Ruas': '', 'Pj_jalan': '', 'Shape_Le_1': '', });
lyr_Pengembangan_Jaringan_Jalan_3.set('fieldImages', {'OBJECTID': '', 'KODE_UNSUR': '', 'NAMA_UNSUR': '', 'TOPONIM': '', 'PELAKSANA': '', 'UPDATED': '', 'Shape_Leng': '', 'Status_Jal': '', 'Nama_Ruas': '', 'Pj_jalan': '', });
lyr_Jaringan_Sumber_Daya_Air_4.set('fieldImages', {'OBJECTID': '', 'KODE_UNSUR': '', 'NAMA_UNSUR': '', 'TOPONIM': '', 'PELAKSANA': '', 'UPDATED': '', 'Shape_Leng': '', 'Status_Jal': '', 'Nama_Ruas': '', 'Pj_jalan': '', });
lyr_Jaringan_Evakuasi_Bencana_5.set('fieldImages', {'OBJECTID': '', 'KODE_UNSUR': '', 'NAMA_UNSUR': '', 'TOPONIM': '', 'PELAKSANA': '', 'UPDATED': '', 'Shape_Leng': '', 'Status_Jal': '', 'Nama_Ruas': '', 'Pj_jalan': '', 'Shape_Le_1': '', });
lyr_Drainase_Tersier_6.set('fieldImages', {'OBJECTID': '', 'KODE_UNSUR': '', 'NAMA_UNSUR': '', 'TOPONIM': '', 'PELAKSANA': '', 'UPDATED': '', 'Shape_Leng': '', 'Status_Jal': '', 'Nama_Ruas': '', 'Pj_jalan': '', 'OBJECTID_1': '', 'Shape_Le_1': '', });
lyr_TPS3R_7.set('fieldImages', {'Id': '', });
lyr_Gardu_Distribusi_8.set('fieldImages', {'Id': '', });
lyr_IPAL_Kawasan_9.set('fieldImages', {'Id': '', });
lyr_BTS_10.set('fieldImages', {'Id': '', });
lyr_Bak_Penampungan_11.set('fieldImages', {'Id': '', });
lyr_Pusat_Pelayanan_12.set('fieldImages', {'Id': 'Range', 'PP': 'TextEdit', });
lyr_PolaRuang_13.set('fieldImages', {'POLA_RUANG': 'TextEdit', });
lyr_SUTR_1.set('fieldLabels', {'Id': 'no label', 'OBJECTID': 'no label', 'KODE_UNSUR': 'no label', 'NAMA_UNSUR': 'no label', 'TOPONIM': 'no label', 'PELAKSANA': 'no label', 'UPDATED': 'no label', 'Shape_Leng': 'no label', 'Status_Jal': 'no label', 'Nama_Ruas': 'no label', 'Pj_jalan': 'no label', });
lyr_Serat_Optik_2.set('fieldLabels', {'OBJECTID': 'no label', 'KODE_UNSUR': 'no label', 'NAMA_UNSUR': 'no label', 'TOPONIM': 'no label', 'PELAKSANA': 'no label', 'UPDATED': 'no label', 'Shape_Leng': 'no label', 'Status_Jal': 'no label', 'Nama_Ruas': 'no label', 'Pj_jalan': 'no label', 'Shape_Le_1': 'no label', });
lyr_Pengembangan_Jaringan_Jalan_3.set('fieldLabels', {'OBJECTID': 'no label', 'KODE_UNSUR': 'no label', 'NAMA_UNSUR': 'no label', 'TOPONIM': 'no label', 'PELAKSANA': 'no label', 'UPDATED': 'no label', 'Shape_Leng': 'no label', 'Status_Jal': 'no label', 'Nama_Ruas': 'no label', 'Pj_jalan': 'no label', });
lyr_Jaringan_Sumber_Daya_Air_4.set('fieldLabels', {'OBJECTID': 'no label', 'KODE_UNSUR': 'no label', 'NAMA_UNSUR': 'no label', 'TOPONIM': 'no label', 'PELAKSANA': 'no label', 'UPDATED': 'no label', 'Shape_Leng': 'no label', 'Status_Jal': 'no label', 'Nama_Ruas': 'no label', 'Pj_jalan': 'no label', });
lyr_Jaringan_Evakuasi_Bencana_5.set('fieldLabels', {'OBJECTID': 'no label', 'KODE_UNSUR': 'no label', 'NAMA_UNSUR': 'no label', 'TOPONIM': 'no label', 'PELAKSANA': 'no label', 'UPDATED': 'no label', 'Shape_Leng': 'no label', 'Status_Jal': 'no label', 'Nama_Ruas': 'no label', 'Pj_jalan': 'no label', 'Shape_Le_1': 'no label', });
lyr_Drainase_Tersier_6.set('fieldLabels', {'OBJECTID': 'no label', 'KODE_UNSUR': 'no label', 'NAMA_UNSUR': 'no label', 'TOPONIM': 'no label', 'PELAKSANA': 'no label', 'UPDATED': 'no label', 'Shape_Leng': 'no label', 'Status_Jal': 'no label', 'Nama_Ruas': 'no label', 'Pj_jalan': 'no label', 'OBJECTID_1': 'no label', 'Shape_Le_1': 'no label', });
lyr_TPS3R_7.set('fieldLabels', {'Id': 'no label', });
lyr_Gardu_Distribusi_8.set('fieldLabels', {'Id': 'no label', });
lyr_IPAL_Kawasan_9.set('fieldLabels', {'Id': 'no label', });
lyr_BTS_10.set('fieldLabels', {'Id': 'no label', });
lyr_Bak_Penampungan_11.set('fieldLabels', {'Id': 'no label', });
lyr_Pusat_Pelayanan_12.set('fieldLabels', {'Id': 'no label', 'PP': 'header label - visible with data', });
lyr_PolaRuang_13.set('fieldLabels', {'POLA_RUANG': 'no label', });
lyr_PolaRuang_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});