import Card from "../../models/Card";
import Company from "../../models/Company";
import CV from "../../models/CV";
import DecodeJwt from "../../models/DecodeJwt";
import SortAttribute from "../../models/SortAttribute";
import Track from "../../models/Track";
import User from "../../models/User";
import { ActionType } from "../action-types/index";
import { Action } from "../actions/index";



const initialCardState: Card[] = [
  { id: 0, title: "Card 1", content: "Card Content 1" },
  { id: 1, title: "Card 2", content: "Card Content 2" },
  { id: 2, title: "Card 2", content: "Card Content 2" },
  { id: 3, title: "Card 2", content: "Card Content 2" },
];

const initialUserState: User[] = [
  {
    firstName: "Maya",
    lastName: "Assayag",
    userName: "MayaAssayag",
    email: "maya@gmail.com",
    password: "a1234",
    role: "Admin",
  },
  {
    firstName: "Emily",
    lastName: "Zborovsky",
    userName: "Emilyz",
    email: "emilyz@gmail.com",
    password: "123",
    role: "Candidate",
  },
  {
    firstName: "yohai",
    lastName: "Knaani",
    userName: "yohai109",
    email: "yohai109@gmail.com",
    password: "sdffg123",
    role: "HR",
  },
];

const initialLoginUserState: DecodeJwt = {
  _id: "0",
  firstName: "Maya",
  lastName: "Assayag",
  role: "Admin",
  userName: "maya222",
  email: "email@gmail.com",
  cvs: [],
  applications: []

};

const initialSortAttribute: SortAttribute = { attribute: "", order: "" };

// var f = new File([""], "filename.txt", { type: "text/plain" });

const initialCVsState: CV[] = [
  {
    _id:"",
    title: "Senior devops engineer",
    cvFile: "",
    tags: [],
  },
  {
    _id:"",
    title: "Senior fullstack engineer",
    cvFile: "",
    tags: [],
  },
];

const initialRecTracks: Track[] = [];
// const initialRecTracks: Track[] = [
//   {
//     id: "1",
//     company: {
//       name: "Microsoft",
//       description: "Microsoft is a company",
//       positions: []
//     },
//     position: {
//       id: "1",
//       tags: [],
//       name: "Full Stack Developer",
//       description:
//         "We are looking for an “all-around” backend engineer that will take a key role in building Slack-based products for Salesforce Marketing Cloud from scratch. We are on “day zero” - you will have the opportunity to design and develop a challenging large-scale system from scratch, as well as influence the culture and standards of a new engineering group. As a newcomer to the industry, you’ll get a chance to work with many technologies and receive mentorship from experienced engineers.",
//       hrid: "1"
//     },
//     isActive: true,
//     isFavorite: true,
//     steps: [
//       {
//         id: "0",
//         title: "Telephon interview",
//         description: "telephone interview",
//         date: "07/05/2022"
//       },
//       {
//         id: "1",
//         title: "HR",
//         description: "Hr interview",
//         date: "11/05/2022"
//       },
//       {
//         id: "2",
//         title: "Technical",
//         description: "CTO interview",
//         date: "13/05/2022"
//       },
//     ],
//     comments: ["i realy want this one"],
//     isMatch: true,
//     cvFiles: [],
//   },
//   {
//     id: "2",
//     company: {
//       name: "Rad hat",
//       description: "Red hat is a company",
//       positions: []
//     },
//     position: {
//       id: "2",
//       tags: [],
//       name: "Devops",
//       description: `We are building a cutting edge Cloud solution that gives customers visibility and control without impeding agility and helps them stay ahead of cyber threats as they evolve. You will join the group that is responsible for advanced threat detection capabilities, leveraging machine learning and behavioral profiling to detect emerging threats and advanced attacks by engineering a hyper-scale service to defend millions of hosts.
//         We are seeking for top-notch individuals who are passionate about secu`,
//       hrid: "2"
//     },
//     isActive: true,
//     isFavorite: true,
//     steps: [
//       {
//         id: "0",
//         title: "Telephon interview",
//         description: "telephone interview",
//         date: "07/05/2022",
//       },
//       {
//         id: "1",
//         title: "HR",
//         description: "Hr interview",
//         date: "11/05/2022",
//       },
//     ],
//     comments: ["i realy want this one"],
//     isMatch: true,
//     cvFiles: [],
//   }
// ];

