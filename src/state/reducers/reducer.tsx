import Card from "../../models/Card";
import User from "../../models/User";
import CV from "../../models/CV";
import { Action } from "../actions/index";
import { ActionType } from "../action-types/index";
import SortAttribute from "../../models/SortAttribute";
import Step from "../../models/forms/StepModel";
import Company from "../../models/forms/Company";
import Track from "../../models/Track";
import Position from "../../models/forms/Position";
import { store } from "../store";

const initialCardState: Card[] = [
  { id: 0, title: "Card 1", content: "Card Content 1" },
  { id: 1, title: "Card 2", content: "Card Content 2" },
  { id: 2, title: "Card 2", content: "Card Content 2" },
  { id: 3, title: "Card 2", content: "Card Content 2" },
];

const initialUserState: User[] = [
  {
    id: 0,
    firstName: "Maya",
    lastName: "Assayag",
    userName: "MayaAssayag",
    email: "maya@gmail.com",
    password: "123",
    role: "Admin",
  },
  {
    id: 0,
    firstName: "Emily",
    lastName: "Zborovsky",
    userName: "Emilyz",
    email: "emilyz@gmail.com",
    password: "123",
    role: "Client",
  },
];

const initialLoginUserState: User = {
  id: 0,
  firstName: "Maya",
  lastName: "Assayag",
  userName: "MayaAssayag",
  email: "maya@gmail.com",
  password: "123",
  role: "Admin",
};

const initialSortAttribute: SortAttribute = { attribute: "", order: "" };

var f = new File([""], "filename.txt", { type: "text/plain" });

const initialCVsState: CV[] = [
  {
    title: "Senior devops engineer",
    file: f,
  },
  {
    title: "Senior fullstack engineer",
    file: f,
  },
];

const initialSteps: Step[] = [
  {
    id: "0",
    applicationId: "2",
    title: "Telephon interview",
    stepDetails: "telephone interview",
    date: "07/05/2022",
    email: "c@c.c",
  },
  {
    id: "1",
    applicationId: "2",
    title: "HR",
    stepDetails: "Hr interview",
    date: "11/05/2022",
    email: "c@c.c",
  },
  {
    id: "0",
    applicationId: "1",
    title: "Telephon interview",
    stepDetails: "telephone interview",
    date: "07/05/2022",
    email: "c@c.c",
  },
  {
    id: "1",
    applicationId: "1",
    title: "HR",
    stepDetails: "Hr interview",
    date: "11/05/2022",
    email: "c@c.c",
  },
  {
    id: "2",
    applicationId: "1",
    title: "Technical",
    stepDetails: "CTO interview",
    date: "13/05/2022",
    email: "c@c.c",
  },
];

