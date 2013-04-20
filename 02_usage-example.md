Пример использования
====================


Допустим, мы хотим собрать все JS-файлы в папке src в один main.js, предварительно проверив их c помощью JSHint, а также создать сжатую версию при помощи UglifyJS. 

```
+ [src]
  - foo.js
  - bar.js
- main.js
- main.min.js
```

Установка
---------

Будем считать, что у нас уже установлен Node.js 0.8 или выше и NPM.

Можно ставить Grunt глобально (с версией 0.3 чаще всего так и поступали), но теперь весь консольный функционал вынесен в отдельный модуль grunt-cli, поэтому сам grunt можно ставить в папку проекта.

```bash
npm uninstall -g grunt
npm install -g grunt-cli
```

Теперь установим нужные модули (npm init создаст package.json, а флаг --save-dev запишет туда зависимости):

```bash
npm init
npm install grunt --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-concat --save-dev
```

Gruntfile.js
------------

Это обычный js-файл, в котором описаны задачи и их параметры. До версии 0.4 назывался grunt.js. Общая структура его такая:

```javascript
module.exports = function(grunt){

    grunt.initConfig({
        
        //task settings go here
        
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
```

Собственно настройка задач (передаётся в initConfig)

```javascript
jshint: {
    all: ['Gruntfile.js', 'src/*.js']
},
concat: {
    dist: { src: 'src/*.js', dest: 'main.js' }
},
uglify: {
    all: { files: { 'main.min.js': ['main.js'] } }
}
```

Метод initConfig позволяет настроить нужные задачи. Затем мы эти задачи подгружаем с помощью метода loadNpmTasks() и регистрируем новую задачу с алиасом default, которая последовательно выполнит три предыдущих. Это позволяет вызвать grunt без параметров, и получить на выходе main.js, main.min.js и примерно такой лог в консоли:

```
$ grunt

Running "jshint:all" (jshint) task
>> 3 files lint free.

Running "concat:dist" (concat) task
File "main.js" created.

Running "uglify:all" (uglify) task
File "main.min.js" created.

Done, without errors.
```

