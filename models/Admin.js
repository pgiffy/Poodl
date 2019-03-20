const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
const Validator = require('validator');

const adminSchema = new Schema(
    {
        seniorCenterId: {
            type: ObjectId,
            required: [true, 'Senior center is required']
        },
        firstName: {
            type: String,
            required: [true, 'First name is required']
        },
        lastName: {
            type: String,
            required: [true, 'Last name is required']
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Email is required'],
            validate: {
                validator: Validator.isEmail,
                message: 'Email is invalid'
            }
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        accessLevel: {
            type: String,
            enum: ['Super', 'Admin', 'Volunteer'],
            default: 'Admin',
            required: [true, 'Access Level is required']
        },

        middleInitial: {
            type: String
        },
        nickName: {
            type: String
        },
        streetAddress: {
            type: String,
            required: [
                function() {
                    return this.accessLevel === 'Volunteer';
                },
                'Street address is required'
            ]
        },
        city: {
            type: String,
            required: [
                function() {
                    return this.accessLevel === 'Volunteer';
                },
                'City is required'
            ]
        },
        state: {
            type: String,
            required: [
                function() {
                    return this.accessLevel === 'Volunteer';
                },
                'State is required'
            ]
        },
        zip: {
            type: String,
            required: [
                function() {
                    return this.accessLevel === 'Volunteer';
                },
                'Zip is required'
            ],
            validate: {
                validator: v => Validator.isPostalCode(v, 'US'),
                message: 'Zip code is invalid'
            }
        },
        homePhone: {
            type: String,
            required: [
                function() {
                    return this.accessLevel === 'Volunteer';
                },
                'Home phone is required'
            ],
            validate: {
                validator: Validator.isMobilePhone,
                message: 'Home phone is invalid'
            }
        },
        cellPhone: {
            type: String,
            required: [
                function() {
                    return this.accessLevel === 'Volunteer';
                },
                'Cell phone is required'
            ],
            validate: {
                validator: Validator.isMobilePhone,
                message: 'Cell phone invalid'
            }
        },
        references: {
            type: [String],
            validate: {
                validator: function(v) {
                    if (this.accessLevel === 'Volunteer') {
                        return v.length > 0;
                    }
                },
                message: 'References are required'
            }
        },
        learnAboutVolunteerProgram: {
            type: String,
            enum: [
                'Friend or Relative',
                'Brochure/Poster',
                'Newspaper, Television or Radio',
                'School or College',
                'Belgrade Senior Center',
                'United Way',
                'Community Event',
                'Other',
                'None'
            ],
            default: 'None'
        },
        howOften: {
            type: String
        },
        availability: {
            type: String
        },
        houseMaintenanceAndRepairs: [
            {
                type: String,
                enum: ['Carpentry', 'Plumbing', 'Masonry', 'Cleaning', 'Electrical', 'Painting', 'None']
            }
        ],
        groundMaintenance: [
            {
                type: String,
                enum: [
                    'Lawn Maintnance',
                    'Grounds Cleanup',
                    'Pruning Trees and Shrubs',
                    'Planting and Maintaining Flower Beds',
                    'Snow Removal',
                    'None'
                ],
                default: 'None'
            }
        ],
        clericalAssistance: [
            {
                type: String,
                enum: [
                    'Data Entry',
                    'Folding Brochures',
                    'General Office',
                    'Preparing Bulk Mailings',
                    'Front Desk',
                    'None'
                ],
                default: 'None'
            }
        ],
        nutritionProgram: [
            {
                type: String,
                enum: ['Food Prep', 'Dishes', 'Deliver Meals on Wheels', 'Dining Room Setup', 'None'],
                default: 'None'
            }
        ],
        specialEventsAndFundRaising: [
            {
                type: String,
                enum: [
                    'Create Flyers, Brochures, and/or Posters',
                    'Assist with Events',
                    'Solicit Auction Items, Donations, Prizes, In-Kind Services',
                    'None'
                ],
                default: 'None'
            }
        ],
        interpretingTeachingClassesOrWorkshops: [
            {
                type: String,
                enum: ['Life Skill Classes', 'Painting, Crafts', 'Computer', 'Exercise', 'None'],
                default: 'None'
            }
        ],
        otherInterests: {
            type: String
        }
    },
    { timestamps: true }
);

adminSchema.plugin(require('./plugins/duplicateError'), { email: 'Email already exists' });

module.exports = adminSchema;
