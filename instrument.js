//oscillators
	//A line
		let osc1
		let osc2
		let osc3
		let osc4
		let osc5
		let osc6
		let osc7
		let osc8

	//B line
		let osc1b
		let osc2b
		let osc3b
		let osc4b
		let osc5b
		let osc6b
		let osc7b

	//C line
		let osc1c
		let osc2c
		let osc3c
		let osc4c
		let osc5c
		let osc6c
		let osc7c

//envelopes
	//A line
		let env1
		let env2
		let env3
		let env4
		let env5
		let env6
		let env7
		let env8

	//B line
		let env1b
		let env2b
		let env3b
		let env4b
		let env5b
		let env6b
		let env7b

	//C line
		let env1c
		let env2c
		let env3c
		let env4c
		let env5c
		let env6c
		let env7c

//reverb
	//A line
		let reverb1
		let reverb2
	    let reverb3
	    let reverb4
	    let reverb5
	    let reverb6
	    let reverb7
	    let reverb8

	//B line
	    let reverb1b
	    let reverb2b
	    let reverb3b
	    let reverb4b
	    let reverb5b
	    let reverb6b
	    let reverb7b

	//C line
	    let reverb1c
	    let reverb2c
	    let reverb3c
	    let reverb4c
	    let reverb5c
	    let reverb6c
	    let reverb7c

//circle radii
	let r1 = 10
	let r2 = 10
	let r3 = 10
	let r4 = 10
	let r5 = 10
	let r6 = 10
	let r7 = 10
	let r8 = 10

	let r1b = 10
	let r2b = 10
	let r3b = 10
	let r4b = 10
	let r5b = 10
	let r6b = 10
	let r7b = 10

	let r1c = 10
	let r2c = 10
	let r3c = 10
	let r4c = 10
	let r5c = 10
	let r6c = 10
	let r7c = 10

//adsr
	let a = 0.01
	let d = .5
	let s = .5
	let f = 0.01

let wave = "square"

let rev = false





function setup() {

	let canvas = createCanvas(windowWidth, windowHeight)
	canvas.parent("p5")

	//oscillators
		//A line
			osc1 = new p5.Oscillator()
			osc1.amp(0)

			osc2 = new p5.Oscillator()
			osc2.amp(0)

			osc3 = new p5.Oscillator()
			osc3.amp(0)

			osc4 = new p5.Oscillator()
			osc4.amp(0)

			osc5 = new p5.Oscillator()
			osc5.amp(0)

			osc6 = new p5.Oscillator()
			osc6.amp(0)

			osc7 = new p5.Oscillator()
			osc7.amp(0)

			osc8 = new p5.Oscillator()
			osc8.amp(0)



		//B line
			osc1b = new p5.Oscillator()
			osc1b.amp(0)

			osc2b = new p5.Oscillator()
			osc2b.amp(0)

			osc3b = new p5.Oscillator()
			osc3b.amp(0)

			osc4b = new p5.Oscillator()
			osc4b.amp(0)

			osc5b = new p5.Oscillator()
			osc5b.amp(0)

			osc6b = new p5.Oscillator()
			osc6b.amp(0)

			osc7b = new p5.Oscillator()
			osc7b.setType(wave)
			osc7b.amp(0)



		//C line
			osc1c = new p5.Oscillator()
			osc1c.amp(0)

			osc2c = new p5.Oscillator()
			osc2c.amp(0)

			osc3c = new p5.Oscillator()
			osc3c.amp(0)

			osc4c = new p5.Oscillator()
			osc4c.amp(0)

			osc5c = new p5.Oscillator()
			osc5c.amp(0)

			osc6c = new p5.Oscillator()
			osc6c.amp(0)

			osc7c = new p5.Oscillator()
			osc7c.amp(0)



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



	//reverberators
		//A line
			reverb1 = new p5.Reverb()
		    reverb1.disconnect()

		    reverb2 = new p5.Reverb()
		    reverb2.disconnect()

		    reverb3 = new p5.Reverb()
		    reverb3.disconnect()

		    reverb4 = new p5.Reverb()
		    reverb4.disconnect()

		    reverb5 = new p5.Reverb()
		    reverb5.disconnect()

		    reverb6 = new p5.Reverb()
		    reverb6.disconnect()

		    reverb7 = new p5.Reverb()
		    reverb7.disconnect()

		    reverb8 = new p5.Reverb()
		    reverb8.disconnect()



		//B line
		    reverb1b = new p5.Reverb()
		    reverb1b.disconnect()

		    reverb2b = new p5.Reverb()
		    reverb2b.disconnect()

		    reverb3b = new p5.Reverb()
		    reverb3b.disconnect()

		    reverb4b = new p5.Reverb()
		    reverb4b.disconnect()

		    reverb5b = new p5.Reverb()
		    reverb5b.disconnect()

		    reverb6b = new p5.Reverb()
		    reverb6b.disconnect()

		    reverb7b = new p5.Reverb()
		    reverb7b.disconnect()



		//C line
		    reverb1c = new p5.Reverb()
		    reverb1c.disconnect()

		    reverb2c = new p5.Reverb()
		    reverb2c.disconnect()

		    reverb3c = new p5.Reverb()
		    reverb3c.disconnect()

		    reverb4c = new p5.Reverb()
		    reverb4c.disconnect()

		    reverb5c = new p5.Reverb()
		    reverb5c.disconnect()

		    reverb6c = new p5.Reverb()
		    reverb6c.disconnect()

		    reverb7c = new p5.Reverb()
		    reverb7c.disconnect()


}

