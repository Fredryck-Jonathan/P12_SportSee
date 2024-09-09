const data_mock  = {

    "user_infos": {
        "user_infos": {
            "id": 12,
            "userInfos": {
                "firstName": "Jonathan",
                "lastName": "Dovineau",
                "age": 31
            },
            "todayScore": 0.12,
            "keyData": {
                "calorieCount": 1930,
                "proteinCount": 155,
                "carbohydrateCount": 290,
                "lipidCount": 50
            }
        },
        "user_activity": {
            "userId": 12,
            "sessions": [
                {
                    "day": "2020-07-01",
                    "kilogram": 80,
                    "calories": 240
                },
                {
                    "day": "2020-07-02",
                    "kilogram": 80,
                    "calories": 220
                },
                {
                    "day": "2020-07-03",
                    "kilogram": 81,
                    "calories": 280
                },
                {
                    "day": "2020-07-04",
                    "kilogram": 81,
                    "calories": 290
                },
                {
                    "day": "2020-07-05",
                    "kilogram": 80,
                    "calories": 160
                },
                {
                    "day": "2020-07-06",
                    "kilogram": 78,
                    "calories": 162
                },
                {
                    "day": "2020-07-07",
                    "kilogram": 76,
                    "calories": 390
                }
            ]
        },
        "user_average_sessions": [
            {
                "day": "L",
                "sessionLength": 30
            },
            {
                "day": "M",
                "sessionLength": 23
            },
            {
                "day": "M",
                "sessionLength": 45
            },
            {
                "day": "J",
                "sessionLength": 50
            },
            {
                "day": "V",
                "sessionLength": 0
            },
            {
                "day": "S",
                "sessionLength": 0
            },
            {
                "day": "D",
                "sessionLength": 60
            }
        ],
        
        "user_performance": [
            {
                "value": 80,
                "kind": "cardio"
            },
            {
                "value": 120,
                "kind": "energy"
            },
            {
                "value": 140,
                "kind": "endurance"
            },
            {
                "value": 50,
                "kind": "strength"
            },
            {
                "value": 200,
                "kind": "speed"
            },
            {
                "value": 90,
                "kind": "intensity"
            }
        ]
    }
};


export default data_mock
