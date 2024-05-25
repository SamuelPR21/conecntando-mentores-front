interface AuthFormProps {
    type: 'login' |'login-admin' | 'register-admin' | 'register'
}

interface User {
    user_id: string;
    username: string;
    user_password: string;
    user_name: string;
    user_apellido: string;
    roles: [
        {
            id: string;
            name: string;
        }
    ]
}

interface EditUserProps {
    data: {
        user_id: string;
        username: string;
        user_name: string;
        user_apellido: string;
    }   
}

interface DeleteUserProps {
    user: {
        user_id: string;
        username: string;
    }
}