import axios from "axios";
import store from "@/store";

const StoreID = process.env["VUE_APP_STORE_ID"]
const TokenAPI = process.env["VUE_APP_API_TOKEN"]

export default {
  namespaced: true,
    state(){
      return{
          requests: [],
      }
    },
    mutations: {
      setRequests(state, request){
        state.requests = request
      }
    },
    actions: {
      async loadCategory({commit, dispatch}){
        try {
          const {data} = await axios.get(`https://app.ecwid.com/api/v3/${StoreID}/categories?token=${TokenAPI}`)
          // const request = Object.keys(data).map(id=>({...data[id],id}))
          const request = data.items
          commit('setRequests', request)
          console.log(data)
          console.log(state.requests)
        } catch (e) {

        }
      }
    },
    getters: {
      requests(state){
        return state.requests
      }
    }
}