// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100006080606080608060607060606070607020401010401010201050102010105060201080607080606070806080708080806010704010402040605080402020206060406060604040106020804010805070702020208040804060506070408010606040401060106040604070401060408070406040704060507050602060601060601060204020605020206040108010806050608070606080706070105070106070401040401010401010402020804060802050108060807060607060206010807020605050405050104050601080206080108060706060806080207040701060604010104070104010202060408020306060806060806070606060608060706`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . 2 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . . . . . 2 . 2 . . . . 2 
2 . 2 2 2 . . . 2 . 2 . . 2 . 2 
2 . . . 2 . 2 . 2 . 2 2 . 2 . 2 
2 . . . 2 . 2 . 2 . 2 . . 2 . 2 
2 . 2 . 2 . 2 . 2 . 2 . 2 2 . 2 
2 . 2 . . . 2 . . . 2 . . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 . . 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . . 2 2 2 2 2 2 2 2 . 2 . 2 
2 . 2 . . . . . . . . 2 . 2 . 2 
2 . 2 2 2 2 2 2 2 2 . 2 . 2 . 2 
2 . . . . 2 . . . . . 2 . 2 . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath5,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.rock0,sprites.castle.rock1,sprites.castle.rock2], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`200010000606060806060608060906060a0c060206060806060a0606060908060b060608060906060608060101010101010101010c0601010101010101010101010101060606060101010101010a06060609060c060801010606090601010501060b0109080609010106060609060101060106060908010606080606060105060806010606060101010a01010107010706010a010101010609060a060a01050a01060508060801010701010a060606010a010601010101060606060606050509010601060c0101010101010609060601060106010c01040a0a060606010101060106050906010709060101010a0b010106010a010c01040406080901010a010a0108050609010606060b070707070707060106010601010106060101060601060106050a0601060c0a06060a060c06060a0105010a080906080601060a06010601060508060101010101010101010101010105050105010101060101010101080106010608010108060c060806060a060806040104010601010609060a060606010601060c010108070105010101010101060c010c01060101010101010101010106010a060101060705060a06060906070609010a01060906060606060606080609010806010101010501050105010101060601060105050501010101010501010101060906060806060c0608080606060c0603060606060608090c0a06080606060606`, img`
222222222222222.2222222222222222
2222222.........22.............2
222......222222222..2222....22.2
222..22222..2.2222.222222..222.2
22...2......2.2....222222..2.2.2
22.....2222.2.2....222222..2.2.2
2......2222.2.2.2..22222...2.2.2
2..22...22..2.2.2...222..2.2.2.2
2.2222......2.2.2...22..22.2.2.2
2.22222222222...222222.222.2.2.2
2....................2.....2.2.2
2..22222222222....2..2222222.2.2
2..2.........22.2.2..........2.2
2..2..222222.22.2.222222222222.2
2............22.2..............2
222222222222222.2222222222222222
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.floorLight1,sprites.dungeon.floorLight3,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight4,sprites.dungeon.floorLight5], TileScale.Sixteen);
            case "puzzle2":
            case "level7":return tiles.createTilemap(hex`0a0008000706070607040406070605030306030000030603000000030000000005000000000000000000000000000000000000000000000000000000000000000101010101010101010102020202020202020202`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.oceanSand2,sprites.builtin.oceanSand9,myTiles.tile1,sprites.builtin.forestTiles6,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
            case "puzzle1":
            case "level3":return tiles.createTilemap(hex`100010000205050505050505050505050505050308010b010101010101010b0101010107080101090109010101090909010b0a0708010109010109010101010901010b0708010b0109010b0101010b01010a01070801010901010a0101010101010b0107080101010101010109010a01010101070809090101010a0b01010b0109010a0708010b0a010b0a0901010101090b0a0708090a010101010a0a010a0101010a07080101010901010101010a0109010107080901010b0109010101010109090a07080b0a0101010a0a0b01010a0a01010708010a090101010a0a0101090101090708010b0101090b010a010901090109070406060606060606060606060606060c`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.castle.tilePath9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile":
            case "tile1":return tile1;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
