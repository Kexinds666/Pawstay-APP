import { ok, bad } from '../common/response';
import { osClient } from '../common/os';
const INDEX = process.env.OS_INDEX_LISTINGS || 'pawstay-listings';
export const handler = async (event: any) => {
  const lat = parseFloat(event.queryStringParameters?.lat);
  const lon = parseFloat(event.queryStringParameters?.lon);
  const km  = parseInt(event.queryStringParameters?.km ?? '10', 10);
  if (isNaN(lat) || isNaN(lon)) return bad('bad lat/lon');
  const q = {
    query: {
      bool: {
        must: [{ match_all: {} }],
        filter: [{ geo_distance: { distance: `${km}km`, location: { lat, lon } } }]
      }
    },
    size: 50
  };
  const { body } = await osClient.search({ index: INDEX, body: q } as any);
  const hits = body?.hits?.hits?.map((h: any) => ({ id: h._id, ...h._source })) || [];
  return ok(hits);
};
