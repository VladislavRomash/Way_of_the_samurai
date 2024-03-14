interface Scale {
    maxSizeScale: number
    minSizeScale: number
}

type Action = IncreaseSizeScale
    | ReduceSizeScale

const initialState: Scale = {
    maxSizeScale: 5,
    minSizeScale: 1
}

export const paginationReducer = (state = initialState, action: Action): Scale => {
    switch (action.type) {
        case 'INCREASE_ SIZE_SCALE': {
            if (action.value === 1) {
                return {...state, maxSizeScale: action.value + 4}
            } else if (action.value === 2) {
                return {...state, maxSizeScale: action.value + 3}
            } else return {...state, maxSizeScale: action.value + 2}
        }
        case 'REDUCE_ SIZE_SCALE': {
            if (action.value > 2) {
                return {...state, minSizeScale: action.value - 2}
            } else if (action.value > 1) {
                return {...state, minSizeScale: action.value - 1}
            } else return state
        }
        default:
            return state
    }
}

type IncreaseSizeScale = ReturnType<typeof increaseSizeScale>
export const increaseSizeScale = (value: number) => {
    return {
        type: 'INCREASE_ SIZE_SCALE', value
    } as const
}

type ReduceSizeScale = ReturnType<typeof reduceSizeScale>
export const reduceSizeScale = (value: number) => {
    return {
        type: 'REDUCE_ SIZE_SCALE', value
    } as const
}