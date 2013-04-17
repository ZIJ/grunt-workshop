Структура Gruntfile
===================

Gruntfile - не что иное, как обычный модуль для Node.js, поэтому весь код должен находится внутри функции-обёртки:

```javascript
module.exports = function(grunt){
  // ...
};
```

Параметры задач описываются с помощью метода ```grunt.initConfig()``. Каждое свойство объекта, передаваемого в этот метод, должно содержать параметры соответствующей задачи:

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
