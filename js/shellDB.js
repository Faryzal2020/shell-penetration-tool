
	var shells = {
		'shell1' : {
			'name' : 'PzGr 43',
			'icon' : 'APCBC-HE',
			'velocity' : 930,
			'mass' : 28,
			'ricochet' : [19,27,42],
			'angle1' : [269,267,253,237,222,208],
			'angle2' : [243,241,229,214,201,188],
			'angle3' : [120,119,113,106,99,93]
		}
	}

function getShellData(id){
	return shells.shell1;
}

function getShellCount(){
	return 1;
}