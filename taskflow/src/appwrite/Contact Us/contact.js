import { Client, ID, TablesDB } from "appwrite";
import config from "../../config/config";

export class contactUs {
    client = new Client()
    tablesDB

    constructor() {
        this.client
            .setEndpoint(config.appwrite_endpoint)
            .setProject(config.appwrite_project_id)

        this.tablesDB = new TablesDB(this.client)
    }

    async AddMessage_contactUs({Name, Email, Message}) {
        try {
            return await this.tablesDB.createRow({
                databaseId:config.appwrite_database_id,
                tableId: config.appwrite_table_id,
                rowId: ID.unique(),
                data: {
                    Name,
                    Email,
                    Message
                }
            })
        } catch (error) {
            throw new Error("Error in AddMessage_contactUs - contact.js: "+ error.message);
        }
    }
}

const object_contactUs = new contactUs()
export default object_contactUs