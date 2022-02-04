controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("splash")
})
let mySprite = sprites.create(assets.image`bout`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(6)
scene.cameraFollowSprite(mySprite)
