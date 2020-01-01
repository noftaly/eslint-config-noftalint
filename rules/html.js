module.exports = {
  plugins: ['html'],

  settings: {
    'html/html-extensions': ['.ejs', '.erb', '.handlebars', '.hbs', '.htm', '.html', '.mustache', '.nunjucks', '.njk', '.php'],
    'html/xml-extensions': ['.html'],
    'html/indent': '+2',
    'html/report-bad-indent': 'error',
    'html/javascript-mime-types': ['text/javascript', 'text/jsx'],
  },
};
