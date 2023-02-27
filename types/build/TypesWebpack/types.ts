export type BuildMode = 'development' | 'production';

export interface PathsProps {
    pathToHtml: string,
    pathToSrc: string,
    pathOfBuild: string,
    pathToEntry: string,
  }

// export interface buildPluginsProps {
//     pathToHtml: string
// }

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface options {
  paths: PathsProps,
  env : BuildEnv,

}
