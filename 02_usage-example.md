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

Осталось самое главное - Gruntfile, в котором и будут описаны задачи
