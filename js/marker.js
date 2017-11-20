var monMarker = function(map, position) {
	this.map = map;
	this.position = position;
}

monMarker.prototype.init = function(){
	var self = this;
//	console.log(self.position);
	self.googleMarker = new google.maps.Marker({
			'position': self.position,
			'map': self.map
	});
}
