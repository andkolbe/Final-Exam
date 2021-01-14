export interface TBook {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    price?: number;
    _created?: Date;
}

export interface TCategory {
    id?: number;
    name?: string;
}

export interface TUser {
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