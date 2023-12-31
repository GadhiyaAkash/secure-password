import { columnTypes } from "expo-sqlite-orm";
import BaseModel from "./BaseModel";
import { DBTABLES } from "../DBonfig";
export class LeaveHistoryModel extends BaseModel {

    static get tableName() {
        return DBTABLES.LEAVEHISTORY;
    }
    static get columnMapping() {
        return {
            id: { type: columnTypes.INTEGER },
            month: { type: columnTypes.TEXT },
            cl_taken: { type: columnTypes.TEXT },
            pl_taken: { type: columnTypes.TEXT },
            timestamp: { type: columnTypes.INTEGER, default: () => Date.now() }
        };
    }
}