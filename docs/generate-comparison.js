const fs = require('node:fs').promises;
const path = require('node:path');
const { ESLint } = require('eslint');

async function getRules(configuration) {
  const engine = new ESLint({
    baseConfig: configuration,
    useEslintrc: false,
  });

  const config = await engine.calculateConfigForFile('./compare');
  return config.rules;
}

function getRuleLink(ruleName) {
  if (!ruleName.includes('/'))
    return `[\`${ruleName}\`](https://eslint.org/docs/rules/${ruleName})`;

  if (ruleName.startsWith('unicorn/'))
    return `[\`${ruleName}\`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/${ruleName.replace(/^unicorn\//, '')}.md)`;

  if (ruleName.startsWith('node/'))
    return `[\`${ruleName}\`](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/${ruleName.replace(/^node\//, '')}.md)`;

  if (ruleName.startsWith('standard/'))
    return `[\`${ruleName}\`](https://github.com/standard/eslint-plugin-standard#rules-explanations)`;

  if (ruleName.startsWith('import/'))
    return `[\`${ruleName}\`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/${ruleName.replace(/^import\//, '')}.md)`;

  if (ruleName.startsWith('promise/'))
    return `[\`${ruleName}\`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/docs/rules/${ruleName.replace(/^promise\//, '')}.md)`;

  return `\`${ruleName}\``;
}

function describeRuleValue(ruleValue) {
  if (typeof ruleValue === 'undefined')
    return 'N/A 👻';

  if (ruleValue === 0 || ruleValue === 'off')
    return 'off';

  if (ruleValue === 1 || ruleValue === 'warn')
    return 'warn ⚠️';

  if (ruleValue === 2 || ruleValue === 'error')
    return 'error 🚨';

  return false;
}

function getRuleConfiguration(ruleset, ruleName) {
  const rule = ruleset[ruleName];
  return describeRuleValue(Array.isArray(rule) ? rule[0] : rule);
}

(async () => {
  const noftalintRules = await getRules({ extends: ['../index.js'] });
  const airbnbRules = await getRules({ extends: ['airbnb-base'] });
  const googleRules = await getRules({ extends: ['google'] });
  const standardRules = await getRules({ extends: ['standard'] });

  const ruleNames = [
    ...new Set([
      ...Object.keys(noftalintRules),
      ...Object.keys(airbnbRules),
      ...Object.keys(googleRules),
      ...Object.keys(standardRules),
    ]),
  ].sort((a, b) => {
    const valueA = a[0] === '@' ? a.slice(1) : a;
    const valueB = b[0] === '@' ? b.slice(1) : b;
    return valueA.localeCompare(valueB);
  });

  let docsContent = '| Rule | noftalint | Airbnb | Google | Standard |\n| ---- | --------- | ------ | ------ | -------- |\n';
  for (const ruleName of ruleNames) {
    docsContent += `|${getRuleLink(ruleName)}`
      + `|${getRuleConfiguration(noftalintRules, ruleName)}`
      + `|${getRuleConfiguration(airbnbRules, ruleName)}`
      + `|${getRuleConfiguration(googleRules, ruleName)}`
      + `|${getRuleConfiguration(standardRules, ruleName)}`
      + '|\n';
  }

  await fs.writeFile(path.join(__dirname, 'comparison.md'), docsContent);
  console.log('Comparison table updated!');
})();
