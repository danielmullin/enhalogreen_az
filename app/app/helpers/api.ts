export type Api = {
  base: string | undefined;
  key: string | undefined;
  path: string | undefined;
  port: string | null | undefined;
  protocol: string | undefined;
}
export const api: Api = {
  base: process.env.API_BASE,
  key: process.env.API_KEY,
  path: process.env.API_PATH,
  port: process.env.API_PORT  === '80' ? '' : `:${process.env.API_PORT}`,
  protocol: process.env.API_PROTOCOL,
}