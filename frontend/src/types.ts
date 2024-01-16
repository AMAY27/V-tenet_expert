import React from "react";

export type User = {
  sub: string;
  email: string;
  role: string;
  exp: number;
  iat: number;
};

export interface UserCredentials extends Pick<User, "email" | "role"> {
  password: string;
}

export interface AuthContextProps {
  user: User | null;
  authTokens: string | null;
  setAuthTokens: (tokens: string | null) => void;
  setUser: (user: User | null) => void;
  signUpUser: (e: React.FormEvent) => Promise<void>;
  loginUser: (user: UserCredentials) => Promise<boolean>;
  logoutUser: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export type Website = {
  websiteId: string;
  baseUrl: string;
  websiteName: string;
  additionalUrls?: string[];
  description?: string;
  isCompleted: boolean;
  phase: string; // phase states: "Initial" | "Automation" | "Manual" | "Feedback" | "Finished"
};

export interface WebsiteResponse extends Website {
  userId: string;
}

export interface WebsiteCardProps extends Website {}

export interface WebsiteDetails
  extends Pick<
    Website,
    "websiteName" | "baseUrl" | "description" | "additionalUrls"
  > {}

export interface WebsiteOnboardingFormProps {
  open: boolean;
  onClose: () => void;
  fullScreen?: boolean;
  onSuccess: () => void;
}

export interface Reply {
    expertId : string;
    expertName : string;
    content : string;
    createdAt : string;
  }
export interface Comment {
    id: string,
    websiteId: string,
    patternId: string,
    expertId: string,
    expertName: string,
    content: string,
    createdAt: string,
    replies: Reply[]; 
  }
  
export interface verification {
    expertId: string;
    expertVerificationPhase: string;
    expertName : string;
  }
export interface PatternData {
      comments : Comment[];
      createdAt : string;
      createdByExpertId : string;
      description : string;
      detectedUrl : string;
      expertName: string;
      expertVerifications : verification[];
      id : string;
      isAutoGenerated : boolean;
      patternType: string;
      patternPhase: string;
      websiteId : string;
      phaseColor : string;
      phaseText : string;
      hoverText : string;
      isPatternExists : boolean;
}

export interface expertData {
  id: string;
  name: string;
}
export interface WebsiteData {
  baseUrl: string;
  description : string;
  websiteName: string;
  phase : string;
  websiteId : string;
  isCompleted : boolean;
  expertDetails : expertData[];
  userId : string;
  additionalUrls : [];
  primaryExpertId : string;
  phaseColor : string;
  phaseText : string;
}

export interface PatternCardProps {
  loggedInExpert: string;
  openModal : () => void;
  patternData : PatternData;
}

export interface PatternAdditionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface PatternDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    expertId : string;
}

export interface VerifyPatternProps {
    isOpen : boolean,
    onClose : ()=>void,
    patternExists : boolean,
    expertId : string;
}

export interface ServiceResponse {
  status : number;
  patterns: PatternData[];
}