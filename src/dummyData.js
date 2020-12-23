const timelineData = [
  {
    id: 1,
    year: 1995,
    createdOn: null,
    createdByUserId: 17,
    timelineEvent: "Some event happened"
  },
  {
    id: 2,
    year: 2012,
    createdOn: null,
    createdByUserId: 17,
    timelineEvent: "Alex graduates high school"
  },
  {
    id: 3,
    year: 2017,
    createdOn: null,
    createdByUserId: 17,
    timelineEvent: "Simone and Chris marry"
  },
  {
    id: 4,
    year: 2018,
    createdOn: null,
    createdByUserId: 17,
    timelineEvent: "Jae graduates from WashU"
  },
  {
    id: 5,
    year: 2020,
    createdOn: null,
    createdByUserId: 17,
    timelineEvent: "Helen F. Rogers turns 100 years old"
  }
];

const memberData = {
  firstName: "John",
  middleName: "French",
  lastName: "Doe",
  preferredName: null,
  birth: "April 23, 1934",
  death: "October 9, 1982",
  birthplace: "Chicago, IL",
  residence: "Charlotte, NC",
  parents: ["Vladimir Doe", "Genevieve Doe"],
  children: null,
  spouse: "Jane Doe",
};

const faqData = [
  {
    id: 1,
    question: "I noticed a piece of information is incorrect about a family member. How can I correct it?",
    answer: "Once you are logged in, you can edit most information on a family member. If there's information that you can't edit yourself, email the administrator."
  },
  {
    id: 2,
    question: "I need to delete a timeline event. How can I do this?",
    answer: "This requires admin approval. Send an email and list the reason for deletion."
  },
  {
    id: 3,
    question: "I want to add a family member on here, but their parents or children aren't yet added. How can I still add them?",
    answer: "When you add a family member, you have the option to say how they are related to someone. When you do that, their parents will be saved even if their pages haven't been created yet."
  },
  {
    id: 4,
    question: "My page has already been added, but I want to register an account. How will it link my account information to the correct page?",
    answer: "When registering, you can select which page is yours, and it will automatically link your information to your page. Cool huh?"
  }
];

export {
  timelineData,
  memberData,
  faqData
};