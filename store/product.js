const products = [
    {name:'super parfum', price: 23, maxValue: 100, sex: 'women', brand: 'dior', flask: 'true', comments: [1, 2], _id: 'id1'},
    {name:'parfum', price: 43, maxValue: 50, sex: 'men', brand: 'nodior', flask: 'false', comments: [1, 2], _id: 'id2'}
]

export const actions = {
    async fetchAdmin({commit}) {
        try {
          return await this.$axios.$get('/api/product/admin')
        } catch (e) {
          commit('setError', e, {root: true})
          throw e
        }
    },
    async remove({commit}, id){
      try {
        return await this.$axios.$delete(`/api/product/admin/${id}`)
      } catch (e) {
        commit('setError', e, {root: true})
        throw e
      }
    },
    async update({commit}, {id, text}){
      try {
        return await this.$axios.$put(`/api/product/admin/${id}`, {text})
      } catch (e) {
        commit('setError', e, {root: true})
        throw e
      }
    },
    async create({commit}, {name, text, image, price, maxValue, sex, brand, flask}) {

      try {
        const fd = new FormData()
        
        fd.append('name', name)
        fd.append('text', text)
        fd.append('image', image, image.name)
        fd.append('price', price)
        fd.append('maxValue', maxValue)
        fd.append('sex', sex)
        fd.append('brand', brand)
        fd.append('flask', flask)
      
        return await this.$axios.$post('/api/product/admin', fd)

      } catch (e) {
        commit('setError', e, {root: true})
        throw e
      }

    },
    async fetchAdminById({commit}, id) {
      try {
        return await this.$axios.$get(`/api/product/admin/${id}`)
      } catch (e) {
        commit('setError', e, {root: true})
        throw e
      }
      }
    }
    