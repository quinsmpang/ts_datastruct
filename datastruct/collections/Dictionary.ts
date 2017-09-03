class Dictionary<TKey, TValue> implements IDictionary<TKey, TValue>{
    private _keys: TKey[];
    private _values: TValue[];
    private _iteratorPointer: number;
    count: number;

    constructor() {
        this._keys = new Array<TKey>();
        this._values = new Array<TValue>();
        this._iteratorPointer = 0;
    }

    private syncCount(): void {
        this.count = this._keys.length;
    }

    get(key: TKey): TValue {
        const index = this._keys.indexOf(key);
        if (index < 0) {
            // throw new PositionError();
            return null;
        } else {
            return this._values[index];
        }
    }

    set(key: TKey, value: TValue): void {
        const index = this._keys.indexOf(key);
        if (index < 0) {
            throw new PositionError();
        } else {
            this._values[index] = value;
        }
    }

    keys(): ICollection<TKey> {
        return new Collection(this._keys);
    }

    values(): ICollection<TValue> {
        return new Collection(this._values);
    }

    addKeyValue(key: TKey, value: TValue): void {
        const index = this._keys.indexOf(key);
        if (index >= 0) {
            throw new RangeError(`${key} exists.`);
        } else {
            this._keys.push(key);
            this._values.push(value);
        }
        this.syncCount();
    }

    containsKeyValue(key: TKey): boolean {
        if (this._keys.indexOf(key) < 0)
            return false;
        else
            return true;
    }

    removeKeyValue(key: TKey): void {
        const index = this._keys.indexOf(key);
        if (index < 0) {
            throw new RangeError(`${key} doesn't exist.`);
        } else {
            this._keys.splice(index, 1);
            this._values.splice(index, 1);
        }
        this.syncCount();
    }

    tryGetValue(key: TKey): [boolean, TValue | null] {
        const index = this._keys.indexOf(key);
        if (index < 0)
            return [false, null];
        else
            return [true, this._values[index]];
    }

    add<T extends [TKey, TValue]>(item: T): void {
        if (this.containsKeyValue(item[0])) {
            throw new RangeError(`${item[0]} exists.`);
        }
        else {
            this._keys.push(item[0]);
            this._values.push(item[1]);
        }
        this.syncCount();
    }

    clear(): void {
        this._keys = new Array<TKey>();
        this._values = new Array<TValue>();
        this.syncCount();
    }

    contains(item: KeyValuePair<TKey, TValue>): boolean {
        const index = this._keys.indexOf(item.key);
        if (index < 0) {
            return false;
        } else {
            if (this._values[index] != item.value)
                return false;
            else
                return true;
        }
    }

    remove(item: KeyValuePair<TKey, TValue>): boolean {
        const index = this._keys.indexOf(item.key);
        if (index < 0) {
            return false;
        } else {
            if (this._values[index] != item.value) {
                return false;
            } else {
                this.removeKeyValue(item.key);
                this.removeKeyValue(item.key);
                return true;
            }
        }
    }

    [Symbol.iterator](): Iterator<KeyValuePair<TKey, TValue>> {
        return this;
    }

    next(): IteratorResult<KeyValuePair<TKey, TValue>> {
        if (this._iteratorPointer < this.count) {
            const result: IteratorResult<KeyValuePair<TKey, TValue>> = {
                done: false,
                value: new KeyValuePair(this._keys[this._iteratorPointer], this._values[this._iteratorPointer])
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

    throw(): IteratorResult<KeyValuePair<TKey, TValue>> {
        this._iteratorPointer = 0;
        return {
            done: true,
            value: Object()
        }
    }

    return(): IteratorResult<KeyValuePair<TKey, TValue>> {
        this._iteratorPointer = 0;
        return {
            done: true,
            value: Object()
        }
    }


}