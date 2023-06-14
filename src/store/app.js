// Utilities
import { defineStore } from 'pinia'
import api from '../api/tohfa-e-ramazan'

export const useAppStore = defineStore('app', {
  state: () => ({
    // Add your state here
    status: '',
    message: '',
    statusCode: 0,
    data: window.localStorage.getItem('data') ? JSON.parse(window.localStorage.getItem('data')) : [],
    quran: window.localStorage.getItem('quran') ? JSON.parse(window.localStorage.getItem('quran')) : [],
  }),
  actions: {
    // Add your actions here
    setStatus(status) {
      this.status = status
    },
    setMessage(message) {
      this.message = message
    },
    setStatusCode(statusCode) {
      this.statusCode = statusCode
    },
    setData(data) {
      this.data = window.localStorage.setItem('data', JSON.stringify(data)) || data
    },
    setQuran(data) {
      this.quran = window.localStorage.setItem('quran', JSON.stringify(data)) || data
    }

  },
  getters: {
    // Add your getters here
    getData() {
      
      if (this.data.length === 0) {
        api.getPermanentCalendar().then((response) => {
            this.setData(response.data.data)
            this.setMessage(response.data.message)
            this.setStatusCode(response.data.status_code)
            this.setStatus(response.data.status)
          }
          ).catch((error) => {
            console.log(error)
          }
        ) 
      }
    },
    getQuran() {
      if (this.quran.length === 0) {
        api.getQuran().then((response) => {
            this.setQuran(response.data.data)
            this.setMessage(response.data.code)
            this.setStatusCode(response.data.status)
            this.setStatus(response.data.status)
          }
          ).catch((error) => {
            console.log(error)
          }
        ) 
      }
    },
  }
})