function draw() {
	background(0)
	noStroke()


	//A line
		push()
		translate(-(width/33), 0)
			fill(250, 250, 150) //C6
			ellipse(width/11, 2*height/6, r1)

			if (keyIsDown(81)) {
					r1 = 30
					osc1.freq(1046.50) //move out of draw
					osc1.amp(env1)
					env1.setADSR(a, d, s, f)

				} 	
				else if (r1 > 10){
					r1 -= 1
				}



			fill(250, 250, 150)
			ellipse(2*width/11, 2*height/6, r2)

			if (keyIsDown(87)) {
					r2 = 30
					osc2.freq(1174.66)
					osc2.amp(env2)
					env2.setADSR(a, d, s, f)
				} 	
				else if (r2 > 10){
					r2 -= 1
				}



			fill(250, 250, 150)
			ellipse(3*width/11, 2*height/6, r3)

			if (keyIsDown(69)) {
					r3 = 30
					osc3.freq(1318.51)
					osc3.amp(env3)
					env3.setADSR(a, d, s, f)
				} 	
				else if (r3 > 10){
					r3 -= 1
				}



			fill(250, 250, 150)
			ellipse(4*width/11, 2*height/6, r4)

			if (keyIsDown(82)) {
					r4 = 30
					osc4.freq(1396.91)
					osc4.amp(env4)
					env4.setADSR(a, d, s, f)
				} 	
				else if (r4 > 10){
					r4 -= 1
				}



			fill(250, 250, 150)
			ellipse(5*width/11, 2*height/6, r5)

			if (keyIsDown(84)) {
					r5 = 30
					osc5.freq(1567.98)
					osc5.amp(env5)
					env5.setADSR(a, d, s, f)
				} 	
				else if (r5 > 10){
					r5 -= 1
				}



			fill(250, 250, 150)
			ellipse(6*width/11, 2*height/6, r6)

			if (keyIsDown(89)) {
					r6 = 30
					osc6.freq(1760.00)
					osc6.amp(env6)
					env6.setADSR(a, d, s, f)
				} 	
				else if (r6 > 10){
					r6 -= 1
				}



			fill(250, 250, 150)
			ellipse(7*width/11, 2*height/6, r7)

			if (keyIsDown(85)) {
					r7 = 30
					osc7.freq(1975.53)
					osc7.amp(env7)
					env7.setADSR(a, d, s, f)
				} 	
				else if (r7 > 10){
					r7 -= 1
				}
			


			fill(250, 250, 150)
			ellipse(8*width/11, 2*height/6, r8)

			if (keyIsDown(73)) {
					r8 = 30
					osc8.freq(2093.00)
					osc8.amp(env8)
					env8.setADSR(a, d, s, f)
				} 	
				else if (r8 > 10){
					r8 -= 1
				}





			//Settings
				fill(150, 150, 250)
				ellipse(9*width/11, 2*height/6, 30)

				if (rev == true) {
					fill(250, 150, 150)
					ellipse(9*width/11, 2*height/6, 30)					
					} 	



				fill(150, 150, 250)
				ellipse(10*width/11, 2*height/6, 30)

				if (rev == false) {
					fill(250, 150, 150)
					ellipse(10*width/11, 2*height/6, 30)
					}

		pop()









	//B line
		fill(250, 250, 150) //C5
		ellipse(width/11, 3*height/6, r1b)

		if (keyIsDown(65)) {
				r1b = 30
				osc1b.freq(523.25)
				osc1b.amp(env1b)
				env1b.setADSR(a, d, s, f)
			} 	
			else if (r1b > 10){
				r1b -= 1
			}



		fill(250, 250, 150)
		ellipse(2*width/11, 3*height/6, r2b)

		if (keyIsDown(83)) {
				r2b = 30
				osc2b.freq(587.33)
				osc2b.amp(env2b)
				env2b.setADSR(a, d, s, f)
			} 	
			else if (r2b > 10){
				r2b -= 1
			}



		fill(250, 250, 150)
		ellipse(3*width/11, 3*height/6, r3b)

		if (keyIsDown(68)) {
				r3b = 30
				osc3b.freq(659.25)
				osc3b.amp(env3b)
				env3b.setADSR(a, d, s, f)
			} 	
			else if (r3b > 10){
				r3b -= 1
			}



		fill(250, 250, 150)
		ellipse(4*width/11, 3*height/6, r4b)

		if (keyIsDown(70)) {
				r4b = 30
				osc4b.freq(698.46)
				osc4b.amp(env4b)
				env4b.setADSR(a, d, s, f)
			} 	
			else if (r4b > 10){
				r4b -= 1
			}



		fill(250, 250, 150)
		ellipse(5*width/11, 3*height/6, r5b)

		if (keyIsDown(71)) {
				r5b = 30
				osc5b.freq(783.99)
				osc5b.amp(env5b)
				env5b.setADSR(a, d, s, f)
			} 	
			else if (r5b > 10){
				r5b -= 1
			}



		fill(250, 250, 150)
		ellipse(6*width/11, 3*height/6, r6b)

		if (keyIsDown(72)) {
				r6b = 30
				osc6b.freq(880.00)
				osc6b.amp(env6b)
				env6b.setADSR(a, d, s, f)
			} 	
			else if (r6b > 10){
				r6b -= 1
			}



		fill(250, 250, 150)
		ellipse(7*width/11, 3*height/6, r7b)

		if (keyIsDown(74)) {
				r7b = 30
				osc7b.freq(987.77)
				osc7b.amp(env7b)
				env7b.setADSR(a, d, s, f)
			} 	
			else if (r7b > 10){
				r7b -= 1
			}




		//Settings
			fill(150, 150, 250)
			ellipse(8*width/11, 3*height/6, 30)

			if (wave == "square") {
				fill(250, 150, 150)
				ellipse(8*width/11, 3*height/6, 30)
			}



			fill(150, 150, 250)
			ellipse(9*width/11, 3*height/6, 30)

			if (wave == "sine"){
				fill(250, 150, 150)
				ellipse(9*width/11, 3*height/6, 30)
			}


				
			fill(150, 150, 250)
			ellipse(10*width/11, 3*height/6, 30)

			if (wave == "triangle") {
				fill(250, 150, 150)
				ellipse(10*width/11, 3*height/6, 30)
			}









	//C line

		push()
		translate((width/33), 0)
			fill(250, 250, 150)
			ellipse(width/11, 4*height/6, r1c)

			if (keyIsDown(90)) {
					r1c = 30
					osc1c.freq(261.63)
					osc1c.amp(env1c)
					env1c.setADSR(a, d, s, f)
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
					osc2c.amp(env2c)
					env2c.setADSR(a, d, s, f)
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
					osc3c.amp(env3c)
					env3c.setADSR(a, d, s, f)
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
					osc4c.amp(env4c)
					env4c.setADSR(a, d, s, f)
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
					osc5c.amp(env5c)
					env5c.setADSR(a, d, s, f)
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
					osc6c.amp(env6c)
					env6c.setADSR(a, d, s, f)
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
					osc7c.amp(env7c)
					env7c.setADSR(a, d, s, f)
				} 	
				else if (r7c > 10){
					r7c -= 1
					env7c.triggerRelease()
				}





			//Settings
				fill(150, 150, 250)
				ellipse(8*width/11, 4*height/6, 30)

				if (a == .01) {
						fill(250, 150, 150)
						ellipse(8*width/11, 4*height/6, 30)


					}



				fill(150, 150, 250)
				ellipse(9*width/11, 4*height/6, 30)

				if (a == .001) {
						fill(250, 150, 150)
						ellipse(9*width/11, 4*height/6, 30)
					}



				fill(150, 150, 250)
				ellipse(10*width/11, 4*height/6, 30)

				if (a == .2) {
						fill(250, 150, 150)
						ellipse(10*width/11, 4*height/6, 30)
					}
}











