grunt-workshop
==============

My talk on Grunt.js at [Frontend DEV Conf '13](http://fdc.itstaff.by/)

Presentation (.pptx and PDF) is located in /slides folder

Содержание доклада
------------------

- [Что такое Grunt и зачем он нужен](http://github.com/ZIJ/grunt-workshop/blob/master/01_intro.md)
- [Пример использования](http://github.com/ZIJ/grunt-workshop/blob/master/02_usage-example.md)
  - установка  (используем ```grunt-cli``` и ```npm init```)
  - простой Gruntfile (используем JSHint, concat и UglifyJS)
- [Подробнее об установке Grunt](http://github.com/ZIJ/grunt-workshop/blob/master/03_installation.md)
  - package.json и devDependencies
  - grunt-init
- [Структура Gruntfile](http://github.com/ZIJ/grunt-workshop/blob/master/04_gruntfile.md)
  - module.exports
  - initConfig()
  - loadNpmTasks() (загрузка установленных задач)
  - registerTask() (алиасы, default)
- [Задачи в деталях](http://github.com/ZIJ/grunt-workshop/blob/master/05_tasks.md)
  - Типы задач (basic tasks, multi tasks)
  - Создание задач (registerTask() и registerMultiTask())
  - Целевые файлы (форматы, обобщающие паттерны)
  - Task API (полезные свойства, обработка ошибок, async, requires, requiresConfig) 
- Cтандартные таски
  - О библиотеке grunt-contrib
  - jshint
  - uglify
  - concat
  - qunit
  - watch
- Другие таски из grunt-contrib
  - clean, copy, compress
  - coffee
  - csslint и сssmin
  - less, sass и stylus
  - jasmine и nodeunit
  - handlebars, jade, jst
  - requireJS
- Отличия между 0.3 и 0.4
