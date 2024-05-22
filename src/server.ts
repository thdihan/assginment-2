import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";

async function main() {
    try {
        await mongoose
            .connect(config.database_url as string)
            .then((_) => console.log("Connected to database"))
            .catch((error) => {
                console.log("connection failed! ", error);
            });

        app.listen(config.port, () => {
            console.log(`app is listening on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();
