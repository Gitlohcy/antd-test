import * as notTypes from './types';

export const defaultState: notTypes.Store = {
    
    jsonPlaceholder: {
        "userId": 2,
        "id": 2,
        "title": "testing",
        "completed": false
        },
    loading: {
        placeholder: 'SUCCESS',
        config: 'SUCCESS',
        notification: 'SUCCESS'
    },
    notification: {
        info: [
            {
                505: {
                    color: "red",
                    exchange: "XSEX",
                    companyName: "AsiaMedic Limited",
                    price: 0.019,
                    chg_pct: 0,
                    date: "2019-11-14",
                    Open: 0.018000000000000002,
                    High: 0.019,
                    Low: 0.017,
                    Close: 0.019,
                    ticker: "505",
                    Detection: ["-5.0% drop in price"]
                },
                544: {
                    color: "green",
                    exchange: "XSEX",
                    companyName: "CSE Global Limited",
                    price: 0,
                    chg_pct: 0,
                    date: "2019-11-14",
                    Open: 0.525,
                    High: 0.535,
                    Low: 0.52,
                    Close: 0.53,
                    ticker: "544",
                    Detection: ["volume decreased continuously for 3days"]
                }
            },
            {
                total_count: 134
            }
        ],
        alert: [
            {
                D01: {
                    color: "red",
                    exchange: "XSEX",
                    companyName: "Dairy Farm International Holdings Limited",
                    price: 5.76,
                    chg_pct: 0,
                    date: "2019-11-14",
                    Open: 5.81,
                    High: 5.9,
                    Low: 5.76,
                    Close: 5.76,
                    ticker: "D01",
                    Detection: [
                        "price: 2 sigma stationary std",
                        "price decreased continuously for 5days",
                        "price trending lower",
                        "volume trending higher"
                    ]
                },
                AVM: {
                    color: "green",
                    exchange: "XSEX",
                    companyName: "Boustead Projects Limited",
                    price: 0.99,
                    chg_pct: 0.6,
                    date: "2019-11-14",
                    Open: 0.935,
                    High: 1.01,
                    Low: 0.925,
                    Close: 0.99,
                    ticker: "AVM",
                    Detection: [
                        "price trending higher",
                        "price: 2 sigma stationary std",
                        "+5.3% increase in price",
                        "+1199.7% increase in volume",
                        "volume trending higher",
                        "volume increased continuously for 3days"
                    ]
                }
            },
            {
                total_count: 5
            }
        ],
        control: [
            {
                B61: {
                    color: "red",
                    exchange: "XSEX",
                    companyName: "Bukit Sembawang Estates Limited",
                    price: 4.89,
                    chg_pct: -0.8,
                    date: "2019-11-14",
                    Open: 4.85,
                    High: 4.89,
                    Low: 4.85,
                    Close: 4.89,
                    ticker: "B61",
                    Detection: [
                        "price trending lower",
                        "+424.6% increase in volume",
                        "volume trending higher"
                    ]
                },
                O32: {
                    color: "green",
                    exchange: "XSEX",
                    companyName: "Olam International Limited",
                    price: 1.83,
                    chg_pct: 0,
                    date: "2019-11-14",
                    Open: 1.84,
                    High: 1.85,
                    Low: 1.82,
                    Close: 1.83,
                    ticker: "O32",
                    Detection: [
                        "+231.8% increase in volume",
                        "volume increased continuously for 5days",
                        "volume trending higher"
                    ]
                }
            },
            {
                total_count: 17
            }
        ],
        warning: [
            {
                575: {
                    color: "green",
                    exchange: "XSEX",
                    companyName: "ASTI Holdings Limited",
                    price: 0.036,
                    chg_pct: 0,
                    date: "2019-11-14",
                    Open: 0.032,
                    High: 0.038,
                    Low: 0.032,
                    Close: 0.036000000000000004,
                    ticker: "575",
                    Detection: [
                        "price increased continuously for 3days",
                        "price: 2 sigma stationary std",
                        "+12.5% increase in price"
                    ]
                },
                U04: {
                    color: "green",
                    exchange: "XSEX",
                    companyName: "United Engineers Limited",
                    price: 2.71,
                    chg_pct: 0.92,
                    date: "2019-11-14",
                    Open: 2.71,
                    High: 2.72,
                    Low: 2.7,
                    Close: 2.71,
                    ticker: "U04",
                    Detection: [
                        "price trending higher",
                        "+1353.6% increase in volume",
                        "volume: 4 sigma stationary std",
                        "volume decreased continuously for 3days"
                    ]
                }
            },
            {
                total_count: 12
            }
        ]
    }
};