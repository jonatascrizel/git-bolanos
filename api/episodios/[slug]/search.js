import data from '../../../data/series_chaves_chapolin.json' with { type: 'json' };

// Normaliza texto removendo acentos e passando para minúsculas
const normalize = (text) =>
  (text || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

const findSerieBySlug = (slug) => {
  const cleanSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, '');
  return data.find((item) => {
    const itemSlug = item.serie.toLowerCase().replace(/[^a-z0-9]/g, '');
    return itemSlug.includes(cleanSlug) || cleanSlug.includes(itemSlug);
  });
};

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método não permitido' });

  const { slug, q } = req.query;

  // Validação do termo de busca
  if (!q || q.trim() === '') {
    return res.status(400).json({
      error: 'Termo de busca ausente',
      mensagem: 'Utilize o parâmetro de consulta ?q=termo para buscar.'
    });
  }

  const serieEncontrada = findSerieBySlug(slug);

  if (!serieEncontrada) {
    return res.status(404).json({
      error: 'Série não encontrada',
      mensagem: `A série '${slug}' não existe. Opções válidas: 'chaves' ou 'chapolin'.`
    });
  }

  const termoLimpo = normalize(q);

  // Filtra por título em português, título em espanhol ou resumo
  const resultados = serieEncontrada.episodios.filter((ep) => {
    const matchPt = normalize(ep.titulo_pt).includes(termoLimpo);
    const matchEs = normalize(ep.titulo_es).includes(termoLimpo);
    const matchResumo = normalize(ep.resumo).includes(termoLimpo);
    return matchPt || matchEs || matchResumo;
  });

  return res.status(200).json({
    serie: serieEncontrada.serie,
    termo_buscado: q,
    total_encontrados: resultados.length,
    episodios: resultados
  });
}