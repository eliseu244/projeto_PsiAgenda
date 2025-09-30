import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import { mockApi } from "../services/mockApi";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import toast from "react-hot-toast";
 
export const Register = () => {t 
    const [userType, setUserType] = useState('paciente')
    const [ formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    CRP: '',
    specialty: '',
    Phone: '',
    birthDate: '',
})
 
    const [loading, setLoading] = useState(false)
    const {login} = useAuth();
    const navigate = useNavigate();
 
    const handleInputChange = useCallback ((field) => (e) =>{
        setFormData(prev => ({...prev, [fireld]: e.target.value}))
    })
 
        const handleSubmit = async (e) => {
            e.preventDefault();
            if(formData.password !== formData.confirmPassword){
                toast.error('Senhas não coincidem');
                return;
            }
            setLoading(true);
            try{
                const {user, token} = await mockApi.register({
                    ...formData,
                    type: userType
                });
                login(user, token)
                toast.success('Conta criada com sucesso');
                navigate('/dashboard')
            }catch (error) {
                toast.error(error.message)
            }finally{
                setLoading(false);
               
            }
            }
       
 
    return(
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
            <Card className="bg-amber-400 w-full max-wd">
                <div className="text-center mb-8">
                <h1 className="text-3x1 font-bold text-dark mb-2">Criar consta</h1>
            <p className="text-dark/50">Cadastrar-se na Lunysse</p>
                </div>
 
                <div className="flex mb-6 gap-1">
                <Button
                    type="Button"
                    variant={userType === "paciente" ? 'primary' : 'secondary'}
                    size="sm"
                    onClil = {()=> setUserType('paciente')}
                    className="flex"
                    />
 
                <Button
                    type="Button"
                    variant={userType === "psicologo" ? 'primary' : 'secondary'}
                    size="sm"
                    onClil = {()=> setUserType('psicologo')}
                    className="flex"
                   />
                </div>
 
                <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                    label="Nome completo"
                    value= {formData.name}
                    onChange = {handleInputChange ('name')}
                    placeholder = "Seu nome completo"
                    required
                />
                 <Input
                    label="E-mail"
                    type="email"
                    value= {formData.email}
                    onChange = {handleInputChange ('email')}
                    placeholder = "Seu@email"
                    required
                />
                <Input
                label="Senha"
                type="password"
                value= {formData.password}
                onChange = {handleInputChange ('senha')}
                placeholder = "Sua senha"
                required
            />
            <Input
                label="confirme sua senha"
                type="password"
                value= {confirm.password}
                onChange = {handleInputChange ('confirmPassword')}
                placeholder = "confirme sua senha"
                required
            />
            <Input
                label="telefone"
                type="tel"
                value= {formData.Phone}
                onChange = {handleInputChange ('phone')}
                placeholder = "confirme o seu telefone"
                required
            />
            { userType == "paciente" && (
                <>
                <Input
                label="Data de nascimento"
                type="date"
                value= {formData.birthDate}
                onChange = {handleInputChange ('birthDate')}
                placeholder = "Digite a sua data de nascimento"
                required
            />
                </>
            )}
            { userType == "psicologo" && (
                <>
                     <Input
                label="CRP"
                value= {formData.CRP}
                onChange = {handleInputChange ('CRP')}
                placeholder = "Ex: 12/34567"
                required
            />
            <Input
                label="Especialidade"
                value= {formData.specialty}
                onChange = {handleInputChange ('specialty')}
                placeholder = "Ex: Psicologia Clinica, Terapia Cognitiva"
                required
            />
                </>
            )}
            <Button
            type="submit"
            loading={loading}
            className="w-full"
            />
 
                </form>
                <div className="mt-6 text-center space-y-2">
                    <p className="">
                        possui conta?
                    </p>
                    <Link to = "/register" className=" text-light font-bold houver:text-dark/50">
                        Faça login!
                    </Link>
                </div>
            </Card>
        </div>
 
    )
}
 
 