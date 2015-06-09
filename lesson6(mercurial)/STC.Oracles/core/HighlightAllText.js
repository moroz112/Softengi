var Exploder = require("./ExplodeBySyntax.js");

function HighlightAllText(text){
	var commentLimiters = { begin:"//", end:"\n" };
	var textLimiters = { begin:"\"", end:"\"" };
	var finalText="";
	
	var commentsAndRest = Exploder.ExplodeBySyntax (text, commentLimiters);
	var FragmentsQuantity = commentsAndRest.length;
	for(var fragmentIndex = 0; fragmentIndex<FragmentsQuantity; fragmentIndex++){
		if(!commentsAndRest[fragmentIndex].type){
			finalText+= 
			highlight(commentsAndRest[fragmentIndex].text,"comment");
		}else{
			var textStingsAndRest = Exploder.ExplodeBySyntax (text, textLimiters);
			var innerFragmentsQuantity = textStingsAndRest.length;
			for(var innerFragmentIndex = 0; innerFragmentIndex<innerFragmentsQuantity; innerFragmentIndex++){
				if(textStingsAndRest[innerFragmentIndex].isTargetExpression){
					finalText+=highlight(textStingsAndRest[innerFragmentIndex].text,"text");
				}else{
					finalText+=highlight(textStingsAndRest[innerFragmentIndex].text,"code");
				}
			}
		}
	}
	return finalText;
}

function highlight(text,type){
	return type+":["+text+"]";
};

module.exports={
	HighlightAllText: HighlightAllText
};