
import axios from 'axios'

export const state = () => ({
    heading: [],
    menu: [],
    button: [],
    customer: [],
    cards: [],
    pricing: []
})

export const getters = {
    heading: state => {
        return state.heading
    }
}

export const mutations = {
    setHeading(state, payload) {
        state.heading = payload;
    }
}


export const actions = {
     nuxtServerInit(vuexContext, context) {
       return  fetch('http://localhost:3000/hero')
            .then((res) => {
               
                vuexContext.commit('setHeading',res)
            })
            .catch(err => {
                console.log(context.error(err))
            })
    }
}
