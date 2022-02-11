// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`3c001000030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302010202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020201020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302010202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202`, img`
222222222222222222222222222222222222222222222222222222222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
2....................................................2222222
222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