function keyPressed() {

	//A line
		if (keyCode === 81) {
			osc1.setType(wave)
			osc1.start()
			env1.triggerAttack()
		}

		if (keyCode === 87) {
			osc2.setType(wave)
			osc2.start()
			env2.triggerAttack()
		}

		if (keyCode === 69) {
			osc3.setType(wave)
			osc3.start()
			env3.triggerAttack()
		}

		if (keyCode === 82) {
			osc4.setType(wave)
			osc4.start()
			env4.triggerAttack()
		}

		if (keyCode === 84) {
			osc5.setType(wave)
			osc5.start()
			env5.triggerAttack()
		}

		if (keyCode === 89) {
			osc6.setType(wave)
			osc6.start()
			env6.triggerAttack()
		}

		if (keyCode === 85) {
			osc7.setType(wave)
			osc7.start()
			env7.triggerAttack()
		}

		if (keyCode === 73) {
			osc8.setType(wave)
			osc8.start()
			env8.triggerAttack()
		}



		//Settings
			if (keyCode === 79) {
				
				rev = true

				print("reverb on")

				//A line
					osc1.disconnect()
	        		reverb1.connect()
	        		reverb1.process(osc1, 2, 3)

	        		osc2.disconnect()
	        		reverb2.connect()
	        		reverb2.process(osc2, 2, 3)

	        		osc3.disconnect()
	        		reverb3.connect()
	        		reverb3.process(osc3, 2, 3)

	        		osc4.disconnect()
	        		reverb4.connect()
	        		reverb4.process(osc4, 2, 3)

	        		osc5.disconnect()
	        		reverb5.connect()
	        		reverb5.process(osc5, 2, 3)

	        		osc6.disconnect()
	        		reverb6.connect()
	        		reverb6.process(osc6, 2, 3)

	        		osc7.disconnect()
	        		reverb7.connect()
	        		reverb7.process(osc7, 2, 3)

	        		osc8.disconnect()
	        		reverb8.connect()
	        		reverb8.process(osc8, 2, 3)



	        	//B line
	        		osc1b.disconnect()
	        		reverb1b.connect()
	        		reverb1b.process(osc1b, 2, 3)

	        		osc2b.disconnect()
	        		reverb2b.connect()
	        		reverb2b.process(osc2b, 2, 3)

	        		osc3b.disconnect()
	        		reverb3b.connect()
	        		reverb3b.process(osc3b, 2, 3)

	        		osc4b.disconnect()
	        		reverb4b.connect()
	        		reverb4b.process(osc4b, 2, 3)

	        		osc5b.disconnect()
	        		reverb5b.connect()
	        		reverb5b.process(osc5b, 2, 3)

	        		osc6b.disconnect()
	        		reverb6b.connect()
	        		reverb6b.process(osc6b, 2, 3)

	        		osc6b.disconnect()
	        		reverb6b.connect()
	        		reverb6b.process(osc6b, 2, 3)



	        	//C line
	        		osc1c.disconnect()
	        		reverb1c.connect()
	        		reverb1c.process(osc1c, 2, 3)

	        		osc2c.disconnect()
	        		reverb2c.connect()
	        		reverb2c.process(osc2c, 2, 3)

	        		osc3c.disconnect()
	        		reverb3c.connect()
	        		reverb3c.process(osc3c, 2, 3)

	        		osc4c.disconnect()
	        		reverb4c.connect()
	        		reverb4c.process(osc4c, 2, 3)

	        		osc5c.disconnect()
	        		reverb5c.connect()
	        		reverb5c.process(osc5c, 2, 3)

	        		osc6c.disconnect()
	        		reverb6c.connect()
	        		reverb6c.process(osc6c, 2, 3)

	        		osc7c.disconnect()
	        		reverb7c.connect()
	        		reverb7c.process(osc7c, 2, 3)
			}

			if (keyCode === 80) {
				
				rev = false
				print("reverb off")

				//A line
					reverb1.disconnect()
    				osc1.connect()

    				reverb2.disconnect()
    				osc2.connect()

    				reverb3.disconnect()
    				osc3.connect()

    				reverb4.disconnect()
    				osc4.connect()

    				reverb5.disconnect()
    				osc5.connect()

    				reverb6.disconnect()
    				osc6.connect()

    				reverb7.disconnect()
    				osc7.connect()

    				reverb8.disconnect()
    				osc8.connect()



    			//B line
    				reverb1b.disconnect()
    				osc1b.connect()

    				reverb2b.disconnect()
    				osc2b.connect()

    				reverb3b.disconnect()
    				osc3b.connect()

    				reverb4b.disconnect()
    				osc4b.connect()

    				reverb5b.disconnect()
    				osc5b.connect()

    				reverb6b.disconnect()
    				osc6b.connect()

    				reverb7b.disconnect()
    				osc7b.connect()



    			//C line
    				reverb1c.disconnect()
    				osc1c.connect()

    				reverb2c.disconnect()
    				osc2c.connect()

    				reverb3c.disconnect()
    				osc3c.connect()

    				reverb4c.disconnect()
    				osc4c.connect()

    				reverb5c.disconnect()
    				osc5c.connect()

    				reverb6c.disconnect()
    				osc6c.connect()

    				reverb7c.disconnect()
    				osc7c.connect()
			}





	//B line
		if (keyCode === 65) {
			osc1b.setType(wave)
			osc1b.start()
			env1b.triggerAttack()
		}

		if (keyCode === 83) {
			osc2b.setType(wave)
			osc2b.start()
			env2b.triggerAttack()
		}

		if (keyCode === 68) {
			osc3b.setType(wave)
			osc3b.start()
			env3b.triggerAttack()
		}

		if (keyCode === 70) {
			osc4b.setType(wave)
			osc4b.start()
			env4b.triggerAttack()
		}

		if (keyCode === 71) {
			osc5b.setType(wave)
			osc5b.start()
			env5b.triggerAttack()
		}

		if (keyCode === 72) {
			osc6b.setType(wave)
			osc6b.start()
			env6b.triggerAttack()
		}

		if (keyCode === 74) {
			osc7b.setType(wave)
			osc7b.start()
			env7b.triggerAttack()
		}



		//settings for wave
			if (keyCode === 75) {
				wave = "square"
			}

			if (keyCode === 76) {
				wave = "sine"
			}

			if (keyCode === 186) {
				wave = "triangle"		
			}





	//C line
		if (keyCode === 90) {
			osc1c.setType(wave)
			osc1c.start()
			env1c.triggerAttack()
		}

		if (keyCode === 88) {
			osc2c.setType(wave)
			osc2c.start()
			env2c.triggerAttack()
		}

		if (keyCode === 67) {
			osc3c.setType(wave)
			osc3c.start()
			env3c.triggerAttack()
		}

		if (keyCode === 86) {
			osc4c.setType(wave)
			osc4c.start()
			env4c.triggerAttack()
		}

		if (keyCode === 66) {
			osc5c.setType(wave)
			osc5c.start()
			env5c.triggerAttack()
		}

		if (keyCode === 78) {
			osc6c.setType(wave)
			osc6c.start()
			env6c.triggerAttack()
		}

		if (keyCode === 77) {
			osc7c.setType(wave)
			osc7c.start()
			env7c.triggerAttack()
		}



		//settings, delete eventually
			if (keyCode === 188) {
				a = .01
				d = .2
				s = .6
				f = .01
			}

			if (keyCode === 190) {
				a = 0.001
				d = 0.5
				s = 0.4
				f = 0.5
			}

			if (keyCode === 191) {
				a = .2
				d = .5
				s = .2
				f = .5	
			}

}











