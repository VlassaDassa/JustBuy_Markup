const Handlebars = require('handlebars');


Handlebars.registerHelper('block', function(name, options) {
    // Создаем контекст, если он не существует
    if (!this._blocks) {
      this._blocks = {};
    }
  
    // Если блок с таким именем еще не определен, сохраняем его содержимое
    if (!this._blocks[name]) {
      this._blocks[name] = options.fn(this);
    }
  
    // Если текущий шаблон наследует другой шаблон,
    // и в наследуемом шаблоне определен блок с таким именем,
    // то вызываем его содержимое
    if (typeof this._blocks[name] === 'function') {
      // Если текущий контекст содержит partial с именем "head",
      // то вставляем содержимое блока перед закрывающим тегом </head>
      if (name === 'head' && typeof this.head === 'function') {
        return this.head(this) + this._blocks[name](this);
      }
      // Если текущий контекст содержит partial с именем "body",
      // то вставляем содержимое блока перед закрывающим тегом </body>
      else if (name === 'body' && typeof this.body === 'function') {
        return this.body(this) + this._blocks[name](this);
      } else {
        return this._blocks[name](this);
      }
    } else {
      return this._blocks[name];
    }
  });