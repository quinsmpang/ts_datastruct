interface IDictionary<TKey, TValue> extends ICollection<KeyValuePair<TKey, TValue>> {
    get(key: TKey): TValue;
    set(key: TKey, value: TValue): void;
    keys(): ICollection<TKey>;
    values(): ICollection<TValue>;
    addKeyValue(key: TKey, value: TValue): void;
    containsKeyValue(key: TKey): boolean;
    removeKeyValue(key: TKey): void;
    tryGetValue(key: TKey): [boolean, TValue | null];
}