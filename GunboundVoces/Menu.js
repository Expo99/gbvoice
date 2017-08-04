var Menu=function(game){}
Menu.prototype={
	init:function(){this.game.stage.backgroundColor = '#000000';this.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL;this.scale.pageAlignHorizontally = true;this.scale.pageAlignVertically = true;this.game.physics.startSystem(Phaser.Physics.ARCADE);},
	preload:function(){
		this.load.image('adios','Assets/adios.png');
		this.load.image('ayuda','Assets/ayuda.png');
		this.load.image('bien','Assets/bien.png');
		this.load.image('buenintento','Assets/buenintento.png');
		this.load.image('diosmio','Assets/diosmio.png');
		this.load.image('gracias','Assets/gracias.png');
		this.load.image('hola','Assets/hola.png');
		this.load.image('muybien','Assets/muybien.png');
		this.load.image('perdon','Assets/perdon.png');
		this.load.image('principiante','Assets/principiante.png');
		this.load.image('fondo','Assets/fondo.png');
		this.load.audio('voces','Assets/gbvoice.ogg');
	},
	create:function(){
		var s=2.7;
		this.background = this.add.tileSprite(0,0,this.world.width, this.world.height,'fondo');
		this.hola=this.add.button(100,100,'hola',function(){this.startSound(0,0.7)},this);
		this.hola.scale.setTo(s,s);
		this.adios=this.add.button(330,104,'adios',function(){this.startSound(0.8,0.9)},this);
		this.adios.scale.setTo(s,s);
		this.diosmio=this.add.button(530,100,'diosmio',function(){this.startSound(1.43,1.45)},this);
		this.diosmio.scale.setTo(s,s);
		this.ayuda=this.add.button(770,100,'ayuda',function(){this.startSound(2.7,1.35)},this);
		this.ayuda.scale.setTo(s,s);
		this.bien=this.add.button(980,100,'bien',function(){this.startSound(3.9,0.9)},this);
		this.bien.scale.setTo(s,s);
		this.muybien=this.add.button(80,300,'muybien',function(){this.startSound(4.58,1.1)},this);
		this.muybien.scale.setTo(s,s);
		this.buenintento=this.add.button(280,300,'buenintento',function(){this.startSound(5.45,1.4)},this);
		this.buenintento.scale.setTo(s,s);
		this.perdon=this.add.button(540,300,'perdon',function(){this.startSound(6.8,1)},this);
		this.perdon.scale.setTo(s,s);
		this.principiante=this.add.button(730,295,'principiante',function(){this.startSound(7.6,1.8)},this);
		this.principiante.scale.setTo(s,s);
		this.gracias=this.add.button(970,315,'gracias',function(){this.startSound(9.3,1.5)},this);
		this.gracias.scale.setTo(s,s);
	},
	startSound:function(mark1,mark2){new Sound(this,mark1,mark2);},
};
var Sound=function(game,mark1,mark2){this.music=game.add.sound('voces',1,false);this.music.addMarker('gbv',mark1,mark2);this.music.onStop.add(this.Destroy,this);this.music.play('gbv');}
Sound.prototype={Destroy:function(){delete this.music;}}