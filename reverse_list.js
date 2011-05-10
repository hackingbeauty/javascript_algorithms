function reverseList(array){
	var iteration = Math.floor(list.length/2)
	var count = 0;
		for(var i = 0;i<=iteration;i++){
	    		count++;
	    		var firstElem = list[i];
	    		var lastElem = list[list.length-count];
	    		list[i] = lastElem;
	    		list[list.length-count] = firstElem;
	  	}
	return list;
}

