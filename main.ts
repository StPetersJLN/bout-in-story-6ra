controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("splash")
})
let mySprite = sprites.create(assets.image`bout`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
