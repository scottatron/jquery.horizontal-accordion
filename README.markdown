This plugin creates a horizontal accordion using absolute positioning instead of floated elements which tend to cause a flickering effect when animating.

The included demo pretty much defines the bare minimum markup and css in order to create an accordion.

Currently the initial left values of each of the accordion panes needs to be explicitly set in the css file. 

The plugin also allows you specify the animation duration and trigger event with defaults being 300 milliseconds and mouseover:

$('#accordion').haccordion({triggerevent: 'mouseover', duration: 300});

## Credits

Based on [Marc Thomas's example](http://www.mrcthms.com/design/build-a-jquery-powered-horizontal-accordion/)