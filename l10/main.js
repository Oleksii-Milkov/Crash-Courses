class Circle {

  radius;

  constructor(radius) {
    this.radius = radius;
  }

  getRadius() {
    return this.radius;
  }

  setRagius(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return this.radius * 2;
  }

  calculateSquare() {
    return Math.PI * (this.radius ** 2);
  }

  calculateLength() {
    return 2 * Math.PI * this.radius;
  }
}

let circle = new Circle(10);

console.log(circle.getRadius());
console.log(circle.getDiameter());
console.log(circle.calculateSquare());
console.log(circle.calculateLength());