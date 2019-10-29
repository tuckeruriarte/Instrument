//oscillators
	let osc1
	let osc2
	let osc3
	let osc4
	let osc5
	let osc6
	let osc7
	let osc8
	let osc9
	let osc10

	let osc1b
	let osc2b
	let osc3b
	let osc4b
	let osc5b
	let osc6b
	let osc7b
	let osc8b
	let osc9b
	let osc10b

	let osc1c
	let osc2c
	let osc3c
	let osc4c
	let osc5c
	let osc6c
	let osc7c
	let osc8c
	let osc9c
	let osc10c

//envelopes
	let env1
	let env2
	let env3
	let env4
	let env5
	let env6
	let env7
	let env8
	let env9
	let env10

	let env1b
	let env2b
	let env3b
	let env4b
	let env5b
	let env6b
	let env7b
	let env8b
	let env9b
	let env10b

	let env1c
	let env2c
	let env3c
	let env4c
	let env5c
	let env6c
	let env7c
	let env8c
	let env9c
	let env10c

//circle radii
	let r1 = 10
	let r2 = 10
	let r3 = 10
	let r4 = 10
	let r5 = 10
	let r6 = 10
	let r7 = 10
	let r8 = 10
	let r9 = 10
	let r10 = 10

	let r1b = 10
	let r2b = 10
	let r3b = 10
	let r4b = 10
	let r5b = 10
	let r6b = 10
	let r7b = 10
	let r8b = 10
	let r9b = 10
	let r10b = 10

	let r1c = 10
	let r2c = 10
	let r3c = 10
	let r4c = 10
	let r5c = 10
	let r6c = 10
	let r7c = 10
	let r8c = 10
	let r9c = 10
	let r10c = 10


let a = 0
let d = 0
let s = 100
let f = .2


let noise //just all the tones
let filter //takes out certain frequencies



