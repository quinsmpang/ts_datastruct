class Queue<T> implements ICollection<T>{
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
     * #NOTRECOMMEND Please use `enqueue`
     * 
     * @param {T} item 
     * 
     * @memberof Queue
     */
    add(item: T): void {
        this._array.push(item);
        this.syncCount();
    }

    /**
     * Clear all item of queue
     * 
     * 
     * @memberof Queue
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
     * @memberof Queue
     */
    contains(item: T): boolean {
        if (this._array.indexOf(item) < 0)
            return false;
        else
            return true;
    }

    /**
     * #NOTRECOMMEND Please use `dequeue`
     * 
     * @param {T} item 
     * @returns {boolean} 
     * 
     * @memberof Queue
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
     * Return the first element of queue, then will remove it from queue.
     * 
     * @returns {T} 
     * 
     * @memberof Queue
     */
    dequeue(): T {
        const result = this._array[0];
        this._array.shift();
        this.syncCount();
        return result;
    }

    /**
     * Add a item after all elements of queue.
     * 
     * @param {T} item 
     * 
     * @memberof Queue
     */
    enqueue(item: T): void {
        this.add(item);
    }

    /**
     * Return the first element of queue, but don't remove it.
     * 
     * @returns {T} 
     * 
     * @memberof Queue
     */
    peek(): T {
        return this._array[0];
    }

    toArray(): T[] {
        return this._array;
    }
}