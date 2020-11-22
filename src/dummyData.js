const timelineData = [
  {
    id: 1,
    year: 1995,
    timelineEvent: "Some event happened"
  },
  {
    id: 2,
    year: 2012,
    timelineEvent: "Alex graduates high school"
  },
  {
    id: 3,
    year: 2018,
    timelineEvent: "Simone and Chris marry"
  },
  {
    id: 4,
    year: 2020,
    timelineEvent: "Helen F. Rogers turns 100 years old"
  }
];

const memberData = {
  name: "O. Barry Rogers",
  birth: "June 11, 1952",
  death: null,
  birthplace: "Gary, IN",
  residence: "Robbinsdale, MN",
  parents: ["Oscar Rogers", "Helen F. Rogers"],
  children: ["B. Alex Rogers"],
  spouse: null,
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
  }
];

export {
  timelineData,
  memberData,
  faqData
};