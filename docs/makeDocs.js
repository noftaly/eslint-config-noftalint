const fs = require('fs');
const { join } = require('path');
const { ESLint } = require('eslint');

async function getRules(configuration) {
  const engine = new ESLint({
    baseConfig: configuration,
    useEslintrc: false,
  });

  return (await engine.calculateConfigForFile('./compare')).rules;
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
  ].sort();

  function getRuleLink(ruleName) {
    if (!ruleName.includes('/'))
      return `[\`${ruleName}\`](https://eslint.org/docs/rules/${ruleName})`;

    if (ruleName.startsWith('unicorn/'))
      return `[\`${ruleName}\`](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/${ruleName.replace(/^unicorn\//, '')}.md)`;

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
    if (ruleValue === undefined)
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
    const ruleValueDescription = describeRuleValue(ruleset[ruleName]);

    if (ruleValueDescription)
      return ruleValueDescription;
    return describeRuleValue(ruleset[ruleName][0]);
  }

  let docsContent = '| Rule | noftalint | Airbnb | Google | Standard |\n| ---- | --------- | ------ | ------ | -------- |\n';
  for (const ruleName of ruleNames)
    docsContent += `|${getRuleLink(ruleName)}|${getRuleConfiguration(noftalintRules, ruleName)}|${getRuleConfiguration(airbnbRules, ruleName)}|${getRuleConfiguration(googleRules, ruleName)}|${getRuleConfiguration(standardRules, ruleName)}|\n`;

  const path = join(__dirname, 'comparison.md');
  // As fs.promises was added in nodejs v11 and ESLint supports node down to v10.12, we can't use promises... :/
  // eslint-disable-next-line node/prefer-promises/fs
  fs.writeFile(path, docsContent, (err) => {
    if (err) throw err;
  });
  console.log('Documentation updated!');
})();
