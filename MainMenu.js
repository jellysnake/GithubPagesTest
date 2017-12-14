
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {
		this.add.sprite(0, 0, "mainMenuBackground");
		this.playButton = this.add.button(400, 600, 'button', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
	},

	update: function () {
		
		//	Do some nice funky main menu effect here

	},

	startGame: function (pointer) {

		//	And start the actual game
		this.state.start('Game');

	}

};
