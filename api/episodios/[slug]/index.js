import data from '../../../data/series_chaves_chapolin.json' with { type: 'json' };

// Função auxiliar para mapear nomes como "Chapolin Colorado" -> "chapolin" ou "chapolin-colorado"
const findSerieBySlug = (slug) => {
  const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
  return data.find((item) => {
    const itemSlug = item.serie.toLowerCase().replace(/[^a-z0-9]/g, '');
    return itemSlug.includes(cleanSlug) || cleanSlug.includes(itemSlug);
  });
};

export default function handler(req, res) {
  // Headers essenciais de CORS e Cache CDN
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método não permitido' });

  const { slug } = req.query;
  const serieEncontrada = findSerieBySlug(slug);

  if (!serieEncontrada) {
    return res.status(404).json({
      error: 'Série não encontrada',
      mensagem: `A série '${slug}' não existe. Opções válidas: 'chaves' ou 'chapolin'.`
    });
  }

  return res.status(200).json({
    serie: serieEncontrada.serie,
    total: serieEncontrada.episodios.length,
    episodios: serieEncontrada.episodios
  });
}