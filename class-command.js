/*:
	@include:
		{
			"work": "work",
			"chore": "chore"
		}
	@end-include

	@module-documentation:

	@end-module-documentation

	@module-configuration:
		{
			"fileName": "class-command.js",
			"moduleName": "Command",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": false
		}
	@end-module-configuration
*/
Command = function Command( command ){
	/*:
		@meta-configuration:
			{
				"command": "string"
			}
		@end-meta-configuration
	*/
	if( this instanceof Command ){
		this.command = command.trim( );
	}else{
		return new Command( command );
	}
};

Command.prototype.appendNextCommand = function appendNextCommand( command ){
	/*:
		@meta-configuration:
			{
				"command": "string"
			}
		@end-meta-configuration
	*/
	this.command += " && " + command;
};

Command.prototype.addFallbackCommand = function addFallbackCommand( command ){
	/*:
		@meta-configuration:
			{
				"command": "string"
			}
		@end-meta-configuration
	*/
	this.command += " || " + command;
};

Command.prototype.addParallelCommand = function addParallelCommand( command ){
	if( "commandList" in this ){

	}
};

Command.prototype.executeAsWork = function executeAsWork( callback ){
	/*:
		@meta-configuration:
			{
				"callback:optional": "Callback"
			}
		@end-meta-configuration
	*/
	return work( this.command,
		function callback( error, results ){
			self.workResults = results;
			callback( error, results );
		} );
};

Command.prototype.executeAsChore = function executeAsChore( callback ){
	/*:
		@meta-configuration:
			{
				"callback:optional": "Callback"
			}
		@end-meta-configuration
	*/
	return chore( this.command,
		function callback( error, state ){
			self.choreState = state;
			callback( error, state );
		} );
};