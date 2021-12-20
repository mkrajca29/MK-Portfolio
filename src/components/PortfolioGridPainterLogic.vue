<template>
  <div>
    <canvas
      ref="canvasDrawing"
      :width="canvas.canvasWidth"
      :height="canvas.canvasHeight"
    ></canvas>
    <br />
  </div>
</template>

<script>
import * as settings_file from "../assets/gridPainterData";
export default {
  data() {
    return {
      input: {
        data: settings_file.data_coords,
        colorOfGrid: this.GridColor || "#343a40",
        gridGap: this.Gap || 0
      },
      canvas: {
        canvasWidth: 1200,
        canvasHeight: 500,
        numberOfTilesX: 0,
        numberOfTilesY: 0,
        tileSize: 10
      },
      rectangles: [],
      drawingSpeed: 10
    };
  },
  props: {
    GridColor: {
      type: String
    },
    speed: {
      type: Number
    },
    Gap: {
      type: String
    }
  },
  mounted() {
    this.ctx = this.$refs.canvasDrawing.getContext("2d");
    this.drawingSpeed = 100 / this.speed;
    this.importCoords(this.input.data);
    this.getCanvasDimensions();
    this.loadAndPlay();
  },
  methods: {
    getCanvasDimensions() {
      this.canvas.numberOfTilesX =
        this.canvas.canvasWidth / this.canvas.tileSize;
      this.canvas.numberOfTilesY =
        this.canvas.canvasHeight / this.canvas.tileSize;
    },
    importCoords(data) {
      this.rectangles = [];
      this.canvas.canvasWidth = this.processData(data).SettingsArray[0];
      this.canvas.canvasHeight = this.processData(data).SettingsArray[1];
      this.canvas.tileSize = this.processData(data).SettingsArray[2];
      this.drawGrid();
      this.rectangles = this.processData(data).coords;
    },
    processData(data) {
      let allInput = data.split("/"); // => [SettingsArray] a [CoordsArray]
      let SettingsArray = allInput[0].split(":"); // => [CanvasWidth, CanvasHeight, TileSize]
      let CoordsArray = allInput[1].split("|"); // => [X, Y, Color]

      let CoordsArraySplit = CoordsArray.map(a => a.split(","));
      let coords = [];
      CoordsArraySplit.map(
        a => coords.push({ x: Number(a[0]), y: Number(a[1]), color: a[2] }) //
      );

      return {
        SettingsArray,
        coords
      };
    },
    rectangle(color, x, y, w, h) {
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, w, h);
    },
    drawGrid() {
      for (let i = 0; i < this.canvas.numberOfTilesX; i++) {
        for (let j = 0; j < this.canvas.numberOfTilesY; j++) {
          this.rectangle(
            this.input.colorOfGrid,
            this.canvas.tileSize * i,
            this.canvas.tileSize * j,
            this.canvas.tileSize - 1,
            this.canvas.tileSize - 1
          );
        }
      }
    },
    loadAndPlay() {
      setTimeout(() => {
        this.drawGrid();
        for (let [index, rect] of this.rectangles.entries()) {
          setTimeout(() => {
            this.rectangle(
              rect.color,
              rect.x + 1,
              rect.y + 1,
              this.canvas.tileSize - this.input.gridGap,
              this.canvas.tileSize - this.input.gridGap
            );
          }, this.drawingSpeed * index);
        }
      }, 100);
    }
  }
};
</script>
