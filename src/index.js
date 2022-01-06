import Login from './scenes/Login.js';

var loginServer = new WebSocket("ws://localhost:6112")
var global = {}

loginServer.onmessage = function(event) {
	console.log("[PACKET RECEIVED] => " + event.data)
	var packet = event.data.split('%')
	var packetType = packet[2]
	var packetContent = packet[4]
	if (packetType == "l"){
		global.credentials = packetContent
		var friendsLogin = packet[5]
		var worldPop = packet[7]
		worldPop = worldPop.split('|')
	}
}

export function sendXMLPacket(packet){
	loginServer.send(packet)
}

export function getCredentials(){
	return global.credentials
}

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1520,
		height: 960,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		parent: 'game',
		dom: {
        	createContainer: true
    	},
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		scene: {
			create: create
		}
	});

});

function create() {
		this.scene.add("Login", Login, true);
}

