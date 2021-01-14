export interface IBook {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    price?: number;
    _created?: Date;
}

export interface ICategory {
    id?: number;
    name?: string;
}

export interface IUser {
    id?: number;
    name?: string;
    password?: string;
    email?: string;
    role?: string;
    _created?: Date;
}

export interface CannedResponse {
    insertId?: number;
}