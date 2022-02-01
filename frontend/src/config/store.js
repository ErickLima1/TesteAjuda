//Dentro store vai ser uma area de armazenamento para compartilhar entre os components, 
//Quando a store e modificada o components  referente sera modificado
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({ //Criando as funções para manipular os dados (mutations)
    state: {
        isMenuVisible: true,
        user: {
            name: 'Usuário Erick',
            email: 'Erick@gmail.com'
        }
    },
    mutations: { //Mutation altera o estado do dados
        toggleMenu(state, isVisible) {
            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            }else {
                state.isMenuVisible = isVisible
            }
        }
    }
})