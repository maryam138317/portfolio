import { IconType } from "react-icons"

export interface Personal {
    name: string,
    jobTitle: string,
    description : string,
    social : Social,
    cvFile : string
}
interface Social {
    github: string,
    linkedin: string
}



export interface Skill {
    title : string,
    icon : IconType
}

export interface Experiance {
    title: string,
    company : string,
    responsibility : string,
    startDate: string,
    endDate: string
}

export interface Projects {
    title : string,
    description : string,
    techs : string[],
    links : {
        github: string,
        demo: string
    },
    image : string
}

export interface FormInfo {
    name : string,
    email : string,
    message : string
}