function keyReleased() {

	//A line
		if (keyCode === 81) {
			env1.triggerRelease()
		}

		if (keyCode === 87) {
			env2.triggerRelease()
		}

		if (keyCode === 69) {
			env3.triggerRelease()
		}

		if (keyCode === 82) {
			env4.triggerRelease()
		}

		if (keyCode === 84) {
			env5.triggerRelease()
		}

		if (keyCode === 89) {
			env6.triggerRelease()
		}

		if (keyCode === 85) {
			env7.triggerRelease()
		}

		if (keyCode === 73) {
			env8.triggerRelease()
		}



	//B line
		if (keyCode === 65) {
			env1b.triggerRelease()
		}

		if (keyCode === 83) {
			env2b.triggerRelease()
		}

		if (keyCode === 68) {
			env3b.triggerRelease()
		}

		if (keyCode === 70) {
			env4b.triggerRelease()
		}

		if (keyCode === 71) {
			env5b.triggerRelease()
		}

		if (keyCode === 72) {
			env6b.triggerRelease()
		}

		if (keyCode === 74) {
			env7b.triggerRelease()
		}



	//C line
		if (keyCode === 90) {
			env1c.triggerRelease()
		}

		if (keyCode === 88) {
			env2c.triggerRelease()
		}

		if (keyCode === 67) {
			env3c.triggerRelease()
		}

		if (keyCode === 86) {
			env4c.triggerRelease()
		}

		if (keyCode === 66) {
			env5c.triggerRelease()
		}

		if (keyCode === 78) {
			env6c.triggerRelease()
		}

		if (keyCode === 77) {
			env7c.triggerRelease()
		}

}




