export class Constantes {

    public static nutriguideApi = 'https://nutriguide-api.vercel.app/';         // rota da api

    constructor() {}

    // metodo que verifica se o usuário está logado ou não
    public static isLogado(): boolean {
        const token = localStorage.getItem('token');

        if (token === null) {
            return false;     // não está logado
        } else {
            return true;      // está logado
        }
    }

    // método que verificar se o usuário é um paciente ou um nutricionista
    public static getRole(): string {
        const role: string = String(localStorage.getItem('role'));

        if (role === 'nutricionista') {
            return 'nutricionista';
        } else if (role === 'paciente') {
            return 'paciente';
        } else {
            return 'usuario default';
        }
        
    }

}