function setup() {

	let canvas = createCanvas(windowWidth, windowHeight)
	canvas.parent("p5")

	//oscillators
		//A line
			osc1 = new p5.Oscillator()
			osc1.setType("square") // "triangle" "sine" "sawtooth"
			osc1.amp(0)

			osc2 = new p5.Oscillator()
			osc2.setType("square")
			osc2.amp(0)

			osc3 = new p5.Oscillator()
			osc3.setType("square")
			osc3.amp(0)

			osc4 = new p5.Oscillator()
			osc4.setType("square")
			osc4.amp(0)

			osc5 = new p5.Oscillator()
			osc5.setType("square")
			osc5.amp(0)

			osc6 = new p5.Oscillator()
			osc6.setType("square")
			osc6.amp(0)

			osc7 = new p5.Oscillator()
			osc7.setType("square")
			osc7.amp(0)

			osc8 = new p5.Oscillator()
			osc8.setType("square")
			osc8.amp(0)

			osc9 = new p5.Oscillator()
			osc9.setType("square")
			osc9.amp(0)

			osc10 = new p5.Oscillator()
			osc10.setType("square")
			osc10.amp(0)



		//B line
			osc1b = new p5.Oscillator()
			osc1b.setType("square") // "triangle" "sine" "sawtooth"
			osc1b.amp(0)

			osc2b = new p5.Oscillator()
			osc2b.setType("square")
			osc2b.amp(0)

			osc3b = new p5.Oscillator()
			osc3b.setType("square")
			osc3b.amp(0)

			osc4b = new p5.Oscillator()
			osc4b.setType("square")
			osc4b.amp(0)

			osc5b = new p5.Oscillator()
			osc5b.setType("square")
			osc5b.amp(0)

			osc6b = new p5.Oscillator()
			osc6b.setType("square")
			osc6b.amp(0)

			osc7b = new p5.Oscillator()
			osc7b.setType("square")
			osc7b.amp(0)

			osc8b = new p5.Oscillator()
			osc8b.setType("square")
			osc8b.amp(0)

			osc9b = new p5.Oscillator()
			osc9b.setType("square")
			osc9b.amp(0)

			osc10b = new p5.Oscillator()
			osc10b.setType("square")
			osc10b.amp(0)



		//C line
			osc1c = new p5.Oscillator()
			osc1c.setType("square") // "triangle" "sine" "sawtooth"
			osc1c.amp(0)

			osc2c = new p5.Oscillator()
			osc2c.setType("square")
			osc2c.amp(0)

			osc3c = new p5.Oscillator()
			osc3c.setType("square")
			osc3c.amp(0)

			osc4c = new p5.Oscillator()
			osc4c.setType("square")
			osc4c.amp(0)

			osc5c = new p5.Oscillator()
			osc5c.setType("square")
			osc5c.amp(0)

			osc6c = new p5.Oscillator()
			osc6c.setType("square")
			osc6c.amp(0)

			osc7c = new p5.Oscillator()
			osc7c.setType("square")
			osc7c.amp(0)

			osc8c = new p5.Oscillator()
			osc8c.setType("square")
			osc8c.amp(0)

			osc9c = new p5.Oscillator()
			osc9c.setType("square")
			osc9c.amp(0)

			osc10c = new p5.Oscillator()
			osc10c.setType("square")
			osc10c.amp(0)

	//envelopes
		//A line
			env1 = new p5.Envelope()
			env1.setADSR(a, d, s, f)

			env2 = new p5.Envelope()
			env2.setADSR(a, d, s, f)

			env3 = new p5.Envelope()
			env3.setADSR(a, d, s, f)

			env4 = new p5.Envelope()
			env4.setADSR(a, d, s, f)

			env5 = new p5.Envelope()
			env5.setADSR(a, d, s, f)

			env6 = new p5.Envelope()
			env6.setADSR(a, d, s, f)

			env7 = new p5.Envelope()
			env7.setADSR(a, d, s, f)

			env8 = new p5.Envelope()
			env8.setADSR(a, d, s, f)

			env9 = new p5.Envelope()
			env9.setADSR(a, d, s, f)

			env10 = new p5.Envelope()
			env10.setADSR(a, d, s, f)



		//B line
			env1b = new p5.Envelope()
			env1b.setADSR(a, d, s, f)

			env2b = new p5.Envelope()
			env2b.setADSR(a, d, s, f)

			env3b = new p5.Envelope()
			env3b.setADSR(a, d, s, f)

			env4b = new p5.Envelope()
			env4b.setADSR(a, d, s, f)

			env5b = new p5.Envelope()
			env5b.setADSR(a, d, s, f)

			env6b = new p5.Envelope()
			env6b.setADSR(a, d, s, f)

			env7b = new p5.Envelope()
			env7b.setADSR(a, d, s, f)

			env8b = new p5.Envelope()
			env8b.setADSR(a, d, s, f)

			env9b = new p5.Envelope()
			env9b.setADSR(a, d, s, f)

			env10b = new p5.Envelope()
			env10b.setADSR(a, d, s, f)


		//C line
			env1c = new p5.Envelope()
			env1c.setADSR(a, d, s, f)

			env2c = new p5.Envelope()
			env2c.setADSR(a, d, s, f)

			env3c = new p5.Envelope()
			env3c.setADSR(a, d, s, f)

			env4c = new p5.Envelope()
			env4c.setADSR(a, d, s, f)

			env5c = new p5.Envelope()
			env5c.setADSR(a, d, s, f)

			env6c = new p5.Envelope()
			env6c.setADSR(a, d, s, f)

			env7c = new p5.Envelope()
			env7c.setADSR(a, d, s, f)

			env8c = new p5.Envelope()
			env8c.setADSR(a, d, s, f)

			env9c = new p5.Envelope()
			env9c.setADSR(a, d, s, f)

			env10c = new p5.Envelope()
			env10c.setADSR(a, d, s, f)

	// noise = new p5.noise()
	// noise.setType("white") // "brown" "pink"
	// noise.amp(0)

}