function touchStarted() {
	mousePressed()
	mouseClicked()
}



function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}



// function mousePressed() {  //Ur evnetually going to be able to press/click on the buttons and they'll work
// 		//A line

// 			if ((mouseX > (width/11)-15-(width/33)) && (mouseX < (width/11)+15-(width/33)) & (mouseY > ((2*height)/6)-15) & (mouseY < ((2*height)/6)+15)) {
// 				print("go time")
// 				osc1.start()
// 				env1.triggerAttack()
// 				r1 = 30
// 				}




// 			fill(250, 250, 150)
// 			ellipse(2*width/11, 2*height/6, r2)

// 			if (keyIsDown(87)) {
// 					r2 = 30
// 					osc2.freq(1174.66)
// 					osc2.amp(env2)
// 				} 	
// 				else if (r2 > 10){
// 					r2 -= 1
// 					env2.triggerRelease()
// 				}



// 			fill(250, 250, 150)
// 			ellipse(3*width/11, 2*height/6, r3)

// 			if (keyIsDown(69)) {
// 					r3 = 30
// 					osc3.freq(1318.51)
// 					osc3.amp(env3)
// 				} 	
// 				else if (r3 > 10){
// 					r3 -= 1
// 					env3.triggerRelease()
// 				}



// 			fill(250, 250, 150)
// 			ellipse(4*width/11, 2*height/6, r4)

