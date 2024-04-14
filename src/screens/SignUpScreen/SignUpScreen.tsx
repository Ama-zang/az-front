import { Stack, TextField, Button } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordTextField } from "../../components";
import { useMutation } from "../../libs/react-query";
import { userRepository } from "../../repositories";
import { useSnackbar } from "../../libs/snackbar";

const signUpSchema = yup
  .object({
    account: yup
      .string()
      .matches(/^[a-z0-9]{6,12}$/)
      .required(),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,15}$/
      )
      .required(),
    confirmPassword: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*])[A-Za-z\d~!@#$%^&*]{8,15}$/
      )
      .required(),
    email: yup
      .string()
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
      .required(),
    phoneNumber: yup.string().required(),
  })
  .required();

function SignUpScreen() {
  // props destructure
  // lib hooks
  const { enqueueSnackbar } = useSnackbar();

  // state hooks
  // query hooks
  const [createUser] = useMutation(userRepository.signUp, {
    onCompleted: () =>
      enqueueSnackbar("Welcome to Anogle.", { variant: "success" }),
  });

  // form hooks
  const {
    register,
    handleSubmit,
    control,
    formState: { isDirty, isValid, errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      account: "",
      password: "",
      confirmPassword: "",
      email: "",
      phoneNumber: "",
    },
    resolver: yupResolver(signUpSchema),
  });

  // calculated values
  // effect
  // handler
  return (
    <Stack
      spacing="24px"
      css={{
        width: "512px",
        alignItems: "center",
      }}
    >
      <TextField
        {...register("account")}
        label="아이디"
        helperText="영문 소문자 또는 영문 소문자, 숫자 조합 6~12 자리"
        error={!!errors.account}
      />
      <Stack spacing="8px" css={{ width: "100%" }}>
        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => (
            <PasswordTextField
              value={value}
              onChange={onChange}
              label="비밀번호"
              error={!!errors.password}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { value, onChange } }) => (
            <PasswordTextField
              value={value}
              onChange={onChange}
              label="비밀번호 확인"
              error={!!errors.confirmPassword}
              helperText="영문, 숫자, 특수문자(~!@#$%^&*) 조합 8~15 자리"
            />
          )}
        />
      </Stack>
      <TextField {...register("email")} error={!!errors.email} label="이메일" />
      <Stack spacing="12px" direction="row" css={{ width: "100%" }}>
        <TextField
          {...register("phoneNumber")}
          label="휴대전화 번호"
          helperText="'-'를 제외한 숫자만 입력"
        />
        <Button css={{ width: "140px", height: "56px" }}>인증번호 발송</Button>
      </Stack>
      <Button
        disabled={!isValid || !isDirty}
        onClick={handleSubmit(
          async ({
            account,
            password,
            confirmPassword,
            email,
            phoneNumber,
          }) => {
            if (password !== confirmPassword) {
              enqueueSnackbar("비밀번호가 서로 다릅니다.", {
                variant: "error",
              });
              return;
            }
            await createUser({
              variables: {
                account,
                password,
                confirmPassword,
                email,
                phoneNumber,
              },
            });
          }
        )}
        css={{ width: "100%" }}
      >
        회원가입
      </Button>
    </Stack>
  );
}

export { SignUpScreen };
