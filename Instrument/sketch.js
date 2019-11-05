let osc
let osc2
let osc3
let env
let env2
let frequency
let noise //just all the tones
let filter //takes out certain frequencies

let radius = 0
let cursorX = 0
let cursorY = 0





//notes on stuff!!!  Loading images and sample sounds
//must be in a personal server

let pio

function preload() {
	pio = loadImage('test.jpg')
}
 //in draw:  image(pio, X coordinate, Y coordinate, Width, Height)

function setup() {

	let canvas = createCanvas(windowWidth, windowHeight)
	canvas.parent("p5")

	osc = new p5.Oscillator()
	osc.setType("square") // "triangle" "sine" "sawtooth"
	osc.amp(0)

	osc2 = new p5.Oscillator()
	osc2.setType("square")
	osc2.amp(0)

	osc3 = new p5.Oscillator()
	osc3.setType("square")
	osc3.amp(0)

	// noise = new p5.noise()
	// noise.setType("white") // "brown" "pink"
	// noise.amp(0)

	env = new p5.Envelope()
	env.setADSR(.1, .1, .2, .2)

}

function draw() {
	background(0)
	noStroke()
	push()
		fill(250, 250, 150)
		ellipse(cursorX, cursorY, radius)

		if (radius > 0 && mouseIsPressed == false) {
			radius -= 1
		}

	pop()
	
	// map(frequency, 50, 2000, 0, 255)
	// fill(map(frequency, 50, 2000, 0, 255), map(frequency, 50, 2000, 0, 255), map(frequency, 50, 2000, 0, 255))
	
	

	push()
		if (osc.getType() == "square") {
			fill(150, 150, 250)
		} else {
			fill(250, 150, 150)
		}
		
		rect(10, 10, 60, 60)
	pop()
}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}


function mouseClicked() {
	if (mouseX > 10 && mouseX < 60 && mouseY > 10 && mouseY < 60) {
		if (osc.getType() == "square") {
			osc.setType("sine")
			osc2.setType("sine")
		} else {
			osc.setType("square")
			osc2.setType("sine")
		}
	}
}

function mousePressed() {
	osc.start()
	osc.amp(env)
	env.triggerAttack()
	mouseDragged()

	osc2.start()
	osc2.amp(env)
	env.triggerAttack()
	mouseDragged()

	// osc3.start()
	// osc3.amp(env)
	// env.triggerAttack()
	// mouseDragged()

	radius = 30

	cursorX = mouseX
	cursorY = mouseY

}

function mouseReleased () {
	// osc.stop()
	env.triggerRelease()
}

function mouseDragged() {
	frequency = map(mouseY, 0, height, 2000, 500)
	osc.freq(frequency)

	frequency2 = map(mouseY, 0, height, 1500, 375)
	osc2.freq(frequency2)

	// frequency3 = map(mouseY, 0, height, 2667, 666)
	// osc3.freq(frequency3)

	// if (mouseX < width/2) {
	// 	osc.setType("sine")
	// } else {
	// 	osc.setType("square")
	// }

	let pan = (mouseX, 0, width, -1, 1)
	osc.pan(pan)
	osc2.pan(pan)
	osc3.pan(pan)

	cursorX = mouseX
	cursorY = mouseY
}
