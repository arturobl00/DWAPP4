import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data, "Este es mi dato");

    return ( 
        <Fragment>
            <h2>Este es mi formulario</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control my-2"
                 {...register("firstName", { required: true, maxLength: 5 })} 
                 placeholder="Introduzca su nombre:"/>
                {errors.firstName?.type === 'required' && "First name is required"}
                {errors.firstName?.type === 'maxLength' && "Maximo 5"}
                <input className="form-control my-2" {...register("apellido")} placeholder="Introduzca su apellido:"/>
                <input className="form-control my-2" {...register("direccion")} placeholder="Introduzca su direccion"/>
                <input className="form-control my-2" {...register("edad")} placeholder="Introduzca su edad"/>
                <select className="form-control my-2" {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </Fragment>
     );
}
 
export default FormHook;
