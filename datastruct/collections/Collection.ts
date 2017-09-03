class Collection<T> implements ICollection<T>{
    private _array: T[];
    private _iteratorPointer: number;
    count: number;

    constructor(items: T[]) {
        this._array = items;
        this._iteratorPointer = 0;
        this.count = this._array.length;
    }

    add<T>(item: T): void {
        new Error(`Unusful method ${item}`);
    }

    clear(): void {
        new Error(`Unusful method`);
    }

    contains(item: T): boolean {
        new Error(`Unusful method ${item}`);
        return false;
    }

    remove(item: T): boolean {
        new Error(`Unusful method ${item}`);
        return false;
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

}