const initialRecTracks: Track[] = [
  {
    id: "1",
    position: {
      positionId: "1",
      name: "Microsoft - Full Stack Developer",
      description:
        "We are looking for an “all-around” backend engineer that will take a key role in building Slack-based products for Salesforce Marketing Cloud from scratch. We are on “day zero” - you will have the opportunity to design and develop a challenging large-scale system from scratch, as well as influence the culture and standards of a new engineering group. As a newcomer to the industry, you’ll get a chance to work with many technologies and receive mentorship from experienced engineers.",
    },
    isActive: true,
    isFavorite: true,
    steps: [],
    comments: ["i realy want this one"],
    emails: [
      `Dear Felix Navarro,
    We are excited to offer you a full-time position as a Graphic Designer at Company ABC, reporting directly to our Art Director, Sarah Greene. Based on your experience, interviews and design portfolio, we look forward to seeing how you will take our brand messaging to the next level.
    Per your conversation with Marvin Yates, we'd like to offer you an annual starting salary of $60,000 paid out on a semimonthly basis via direct deposit.
    If you decide to accept this role, your anticipated start date will be March 12, 2021 at our 1234 Southern Avenue location. You will be expected to work 40 hours per week, Monday through Friday with the option to work remotely up to two days per week. Please find attached an updated copy of the job description to familiarize yourself with some of the position’s duties and responsibilities.
    As an employee of Company ABC, you will also have access to our comprehensive benefits program, which includes unlimited vacation days, health insurance, RRSPs and tuition reimbursement. I have attached the full details of the benefits we offer for you to look over.
    To accept this offer, please email me at tammy.guerrero@email.com by March 2, 2021, and I will get you started with the rest of the onboarding process.
    We are excited about the possibility of you joining Company ABC! If you have any questions, please contact me directly via phone or email.
    Sincerely,
    Tammy Guerrero
    Hiring Manager
    tammy.guerrero@email.com
    (123) 456-7890`,
    ],
    cvFiles: [],
  },
  {
    id: "2",
    position: {
      positionId: "2",
      name: "Rad hat - Devops",
      description: `We are building a cutting edge Cloud solution that gives customers visibility and control without impeding agility and helps them stay ahead of cyber threats as they evolve. You will join the group that is responsible for advanced threat detection capabilities, leveraging machine learning and behavioral profiling to detect emerging threats and advanced attacks by engineering a hyper-scale service to defend millions of hosts.
        We are seeking for top-notch individuals who are passionate about secu`,
    },
    isActive: true,
    isFavorite: true,
    steps: [],
    comments: ["i realy want this one"],
    emails: [
      `Dear hadar,
    Congratulations on your offer from We are delighted to offer you the position of with an anticipated start date of .
    As discussed over the phone, please find attached your detailed offer letter. If you choose to accept this offer, please sign, scan and email your letter to me at  by.
    In the meantime, please don't hesitate to reach out to me, either through email or by calling me directly at if you should have any questions or concerns.
    We look forward to hearing from you and hope you'll join our team!
    Best regards,`,
    ],
    cvFiles: [],
  },
];

const initialCompanyState: Company[] = [
  {
    id: "1",
    name: "microsoft",
    description: "Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services",
    positions: [
      {
        positionId: "1",
        name: "Full stack developer",
        description: "python djngo and angular full stack developer"
      }
    ]
  }
]

const cardReducer = (state: Array<Card> = initialCardState, action: Action) => {
  switch (action.type) {
    case ActionType.CREATE_CARD:
      return [...state, action.payload];
    case ActionType.DELETE_CARD:
      return state.filter((card: any) => card.id === action.payload);
    default:
      return state;
  }
};

const userReducer = (state: Array<User> = initialUserState, action: Action) => {
  switch (action.type) {
    case ActionType.CREATE_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

const cvsReducer = (state: Array<CV> = initialCVsState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_CV:
      return [...state, action.payload];
    case ActionType.DELETE_CV:
      var array = [...state]; // make a separate copy of the array
      var index = array.indexOf(action.payload);
      array.splice(index, 1);
      return array;
    default:
      return state;
  }
};

const loginUserReducer = (
  state: User = initialLoginUserState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.CREATE_USER:
      return action.payload;
    default:
      return state;
  }
};

const sortAttributeReducer = (
  state: SortAttribute = initialSortAttribute,
  action: Action
) => {
  switch (action.type) {
    case ActionType.SORT_ATTRIBUTE:
      return action.payload;
    default:
      return state;
  }
};

const stepReducer = (state: Array<Step> = initialSteps, action: Action) => {
  switch (action.type) {
    case ActionType.CREATE_STEP:
      // const newStep = action.payload;
      // return initialRecTracks
      //   .find((track) => track.id === action.payload.applicationId)
      //   ?.steps?.push(action.payload);

      return [...state, action.payload];
    default:
      return state;
  }
};

const trackReducer = (
  state: Array<Track> = initialRecTracks,
  action: Action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const companyReducer = (
  state: Array<Company> = initialCompanyState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.CREATE_COMPANY:
      return [...state, action.payload];
    case ActionType.CREATE_POSITION:
      console.log("adding position");

      const updatedCompany = action.payload;
      const oldCompany = state.findIndex((curr) => curr.id === updatedCompany.id);

      if (oldCompany !== -1) {
        console.log("found old company", state[oldCompany]);

        state[oldCompany].positions = updatedCompany.positions;
        console.log("new state:", state);
        return state;
      } else {
        return [...state, updatedCompany]
      }

    default:
      return state;
  }
}

export {
  cardReducer,
  userReducer,
  loginUserReducer,
  sortAttributeReducer,
  stepReducer,
  cvsReducer,
  trackReducer,
  companyReducer,
};