// 			if (keyIsDown(82)) {
// 					r4 = 30
// 					osc4.freq(1396.91)
// 					osc4.amp(env4)
// 				} 	
// 				else if (r4 > 10){
// 					r4 -= 1
// 					env4.triggerRelease()
// 				}



// 			fill(250, 250, 150)
// 			ellipse(5*width/11, 2*height/6, r5)

// 			if (keyIsDown(84)) {
// 					r5 = 30
// 					osc5.freq(1567.98)
// 					osc5.amp(env5)
// 				} 	
// 				else if (r5 > 10){
// 					r5 -= 1
// 					env5.triggerRelease()
// 				}



// 			fill(250, 250, 150)
// 			ellipse(6*width/11, 2*height/6, r6)

// 			if (keyIsDown(89)) {
// 					r6 = 30
// 					osc6.freq(1760.00)
// 					osc6.amp(env6)
// 				} 	
// 				else if (r6 > 10){
// 					r6 -= 1
// 					env6.triggerRelease()
// 				}



// 			fill(250, 250, 150)
// 			ellipse(7*width/11, 2*height/6, r7)

// 			if (keyIsDown(85)) {
// 					r7 = 30
// 					osc7.freq(1975.53)
// 					osc7.amp(env7)
// 				} 	
// 				else if (r7 > 10){
// 					r7 -= 1
// 					env7.triggerRelease()
// 				}
			


