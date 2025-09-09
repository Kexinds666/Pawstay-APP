export const ok = (body: any) => ({ statusCode: 200, body: JSON.stringify(body) });
export const bad = (msg: string, code = 400) => ({ statusCode: code, body: JSON.stringify({ error: msg }) });
