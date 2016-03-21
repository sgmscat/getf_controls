(function(){
	if(typeof define === "function" && define.amd) {
		define(function(){
			$.fn.getfAttachUpload=getfAttachUpload;
		});
	}else{
		$.fn.getfAttachUpload=getfAttachUpload;
	}
	
	function getfAttachUpload(param){
		var self=this;
		
		var dFileInputParam={
		}
		
		
		dFileInputParam=$.extend(dFileInputParam,param.fileInput||{});
		self.fileinput(dFileInputParam)
		
		
		//plupload参数相关
		var jqBrowseButton=self.parents(".btn-file")
		
		var dPluploadParam=param.plupload||{};
		dPluploadParam=$.extend(dPluploadParam,{
			//browse_button:jqBrowseButton[0],
			url:dPluploadParam.url||param.fileInput.uploadUrl
		})
		
		initPlupload(dPluploadParam)
	}
	
	function initPlupload(param){
		
		var dPluploadParam={
			runtimes : 'html5,flash,silverlight,html4',
			//container: document.getElementById('container'), // ... or DOM Element itself
			flash_swf_url : '../js/Moxie.swf',
			silverlight_xap_url : '../js/Moxie.xap',
			
			filters : {
				max_file_size : '10mb',
				mime_types: [
					{title : "Image files", extensions : "jpg,gif,png"},
					{title : "Zip files", extensions : "zip"}
				]
			},
		
			init: {
				PostInit: function() {
					document.getElementById('filelist').innerHTML = '';
		
					document.getElementById('uploadfiles').onclick = function() {
						uploader.start();
						return false;
					};
				},
		
				FilesAdded: function(up, files) {
					alert(files);
					/*plupload.each(files, function(file) {
						document.getElementById('filelist').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
					});*/
				},
		
				UploadProgress: function(up, file) {
					document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
				},
		
				Error: function(up, err) {
					document.getElementById('console').appendChild(document.createTextNode("\nError #" + err.code + ": " + err.message));
				}
			}
		}
		
		dPluploadParam=$.extend(dPluploadParam,param||{});
		
		var uploader = new plupload.Uploader(dPluploadParam);
		uploader.init();
	}
	
})(window.jquery);