Задачи в деталях
================

Типы задач
----------

В Grunt их 2: basic tasks и multi tasks. Первые - это либо псевдоним (alias) для одной или нескольких других задач, либо функция пользовательской задачи:

```javascript
grunt.registerTask('myAliasTask', ['jshint', 'concat', 'uglify']);
```

```javascript
grunt.registerTask('myCustomTask', 'Logs current task name', function(){
  grunt.log.writeln(' Current task name: ' + this.name);
});
```
Вторая задача пишет в консоль своё название.

Multi tasks отличаются от обычных тем, что поддерживают цели (targets) - независимые наборы параметров. Если при вызове не будет явно указана цель, то задача будет выполнена для всех целей по очереди. Для создания такой задачи предназначен метод ```registerMultiTask()```:

```javascript
grunt.registerMultiTask('myMultiTask', function(){
  grunt.log.writeln(' Target: ' + this.target + ' Data: ' + this.data); 
});
```

А эта задача выводит цель, дла которой была вызвана, и параметры. Вот как может выглядеть её использование:

```javascript
grunt.initConfig({
    myMultiTask: {
        first: 'Single string',
        second: [1, 2, 3]
    }
});
```

```
$ grunt myMultiTask:first
Running "myMultiTask:first" (myMultiTask) task
 Target: first Data: Single string
Done, without errors.

$ grunt myMultiTask:second
Running "myMultiTask:second" (myMultiTask) task
 Target: second Data: 1,2,3
Done, without errors.

$ grunt myMultiTask
Running "myMultiTask:first" (myMultiTask) task
 Target: first Data: Single string
Running "myMultiTask:second" (myMultiTask) task
 Target: second Data: 1,2,3
Done, without errors.
```

Почти все стандартные задачи являются multi tasks, что позволяет, например, легко описать сборку для отладки и релиза с различными параметрами:

```javascript
grunt.initConfig({
    jshint: {
        debug: {
          // Debug options 
        },
        release: {
          // Release options
        }
    }
    // ... 
    // Same for concat and uglify    
});

grunt.registerTask('debug', ['jshint:debug', 'concat:debug', 'uglify:debug']);
grunt.registerTask('release', ['jshint:release', 'concat:release', 'uglify:release']);
```

Работа с файлами
----------------


