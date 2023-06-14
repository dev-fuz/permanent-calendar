import axios from "axios";

const BASE_URL = "http://tohfa-e-ramazan.test/api";
const QURAN_URL = "https://api.alquran.cloud/v1/quran/quran-uthmani";

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
    }
};