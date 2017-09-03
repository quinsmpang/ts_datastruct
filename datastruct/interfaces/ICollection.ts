interface ICollection<T> extends Iterator<T>, Iterable<T> {
    count: number;
    add<T>(item: T): void;
    add(item: T): void;
    clear(): void;
    contains(item: T): boolean;
    remove(item: T): boolean;
}