function draw() {
	background(0)
	noStroke()


	//A line
		fill(250, 250, 150) //C6
		ellipse(width/11, 2*height/6, r1)

		if (keyIsDown(81)) {
				r1 = 30
				osc1.freq(1046.50)
				osc1.amp(env1)
			} 	
			else if (r1 > 10){
				r1 -= 1
				env1.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(2*width/11, 2*height/6, r2)

		if (keyIsDown(87)) {
				r2 = 30
				osc2.freq(1174.66)
				osc2.amp(env2)
			} 	
			else if (r2 > 10){
				r2 -= 1
				env2.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(3*width/11, 2*height/6, r3)

		if (keyIsDown(69)) {
				r3 = 30
				osc3.freq(1318.51)
				osc3.amp(env3)
			} 	
			else if (r3 > 10){
				r3 -= 1
				env3.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(4*width/11, 2*height/6, r4)

		if (keyIsDown(82)) {
				r4 = 30
				osc4.freq(1396.91)
				osc4.amp(env4)
			} 	
			else if (r4 > 10){
				r4 -= 1
				env4.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(5*width/11, 2*height/6, r5)

		if (keyIsDown(84)) {
				r5 = 30
				osc5.freq(1567.98)
				osc5.start()
				osc5.amp(env5)
				env5.triggerAttack()
			} 	
			else if (r5 > 10){
				r5 -= 1
				env5.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(6*width/11, 2*height/6, r6)

		if (keyIsDown(89)) {
				r6 = 30
				osc6.freq(1760.00)
				osc6.start()
				osc6.amp(env6)
				env6.triggerAttack()
			} 	
			else if (r6 > 10){
				r6 -= 1
				env6.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(7*width/11, 2*height/6, r7)

		if (keyIsDown(85)) {
				r7 = 30
				osc7.freq(1975.53)
				osc7.start()
				osc7.amp(env7)
				env7.triggerAttack()
			} 	
			else if (r7 > 10){
				r7 -= 1
				env7.triggerRelease()
			}
		


		fill(250, 250, 150)
		ellipse(8*width/11, 2*height/6, r8)

		if (keyIsDown(73)) {
				r8 = 30
				osc8.freq(2093.00)
				osc8.start()
				osc8.amp(env8)
				env8.triggerAttack()
			} 	
			else if (r8 > 10){
				r8 -= 1
				env8.triggerRelease()
			}



		fill(150, 150, 250)
		ellipse(9*width/11, 2*height/6, r9)

		if (keyIsDown(79)) {
				r9 = 30
				osc9.freq(2349.32)
				osc9.start()
				osc9.amp(env9)
				env9.triggerAttack()
			} 	
			else if (r9 > 10){
				r9 -= 1
				env9.triggerRelease()
			}



		fill(150, 150, 250)
		ellipse(10*width/11, 2*height/6, r10)

		if (keyIsDown(80)) {
				r10 = 30
				osc10.freq(2637.02)
				osc10.start()
				osc10.amp(env10)
				env10.triggerAttack()
			} 	
			else if (r10 > 10){
				r10 -= 1
				env10.triggerRelease()
			}






	//B line
		fill(250, 250, 150) //C5
		ellipse(width/11, 3*height/6, r1b)

		if (keyIsDown(65)) {
				r1b = 30
				osc1b.freq(523.25)
				osc1b.start()
				osc1b.amp(env1b)
				env1b.triggerAttack()
			} 	
			else if (r1b > 10){
				r1b -= 1
				env1b.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(2*width/11, 3*height/6, r2b)

		if (keyIsDown(83)) {
				r2b = 30
				osc2b.freq(587.33)
				osc2b.start()
				osc2b.amp(env2b)
				env2b.triggerAttack()
			} 	
			else if (r2b > 10){
				r2b -= 1
				env2b.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(3*width/11, 3*height/6, r3b)

		if (keyIsDown(68)) {
				r3b = 30
				osc3b.freq(659.25)
				osc3b.start()
				osc3b.amp(env3b)
				env3b.triggerAttack()
			} 	
			else if (r3b > 10){
				r3b -= 1
				env3b.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(4*width/11, 3*height/6, r4b)

		if (keyIsDown(70)) {
				r4b = 30
				osc4b.freq(698.46)
				osc4b.start()
				osc4b.amp(env4b)
				env4b.triggerAttack()
			} 	
			else if (r4b > 10){
				r4b -= 1
				env4b.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(5*width/11, 3*height/6, r5b)

		if (keyIsDown(71)) {
				r5b = 30
				osc5b.freq(783.99)
				osc5b.start()
				osc5b.amp(env5b)
				env5b.triggerAttack()
			} 	
			else if (r5b > 10){
				r5b -= 1
				env5b.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(6*width/11, 3*height/6, r6b)

		if (keyIsDown(72)) {
				r6b = 30
				osc6b.freq(880.00)
				osc6b.start()
				osc6b.amp(env6b)
				env6b.triggerAttack()
			} 	
			else if (r6b > 10){
				r6b -= 1
				env6b.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(7*width/11, 3*height/6, r7b)

		if (keyIsDown(74)) {
				r7b = 30
				osc7b.freq(987.77)
				osc7b.start()
				osc7b.amp(env7b)
				env7b.triggerAttack()
			} 	
			else if (r7b > 10){
				r7b -= 1
				env7b.triggerRelease()
			}
		


		fill(150, 150, 250) //C6 -- make settings?
		ellipse(8*width/11, 3*height/6, r8b)

		if (keyIsDown(75)) {
				r8b = 30
				osc8b.freq(1046.50)
				osc8b.start()
				osc8b.amp(env8b)
				env8b.triggerAttack()
			} 	
			else if (r8b > 10){
				r8b -= 1
				env8b.triggerRelease()
			}



		fill(150, 150, 250) //not coded yet, settings?
		ellipse(9*width/11, 3*height/6, r9b)

		if (keyIsDown(76)) {
				r9b = 30
				osc9b.freq(2349.32)
				osc9b.start()
				osc9b.amp(env9b)
				env9b.triggerAttack()
			} 	
			else if (r9b > 10){
				r9b -= 1
				env9b.triggerRelease()
			}



		fill(150, 150, 250) //same as above
		ellipse(10*width/11, 3*height/6, r10b)

		if (keyIsDown(186)) {
				r10b = 30
				osc10b.freq(2637.02)
				osc10b.start()
				osc10b.amp(env10b)
				env10b.triggerAttack()
			} 	
			else if (r10b > 10){
				r10b -= 1
				env10b.triggerRelease()
			}






	//C line
		fill(250, 250, 150)
		ellipse(width/11, 4*height/6, r1c)

		if (keyIsDown(90)) {
				r1c = 30
				osc1c.freq(261.63)
				osc1c.start()
				osc1c.amp(env1c)
				env1c.triggerAttack()
			} 	
			else if (r1c > 10){
				r1c -= 1
				env1c.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(2*width/11, 4*height/6, r2c)

		if (keyIsDown(88)) {
				r2c = 30
				osc2c.freq(293.66)
				osc2c.start()
				osc2c.amp(env2c)
				env2c.triggerAttack()
			} 	
			else if (r2c > 10){
				r2c -= 1
				env2c.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(3*width/11, 4*height/6, r3c)

		

		if (keyIsDown(67)) {
				r3c = 30
				osc3c.freq(329.63)
				osc3c.start()
				osc3c.amp(env3c)
				env3c.triggerAttack()
			} 	
			else if (r3c > 10){
				r3c -= 1
				env3c.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(4*width/11, 4*height/6, r4c)

		if (keyIsDown(86)) {
				r4c = 30
				osc4c.freq(349.23)
				osc4c.start()
				osc4c.amp(env4c)
				env4c.triggerAttack()
			} 	
			else if (r4c > 10){
				r4c -= 1
				env4c.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(5*width/11, 4*height/6, r5c)

		if (keyIsDown(66)) {
				r5c = 30
				osc5c.freq(392.00)
				osc5c.start()
				osc5c.amp(env5c)
				env5c.triggerAttack()
			} 	
			else if (r5c > 10){
				r5c -= 1
				env5c.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(6*width/11, 4*height/6, r6c)

		if (keyIsDown(78)) {
				r6c = 30
				osc6c.freq(440.00)
				osc6c.start()
				osc6c.amp(env6c)
				env6c.triggerAttack()
			} 	
			else if (r6c > 10){
				r6c -= 1
				env6c.triggerRelease()
			}



		fill(250, 250, 150)
		ellipse(7*width/11, 4*height/6, r7c)

		if (keyIsDown(77)) {
				r7c = 30
				osc7c.freq(493.88)
				osc7c.start()
				osc7c.amp(env7c)
				env7c.triggerAttack()
			} 	
			else if (r7c > 10){
				r7c -= 1
				env7c.triggerRelease()
			}
		


		fill(150, 150, 250) //C5 again
		ellipse(8*width/11, 4*height/6, r8c)

		if (keyIsDown(188)) {
				r8c = 30
				osc8c.freq(523.25)
				osc8c.start()
				osc8c.amp(env8c)
				env8c.triggerAttack()
			} 	
			else if (r8c > 10){
				r8c -= 1
				env8c.triggerRelease()
			}



		fill(150, 150, 250)
		ellipse(9*width/11, 4*height/6, r9c)

		if (keyIsDown(190)) {
				r9c = 30
				osc9c.freq(2349.32)
				osc9c.start()
				osc9c.amp(env9c)
				env9c.triggerAttack()
			} 	
			else if (r9c > 10){
				r9c -= 1
				env9c.triggerRelease()
			}



		fill(150, 150, 250)
		ellipse(10*width/11, 4*height/6, r10c)

		if (keyIsDown(191)) {
				r10c = 30
				osc10c.freq(2637.02)
				osc10c.start()
				osc10c.amp(env10c)
				env10c.triggerAttack()
			} 	
			else if (r10c > 10){
				r10c -= 1
				env10c.triggerRelease()
			}



}


function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}


function keyPressed() {

	if (keyCode === 81) {
		osc1.start()
		env1.triggerAttack()
	}

	if (keyCode === 87) {
		osc2.start()
		env2.triggerAttack()
	}

	if (keyCode === 69) {
		osc3.start()
		env3.triggerAttack()
	}

	if (keyCode === 82) {
		osc4.start()
		env4.triggerAttack()
	}

	if (keyCode === 85) {
		osc5.start()
		env5.triggerAttack()
	}

	if (keyCode === 89) {
		osc6.start()
		env6.triggerAttack()
	}

}




// function mouseClicked() {
// 	if (mouseX > 10 && mouseX < 60 && mouseY > 10 && mouseY < 60) {
// 		if (osc.getType() == "square") {
// 			osc.setType("sine")
// 			osc2.setType("sine")
// 		} else {
// 			osc.setType("square")
// 			osc2.setType("sine")
// 		}
// 	}
// }

// function mousePressed() {
// 	osc.start()
// 	osc.amp(env)
// 	env.triggerAttack()
// 	mouseDragged()

// 	osc2.start()
// 	osc2.amp(env)
// 	env.triggerAttack()
// 	mouseDragged()

// 	// osc3.start()
// 	// osc3.amp(env)
// 	// env.triggerAttack()
// 	// mouseDragged()


// 	cursorX = mouseX
// 	cursorY = mouseY

// }

// function mouseReleased () {
// 	// osc.stop()
// 	env.triggerRelease()
// }

// function mouseDragged() {
// 	frequency = map(mouseY, 0, height, 2000, 500)
// 	osc.freq(frequency)

// 	frequency2 = map(mouseY, 0, height, 1500, 375)
// 	osc2.freq(frequency2)

// 	// frequency3 = map(mouseY, 0, height, 2667, 666)
// 	// osc3.freq(frequency3)

// 	// if (mouseX < width/2) {
// 	// 	osc.setType("sine")
// 	// } else {
// 	// 	osc.setType("square")
// 	// }

	// let pan = (mouseX, 0, width, -1, 1)
	// osc.pan(pan)
	// osc2.pan(pan)
	// osc3.pan(pan)

// }

