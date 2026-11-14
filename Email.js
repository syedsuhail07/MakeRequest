import fetch from 'node-fetch'; 


export async function sendEmail (message){
// const data = {
//     service_id: 'Coindcx alert', 
//     template_id: 'template_rpcqp5h',
//     user_id: 'C1wF5QXy4IUHVBrql',
//     template_params: {
//         to_name: 'Harsh',
//         message: message
        
//     },
//     accessToken:'O342h4LQQ7DlYj1EaBP8K'
// };
// second account

let service_id = ''
let template_id =  ''
let user_id = '5g-'
let accessToken = ''
    
const data = {
   service_id , 
    template_id,
    user_id ,
    template_params: {
        to_name: 'Harsh',
        message: message
        
    },
    accessToken
};

fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log('Email Response status:', response.status);
})

.catch(error => {
    console.error('Fetch error:', error);
});
}
