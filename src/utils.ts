/**
 * Merges each class name in a CSS module styles object with corresponding custom class names.
 * If a custom class name is provided for a key, it appends it to the default class name,
 * otherwise, it keeps the default class name.
 *
 * @param defaultStyles - The styles object imported from a CSS module.
 * @param customStyles - An optional object containing custom styles to be merged.
 * @returns An object with each key's value being a string that combines default and custom class names.
 * @example
 * const mergedStyles = mergeStyles(styles, props.customStyle);
 */
export function mergeStyles<T extends Record<string, string>>(
  defaultStyles: T,
  customStyles?: Partial<T>
): Record<string, string> {
  const mergedStyles: Record<string, string> = {};

  for (const key in defaultStyles) {
    mergedStyles[key] =
      defaultStyles[key] +
      (customStyles && customStyles[key] ? ` ${customStyles[key]}` : "");
  }

  return mergedStyles;
}
