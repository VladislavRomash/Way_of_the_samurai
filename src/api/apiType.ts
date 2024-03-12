export interface UsersApi {
    name: string
    id: number
    photos: Photos
    status: null
    followed: boolean
    uniqueUrlName: null
}

export interface Photos {
    small: null
    large: null
}


export interface GetResponse<T = []> {
    error: null
    items: T
    totalCount: number
}