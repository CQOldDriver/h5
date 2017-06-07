var gulp = require("gulp"),
	livereload = require("gulp-livereload");
	
livereload.task("reload",function(){
	livereload.listen();
	gulp.watch("**/*.*").on("change",function(event){
		livereload.changed(event.path);
	})
});
