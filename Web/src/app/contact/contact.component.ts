import {Component, OnInit} from '@angular/core';

declare let L;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  map;
  lat;
  lng;
  marker;

  constructor() {
  }

  ngOnInit() {
    this.initMap();

  }

  initMap() {
    this.map = new L.Map('map', {
      zoomControl: true,
      maxZoom: 20,
      minZoom: 5,
      center: new L.LatLng(41.00650212603, 28.8530806151128),
      zoom: 10
    });

    const tileLayers = {
      'Google Uydu': L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&hl=tr&x={x}&y={y}&z={z}', {
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
        maxNativeZoom: 20,
        zIndex: 0,
        maxZoom: 20
      }).addTo(this.map)
    };
    L.control.layers(tileLayers, null, {collapsed: false}).addTo(this.map);

    this.marker = L.marker(this.map.getCenter(), {
      draggable: true,
      icon: L.icon({
        iconUrl: './assets/img/marker-icon-2x.png',
        iconSize: [25, 35],
        iconAnchor: [30 / 2, 35],
      })
    }).addTo(this.map);
    console.log("this.marker", this.marker);
    this.map.on('click', this.onMapClick);
  }

  onMapClick(e) {
    this.lat = e.latlng.lat;
    this.lng = e.latlng.lng;
    console.log("this.marker", this.marker);
    this.marker.setLatLng(new L.LatLng(e.latlng.lat, e.latlng.lng));
    this.map.panTo(new L.LatLng(e.latlng.lat, e.latlng.lng));
    this.map.setView(new L.LatLng(e.latlng.lat, e.latlng.lng), 18);
  }


}


