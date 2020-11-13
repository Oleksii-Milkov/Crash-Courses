const colors = ["red", "blue", "black", "green", "pink", "yellow", "brown", "purple", "orange", "gray"];

class Marker {

  color;
  inkCount;

  constructor(color, inkCount) {
    if (colors.includes(color)) {
      this.color = color;
    } else {
      this.color = colors[Math.floor(Math.random() * 10)];
    }
    if (inkCount != undefined) {
      this.inkCount = inkCount;
    } else {
      this.inkCount = Math.floor(Math.random() * (100 - 50)) + 50;
    }
  }

  markerPrint(str) {
    document.getElementById("str").style.color = this.color;
    for (let i = 0; i < str.length; i++) {
      document.getElementById("str").append(str[i]);
      this.inkCount = this.inkCount - 0.5;
      if (this.inkCount < 0) {
        break;
      }
    }
  }

}

class Refueling extends Marker {

  constructor(color, inkCount) {
    super();
    if (colors.includes(color)) {
      this.color = color;
    }
    if (inkCount == null) {
      this.refuelMarker(this);
    } else {
      this.inkCount = inkCount;
    }
  }

  refuelMarker() {
    this.inkCount = 100.0;
  }

}

let simpleMarker = new Marker();
let marker = new Refueling("green", 20.5);

const str = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, perspiciatis.";

simpleMarker.markerPrint(str);