Структура Gruntfile
===================

Gruntfile - не что иное, как обычный модуль для Node.js, поэтому весь код должен находится внутри функции-обёртки:

```javascript
module.exports = function(grunt){
  // ...
};
```

Параметры задач описываются с помощью метода ```grunt.initConfig()``. Cвойства объекта, передаваемого в этот метод, содержат параметры соответствующей задачи:

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
