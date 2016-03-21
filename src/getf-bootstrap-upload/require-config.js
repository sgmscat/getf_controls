requirejs.config({
	baseUrl:"../",
	map: {
	  '*': {
		'css': 'libs/css.min' // or whatever the path to require-css is
	  }
	},
    paths: {
        jquery: 'libs/jquery-2.1.4.min',
		json2:'libs/jquery.json-2.4.min',
		bootstrap:'plugins/bootstrap-3.3.5-dist/js/bootstrap.min',
		bootstrapFileInput:'plugins/bootstrap-fileinput/js/fileinput_locale_zh',
		plupload:'plugins/plupload/plupload.full.min',
		
		//自定义插件
		getfBootstrapUpload:"getf-bootstrap-upload/getf-bootstrap-upload"
		
    },
	shim:{
		bootstrap:["jquery","css!plugins/bootstrap-3.3.5-dist/css/bootstrap","css!plugins/FontAwesome/css/font-awesome.min"],
		json2:["jquery"],
		bootstrapFileInput:["bootstrap",'plugins/bootstrap-fileinput/js/fileinput',"css!plugins/bootstrap-fileinput/css/fileinput.min"],
		getfBootstrapUpload:["bootstrapFileInput","plupload"]
	}
});