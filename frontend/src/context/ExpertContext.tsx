import { createContext, useState, ReactNode, useContext } from "react";
import { PatternData } from "../types";

interface ExpertProviderProps {
    children: ReactNode;
  }

// interface website {
//     websiteId : string
// }

interface ExpertContextProps {
    patternData : PatternData;
    setPatternData : (patternObject : PatternData)=> void;
    websiteId : string | null;
    setWebsiteId : (websiteId : string | null)=> void;
    websiteName : string | null;
    setWebsiteName : (websiteName : string | null)=> void;
}

const ExpertContext = createContext<ExpertContextProps | undefined>(undefined);

export const ExpertProvider: React.FC<ExpertProviderProps> = ({ children }) => {
    const [websiteId, setWebsiteId] = useState<string | null>(null);
    const [websiteName, setWebsiteName] = useState<string | null>(null);
    const [patternData, setPatternData] = useState<PatternData>({
        comments : [],
        createdAt : "",
        createdByExpertId : "",
        description : "",
        detectedUrl : "",
        expertName: "",
        expertVerifications : [],
        id : "",
        isAutoGenerated : true,
        patternType: "",
        patternPhase: "",
        websiteId : "",
        phaseColor : "",
        isPatternExists : false
    });
    const contextData: ExpertContextProps = {
        websiteId,
        setWebsiteId,
        websiteName,
        setWebsiteName,
        patternData,
        setPatternData
    };

    return(
        <ExpertContext.Provider value={contextData}>{children}</ExpertContext.Provider>
    )
}
export const useExpertContext = () => {
    const context = useContext(ExpertContext);
    if (!context) {
      throw new Error("useExpertContext must be used within an ExpertProvider");
    }
    return context;
};