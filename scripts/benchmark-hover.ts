function getLocalizedValueOriginal(text: { [key: string]: string }, currentLang: string): string {
  return text[currentLang] || text['en'] || Object.values(text)[0] || '';
}

function getLocalizedValueOptimized(text: { [key: string]: string }, currentLang: string): string {
  if (text[currentLang]) return text[currentLang];
  if (text['en']) return text['en'];
  for (const key in text) {
    return text[key] || '';
  }
  return '';
}

const testObj = {
  fr: 'Bonjour',
  de: 'Hallo',
  es: 'Hola',
  it: 'Ciao',
  pt: 'Olá',
  ru: 'Привет',
  zh: '你好',
  ja: 'こんにちは',
};

// Check behavioral equivalence
const cases = [
  { text: { ja: 'こんにちは', en: 'Hello' }, lang: 'ja' },
  { text: { ja: '', en: 'Hello' }, lang: 'ja' },
  { text: { fr: 'Bonjour' }, lang: 'ja' },
  { text: { fr: '' }, lang: 'ja' },
  { text: {}, lang: 'ja' },
];

for (const c of cases) {
  const orig = getLocalizedValueOriginal(c.text, c.lang);
  const opt = getLocalizedValueOptimized(c.text, c.lang);
  if (orig !== opt) {
    console.error(`Mismatch for ${JSON.stringify(c)}: orig=${orig}, opt=${opt}`);
    process.exit(1);
  }
}

const ITERATIONS = 10000000;

console.time('Original');
for (let i = 0; i < ITERATIONS; i++) {
  getLocalizedValueOriginal(testObj, 'nl');
}
console.timeEnd('Original');

console.time('Optimized');
for (let i = 0; i < ITERATIONS; i++) {
  getLocalizedValueOptimized(testObj, 'nl');
}
console.timeEnd('Optimized');
