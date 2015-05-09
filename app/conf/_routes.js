define(["conf/modules"],function(modules){
return [
	{
		"home": {
			"url": "/",
			"views": {
				"": {
					"templateUrl": "src/home/home.tpl.html",
					"controller": "HomeController"
				}
			},
			"modules": {
				"homeModule": "modules.homeModule"
			}
		}
	}
]
});