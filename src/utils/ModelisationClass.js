import axios from "axios";
import data_mock from "../data/Data_mock";

export class ModelisationClass {
    constructor(userId) {
        this.sourceAPI = true;
        this.userId = userId;
        this.data = this.getData(userId);
    }

    async getData(userId) {
        let data
        if (this.sourceAPI === true) {
            data = await this.getDataFromAPI(userId)
        } else {
            data = this.getDataFromMock()
        }
        return data
    }

    async getDataFromAPI(userId) {
        let user_infos = await this.getUserInfosAPI(userId)
        let user_activity = await this.getUserActivityAPI(userId)
        let user_average_sessions = await this.getUserAverageSessionsAPI(userId)
        let user_performance = await this.getUserPerformanceAPI(userId)
        let data = {
            'user_infos': user_infos,
            'user_activity': user_activity,
            'user_average_sessions': user_average_sessions,
            'user_performance': user_performance,
        }
        console.log(data, userId)
        return data
    }

    async getUserInfosAPI(userId)  {
        try {
            let res = await axios.get(`http://localhost:3000/user/${userId}`);
            if (res.data.data.todayScore) {
                const {todayScore, ...rest} = res.data.data
                const newObj = { score: todayScore, ...rest }
                console.log(newObj)
                return newObj
            } else {
                
                console.log(res.data.data)
                return res.data.data;
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des données utilisateur:', error);
            throw error;
        }
    }

    async getUserActivityAPI(userId) {
        try {
            const res = await axios.get(`http://localhost:3000/user/${userId}/activity`);
            return res.data.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des données utilisateur:', error);
            throw error;
        }
    }

    async getUserAverageSessionsAPI(userId) {
            try {
                const res = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
                
                const dataAverageSessions = []
                const dayMapping = {
                    1: 'L', // Lundi
                    2: 'M', // Mardi
                    3: 'M', // Mercredi
                    4: 'J', // Jeudi
                    5: 'V', // Vendredi
                    6: 'S', // Samedi
                    7: 'D'  // Dimanche
                };
                res.data.data.sessions.forEach((element) => {
                    element.day = dayMapping[element.day];
                    dataAverageSessions.push(element)
                })
                return dataAverageSessions
            } catch (error) {
                console.error('Erreur lors de la récupération des données utilisateur:', error);
                throw error;
            }
    }
    

    async getUserPerformanceAPI(userId) {
        try {
            const res = await axios.get(`http://localhost:3000/user/${userId}/performance`);
            let dataPerformance = [];
            res.data.data.data.forEach((element) => {
                let i = element.kind;
                element.kind = res.data.data.kind[i];
                dataPerformance.push(element)
            })
            console.log(dataPerformance)
            return res.data.data.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des données utilisateur:', error);
            throw error;
        }
    }

    getDataFromMock() {
        console.log("mock " + data_mock)
        const data = data_mock.user_infos
        return data
    }
}