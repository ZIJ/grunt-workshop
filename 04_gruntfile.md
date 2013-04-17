Структура Gruntfile
===================

Gruntfile - не что иное, как обычный модуль для Node.js, поэтому весь код должен находится в функции-обёртке, внутри которой доступны все методы grunt:

```javascript
module.exports = function(grunt){
  // Configure tasks
  // Load tasks
  // Register tasks
};
```

Параметры задач описываются с помощью метода ```grunt.initConfig()```. Cвойства объекта, передаваемого в этот метод, содержат параметры соответствующей задачи:

```javascript
grunt.initConfig({
    jshint: {
        // JSHint options
    },
    concat: {
        // Concat options
    },
    uglify: {
        // Uglify options
    }
});
```

Метод ```grunt.loadNpmTasks()``` загружает модуль с задачей:

```javascript
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
```


