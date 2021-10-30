export interface IEnvCoverage {
  branches: number
  functions: number
  lines: number
  statements: number
}

export interface IEnv {
  host: string
  port: number
  apiUrl: string
  coverage: IEnvCoverage
}
