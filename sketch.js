let mapData;
let coords;
let minLon, maxLon, minLat, maxLat;

function preload() {
  mapData = loadJSON("bangladesh.json");
}

function setup() {
  createCanvas(800, 600); 
  background(200);

  coords = mapData.features[0].geometry.coordinates;

  if (coords) {
    minLon = Infinity;
    maxLon = -Infinity;
    minLat = Infinity;
    maxLat = -Infinity;

    for (const polygon of coords) {
      for (const ring of polygon) {
        for (const point of ring) {
          let [lon, lat] = point;
          if (lon < minLon) minLon = lon;
          if (lon > maxLon) maxLon = lon;
          if (lat < minLat) minLat = lat;
          if (lat > maxLat) maxLat = lat;
        }
      }
    }
  }

  drawMap();
}

function drawMap() {
  background(180);

  stroke(0);
  fill(255);

  for (const polygon of coords) {
    beginShape();
    for (const ring of polygon) {
      for (const point of ring) {
        let [lon, lat] = point;
        let x = map(lon, minLon, maxLon, 50, width - 50);
        let y = map(lat, minLat, maxLat, height - 50, 50);
        vertex(x, y);
      }
    }
    endShape(CLOSE);
  }
}