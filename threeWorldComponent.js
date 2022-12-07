const threeWorldComponent = {


    init: function () {
        console.log("three world init")
        let scene = this.el.sceneEl.object3D;  // THREE.Scene
        let geometry = new THREE.BoxGeometry(10, 10, 10);
        let material = new THREE.MeshNormalMaterial();
        let box = new THREE.Mesh(geometry, material);
        //let light = new THREE.PointLight( 0xff0000, 1, 100 );
        //light.position.set( 50, 50, 50 );
        //scene.add( light );
        //scene.add(box)
    },
    tick:function(){



    }
}

AFRAME.registerComponent('three-world', threeWorldComponent)
