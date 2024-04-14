import { Button, Stack, TextField, Divider, Typography } from "@mui/material";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordTextField } from "../../components";
import { userRepository } from "../../repositories";
import { useMutation } from "../../libs/react-query";

const signInSchema = yup.object({
  account: yup.string().required(),
  password: yup.string().required(),
});

function SignInScreen() {
  // props destructure
  // lib hooks
  // state hooks
  // query hooks
  const [signIn] = useMutation(userRepository.signIn);

  // form hooks
  const {
    register,
    control,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      account: "",
      password: "",
    },
    resolver: yupResolver(signInSchema),
  });
  // calculate value
  // effect
  // handler
  return (
    <Stack spacing="24px">
      <Stack spacing="12px" css={{ width: "512px" }}>
        <TextField {...register("account")} label="아이디" />
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => (
            <PasswordTextField
              value={value}
              onChange={onChange}
              label="비밀번호"
            />
          )}
        />
      </Stack>
      <Button
        disabled={!isDirty || !isValid}
        onClick={handleSubmit(async ({ account, password }) => {
          await signIn({
            variables: {
              account,
              password,
            },
          });
        })}
        css={{ width: "100%" }}
      >
        로그인
      </Button>
      <Divider css={{ margin: "24px 0" }} />
      <Stack spacing="48px" direction="row" css={{ justifyContent: "center" }}>
        <Typography css={{ color: "#a3a3a3" }}>아이디 찾기</Typography>
        <Typography css={{ color: "#a3a3a3" }}>비밀번호 찾기</Typography>
      </Stack>

      <Stack spacing="16px" direction="row" css={{ justifyContent: "center" }}>
        <Typography css={{ color: "#6e6e6e" }}>
          아직 계정이 없으신가요?
        </Typography>
        <Typography css={{ color: "#a3a3a3" }}>회원가입</Typography>
      </Stack>
    </Stack>
  );
}

export { SignInScreen };