// 			fill(250, 250, 150)
// 			ellipse(8*width/11, 2*height/6, r8)

// 			if (keyIsDown(73)) {
// 					r8 = 30
// 					osc8.freq(2093.00)
// 					osc8.amp(env8)
// 				} 	
// 				else if (r8 > 10){
// 					r8 -= 1
// 					env8.triggerRelease()
// 				}









// 			//Setting Buttons???
// 			fill(150, 150, 250)
// 			ellipse(9*width/11, 2*height/6, 30)

// 			if (keyIsDown(79)) {
					


// 				} 	



// 			fill(150, 150, 250)
// 			ellipse(10*width/11, 2*height/6, 30)

// 			if (keyIsDown(80)) {



// 				}

// 		pop()






// 	//B line
// 		fill(250, 250, 150) //C5
// 		ellipse(width/11, 3*height/6, r1b)

// 		if (keyIsDown(65)) {
// 				r1b = 30
// 				osc1b.freq(523.25)
// 				osc1b.amp(env1b)
// 			} 	
// 			else if (r1b > 10){
// 				r1b -= 1
// 				env1b.triggerRelease()
// 			}



// 		fill(250, 250, 150)
// 		ellipse(2*width/11, 3*height/6, r2b)

// 		if (keyIsDown(83)) {
// 				r2b = 30
// 				osc2b.freq(587.33)
// 				osc2b.amp(env2b)
// 			} 	
// 			else if (r2b > 10){
// 				r2b -= 1
// 				env2b.triggerRelease()
// 			}



// 		fill(250, 250, 150)
// 		ellipse(3*width/11, 3*height/6, r3b)

// 		if (keyIsDown(68)) {
// 				r3b = 30
// 				osc3b.freq(659.25)
// 				osc3b.amp(env3b)
// 			} 	
// 			else if (r3b > 10){
// 				r3b -= 1
// 				env3b.triggerRelease()
// 			}



// 		fill(250, 250, 150)
// 		ellipse(4*width/11, 3*height/6, r4b)

// 		if (keyIsDown(70)) {
// 				r4b = 30
// 				osc4b.freq(698.46)
// 				osc4b.amp(env4b)
// 			} 	
// 			else if (r4b > 10){
// 				r4b -= 1
// 				env4b.triggerRelease()
// 			}



// 		fill(250, 250, 150)
// 		ellipse(5*width/11, 3*height/6, r5b)

// 		if (keyIsDown(71)) {
// 				r5b = 30
// 				osc5b.freq(783.99)
// 				osc5b.amp(env5b)
// 			} 	
// 			else if (r5b > 10){
// 				r5b -= 1
// 				env5b.triggerRelease()
// 			}



// 		fill(250, 250, 150)
// 		ellipse(6*width/11, 3*height/6, r6b)

// 		if (keyIsDown(72)) {
// 				r6b = 30
// 				osc6b.freq(880.00)
// 				osc6b.amp(env6b)
// 			} 	
// 			else if (r6b > 10){
// 				r6b -= 1
// 				env6b.triggerRelease()
// 			}



// 		fill(250, 250, 150)
// 		ellipse(7*width/11, 3*height/6, r7b)

