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
