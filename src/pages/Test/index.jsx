import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Form, Input } from "antd";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";

const TestStyle = styled.div`
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  h2 {
    text-align: center;
    margin-block: 30px;
    font-size: 30px;
    font-weight: 600;
  }
`;

const schemaValidation = yup.object({
  username: yup.string().required().max(20).min(5),
  password: yup.string().required().max(255).min(8),
});

const TestPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schemaValidation),
  });
  const onSubmit = (payload) => {
    console.log(payload);
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <TestStyle>
      <h2>Form test</h2>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          label="Username"
          validateStatus={errors.username ? "error" : ""}
          help={errors.username?.message}
        >
          <Controller
            control={control}
            name="username"
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            control={control}
            name="password"
            render={({ field }) => <Input {...field} />}
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </TestStyle>
  );
};

export default TestPage;
