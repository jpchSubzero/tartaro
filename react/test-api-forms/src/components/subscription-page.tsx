import { useSubscription } from '../hooks/useSubscription';
// import { useForm } from '../hooks/useForm';
import * as yup from "yup";
import { ISubscriptionInput } from '../hooks/useIntegration';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


export const SubscriptionPage = () => {
  const { subscription, loading: loadingSubscription, createSubscription } = useSubscription();
  let defaultValues:ISubscriptionInput = {
    identification: "1103533095",
    identificationType: "CEDULA",
    email: "software@bocetosoft.com"    
  };
  // const [formValues, handleInputChange] = useForm(defaultValues);

  const { identification, identificationType, email } = defaultValues;
  const [ formValuesErrors, setFormValuesErrors ] = useState({ identification: "", identificationType: "", email: "" });
  
  const onSubmit = ({...formValues}) => {
    console.log(formValues);
  };

  
  const getValidationShema=({...formValues}:ISubscriptionInput)=>{
    return yup.object().shape({
      identification:  
        yup.string()
        .required("Identificación requerida")
        .nullable(false)
        .min(10),
      identificationType:  
        yup.string()
        .required("Tipo de identificación requerida")
        .nullable(false)
        .min(6),
      email:  
        yup.string()
        .required("E-mail es requerido")
        .nullable(false)
        .email("E-mail inválido")
    });
  }
  const schema = getValidationShema(defaultValues);

  const { 
    control,
    handleSubmit,
    setValue,
    formState,
    setError,
    clearErrors
  } = useForm({
      resolver: yupResolver(schema),
      defaultValues: defaultValues
  });  


  const renderDefault = () => { 
    return (
      <>
        {/* <form> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="identification"
            control={control}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <>
                <input {...field} />
                { error?.message ? <h5>{error?.message}</h5> : ""}
              </>
            )}
          />     
          <Controller
            name="identificationType"
            control={control}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <>
                <input {...field} />
                { error?.message ? <h5>{error?.message}</h5> : ""}
              </>
            )}
          />     
          <Controller
            name="email"
            control={control}
            render={({ field: { ref, ...field }, fieldState: { error } }) => (
              <>
                <input {...field} />
                { error?.message ? <h5>{error?.message}</h5> : ""}
              </>
            )}
          />     
          {/* <button onClick={handleSubmit(onSubmit)}>Guardar</button> */}
          <button type="submit">Guardar</button>

        </form>


        {/* <form onSubmit={ handleSubmit }>
          <h1>Create Subscription</h1>  
          <hr />
          <div>
              <input 
                  type="text" 
                  className="form-control"
                  name="identification"
                  placeholder="Ingrese una identificación"
                  autoComplete="off"
                  value={identification}
                  onChange={ handleInputChange}
              ></input>
          </div>
          <div>
            <h4>{ formValuesErrors.identification }</h4>
          </div>
          <div>
              <input 
                  type="text" 
                  className="form-control"
                  name="identificationType"
                  placeholder="Ingrese el tipo de identificación"
                  autoComplete="off"
                  value={identificationType}
                  onChange={ handleInputChange }
              ></input>
          </div>
          <div>
            <h4>{ formValuesErrors.identificationType }</h4>
          </div>
          <div>
              <input 
                  type="text" 
                  className="form-control"
                  name="email"
                  placeholder="Ingrese el email"
                  autoComplete="off"
                  value={email}
                  onChange={ handleInputChange }
              ></input>
          </div>
          <div>
            <h4>{ formValuesErrors.email }</h4>
          </div>

          <button type="submit" className="btn btn-primary">Guardar</button>

        </form> */}

        <hr />      
      </>
    );
  }

  const renderComponent = () => { 
    return (
      <>
        {renderDefault()}
        <h3><pre>{JSON.stringify(subscription?.result, null, 2)}</pre></h3>
      </>
    );
  }

  const renderLoading = () => { 
    return (
      <>
        {loadingSubscription ? <h1>Cargando...</h1> : <h3><pre>{JSON.stringify(subscription?.result, null, 2)}</pre></h3>}
      </>
    );
  }

  if (loadingSubscription) {
    return renderLoading();    
  } else {
    return renderComponent();        
  }
}

