AFRAME.registerComponent('update-raycaster', {
	schema:{
		type: 'selector'
	},
	init: function(){
		//console.log("Entering init function in update-raycaster");
		var raycasterEl = this.data;
		//console.log(raycasterEl);
		this.data.components.raycaster.refreshObjects();
		//console.log(this.data);
	}
});