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

Целевые файлы
-------------

Проще всего определить список файлов в сокращённом формате. Результирующий файл только один, но можно указывать дополнительные параметры кроме стандартных ```src``` и ```dest```:

```javascript
grunt.initConfig({
    myTask: {
        myTarget: {  // сompact format
          src: ['src/header.txt', 'src/*.js'],
          dest: 'main.js',
          nonull: true
        }
    }
});
```

Второй способ - через объект ```files```, имена свойств которого определяют выходные файлы, а значения - набор входных. Дополнительные параметры не поддерживаются:

```javascript
grunt.initConfig({
    myTask: {
        myTarget: {  // files object format
          files: {
            'main.js': ['src/header.txt', 'src/*.js'],
            'libs.js': ['lib/*.js']
          }  
        }
    }
});
```

Третий, наиболее громоздкий и при этом гибкий - c помощью массива ```files```. Можно указывать несколько групп соответсвия выходного файла набору входных со своими параметрами:

```javascript
grunt.initConfig({
    myTask: {
        myTarget: {  // files array format
          files: [
            {
              src: ['src/header.txt', 'src/*.js'],
              dest: 'main.js',
              nonull: true
            }, {
              src: ['lib/*.js'],
              dest: 'libs.js'
            }  
          ]  
        }
    }
});
```

В именах файлов можно использовать обобщающие паттерны - ```*```, ```?```, ```{}``` и некоторые другие.

Task API
--------

Контекст функции задачи содержит много полезных свойств - имя задачи, аргументы, настройки. Внутри Multi task к этому добавляется текущая цель и список файлов, приведенный к формату массива:

