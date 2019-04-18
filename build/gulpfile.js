//任务
var gulp = require("gulp"),
    plugins = require("gulp-load-plugins")(),
    yargs = require("yargs"), //命令行工具，解析参数
    path = require("path"),
    config = require("../config/index.js")
/*
 * 常用方法
 *
 * gulp.task -- 定义任务
 *
 * gulp.src -- 需要找到执行任务文件夹
 *
 * gulp.dest -- 执行任务的文件去处
 *
 * gulp.watch -- 观察文件是否发生变化
 *
 * */


//路径
let resolveToComponents = function(glob = "") {
    return path.join(__dirname,'../',config.originPagePath, glob); // app/components/{glob}
};

//模版创建
gulp.task("component", () => {


    let componentInfo = yargs.argv.component.split("@");
    
    let component = componentInfo[0].split(":");
    let name = component[0]; //获取要创建的文件名称
    let parentPath = (component.length > 1 && component[1]) || ""; //获取父文件夹名称
    let fileName = name.replace(/([A-Z])/g, "-$1").toLowerCase(); //文件夹名称转换成小写
    let destPath = ''
    if (componentInfo[1]) {
        destPath = path.join(__dirname,'../','src', componentInfo[1], parentPath, fileName); //文件夹创建
    } else {
        destPath = path.join(resolveToComponents(), parentPath, fileName); //文件夹创建
    }

    return gulp
        .src("../template/component/*.**")
        .pipe(
            plugins.template({
                name: name,
                fileName: fileName,
                parentPath: parentPath
            })
        )
        .pipe(
            plugins.rename(function(path) {
                path.basename = path.basename.replace("temp", name);
            })
        )
        .pipe(gulp.dest(destPath));

       
});


//定义默认任务
gulp.task("default", ["component"]);