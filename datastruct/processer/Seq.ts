module Seq {
    /**
     * Find the first element that matches
     * 
     * @export
     * @template T 
     * @param {(i:T)=>boolean} match 
     * @param {ICollection<T>} collection 
     * @returns {T} 
     */
    export function find<T>(match: (i: T) => boolean, collection: Iterable<T>): T {
        let result: T = Object();
        for (const i of collection) {
            if (match(i)) {
                result = i;
                break;
            }
        }
        return result;
    }

    /**
     * Find all elements that match
     * 
     * @export
     * @template T 
     * @param {(i:T)=>boolean} match 
     * @param {ICollection<T>} collection 
     * @returns {ICollection<T>} 
     */
    export function findAll<T>(match: (i: T) => boolean, collection: Iterable<T>): ICollection<T> {
        let _list: T[] = new Array<T>();
        for (const i of collection) {
            if (match(i))
                _list.push(i);
        }
        return new Collection<T>(_list);
    }

    /**
     * Iterate a contianer and process each element
     * 
     * @export
     * @template T 
     * @param {(i:T)=>T} match 
     * @param {ICollection<T>} collection 
     * @returns {ICollection<T>} 
     */
    export function map<T>(match: (i: T) => T, collection: Iterable<T>): ICollection<T> {
        let _list: T[] = new Array<T>();
        for (const i of collection) {
            _list.push(match(i));
        }
        return new Collection<T>(_list);
    }

    /**
     * Apply function of two arguments cumulatively to the elements of collection, from left to right, so as to reduce the collection to a single value
     * 
     * @export
     * @template T 
     * @param {(x:T,y:T)=>T} match 
     * @param {ICollection<T>} collection 
     * @returns {T} 
     */
    export function reduce<T>(match: (x: T, y: T) => T, collection: Iterable<T>): T {
        let counter = 1;
        let tmp: T = Object();
        for (const i of collection) {
            if (counter == 1) {
                tmp = i;
            }
            else {
                tmp = match(tmp, i);
            }
            counter++;
        }
        return tmp;
    }

    /**
     * Get a value of speicial position from collection
     * 
     * @export
     * @template T 
     * @param {number} index 
     * @param {ICollection<T>} collection 
     * @returns {T} 
     */
    export function get<T>(index: number, collection: Iterable<T>): T {
        let _result: T = Object();
        let counter = 0;
        for (const i of collection) {
            if (counter == index)
                _result = i;
            counter++;
        }
        return _result;
    }
}