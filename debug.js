deviceready.push(function(){
	debug = new Class({
		ACTIVE: false,
		LIST: [],
		
		construct: function(status){
			such.ACTIVE = status && true;
		},
		
		info: function(txt){
			such.LIST.push({ type: 'info', txt: txt });
		},
		
		error: function(txt, e){
			such.LIST.push({ type: 'error', txt: txt , e: e});
		},
		
		warning: function(txt, e){
			such.LIST.push({ type: 'warning', txt: txt, e: e});
		},
		
		alertInfo: function(){
			return such.mountString('info');
		},
		
		alertWarning: function(){
			return such.mountString('warning');
		},
		
		alertError: function(){
			return such.mountString('error', true);
		},
		
		alertAll: function(){
			return such.mountString('info,error,warning');
		},
		
		mountString: function(t, f){
			var output = '';
			
			for(var x = 0; x < such.LIST.length; x++){
				var item = such.LIST[x];
				
				if(t.search(item.type) != -1){
					output += item.type + ': ' + item.txt + '\n';
					
					if(f){
						for(var p in item.e){
							output += '\t' + p + ' : ' + item.e[p];
						}
					}
				};
			}
			
			if(such.ACTIVE)
				alert(output);
			
			return output;
		}
	});
});