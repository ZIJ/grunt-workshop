grunt-workshop
==============

Materials for my speech on Grunt.js at Frontend DEV Conf '13

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
- Разбираемся с тасками
  - Multi-tasks, targets
  - Options
  - Работа с файлами (форматы, фильтрация, шаблоны)
  - Ещё раз об алиасах, registerTask() и registerMultiTask()
  - Кастомные таски (доступ к параметрам, async(), запуск других, обработка ошибок)
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
