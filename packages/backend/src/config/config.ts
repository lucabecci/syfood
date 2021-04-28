export default {
    PORT: process.env.PORT || 8080,
    CORS: {
        ORIGIN: process.env.CORS_ORIGIN || "http://localhost:3000",
        CRED: process.env.CORS_CRED || false
    },
    DB: {
        URL: process.env.DB_URL || "mongodb://localhost:27017/"

    },
    GOOGLE: {
        CLIENT_ID: process.env.GOOGLE_CLIENT_ID || "",
        CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || "",
        CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL || ""
    },
    NODE_ENV: process.env.NODE_ENV || "dev"
}