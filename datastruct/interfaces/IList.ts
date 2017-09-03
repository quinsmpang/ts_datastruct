interface IList<T> extends ICollection<T>, IIndexer<T> {
    indexOf(item: T): number;
    insert(index: number, item: T): void;
    removeAt(index: number): void;
}