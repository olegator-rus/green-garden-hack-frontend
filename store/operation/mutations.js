const mutations = {

    updateList(state, data){
        state.list = data;
    },

    updateReasonsList(state, data){
        state.reasonsList = data;
    },

    updateTypes(state, data){
        state.types = data;
    },

    updateTypesNorms(state, data){
        state.typesNorms = data;
    },


    // Мутация начала загрузки экшена
    startLoading(state){
        state.loading = true;
    },

    // Мутация конца загрузки экшена
    finishLoading(state){
        state.loading = false;
    },

    // Мутация конца загрузки модуля
    activatePreloader(state){
        state.preloader = true;
    },

    // Мутация конца загрузки модуля
    deactivatePreloader(state){
        state.preloader = false;
    }

}

export default mutations;