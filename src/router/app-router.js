import Email from "../views/modules/mail/email";
import EmailComposeOne from "../views/modules/mail/email-compose-1";

export const AppRouter =[
    {
        path:"app/email",
        element:<Email/>
    },
    {
        path:'app/email-compose',
        element:<EmailComposeOne/>
    }
]