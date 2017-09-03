class Stack<T> implements ICollection<T>{
    private _array: T[];
    private _iteratorPointer: number;
    count: number;

    constructor() {
        this._array = new Array<T>();
        this._iteratorPointer = 0;
    }

    private syncCount(): void {
        this.count = this._array.length;
    }

    /**
     * #NOTRECOMMEND Please use `push`
     * 
     * @param {T} item 
     * 
     * @memberof Stack
     */
    add(item: T): void {
        this._array.push(item);
        this.syncCount();
    }

    /**
     * Clear all elements of stack
     * 
     * 
     * @memberof Stack
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
     * @memberof Stack
     */
    contains(item: T): boolean {
        if (this._array.indexOf(item) < 0)
            return false;
        else
            return true;
    }

    /**
     * #NOTRECOMMEND Please use pop
     * 
     * @param {T} item 
     * @returns {boolean} 
     * 
     * @memberof Stack
     */
    remove(item: T): boolean {
        const index = this._array.indexOf(item);
        if (index < 0) {
            return false;
        } else {
            this._array.splice(index, 1);
            this.syncCount();
            return true;
        }
    }

    [Symbol.iterator](): Iterator<T> {
        throw new Error("Method not implemented.");
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
     * Return the head element of stack, but don't remove it.
     * 
     * @returns {T} 
     * 
     * @memberof Stack
     */
    peek(): T {
        return this._array[0];
    }

    /**
     * Return the head element of stack, then remove it from stack.
     * 
     * @returns {T} 
     * 
     * @memberof Stack
     */
    pop(): T {
        const result = this._array[0];
        this._array.shift();
        this.syncCount();
        return result;
    }

    /**
     * Push the item into the stack head.
     * 
     * @param {T} item 
     * 
     * @memberof Stack
     */
    push(item: T): void {
        this._array.unshift(item);
        this.syncCount();
    }

    toArray(): T[] {
        return this._array;
    }
}