const initialCompanyState: Company[] = [];
// const initialCompanyState: Company[] = [
//   {
//     id: "1",
//     name: "microsoft",
//     description:
//       "Microsoft Corporation is an American multinational technology corporation which produces computer software, consumer electronics, personal computers, and related services",
//     positions: [
//       {
//         id: "1",
//         name: "Full stack developer",
//         tags: [],
//         description: "python djngo and angular full stack developer",
//         template: [
//           {
//             id: "0",
//             title: "Telephon interview",
//             description: "telephone interview",
//             date: "07/05/2022",
//           },
//           {
//             id: "1",
//             title: "HR",
//             description: "Hr interview",
//             date: "09/05/2022",
//           },
//         ]
//       },
//     ],
//   },
// ];

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
  state: DecodeJwt = initialLoginUserState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
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

const trackReducer = (
    state: Array<Track> = initialRecTracks,
    action: Action
) => {
    switch (action.type) {
        case ActionType.CREATE_TRACK:
            let distinctState = [...state];
            const trackIndex = distinctState.findIndex((track) => {
                return track._id === action.payload._id;
            });
            if (trackIndex === -1) {
                return [...distinctState, action.payload];
            } else {
              distinctState[trackIndex] = action.payload
              return distinctState;
            }
        case ActionType.DELETE_TRACK:
            return state.filter((track: Track) => track._id === action.payload);
        case ActionType.CREATE_STEP:
            const updatedTrack = action.payload;
            const oldTrack = state.findIndex(
                (curr) => curr._id === updatedTrack._id
            );
            if (oldTrack !== -1) {
                state[oldTrack].steps = updatedTrack.steps;
                return state;
            } else {
                return [...state, updatedTrack];
            }
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
      let distinctState = [...state];
      if (
        !distinctState.find((company) => company._id === action.payload._id)
      ) {
        console.log(action.payload)
        distinctState = [...distinctState, action.payload];

      }
      return distinctState;

    case ActionType.CREATE_POSITION:
      const updatedCompany = action.payload;
      const oldCompany = state.findIndex(
        (curr) => curr._id === updatedCompany._id
      );

      if (oldCompany !== -1) {

          updatedCompany.positions.forEach((posToAdd) => {
            
              if (
                  !state[oldCompany].positions.find(
                      (oldPos) => oldPos._id === posToAdd._id
                  )

                  ) {
                  state[oldCompany].positions.push(posToAdd);
              }
          });
          return state;
      } else {
        return [...state, updatedCompany];
      }
    case ActionType.ADD_STEP_TO_TEMPLATE:
      const companyToUpdate = action.payload;
      const positionToUpdate = companyToUpdate.positions[0];
      const newStep = positionToUpdate.template!!.at(0)!!;
      console.log(companyToUpdate);
      console.log(positionToUpdate);
      console.log(newStep);

      const companyIndex = state.findIndex(
        (curr) => curr._id === companyToUpdate._id
      );

      console.log(companyIndex);
      if (companyIndex !== -1) {
        const positionIndex = state[companyIndex].positions.findIndex(
          (curr) => curr._id === positionToUpdate._id
        );
        console.log(positionIndex);
        if (positionIndex !== -1) {
          const template =
            state[companyIndex].positions[positionIndex].template;

          console.log(template);

          if (template) {
            state[companyIndex].positions[positionIndex].template!!.push(
              newStep
            );
          } else {
            state[companyIndex].positions[positionIndex].template = [newStep];
          }
        } else {
          state[companyIndex].positions.push(positionToUpdate);
        }
        console.log(state);

        return state;
      } else {
        return [...state, companyToUpdate];
      }
    default:
      return state;
  }
};

export {
  cardReducer,
  userReducer,
  loginUserReducer,
  sortAttributeReducer,
  cvsReducer,
  trackReducer,
  companyReducer,
};