// 		if (keyIsDown(74)) {
// 				r7b = 30
// 				osc7b.freq(987.77)
// 				osc7b.amp(env7b)
// 			} 	
// 			else if (r7b > 10){
// 				r7b -= 1
// 				env7b.triggerRelease()
// 			}
		








// 		fill(150, 150, 250) //C6 -- make settings?
// 		ellipse(8*width/11, 3*height/6, 30)

// 		if (keyIsDown(75)) {
// 			}



// 		fill(150, 150, 250) //not coded yet, settings?
// 		ellipse(9*width/11, 3*height/6, 30)

// 		if (keyIsDown(76)) {

// 			}



// 		fill(150, 150, 250) //same as above
// 		ellipse(10*width/11, 3*height/6, 30)

// 		if (keyIsDown(186)) {

// 			}






// 	//C line

// 		push()
// 		translate((width/33), 0)
// 			fill(250, 250, 150)
// 			ellipse(width/11, 4*height/6, r1c)

// 			if (keyIsDown(90)) {
// 					r1c = 30
// 					osc1c.freq(261.63)
// 					osc1c.amp(env1c)
// 				} 	
// 				else if (r1c > 10){
// 					r1c -= 1
// 					env1c.triggerRelease()
// 				}



// 			fill(250, 250, 150)
// 			ellipse(2*width/11, 4*height/6, r2c)

// 			if (keyIsDown(88)) {
// 					r2c = 30
// 					osc2c.freq(293.66)
// 					osc2c.amp(env2c)
// 				} 	
// 				else if (r2c > 10){
// 					r2c -= 1
// 					env2c.triggerRelease()
// 				}



// 			fill(250, 250, 150)
// 			ellipse(3*width/11, 4*height/6, r3c)

// 			if (keyIsDown(67)) {
// 					r3c = 30
// 					osc3c.freq(329.63)
// 					osc3c.amp(env3c)
// 				} 	
// 				else if (r3c > 10){
// 					r3c -= 1
// 					env3c.triggerRelease()
// 				}



// 			fill(250, 250, 150)
// 			ellipse(4*width/11, 4*height/6, r4c)

// 			if (keyIsDown(86)) {
// 					r4c = 30
// 					osc4c.freq(349.23)
// 					osc4c.amp(env4c)
// 				} 	
// 				else if (r4c > 10){
// 					r4c -= 1
// 					env4c.triggerRelease()
// 				}



// 			fill(250, 250, 150)
// 			ellipse(5*width/11, 4*height/6, r5c)

// 			if (keyIsDown(66)) {
// 					r5c = 30
// 					osc5c.freq(392.00)
// 					osc5c.amp(env5c)
// 				} 	
// 				else if (r5c > 10){
// 					r5c -= 1
// 					env5c.triggerRelease()
// 				}



// 			fill(250, 250, 150)
// 			ellipse(6*width/11, 4*height/6, r6c)

// 			if (keyIsDown(78)) {
// 					r6c = 30
// 					osc6c.freq(440.00)
// 					osc6c.amp(env6c)
// 				} 	
// 				else if (r6c > 10){
// 					r6c -= 1
// 					env6c.triggerRelease()
// 				}



// 			fill(250, 250, 150)
// 			ellipse(7*width/11, 4*height/6, r7c)

// 			if (keyIsDown(77)) {
// 					r7c = 30
// 					osc7c.freq(493.88)
// 					osc7c.amp(env7c)
// 				} 	
// 				else if (r7c > 10){
// 					r7c -= 1
// 					env7c.triggerRelease()
// 				}
			









// 			//settings??
// 			fill(150, 150, 250) //C5 again
// 			ellipse(8*width/11, 4*height/6, 30)

// 			if (keyIsDown(188)) {

// 				}



// 			fill(150, 150, 250)
// 			ellipse(9*width/11, 4*height/6, 30)

// 			if (keyIsDown(190)) {
					
// 				}



// 			fill(150, 150, 250)
// 			ellipse(10*width/11, 4*height/6, 30)

// 			if (keyIsDown(191)) {
					
// 				}

// }