const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        times: [
            {
                type: String,
                required: true
            }
        ],
        dates: [
            {
                type: String,
                required: true
            }
        ],
        //The plan is to have admin and volunteer list be IDs
        admins: [
            {
                type: String
            }
        ],
        volunteers: [
            {
                type: String
            }
        ],
        members: [
            {
                type: String
            }
        ],
        seniorCenter: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('activities', ActivitySchema);