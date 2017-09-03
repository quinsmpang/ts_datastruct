interface IIndexer<T> {
    get(index: number): T;
    get<T>(index: number): T;
    set(index: number, value: T): void;
    set<T>(index: number, value: T): void;
}