Работаем с задачами
===================

В Grunt существует 2 типа задач: basic tasks и multi tasks. Первые - это либо псевдоним (alias) для одной или нескольких других задач, либо функция пользовательской задачи:

```javascript
grunt.registerTask(taskName, [description, ] taskFunction)
```
