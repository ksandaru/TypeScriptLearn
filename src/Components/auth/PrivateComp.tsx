import {Login} from "./Login";
import React from "react";
import {ProfileProps} from "./Profile";

type PrivateProps ={
    isLoggedin: boolean,
    component: React.ComponentType<ProfileProps>
}
export const PrivateComp = ({isLoggedin, component: Component}: PrivateProps) => {
  if (isLoggedin){
      return <Component name ='kanishka'/>
  }else return <Login/>
}