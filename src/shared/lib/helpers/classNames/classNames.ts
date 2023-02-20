type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
  const res: Array<string> = [cls, ...additional];
  // eslint-disable-next-line no-restricted-syntax
  for (const oneMod in mods) {
    if (mods[oneMod]) res.push(oneMod);
  }
  return res.join(' ');
}