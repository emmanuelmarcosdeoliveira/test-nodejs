import type { Config } from "jest";

const config: Config = {
  // Iso serve para que ele pare a execução dos teste quando um teste falhar
  bail: true,
  // Aqui estamos informando que vamos trabalhar o typescript com o jest
  preset: "ts-jest",
  // Aqui estamos informando que iremos trabalhar com o ambiente Node
  testEnvironment: "node",
};

export default config;
