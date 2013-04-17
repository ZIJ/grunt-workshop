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

Gruntfile
---------

Это обычный js-файл, в котором описано, чего же мы хотим от Grunt. До версии 0.4 он назывался grunt.js.

```javascript
module.exports = function(grunt){

    var sources = 'src/*.js';

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', sources]
        },
        concat: {
            dist: {
                src: sources,
                dest: 'main.js'
            }
        },
        uglify: {
            all: {
                files: {
                    'main.min.js': ['main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};
```
