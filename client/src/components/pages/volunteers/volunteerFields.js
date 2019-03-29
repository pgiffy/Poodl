export const Categories = {
    personal: { id: 'personal', title: 'Personal Info' },
    references: { id: 'references', title: 'Reference Info' },
    volunteer: { id: 'volunteer', title: 'Volunteer Info' },
    skillsAndTraining: {
        id: 'skillsAndTraining',
        title: 'Skills and Training',
        description: 'Please check all that apply'
    }
};

const volunteerFields = [
    {
        id: 'firstName',
        type: 'text',
        label: 'First name',
        category: Categories.personal.id
    },
    {
        id: 'middleInitial',
        type: 'text',
        label: 'Middle Initial',
        category: Categories.personal.id
    },
    {
        id: 'lastName',
        type: 'text',
        label: 'Last name',
        category: Categories.personal.id
    },
    {
        id: 'nickName',
        type: 'text',
        label: 'Nickname or Preferred Name',
        category: Categories.personal.id
    },
    {
        id: 'email',
        type: 'email',
        label: 'Email',
        category: Categories.personal.id
    },
    {
        id: 'streetAddress',
        type: 'text',
        label: 'Address',
        category: Categories.personal.id
    },
    {
        id: 'city',
        type: 'text',
        label: 'City',
        category: Categories.personal.id
    },
    {
        id: 'state',
        type: 'text',
        label: 'State',
        category: Categories.personal.id
    },
    {
        id: 'zip',
        type: 'text',
        label: 'Zip Code',
        category: Categories.personal.id
    },
    {
        id: 'homePhone',
        type: 'text',
        label: 'Home Phone',
        category: Categories.personal.id
    },
    {
        id: 'cellPhone',
        type: 'text',
        label: 'Cell Phone',
        category: Categories.personal.id
    },
    {
        id: 'references',
        type: 'text',
        label: 'References',
        category: Categories.references.id
    },
    {
        id: 'learnAboutVolunteerProgram',
        type: 'radio',
        label: 'Learned about Belgrade Senior Centers volunteer program from',
        options: [
            'Friend or Relative',
            'Brochure/Poster',
            'Newspaper, Television or Radio',
            'School or College',
            'Belgrade Senior Center',
            'United Way',
            'Community Event',
            'Other'
        ],
        category: Categories.volunteer.id
    },
    {
        id: 'volunteerFrequency',
        type: 'text',
        label: 'Volunteer Frequency',
        category: Categories.volunteer.id
    },
    {
        id: 'occasionalOneDayProjects',
        type: 'checkbox',
        label: 'Would like to be contacted about one day projects',
        category: Categories.volunteer.id
    },
    {
        id: 'occasionalOneDayProjects',
        type: 'checkbox',
        label: 'Would like to volunteer for a single day activity',
        category: Categories.volunteer.id
    },
    {
        id: 'availabilitySchedule',
        type: 'text',
        label: 'Availability Schedule',
        category: Categories.volunteer.id
    },
    {
        id: 'houseMaintenanceAndRepairs',
        type: 'multibox',
        label: 'Housing Maintenance and Repairs (weekday and weekend days)',
        options: ['Carpentry ', 'Plumbing ', 'Masonry ', 'Cleaning ', 'Electrical ', 'Painting ', 'None '],
        category: Categories.skillsAndTraining.id
    },
    {
        id: 'groundMaintenance',
        type: 'multibox',
        label: 'Grounds Maintenance (any time)',
        options: [
            'Lawn Maintenance ',
            'Grounds Cleanup ',
            'Pruning Trees and Shrubs ',
            'Planting and Maintaining Flower Beds ',
            'Snow Removal '
        ],
        category: Categories.skillsAndTraining.id
    },
    {
        id: 'clericalAssistance',
        type: 'multibox',
        label: 'Clerical Assistance (week days)',
        options: ['Data Entry ', 'Folding Brochures ', 'General Office ', 'Preparing Bulk Mailings ', 'Front Desk '],
        category: Categories.skillsAndTraining.id
    },
    {
        id: 'nutritionProgram',
        type: 'multibox',
        label: 'Nutrition Program',
        options: ['Food Prep ', 'Dishes ', 'Deliver Meals on Wheels ', 'Dining Room Setup '],
        category: Categories.skillsAndTraining.id
    },
    {
        id: 'specialEventsAndFundRaising',
        type: 'multibox',
        label: 'Special Events and Fundraising',
        options: ['Food Prep ', 'Dishes ', 'Deliver Meals on Wheels ', 'Dining Room Setup '],
        category: Categories.skillsAndTraining.id
    },
    {
        id: 'interpretingTeachingClassesOrWorkshops',
        type: 'multibox',
        label: 'Interpreting, Teaching Classes or Workshops',
        options: ['Food Prep ', 'Dishes ', 'Deliver Meals on Wheels ', 'Dining Room Setup '],
        category: Categories.skillsAndTraining.id
    },

    {
        id: 'proposedActivities',
        type: 'text',
        label: 'Any proposed activitie(s)',
        category: Categories.skillsAndTraining.id
    },
    {
        id: 'seniorCenterId',
        type: 'text',
        label: 'Senior Center ID',
        category: Categories.personal.id
    },
    {
        id: 'accessLevel',
        type: 'radio',
        label: 'Access Level',
        options: ['Super', 'Admin', 'Volunteer'],
        category: Categories.personal.id
    }
];

export default volunteerFields;
