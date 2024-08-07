player.onChat("1", function () {
    blocks.fill(
    SEA_LANTERN,
    pos(-16, -1, -24),
    pos(16, -1, 24),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(-15, -1, -23),
    pos(15, -1, -1),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(-15, -1, 23),
    pos(15, -1, 1),
    FillOperation.Replace
    )
    player.say("etapa2")
    shapes.circle(
    SEA_LANTERN,
    pos(0, -1, 0),
    5,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    SEA_LANTERN,
    pos(0, -1, -19),
    5,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    SEA_LANTERN,
    pos(0, -1, 19),
    5,
    Axis.Y,
    ShapeOperation.Outline
    )
    player.say("etapa2")
    blocks.fill(
    SEA_LANTERN,
    pos(-8, -1, -24),
    pos(8, -1, -17),
    FillOperation.Outline
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-8, -1, 24),
    pos(8, -1, 17),
    FillOperation.Outline
    )
    blocks.fill(
    GRASS,
    pos(-7, -1, -23),
    pos(7, -1, -18),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(-7, -1, 23),
    pos(7, -1, 18),
    FillOperation.Replace
    )
    player.say("etapa3")
    blocks.fill(
    SEA_LANTERN,
    pos(-4, -1, -24),
    pos(4, -1, -21),
    FillOperation.Outline
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-4, -1, 24),
    pos(4, -1, 21),
    FillOperation.Outline
    )
    blocks.fill(
    GRASS,
    pos(-3, -1, -23),
    pos(3, -1, -22),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(3, -1, 23),
    pos(-3, -1, 22),
    FillOperation.Replace
    )
})
player.onTravelled(WALK, function () {
	
})
