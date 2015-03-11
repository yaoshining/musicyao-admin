define(function(){
return [
	{
		"UIAndElementsModule": [
			"UIAndElements/module"
		],
		"UIAndElementsModule.bootstrap": [
			"UIAndElements/controllers/BootstrapController"
		],
		"UIAndElementsModule.treeView": [
			"UIAndElements/controllers/TreeViewController"
		],
		"UIAndElementsModule.tables": [
			"UIAndElements/controllers/tables/TablesController"
		],
		"UIAndElementsModule.nestable": [
			"UIAndElements/controllers/list/NestableController"
		],
		"UIAndElementsModule.calendar": [
			"UIAndElements/controllers/calendar/CalendarDemoController"
		],
		"UIAndElementsModule.maps": [
			"UIAndElements/controllers/maps/MapDemoController",
			"jvectormap-world",
			"jvectormap-cn"
		],
		"UIAndElementsModule.mindMap": [
			"UIAndElements/controllers/TreeViewController",
			"vendor/core/jsmind",
			"css!styles/vendor/jsmind"
		]
	},
	{
		"categoriesModule": [
			"categories/module"
		]
	},
	{
		"categoriesModule": [
			"categories/module"
		],
		"categoriesModule.languages": [
			"categories/repositories/Languages",
			"categories/services/LanguagesService",
			"categories/controllers/LanguagesController"
		]
	},
	{
		"filesModule": [
			"files/module",
			"files/services/attachService",
			"files/repositories/Attachment"
		]
	},
	{
		"homeModule": [
			"home/home",
			"css!styles/ebp/infobox",
			"css!styles/ebp/widgets",
			"vendor/jquery.sparkline",
			"vendor/angular.easypiechart",
			"plot"
		]
	},
	{
		"musicModule": [
			"music/module"
		],
		"musicModule.upload": [
			"music/controllers/MusicUploadController"
		]
	},
	{
		"musicYaoModule": [
			"musicyao/module",
			"musicyao/controllers/MusicPlayerController",
			"musicyao/repositories/MusicYao",
			"css!styles/ebp/musicyao"
		],
		"musicYaoModule_home": [
			"musicyao/controllers/MusicHomeController"
		],
		"musicYaoModule_mtv": [
			"musicyao/controllers/MTVController"
		]
	},
	{
		"usersModule": [
			"users/module",
			"users/services/userService",
			"users/repositories/Users"
		]
	},
	{
		"widgetsDemoModule": [
			"widgets/module",
			"widgets/controllers/WidgetsDemoController"
		]
	}
]
});