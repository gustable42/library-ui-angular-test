export interface Author {
    key: string,
    text: any[],
    type: string,
    name: string,
    alternate_names: string[],
    birth_date: string,
    top_work: string,
    work_count: number,
    top_subjects: any[],
    _version_: any,

    personal_name?: string,
    photos?: number[],
}