class List<T> implements IList<T>{
    private _array: T[];
    private _iteratorPointer: number;
    count: number;

    constructor() {
        this._array = new Array<T>();
        this._iteratorPointer = 0;
        this.syncCount();
    }

    private syncCount(): void {
        this.count = this._array.length;
    }

    /**
     * Get index of item
     * 
     * @param {T} item 
     * @returns {number} 
     * 
     * @memberof List
     */
    indexOf(item: T): number {
        return this._array.indexOf(item);
    }

    /**
     * Insert a item before a specific position.
     * 
     * @param {number} index 
     * @param {T} item 
     * 
     * @memberof List
     */
    insert(index: number, item: T): void {
        this._array.splice(index, 0, item);
        this.syncCount();
    }

    /**
     * Remove a item from a specific position.
     * 
     * @param {number} index 
     * 
     * @memberof List
     */
    removeAt(index: number): void {
        this._array.splice(index, 1);
        this.syncCount();
    }

    /**
     * Add a item.
     * 
     * @param {T} item 
     * 
     * @memberof List
     */
    add(item: T): void {
        this._array.push(item);
        this.syncCount();
    }

    /**
     * Clear all items.
     * 
     * 
     * @memberof List
     */
    clear(): void {
        this._array = new Array<T>();
        this.syncCount();
    }

    /**
     * Check the item is contained in the container or not.
     * 
     * @param {T} item 
     * @returns {boolean} 
     * 
     * @memberof List
     */
    contains(item: T): boolean {
        if (this._array.indexOf(item) < 0)
            return false;
        else
            return true;
    }

    /**
     * Remove a specific item.
     * 
     * @param {T} item 
     * @returns {boolean} 
     * 
     * @memberof List
     */
    remove(item: T): boolean {
        const index = this._array.indexOf(item);
        if (index < 0) {
            return false;
        }
        else {
            this._array.splice(index, 1);
            this.syncCount();
            return true;
        }
    }

    [Symbol.iterator](): Iterator<T> {
        return this;
    }

    next(): IteratorResult<T> {
        if (this._iteratorPointer < this.count) {
            const result: IteratorResult<T> = {
                done: false,
                value: this._array[this._iteratorPointer]
            }
            this._iteratorPointer++;

            return result;
        }
        else {
            const result: IteratorResult<any> = {
                done: true,
                value: null
            }
            this._iteratorPointer = 0;
            return result;
        }
    }

    throw(): IteratorResult<T> {
        this._iteratorPointer = 0;
        return {
            done: true,
            value: Object()
        }
    }

    return(): IteratorResult<T> {
        this._iteratorPointer = 0;
        return {
            done: true,
            value: Object()
        }
    }

    /**
     * Get item from a specific position
     * 
     * @param {number} index 
     * @returns {T} 
     * 
     * @memberof List
     */
    get(index: number): T {
        return this._array[index];
    }


    /**
     * Set a value of specific position
     * 
     * @param {number} index 
     * @param {T} value 
     * 
     * @memberof List
     */
    set(index: number, value: T): void {
        this._array[index] = value;
    }

    /**
     * Get a range of items
     * 
     * @param {number} index 
     * @param {number} count 
     * @returns {List<T>} 
     * 
     * @memberof List
     */
    getRange(index: number, count: number): List<T> {
        const result = new List<T>();
        const section = this._array.slice(index, count);
        for (const i of section) {
            result.add(i);
        }
        return result;
    }

    /**
     * Reverse a item of list
     * 
     * 
     * @memberof List
     */
    reverse(): void {
        this._array.reverse();
    }

    /**
     * Remove a range of value
     * 
     * @param {number} index 
     * @param {number} count 
     * 
     * @memberof List
     */
    removeRange(index: number, count: number): void {
        this._array.splice(index, count);
        this.syncCount();
    }

    toArray(): T[] {
        return this._array;
    }
}