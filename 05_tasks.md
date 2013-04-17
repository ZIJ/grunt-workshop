Работаем с задачами
===================

В Grunt существует 2 типа задач: basic tasks и multi tasks. Первые - это либо псевдоним (alias) для одной или нескольких других задач, либо функция пользовательской задачи:

```javascript
grunt.registerTask('myAliasTask', ['jshint', 'concat', 'uglify']);
```

```javascript
grunt.registerTask('myCustomTask', 'Logs current task name', function(){
  grunt.log.writeln('Current task name: ' + this.name);
});
```
Multi tasks отличаются от обычных тем, что поддерживают цели (targets) - независимые наборы параметров. Если при вызове не будет явно указана цель, то задача будет выполнена для всех целей по очереди. Для создания такой задачи предназначен метод ```registerMultiTask()```:
