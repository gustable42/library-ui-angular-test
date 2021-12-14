export interface Page<T> {
    numFound: number,
    start: number,
    numFoundExact: boolean,
    docs: T[]
}

export class EmptyPage<T> implements Page<T>{
    numFound: 0;
    start: 0;
    numFoundExact: false;
    docs: []
    constructor() {}
}