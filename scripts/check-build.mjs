import { readFileSync, existsSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
if (!html.includes('<div id="root"></div>')) throw new Error('index.html is missing the app root');
if (!html.includes('<script src="automation.js"></script>')) throw new Error('index.html is missing the Automation Studio script');
if (!existsSync(new URL('../automation.js', import.meta.url))) throw new Error('automation.js is missing');
console.log('ThreadyGo static build checks passed.');
