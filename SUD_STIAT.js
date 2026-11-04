define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'People with substance use disorders', //Will appear in the data.
		    title : {
		      media : {word : 'People with substance use disorders'}, //Name of the category presented in the task.
		      css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli content as PIP's media objects
    		    	{word : 'Person with a substance use disorder'}, 
    			{word : 'Person with a substance use disorder'}, 
    			{word : 'Person with a substance use disorder'}, 
    			{word : 'Person with a substance use disorder'}, 
    			{word : 'Person with a substance use disorder'}, 
    			{word : 'Person with a substance use disorder'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#31b404','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Unpleasant', //Attribute label
			title : {
				media : {word : 'Negative'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Difficult'},
				{word: 'Dirty'},
				{word: 'Disgusting'},
				{word: 'Dishonest'},
				{word: 'Dumb'},
				{word: 'Egocentric'},
				{word: 'Frustrating'},
				{word: 'Gross'},
				{word: 'Immature'},
				{word: 'Irritating'},
				{word: 'Lazy'},
				{word: 'Mean'},
				{word: 'Narcissistic'},
				{word: 'Nasty'},
				{word: 'Self-Centered'},
				{word: 'Selfish'},
				{word: 'Sick'},
				{word: 'Stupid'},
				{word: 'Ugly'},
				{word: 'Weak'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Pleasant', //Attribute label
			title : {
				media : {word : 'Positive'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Agreeable'},
				{word: 'Attractive'},
				{word: 'Clean'},
				{word: 'Competent'},
				{word: 'Empathetic'},
				{word: 'Friendly'},
				{word: 'Generous'},
				{word: 'Healthy'},
				{word: 'Honest'},
				{word: 'Intelligent'},
				{word: 'Kind'},
				{word: 'Likable'},
				{word: 'Mature'},
				{word: 'Nice'},
				{word: 'Respectful'},
				{word: 'Responsible'},
				{word: 'Smart'},
				{word: 'Strong'},
				{word: 'Sympathetic'},
				{word: 'Trustworthy'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#31b404','font-size':'3em'}
        }
    });
});
