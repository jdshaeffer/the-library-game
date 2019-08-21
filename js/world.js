// templated from https://github.com/mikewesthad/phaser-3-tilemap-blog-posts/tree/master/examples/post-1

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
let cursors
let player

function preload () {
    this.load.image('tiles', '../assets/tilesets/tuxemon.png')
    this.load.tilemapTiledJSON('map', '../assets/maps/grass_world.json')
    // atlas: a way to pack multiple images together into one texture
    // all player animations are in this atlas
    // could just use a spritesheet like normal though
    // however, atlas generally pack frames more efficiently
    this.load.atlas('atlas', '../assets/atlas/atlas.png', '../assets/atlas/atlas.json') 
}

function create () {
    const map = this.make.tilemap({key: 'map'})
    const tileset = map.addTilesetImage('tuxemon', 'tiles')

    // parameters: layer name from tiled, tileset, x, y
    const worldLayer = map.createStaticLayer('World', tileset, 0, 0) 
    const aboveLayer = map.createStaticLayer('Above Player', tileset, 0, 0) 
    worldLayer.setCollisionByProperty({collides: true}) // set collisions - with collides property in tiled
    aboveLayer.setDepth(10) // above layer to sit on top of the player

    // creating the sprite - setSize and setOffset to control size of player's body
    player = this.physics.add
        .sprite(400, 350, 'atlas', 'misa-front')
        .setSize(30, 40)
        .setOffset(0, 24)
    this.physics.add.collider(player, worldLayer) // collider 

    // create the player animations from texture atlas
    const anims = this.anims
    anims.create({
        key: "misa-left-walk",
        frames: anims.generateFrameNames("atlas", {
            prefix: "misa-left-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
    })
    anims.create({
        key: "misa-right-walk",
        frames: anims.generateFrameNames("atlas", {
            prefix: "misa-right-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
    })
    anims.create({
        key: "misa-front-walk",
        frames: anims.generateFrameNames("atlas", {
            prefix: "misa-front-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
    })
    anims.create({
        key: "misa-back-walk",
        frames: anims.generateFrameNames("atlas", {
            prefix: "misa-back-walk.",
            start: 0,
            end: 3,
            zeroPad: 3
        }),
        frameRate: 10,
        repeat: -1
    })

    // camera stays on player
    const camera = this.cameras.main
    camera.startFollow(player)
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

    cursors = this.input.keyboard.createCursorKeys()
}

function update(time, delta) {
    const speed = 175
    const prevVelocity = player.body.velocity.clone()

    player.body.setVelocity(0) // stop prev movement from last frame

    // horizontal movement
    if(cursors.left.isDown) {
        player.body.setVelocityX(-100)
    }
    else if(cursors.right.isDown) {
        player.body.setVelocityX(100)
    }

    // vertical movement
    if(cursors.up.isDown) {
        player.body.setVelocityY(-100)
    }
    else if(cursors.down.isDown) {
        player.body.setVelocityY(100)
    }
    player.body.velocity.normalize().scale(speed) // normalize diagonal speed

    // give left/right animations precedence over up/down and update animation
    if(cursors.left.isDown) {
        player.anims.play('misa-left-walk', true)
    }
    else if(cursors.right.isDown) {
        player.anims.play('misa-right-walk', true)
    }
    else if(cursors.up.isDown) {
        player.anims.play('misa-back-walk', true)
    }
    else if(cursors.down.isDown) {
        player.anims.play('misa-front-walk', true)
    }
    else {
        player.anims.stop()

        // if moving, pick idle frame to use
        if(prevVelocity.x < 0) {
            player.setTexture('atlas', 'misa-left') 
        }
        else if(prevVelocity.x > 0) {
            player.setTexture('atlas', 'misa-right')
        }
        else if(prevVelocity.y < 0) {
            player.setTexture('atlas', 'misa-back')
        }
        else if(prevVelocity.y > 0) {
            player.setTexture('atlas', 'misa-front')
        }
    }
}
