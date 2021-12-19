// import axios from 'axios';





//     const baseURL = 'http://localhost:8000/';

//     const axiosInstance = axios.create({
//         baseURL: baseURL,
//         timeout: 5000,
//         headers: {
//             Authorization: access ? "Bearer " + access : null,
//             'Content-Type': 'application/json',
//             'accept': 'application/json',
//         } 
//     });



    
    
// axiosInstance.interceptors.response.use(
//     (response) =>
//       new Promise((resolve, reject) => {
//         resolve(response);
//       }),
//     (error) => {
//       if (!error.response) {
//         return new Promise((resolve, reject) => {
//           reject(error);
//         });
//       }

//       if (error.response.status === 403) {
//         localStorage.removeItem("auth")
//         localStorage.removeItem("isAuthenticated")
//         window.location = "/login";

//       } else {
//         return new Promise((resolve, reject) => {
//           reject(error);
//         });
//       }
//     }
//   );



// This block will send refresh token when eccess token will be expired , and get back with new access token ! 
// This process continue untill refresh token expired ! 
// axiosInstance.interceptors.response.use(
//     response => response,
//     error => {
//         const originalRequest = error.config;

//         // Prevent infinite loops
//         if (error.response.status === 401 && originalRequest.url === baseURL+'api/token/refresh/') {
//             window.location.href = '/login';
//             return Promise.reject(error);
//         }

//         if (error.response.status === 401 ||
//             error.response.statusText === "Forbidden") 
//             {
//                 const refreshToken = localStorage.getItem('refresh_token');

//                 if (refreshToken){

//                     const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));
//                     // exp date in token is expressed in seconds, while now() returns milliseconds:
//                     const now = Math.ceil(Date.now() / 1000);

//                     if (tokenParts.exp > now) {
//                         return axiosInstance
//                         .post('api/token/refresh/', {refresh: refreshToken})
//                         .then((response) => {
            
//                             localStorage.setItem('access_token', response.data.access);
//                             axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
//                             originalRequest.headers['Authorization'] = "JWT " + response.data.access;
//                             console.log('Shajjad vai')
//                             return axiosInstance(originalRequest);
//                         })
//                         .catch(err => {
//                             console.log(err)
//                         });
//                     }else{
//                         console.log("Refresh token is expired", tokenParts.exp, now);
// 						logOutUser()
//                         window.location.href = '/login';
//                     }
//                 }else{
//                     console.log("Refresh token not available.")
//                     window.location.href = '/login';
//                 }
//         }
      
     
//       // specific error handling done elsewhere
//       return Promise.reject(error);
//   }
// );


// axiosInstance.interceptors.response.use(
// 	(response) => {
// 		return response;
// 	},
// 	async function (error) {
// 		const originalRequest = error.config;

// 		if (typeof error.response === 'undefined') {
// 			alert(
// 				'A server/network error occurred. ' +
// 					'Looks like CORS might be the problem. ' +
// 					'Sorry about this - we will get it fixed shortly.'
// 			);
// 			return Promise.reject(error);
// 		}

// 		if (
// 			error.response.status === 401 &&
// 			originalRequest.url === baseURL + 'token/refresh/'
// 		) {
// 			window.location.href = '/login/';
// 			return Promise.reject(error);
// 		}

// 		if (
// 			error.response.data.code === 'token_not_valid' &&
// 			error.response.status === 401 &&
// 			error.response.statusText === 'Unauthorized'
// 		) {
// 			const refreshToken = localStorage.getItem('refresh_token');

// 			if (refreshToken) {
// 				const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

// 				// exp date in token is expressed in seconds, while now() returns milliseconds:
// 				const now = Math.ceil(Date.now() / 1000);
// 				console.log(tokenParts.exp);

// 				if (tokenParts.exp > now) {
// 					return axiosInstance
// 						.post('/account/api/refresh/', { refresh: refreshToken })
// 						.then((response) => {
// 							localStorage.setItem('access_token', response.data.access);
// 							localStorage.setItem('refresh_token', response.data.refresh);

// 							axiosInstance.defaults.headers['Authorization'] =
// 								'Bearer ' + response.data.access;
// 							originalRequest.headers['Authorization'] =
// 								'Bearer ' + response.data.access;

// 							return axiosInstance(originalRequest);
// 						})
// 						.catch((err) => {
// 							console.log(err);
// 						});
// 				} else {
// 					console.log('Refresh token is expired', tokenParts.exp, now);
// 					window.location.href = '/login/';
// 				}
// 			} else {
// 				console.log('Refresh token not available.');
// 				window.location.href = '/login/';
// 			}
// 		}

// 		// specific error handling done elsewhere
// 		return Promise.reject(error);
// 	}
// );


// export default axiosInstance