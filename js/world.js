let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    autoCenter: 1,
    autoFocus: true,
    parent: 'game-container', //id of the dom element to add the canvas to
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0} // no gravity needed in top down game
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

const game = new Phaser.Game(config)
// const player

function preload () {
    this.load.image('tiles', '../assets/tilesets/tuxemon.png')
    this.load.tilemapTiledJSON('map', '../assets/maps/grass_world.json')
}

function create () {
    const map = this.make.tilemap({key: 'map'})
    const tileset = map.addTilesetImage('tuxemon', 'tiles')

    // parameters: layer name from tiled, tileset, x, y
    const groundLayer = map.createStaticLayer('Ground', tileset, 0, 0) 
    const worldLayer = map.createStaticLayer('World', tileset, 0, 0) 
    const aboveLayer = map.createStaticLayer('Above Player', tileset, 0, 0) 
    worldLayer.setCollisionByProperty({collides: true}) // set collisions - with collides property in tiled

    // player stuff
    // player = this.physics.add.sprite(400, 350, 'atlas', 'misa-front')
}

function update(time, delta) {

}