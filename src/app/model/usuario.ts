export class Usuario {
    id: string
    cpf: string
    nome_completo: string
    email: string
    celular: string
    data_primeiro_acesso:string= new Date().toDateString()
    primeiro_acesso: boolean
    login: string
    senha: string
    ativo: boolean
    ultimo_login: string= new Date().toDateString()
    atualizado_em:string= new Date().toDateString()
    criado_em: string
    empresa_id: string
}