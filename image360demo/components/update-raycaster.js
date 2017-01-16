/* global AFRAME */
AFRAME.registerComponent('update-raycaster', {
  schema: {type: 'selector'},

  init: function () {
    console.log("Entering init function in update-raycaster.js");
    var raycasterEl = this.data;
    raycasterEl.components.raycaster.refreshObjects();
  }
});
