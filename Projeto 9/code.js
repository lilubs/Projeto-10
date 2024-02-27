var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7824608a-fded-4f4d-84f5-4aeadc6208b2","2f5efb5f-f979-4429-97ab-bbbf0c915078","4cf82475-c0d8-477f-95ef-78286a786cdd","709557d6-ac85-4a11-8bef-ad242454ec87","faea01ba-cfbe-4cb4-bd61-ec766225c8cd","413fb4f4-c4b5-4faf-9521-c0b3faeb3733"],"propsByKey":{"7824608a-fded-4f4d-84f5-4aeadc6208b2":{"name":"IMG_0867.png_1","sourceUrl":null,"frameSize":{"x":440,"y":988},"frameCount":1,"looping":true,"frameDelay":12,"version":"gPQG3NfBNElMB.uadICQocCiT4T5bUr8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":440,"y":988},"rootRelativePath":"assets/7824608a-fded-4f4d-84f5-4aeadc6208b2.png"},"2f5efb5f-f979-4429-97ab-bbbf0c915078":{"name":"casa1.png_1","sourceUrl":"assets/v3/animations/xyZvT17_Nb4n92P4rT8uHCfI1VW1o_xjitaWh339oys/2f5efb5f-f979-4429-97ab-bbbf0c915078.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"Qg9FYkbk.X0_8tTPAEIiP5hSezbYdajb","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/xyZvT17_Nb4n92P4rT8uHCfI1VW1o_xjitaWh339oys/2f5efb5f-f979-4429-97ab-bbbf0c915078.png"},"4cf82475-c0d8-477f-95ef-78286a786cdd":{"name":"pngtree-bush-cartoon-vector-png-image_6665403.png_1","sourceUrl":null,"frameSize":{"x":358,"y":155},"frameCount":1,"looping":true,"frameDelay":12,"version":"bV.YhtvoSZXyrJL0FjrzGE3KaPPFMQw7","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":358,"y":155},"rootRelativePath":"assets/4cf82475-c0d8-477f-95ef-78286a786cdd.png"},"709557d6-ac85-4a11-8bef-ad242454ec87":{"name":"pngtree-bush-cartoon-vector-png-image_6665403.png_2","sourceUrl":null,"frameSize":{"x":266,"y":129},"frameCount":1,"looping":true,"frameDelay":12,"version":"XzIdSX2mGa73lsNfH_2.5kMYS4c26bmN","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":266,"y":129},"rootRelativePath":"assets/709557d6-ac85-4a11-8bef-ad242454ec87.png"},"faea01ba-cfbe-4cb4-bd61-ec766225c8cd":{"name":"carros.png_1","sourceUrl":"assets/v3/animations/To2tn5jPc4OZwlpb08GQ0foYllE_LlIDegsX4_A2dMs/faea01ba-cfbe-4cb4-bd61-ec766225c8cd.png","frameSize":{"x":131,"y":71},"frameCount":1,"looping":true,"frameDelay":4,"version":".qAoit3ZqElq9k.HLWVTFh9UkgTexdTG","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":131,"y":71},"rootRelativePath":"assets/v3/animations/To2tn5jPc4OZwlpb08GQ0foYllE_LlIDegsX4_A2dMs/faea01ba-cfbe-4cb4-bd61-ec766225c8cd.png"},"413fb4f4-c4b5-4faf-9521-c0b3faeb3733":{"name":"carrow.png_1","sourceUrl":"assets/v3/animations/To2tn5jPc4OZwlpb08GQ0foYllE_LlIDegsX4_A2dMs/413fb4f4-c4b5-4faf-9521-c0b3faeb3733.png","frameSize":{"x":131,"y":71},"frameCount":1,"looping":true,"frameDelay":4,"version":"Xpco5XiXkJwUjY8TsnZs6kh7..abj7B5","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":131,"y":71},"rootRelativePath":"assets/v3/animations/To2tn5jPc4OZwlpb08GQ0foYllE_LlIDegsX4_A2dMs/413fb4f4-c4b5-4faf-9521-c0b3faeb3733.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gamestate = "start";
var life = 0;

//elementos principais
var house = createSprite(200, 0);
house.setAnimation("casa1.png_1");
house.scale = 0.28;

var clover = createSprite(200, 380, 20, 20);
clover.setAnimation("IMG_0867.png_1");
clover.scale = 0.06;

//plantas
var plant1 = createSprite(40, 380);
plant1.setAnimation("pngtree-bush-cartoon-vector-png-image_6665403.png_1");
plant1.scale = 0.25;
var plant2 = createSprite(370, 385);
plant2.setAnimation("pngtree-bush-cartoon-vector-png-image_6665403.png_2");
plant2.scale = 0.25;

//carros
var car1 = createSprite(370, 310);
car1.setAnimation("carros.png_1");
car1.scale = 0.4;
var car2 = createSprite(30, 205);
car2.setAnimation("carrow.png_1");
car2.scale = 0.4;
var car3 = createSprite(370, 100);
car3.setAnimation("carros.png_1");
car3.scale = 0.4;

//velocidade dos carros
car1.velocityX= -10;
car2.velocityX = 10;
car3.velocityX = -10;

function draw() {
  background("lightgreen");
  
  //contagem de vidas 
  textSize(25);
  text("Vidas: " + life,23,40);
  
  //rua
  rect(0, 80, 400, 255);
  for (var i = 10; i < 400; i=i+70) {
    stroke("yellow");
    strokeWeight(5);
    line(i, 200, i+30, 200);
  }
  
  //condições dos gamestates
  if (gamestate == "start") {
    textSize(25);
    fill("white");
    stroke("black");
    strokeWeight(5);
    text("Pressione Espaço para começar",19,160);
    if (keyDown("space")) {
      gamestate = "play";
    }
  }
  if (gamestate == "play") {
    clovermoves();
  }
  if (gamestate == "end") {
    textSize(30);
    fill("white");
    stroke("black");
    strokeWeight(5);
    text("Clover chegou em casa!",40,160);
    car1.velocityX= 0;
    car2.velocityX = 0;
    car3.velocityX = 0;
  }
  
  //condições
  if (clover.bounceOff(house)) {
    playSound("assets/category_achievements/lighthearted_bonus_objective_1.mp3", false);
    gamestate = "end";
  }
  if (clover.isTouching(car1)||clover.isTouching(car2)|| clover.isTouching(car3)) {
    playSound("assets/category_hits/retro_game_simple_impact_3.mp3", false);
    life = life+1;
    clover.x = 200;
    clover.y = 380;
  }
  
  //bordas
  createEdgeSprites();
  car1.bounceOff(edges);
  car2.bounceOff(edges);
  car3.bounceOff(edges);
  clover.bounceOff(edges);
  
  drawSprites();
}

function clovermoves() {
  if (keyDown("w")) {
    clover.y= clover.y+-5;
  }
  if (keyDown("s")) {
    clover.y= clover.y+5;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
