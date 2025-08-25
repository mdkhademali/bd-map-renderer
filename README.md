## Bangladesh Map Renderer

This project visualizes the **map of Bangladesh** on a web page. It loads geographic data of Bangladesh and then plots it on a canvas, adjusting the coordinates so that the entire country fits nicely within the screen. The result is a clean, scaled drawing of Bangladesh that can be used for learning, experimenting, or as a base for more advanced map-based applications.

## Features
- Loads Bangladesh GeoJSON data (`bangladesh.json`)
- Parses longitude/latitude coordinates
- Automatically calculates bounding box (`min/max lat-lon`)
- Scales and draws the map inside the canvas
- Simple and clean rendering with `p5.js`

## Technologies
- **HTML5**
- **JavaScript (p5.js)**
- **GeoJSON**

---

## Project Structure
```
.
├── index.html       # Main HTML file
├── sketch.js        # p5.js sketch for rendering
└── bangladesh.json  # GeoJSON data (not included)
```

---

## Preview
When you run the project, you’ll see a **scaled map of Bangladesh** rendered on canvas.

© mdkhademali