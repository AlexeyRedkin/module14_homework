Class Amazing {
	Static cool() {
		console.log('cool')
       }
wow(){
	console.log('wow');
       }
}

Class Wonderful extends Amazing {
	Static awesome() {
	super.cool();
	console.log('awesome')
}

great() {
 	super.cool();
	console.log(great)
}
}


Amazing.cool();
Wonderful.cool();
Wonderful.awesome();

Const instance = new Wonderful();

instance.great();
instance.awesome();
instance.cool();