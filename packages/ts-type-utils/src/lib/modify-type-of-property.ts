export type ModifyTypeOfProperty<T, R extends Partial<{ [k in keyof T]: unknown }>> = Omit<T, keyof R> & R
