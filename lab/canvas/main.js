paper.install(window);

var canvas = document.getElementById('myCanvas');
paper.setup(canvas);

// Create a Paper.js Path to draw a line into it:
var path;


var tool1, tool2;

window.onload = function() {
    paper.setup('myCanvas');

    // Create two drawing tools.
    // tool1 will draw straight lines,
    // tool2 will draw clouds.

    // Both share the mouseDown event:
    var path;
    function onMouseDown(event) {
        path = new Path();
        path.strokeColor = 'black';
        path.add(event.point);
    }

    tool1 = new Tool();
    tool1.onMouseDown = onMouseDown;

    tool1.onMouseDrag = function(event) {
        path.add(event.point);
    }

    tool2 = new Tool();
    tool2.minDistance = 20;
    tool2.onMouseDown = onMouseDown;

    tool2.onMouseDrag = function(event) {
        // Use the arcTo command to draw cloudy lines
        path.arcTo(event.point);
    }



    tool3 = new Tool();
    tool3.minDistance = 2;
    tool3.onMouseDown = function(event){
        var triangle = new Path.RegularPolygon(new Point(event.point), 3, 10);
        triangle.fillColor = '#e9e9ff';
        triangle.selected = true;
        tool3.onMouseDown = onMouseDown;    

    };
    
    tool3.onMouseDrag = function(event){
        var triangle = new Path.RegularPolygon(new Point(event.point), 3, 10);
        triangle.fillColor = '#e9e9ff';
        triangle.selected = true;
    }

    tool4 = new Tool();
    tool4.minDistance = 2;
    tool4.onMouseDown = function(event){
        var rectangle = new Rectangle(new Point(event.point), new Point(event.point));
        var path = new Path.Rectangle(rectangle);
        path.fillColor = '#e9e9ff';
        path.selected = true;
        tool4.onMouseDown = onMouseDown;    

    };
    
    tool4.onMouseDrag = function(event){
        var rectangle = new Rectangle(new Point(event.point + 10), new Point(15,15));
        var path = new Path.Rectangle(rectangle);
        path.fillColor = '#e9e9ff';
        path.selected = true;
    }


}