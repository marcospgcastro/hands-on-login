import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup
  .object({
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  const onSubmit = () => {
    if(isValid) {
      console.log('Está apto a logar!')
    }
  }  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>      
        <LoginContainer>
          <Column>        
            <Title>Login</Title>
            <Spacing />
            <Input
              name="email"
              type="text"
              placeholder="E-mail"
              control={control}
              errorMessage={errors?.email?.message}
            />
            <Spacing />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              control={control}
              errorMessage={errors?.password?.message}
            />
            <Spacing />
            <Button title="Entrar" type="submit"/>          
          </Column>
        </LoginContainer>      
      </Container>
    </form>
  );
};

export default Login;
