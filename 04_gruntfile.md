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

Параметры задач описываются с помощью метода ```initConfig()```. Cвойства объекта, передаваемого в этот метод, содержат параметры соответствующей задачи:

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

Метод ```loadNpmTasks()``` загружает модуль с задачей:

```javascript
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
```

Теперь можно запускать настроенные задачи:

```
grunt jshint
grunt concat
grunt uglify
```

Но гораздо удобнее выполнить все три задачи сразу. Для этого есть метод ```registerTask()``` - он объединяет под одним именем несколько других задач, которые будут выполнены последовательно:

```javascript
grunt.registerTask('myTask', ['jshint', 'concat', 'uglify']);
```

```
grunt myTask
```

Если же вызвать ```grunt``` без параметров, то он по умолчанию будет пытаться найти задачу с именем ```default```, поэтому основную задачу обычно называют именно так.



