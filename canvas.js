var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
ctx.font = "32px Georgia";

var grid = [];
var gridLength = 8;
var gridHeight = 6;
var cellSize = 64;

for (var i = 0; i < gridLength; ++i) {
	grid[i] = [];
	for (var j = 0; j < gridHeight; ++j) {
		grid[i][j] = new cell(i, j, Math.ceil(Math.random()*10), Math.random());
		grid[i][j].draw();
	}
}

function cell(x, y, pop, lean) {

	this.x = x * cellSize;
	this.y = y * cellSize;
	this.size = cellSize;
	this.pop = ""+pop;
	this.lean = lean;
	this.red = Math.floor(lean*10);
	this.blue = 9-Math.floor(lean*10);

	this.draw = function() {
		ctx.fillStyle="#"+this.red+""+this.red+"00"+this.blue+""+this.blue;
		ctx.fillRect(this.x, this.y, this.size, this.size);
		ctx.stroke();
		ctx.fillStyle="#ffffff"
		ctx.fillText(this.pop, this.x + this.size/4, this.y + this.size/2);

	}
}