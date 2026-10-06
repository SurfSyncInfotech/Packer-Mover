/**
 * Client-side stand-in until a form endpoint is connected.
 * Replace this function to deliver quote, contact, tracking and newsletter requests.
 */
export function submitInquiry(kind, payload) {
  if (import.meta.env.DEV) {
    console.info(`[SafarSetu] ${kind}`, payload);
  }
  const reference = `SS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  return Promise.resolve({ ok: true, reference });
}
