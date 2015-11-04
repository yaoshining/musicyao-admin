define(function(){
return [
	{
		"categoriesModule1": [
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
		"chartsModule": [
			"charts/module"
		],
		"chartsModule.gantt": [
			"charts/controllers/GanttController"
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
		"ebpFormsModule": [
			"forms/module"
		],
		"ebpFormsModule.ebpGrid": [
			"forms/controllers/EbpFormsController"
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
		"ebpTablesModule": [
			"tables/module"
		],
		"ebpTablesModule.ebpGrid": [
			"tables/controllers/EbpGridController"
		]
	},
	{
		"UIAndElementsModule": [
			"UIAndElements/module"
		],
		"UIAndElementsModule.bootstrap": [
			"UIAndElements/controllers/BootstrapController"
		],
		"UIAndElementsModule.elements": [
			"UIAndElements/controllers/ElementsController"
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
		"UIAndElementsModule.buttons1": [
			"UIAndElements/controllers/Buttons1Controller"
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
		],
		"UIAndElementsModule.datepicker": [
			"UIAndElements/views/datepicker/EbpDateTimePickerController"
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