/**
 * @name List
 * @description takes state array and returns state array
 *              or
 *              takes no param and returns empty array
 *
 * @param state  @type {T}
 * Generic Type representing <string>, <number>, etc.{Array<T> | no param}
 *
 * @returns {T[]} Array<T> = T[]
 */

export const List = <T>(state: T[] = []): T[] => {
  return state;
};

/**
 * @name append
 * @description 1) takes state
 *              2) returns function with param value
 *              3) returns new array with value appended to state
 *
 * @param state
 * @type {T[]}
 * @returns {function} *
 *    @param value
 *    @type {T}
 *    @returns {T[]}
 *
 */
export const append = <T>(state: T[]) => (value: T) => {
  // using spread operator:
  //      ...array = e1, e2, e3
  //                 returns copied elements
  //    [...array] = [e1, e2, e3]
  //                 returns new array with copied elements
  return [...state, value];
};

/**
 * @name remove
 * @description 1) takes state
 *              2) returns function with param value
 *              3) returns new array with value removed from state
 *
 * @param state
 * @type {T[]}
 * @returns {function} *
 *    @param value
 *    @type {T}
 *    @returns {T[]}
 *
 */
export const remove = <T>(state: T[]) => (index: number) => {
  return [...state.filter((_, idx) => idx !== index)];
};
