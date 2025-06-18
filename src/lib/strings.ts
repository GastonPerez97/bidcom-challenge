export function replaceDoubleHyphenWithEmDash(str: string): string {
  return str.replace(/--/g, "—");
}
