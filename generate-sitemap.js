const SitemapGenerator = require('sitemap-generator');
const fs = require('fs');

const generator = SitemapGenerator('https://www.gerolamocs.com', {
  filepath: 'dist/sitemap.xml',
  maxDepth: 0, // Defina conforme necessário
});

generator.on('done', () => {
  console.log('Sitemap gerado com sucesso!');
});

generator.on('error', (error) => {
  console.error('Erro ao gerar o sitemap:', error);
});

generator.start();
