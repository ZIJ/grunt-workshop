Пример использования
====================

Установка
---------

Будем считать, что у нас уже установлен Node.js 0.8 или выше и NPM.

Можно ставить Grunt глобально (с версией 0.3 чаще всего так и поступали), но теперь весь консольный функционал вынесен в отдельный модуль grunt-cli, поэтому сам grunt можно ставить в папку проекта.

```bash
npm uninstall -g grunt
npm install -g grunt-cli
```

Теперь опишем все зависимости в package.json:

```javascript
{
  "name": "grunt-usage-example",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.1",
    "grunt-contrib-jshint": "~0.4.3",
    "grunt-contrib-uglify": "~0.2.0",
    "grunt-contrib-concat": "~0.2.0"
  }
}
```

И установим их:

```bash
npm install
```
