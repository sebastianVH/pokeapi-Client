import axios from "axios";
import { SET_POKEMONS,GET_TYPES,ORDER_BY_NAME,ORDER_BY_ATTACK, FILTER_BY_TYPE,FILTER_BY_ORIGIN,ADD_POKEMON } from "./actionsTypes";



export const setPokemons = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`/pokemons`)
            return dispatch({
                type: SET_POKEMONS,
                payload: data
            })
        } catch (error) {
            return error.message
        }
    }
}

export const getTypes = () => {
    return async (dispatch) =>{
        try {
            const {data} = await axios('/types')
            return dispatch({
                type: GET_TYPES,
                payload: data
            })
        } catch (error) {
            return error.message
        }
    }
}

export const orderByName = (order) => {
    return (dispatch) =>{
        return dispatch({
            type: ORDER_BY_NAME,
            payload: order
        })
    }
}

export const orderByAttack = (order) => {
    return (dispatch) =>{
        return dispatch({
            type: ORDER_BY_ATTACK,
            payload: order
        })
    }
}

export const filterByType = (order) => {
    return (dispatch) =>{
        return dispatch({
            type: FILTER_BY_TYPE,
            payload: order
        })
    }
}
export const filterByOrigin = (order) => {
    return (dispatch) =>{
        return dispatch({
            type: FILTER_BY_ORIGIN,
            payload: order
        })
    }
}

export const createPokemon = (formData) =>{
    return async (dispatch) => {
        try {
            const {data} = await axios.post('/', formData)
            return dispatch({
                type: ADD_POKEMON,
                payload: data
            })
        } catch (error) {
            return error.message
        }
    }
}