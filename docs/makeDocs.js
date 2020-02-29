const fs = require('fs');
const CLIEngine = require('eslint').CLIEngine;

function getEngineForConfiguration(configuration) {
  const engine = new CLIEngine({
    baseConfig: configuration,
    useEslintrc: false,
  });
  return engine;
}

const noftalintEngine = getEngineForConfiguration({ extends: ['../index.js'] });
const airbnbEngine = getEngineForConfiguration({ extends: ['airbnb'] });
const googleEngine = getEngineForConfiguration({ extends: ['google'] });
const standardEngine = getEngineForConfiguration({ extends: ['standard'] });

const ruleNames = [
  ...new Set([
    ...Object.keys(noftalintEngine.config.baseConfig.rules),
    ...Object.keys(airbnbEngine.config.baseConfig.rules),
    ...Object.keys(googleEngine.config.baseConfig.rules),
    ...Object.keys(standardEngine.config.baseConfig.rules),
  ]),
].sort();

function getRuleLink(ruleName, engines) {
  for (const engine of engines) {
    const subjectRule = engine.getRules().get(ruleName);

    if (subjectRule && subjectRule.meta && subjectRule.meta.docs && subjectRule.meta.docs.url)
      return '[`' + ruleName + '`](' + subjectRule.meta.docs.url + ')';
  }

  return '`' + ruleName + '`';
}

function describeRuleValue(ruleValue) {
  if (ruleValue === undefined) return 'N/A 👻';
  if (ruleValue === 0 || ruleValue === 'off') return 'off';
  if (ruleValue === 1 || ruleValue === 'warn') return 'warn ⚠️';
  if (ruleValue === 2 || ruleValue === 'error') return 'error 🚨';

  return false;
}

const getRuleConfiguration = (ruleset, ruleName) => {
  const ruleValueDescription = describeRuleValue(ruleset[ruleName]);

  return ruleValueDescription || describeRuleValue(ruleset[ruleName][0]);
};

const engines = [
  noftalintEngine,
  airbnbEngine,
  googleEngine,
  standardEngine,
];

let docsContent = '| Rule | noftalint | Airbnb | Google | Standard |\n| ---- | --------- | ------ | ------ | -------- |\n';
for (const ruleName of ruleNames) {
  docsContent += '| ' + getRuleLink(ruleName, engines) + ' | ' + getRuleConfiguration(noftalintEngine.config.baseConfig.rules, ruleName) + ' | ' + getRuleConfiguration(airbnbEngine.config.baseConfig.rules, ruleName) + ' | ' + getRuleConfiguration(googleEngine.config.baseConfig.rules, ruleName) + ' | ' + getRuleConfiguration(standardEngine.config.baseConfig.rules, ruleName) + ' |\n';
}

const path = `${__dirname}/comparison.md`;
try {
  fs.writeFile(path, docsContent, (err) => {
    if (err) return console.error(err);
    console.log('Documentation updated!');
    process.exit(0);
  });
} catch (err) {
  console.error(err);
}
