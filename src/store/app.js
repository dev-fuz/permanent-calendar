// Utilities
import { defineStore } from 'pinia'
import api from '../api/tohfa-e-ramazan'

export const useAppStore = defineStore('app', {
  state: () => ({
    // Add your state here
    status: '',
    message: '',
    statusCode: 0,
    data: [],
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
      this.data = data
    },
  },
  getters: {
    // Add your getters here
    getData() {
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
  }
})
