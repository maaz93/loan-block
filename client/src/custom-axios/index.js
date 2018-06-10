import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api"
});

// instance.interceptors.response.use(
//   function(response) {
//     return response;
//   },
//   function(error) {
//     // Do something with response error
//     if (
//       error.config.url.indexOf("/borrowerList") !== -1 ||
//       error.config.url.indexOf("/reviewedBorrowerList") !== -1
//     ) {
//       return {
//         data: [
//           {
//             id: 1,
//             reputationPoints: 20,
//             firstName: "Maaz",
//             lastName: "Adeeb",
//             creditScore: 200,
//             city: "Test",
//             salary: 200000,
//             country: "India"
//           },
//           {
//             id: 2,
//             reputationPoints: 40,
//             firstName: "Maaz",
//             lastName: "Adeesdsadb",
//             creditScore: 200,
//             city: "Test",
//             salary: 400000,
//             country: "India"
//           },
//           {
//             id: 3,
//             reputationPoints: 60,
//             firstName: "Maaz",
//             lastName: "Adeecsafdsafb",
//             creditScore: 200,
//             city: "Test",
//             salary: 600000,
//             country: "India"
//           }
//         ]
//       };
//     } else {
//       Promise.reject(error);
//     }
//   }
// );

export default instance;
