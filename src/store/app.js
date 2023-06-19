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
    hadithBookList: [],
    selectedHadithBook: '',
    // hadithBookList: window.localStorage.getItem('hadithBookList') ? JSON.parse(window.localStorage.getItem('hadithBookList')) : [],
    hadithChapter: window.localStorage.getItem('hadithChapter') ? JSON.parse(window.localStorage.getItem('hadithChapter')) : [],
    selectedHadithBookChapter: '',
    // hadith: window.localStorage.getItem('hadith') ? JSON.parse(window.localStorage.getItem('hadith')) : [],
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
    },
    setHadithBookList(data) {
      this.hadithBookList = window.localStorage.setItem('hadithBookList', JSON.stringify(data)) || data
    },
    setHadithChapter(data) {
      this.hadithChapter = window.localStorage.setItem('hadithChapter', JSON.stringify(data)) || data
    },

    setHadith(data) {
      this.hadith = window.localStorage.setItem('hadith', JSON.stringify(data)) || data
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
    getHadithBookList() {
      if (this.hadithBookList.length === 0) {
        api.getHadithBookList().then((response) => {
            this.setHadithBookList(response.data)
            this.setMessage(response.statusText)
            this.setStatusCode(response.data.status)
            this.setStatus(response.data.status)
          }
          ).catch((error) => {
            console.log(error)
          }
        )
      }
    },
    getHadithChapterList() {
      if (this.hadithChapter.length === 0) {
        api.getHadithChapter(this.selectedHadithBook).then((response) => {
            this.setHadithChapter(response.data)
            this.setMessage(response.statusText)
            this.setStatusCode(response.data.status)
            this.setStatus(response.data.status)
          }
          ).catch((error) => {
            console.log(error)
          }
        )
      }
    },
    // getHadith($params) {
      // if (this.hadith.length === 0) {
        // api.getHadith($params).then((response) => {
        //     this.setHadith(response.data.data)
        //     this.setMessage(response.data.code)
        //     this.setStatusCode(response.data.status)
        //     this.setStatus(response.data.status)
        //   }
        //   ).catch((error) => {
        //     console.log(error)
        //   }
        // ) 
      // }
    // } 
  }
})
