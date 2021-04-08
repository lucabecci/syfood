export default {
    PORT: process.env.PORT || 8080,
    CORS: {
        ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
        CRED: process.env.CORS_CRED || false
    },
    DB: {
        URL: process.env.DB_URL || "mongodb://localhost:27017/syfood-dev"

    },
    PROD: process.env.PROD || false
}