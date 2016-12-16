AFRAME.registerComponent('set-image', {
	schema: {
		on: {type: 'string'},
		target: {type: 'selector'},
		src: {type: 'string'},
		dur: {type: 'number' , default: 1000.00}
	},

	init: function(){
		console.log("Entering the function INIT in set-image.js");
		
		var data = this.data;
		
		//console.log(this.data);

		var el = this.el;

		//console.log(this.el);


		this.setupFadeAnimation();
		el.addEventListener(data.on, function(){
			data.target.emit('set-image-fade');
			setTimeout(function(){
				data.target.setAttribute('material', 'src', data.src);
			}, data.dur);
		});
	},
	setupFadeAnimation: function(){
		var data = this.data;
		var targetEl = this.data.target;

		//console.log(data);
		//console.log(targetEl);

		if(targetEl.dataset.setImageFadeSetup)
		{
			//console.log("Entering once");
			return;
		}
		
		targetEl.dataset.setImageFadeSetup = true;
		targetEl.setAttribute('animation__fade', {
			property: 'material.color',
			startEvents: 'set-image-fade',
			dir: 'alternate',
			dur: data.dur,
			from: '#FFF',
			to: '#000'
		});
	}
});