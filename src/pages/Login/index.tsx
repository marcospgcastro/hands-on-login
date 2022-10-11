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
      console.log('Está apto a loga!')
    } else {
      console.log('Não está apto a loga!')
    }
  }  

  return (
    <Container>
      <LoginContainer>
        <Column>
        <form onSubmit={handleSubmit(onSubmit)}></form>
          <Title>Login</Title>
          <Spacing />
          <Input
            name="email"
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
          <form/>
        </Column>
      </LoginContainer>
    </Container>
  );
};

export default Login;