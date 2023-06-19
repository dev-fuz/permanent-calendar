import axios from "axios";

const BASE_URL = "http://tohfa-e-ramazan.test/api";
const QURAN_URL = "https://api.alquran.cloud/v1/quran/quran-uthmani";
const HADITH_URL = "http://alquranbd.com/api/";

export default {
    getPermanentCalendar() {
        return axios.get(`${BASE_URL}/permanent-calendar`);
    },
    getQuran() {
        try {
            return axios.get(`${QURAN_URL}`);
        } catch (error) {
            console.log(error);
        }
    },
    
    getHadithBookList() {
        try {
            return axios.get(`${HADITH_URL}/hadith`);
        } catch (error) {
            console.log(error);
        }
    },

    getHadithChapter($params) {
        try {
            return axios.get(`${HADITH_URL}/hadith?${$params}`);
        } catch (error) {
            console.log(error);
        }
    },

    getHadith($params) {
        try {
            return axios.get(`${HADITH_URL}/hadith?${$params}`);
        } catch (error) {
            console.log(error);
        }
    }
};