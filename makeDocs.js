const fs = require('fs');
const table = require('markdown-table');

const websites = {
  bestPractices: 'https://eslint.org/docs/rules/$key',
  errors: 'https://eslint.org/docs/rules/$key',
  es6: 'https://eslint.org/docs/rules/$key',
  imports: 'https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/$key.md',
  node: 'https://eslint.org/docs/rules/$key',
  regex: 'https://github.com/BrainMaestro/eslint-plugin-optimize-regex/blob/HEAD/docs/rules/$key.md',
  strict: 'https://eslint.org/docs/rules/$key',
  style: 'https://eslint.org/docs/rules/$key',
  unicorn: 'https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/$key.md',
  variables: 'https://eslint.org/docs/rules/$key',
};
const emojis = {
  error: '🚨',
  warn: '⚠️',
  off: '',
};

function makeDocs() {
  const allRules = {
    bestPractices: require('./rules/best-practices').rules,
    errors: require('./rules/errors').rules,
    es6: require('./rules/es6').rules,
    imports: require('./rules/imports').rules,
    node: require('./rules/node').rules,
    regex: require('./rules/regex').rules,
    strict: require('./rules/strict').rules,
    style: require('./rules/style').rules,
    unicorn: require('./rules/unicorn').rules,
    variables: require('./rules/variables').rules,
  };

  let docsContent = '';
  for (const rulesSet of Object.keys(allRules)) {
    const rules = allRules[rulesSet];
    docsContent += `\n\n\n**Règles pour la catégorie "${rulesSet}" :**\n`;
    docsContent += table([
      ['Règle', 'Valeur'],
      ...Object.keys(rules).map(key => [
        `[\`${key}\`](${websites[rulesSet].replace('$key', key.split('/')[1])})`,
        `${rules[key].toString().replace(/,\[object Object]/g, '')} ${Array.isArray(rules[key]) ? emojis[rules[key][0]] : emojis[rules[key]]}`,
      ]),
    ], { alignDelimiters: false });
  }

  const path = `${__dirname}/docs/comparison.md`;
  try {
    fs.writeFile(path, docsContent, (err) => {
      if (err) return console.error(err);
      console.log('Documentation updated!');
      process.exit(0);
    });
  } catch (err) {
    return console.error(err);
  }
}

makeDocs();
