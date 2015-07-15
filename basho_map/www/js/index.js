/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {

        var sw = L.latLng(35.666223,139.784546),
         ne = L.latLng(35.697456,139.855957),
        bounds = L.latLngBounds(sw,ne);
        var map = L.map('map', {center: [35.6719985, 139.7979522], zoom: 17, touchZoom: false, maxBounds: bounds});
        
        L.tileLayer('./img/map/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                    maxZoom: 18,
                    minZoom: 14
                    }).addTo(map);
        
        
        
        //
        var data  = [{
                     "type": "Feature",
                     "properties":{
                        "title":"芭蕉稲荷",
                        "desc":"芭蕉は1680年に深川に移り住むが芭蕉没後滅失してしまった。大正6年(1917年）の津波襲来の際に石造りの蛙が発見され芭蕉稲荷を祀った。",
                        "image":"img/basho.jpg"},
                     "geometry": {
                        "type": "Point",
                        "coordinates":[139.79439,35.68404]
                        }
                     },
                     {"type": "Feature",
                     "properties":{"title":"芭蕉庵史跡展望庭園","desc":"隅田川の眺めが素晴らしい気持ちのいい場所。",
                     "image":"img/basho_sumida.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.79396,35.68376]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"芭蕉記念館","desc":"今も俳句の活動拠点！",
                     "image":"img/basho_kinen.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.79408,35.68598]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"深川江戸資料館","desc":"江戸の村が再現されています。",
                     "image":"img/fukagawa_rekishi.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.80052,35.68093]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"清澄庭園","desc":"この日本庭園は一見の価値あり。古池や蛙飛び込む水の音の句碑もあり。",
                     "image":"img/basho_furuike.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.79717,35.68090]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"中川船番所資料館","desc":"西は横須賀にあり、東に中川にあった海の関所。今は水陸両用車のスプラッシュも見れる場所でした。",
                     "image":"img/nakagawa.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.84600,35.68734]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"赤穂義士休憩の碑","desc":"",
                     "image":"img/akou.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.78901,35.67646]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"伊能忠敬住居跡","desc":"","image":"img/inou.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.79405,35.67465]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"深川東京モダン館","desc":"街歩きの拠点。深川に深川という川がないのは、元々人の名前が由来だからなんだって！","image":"img/modan.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.79466,35.67403]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"小津安二郎誕生の地","desc":"","image":"img/ozu.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.79665,35.67681]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"富岡八幡宮","desc":"江戸最大の八幡様","image":"img/hachiman.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.79819,35.67187]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"深川不動堂","desc":"成田山新勝寺の東京別院","image":"img/fudou.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.79826,35.67237]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"霊厳寺","desc":"大きなお地蔵さん発見！","image":"img/reigen.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.79964,35.68098]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"Blue Bottle Coffee","desc":"長蛇の列。","image":"img/bbc.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.80054,35.67783]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"fukadaso","desc":"ハスキーボイスのステキおばちゃんにアイスコーヒーを頂く。","image":"img/fukadaso.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.80053,35.67846]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"The Cream of the Crop Coffee","desc":"豆ですか？ドリンクですか？と聞かれドリンクと答えて椅子を出してもらい倉庫でコーヒーを飲みました。","image":"img/ccc.jpg"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.80959,35.68184]
                     }},
                     {"type": "Feature",
                     "properties":{"title":"alohaloco Studio","desc":"オシャレな自転車を借りました！","image":"img/logo.png"},
                     "geometry": {
                     "type": "Point",
                     "coordinates":[139.79394,35.68404]
                     }}


                     
                     ];
        
        L.Icon.Default.imagePath = 'css/images';
        var geo_layer = L.geoJson(data,{ onEachFeature:function(f,l){
                                l.bindPopup(
                                           f.properties.title);
                                l.on("click",function(){
                                               document.getElementById("title").innerText = f.properties.title;
                                               document.getElementById("description").innerText = f.properties.desc;
                                               document.getElementById("image").setAttribute("src",f.properties.image);
                                     
                                     });
                  
                  $("#midokoro").append('<li lng="'+ f.geometry.coordinates[0] + '" lat="' + f.geometry.coordinates[1] + '" ><a href="#"  >' + f.properties.title + '</a></li>').listview().listview('refresh');

                                    
                                  }});
        geo_layer.addTo(map);
        
        
        // Click on the List in Side panel
        $(document).on("click", '#midokoro  li', function(event) {
                       $("#midokoro_panel").panel("close");
                       var selected = L.latLng($(this).attr("lat"),$(this).attr("lng"));
                       map.panTo(selected);
                       geo_layer.eachLayer(function(marker){
                       if ( marker.getLatLng().equals( selected )){
                                           marker.fire('click');
                        }
                                           
                                           });
         }
        );
    
    }

};

app.initialize();