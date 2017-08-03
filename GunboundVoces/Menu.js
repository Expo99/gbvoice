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
		this.background = this.add.tileSprite(0,0,this.world.width, this.world.height,'fondo');
		this.hola=this.add.button(150,100,'hola',function(){this.startSound(0,0.7)},this);
		this.hola.scale.setTo(2.5,2.5);
		this.adios=this.add.button(350,100,'adios',function(){this.startSound(0.8,0.9)},this);
		this.adios.scale.setTo(2.5,2.5);
		this.diosmio=this.add.button(550,100,'diosmio',function(){this.startSound(1.43,1.45)},this);
		this.diosmio.scale.setTo(2.5,2.5);
		this.ayuda=this.add.button(750,100,'ayuda',function(){this.startSound(2.7,1.35)},this);
		this.ayuda.scale.setTo(2.5,2.5);
		this.bien=this.add.button(950,100,'bien',function(){this.startSound(3.9,0.9)},this);
		this.bien.scale.setTo(2.5,2.5);
		this.muybien=this.add.button(100,400,'muybien',function(){this.startSound(6)},this);
		this.buenintento=this.add.button(300,400,'buenintento',function(){this.startSound(7)},this);
		this.perdon=this.add.button(500,400,'perdon',function(){this.startSound(8)},this);
		this.principiante=this.add.button(700,400,'principiante',function(){this.startSound(9)},this);
		this.gracias=this.add.button(900,400,'gracias',function(){this.startSound(10)},this);
	},
	startSound:function(mark1,mark2){new Sound(this,mark1,mark2);},
};
var Sound=function(game,mark1,mark2){this.music=game.add.sound('voces',1,false);this.music.addMarker('gbv',mark1,mark2);this.music.onStop.add(this.Destroy,this);this.music.play('gbv');}
Sound.prototype={Destroy:function(){delete this.music;}}