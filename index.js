function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function () {
  return `${this.x}, ${this.y}`
};

function Side(length) {
  this.length = length
}

function Shape() {
}

Shape.prototype.addToPlane = function (x, y) {
  this.position = new Point(x, y)
};

Shape.prototype.move = function (x, y) {
  this.position += new Point(x, y)
};

function Circle(radius) {
  Shape.call(this)
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle

Circle.prototype.diameter = function() {
  return this.radius * 2
}

Circle.prototype.circumference = function () {
  return Math.PI * this.radius * this.radius;
};

Circle.prototype.area = function () {
  return this.radius * 2
};

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)
Polygon.prototype.constructor = Polygon

Polygon.prototype.perimeter = function () {
  var perimeter = 0
  this.sides.forEach(element => {
    perimeter += element.length
  })
  return perimeter
}

Polygon.prototype.numberOfSides = function () {
    return this.sides.length
}

function Quadrilateral(side1, side2, side3, side4) {
  this.sides = [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]
  Polygon.call(this, this.sides)
}

Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.constructor = Quadrilateral

function Rectangle(width, height) {
    this.width = width
    this.height = height
    Quadrilateral.call(this, width, height, width, height)
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.constructor = Rectangle

Rectangle.prototype.area = function() {
  return this.width * this.height
}

function Square(length) {
  this.length = length
  Rectangle.call(this, length, length)
}

Square.prototype = Object.create(Rectangle.prototype)
Square.constructor = Square

Square.prototype.listProperties = function(){
  let a
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      a += " " + prop
    }
  }
  return a
}

function Triangle(side1, side2, side3) {
  Polygon.call(this, [new Side(side1), new Side(side2), new Side(side3)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.constructor = Triangle
