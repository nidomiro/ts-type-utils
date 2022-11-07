/**
 * Checks if value is of type 'object' and not (null or undefined)
 * @param value
 */
export function isNonNilObject(value: unknown): value is Record<string, unknown> {
	return typeof value === 'object' && value != null
}
