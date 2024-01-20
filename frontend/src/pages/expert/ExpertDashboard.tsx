import React, { useEffect, useState, useContext, useCallback } from 'react'
import { getWebsites } from '../../services/expertServices'
import Navbar from '../../components/expert/Navbar';
import { useNavigate } from 'react-router-dom';
import { setRedirectCallback } from "../../utils/AxiosHelper";
import AuthContext from "../../context/AuthContext1";
import withExpertAuth from '../../hoc/withExpertAuth';
import { toast } from "react-toastify";
import { WebsiteData } from '../../types';
import { Tooltip } from '@mui/material';

const ExpertDashboard : React.FC = () => {
    const authContext = useContext(AuthContext);
    useEffect(() => {
        setRedirectCallback(() => {
          authContext?.logoutUser();
        });
    
        return () => {
          setRedirectCallback(null);
        };
    }, [authContext]);
    const [websiteData, setWebsiteData] = useState<WebsiteData[]>([])
    const navigate = useNavigate();

    const id  = localStorage.getItem("userId")
    const authToken = localStorage.getItem("authToken")
    const getWebsiteData = useCallback( async () => {
        setWebsiteData([]);
        try {
            if(id && authToken){
                let websites : any = []
                websites = await getWebsites(id);
                setWebsiteData(websites) 
            }
        } catch (error) {
            if (error instanceof Error) {
                toast.error(`Error: ${error.message}`);
              } else {
                toast.error("An unknown error occurred.");
            }
        }
    },[id,authToken])

    useEffect(()=>{
        getWebsiteData();
    },[getWebsiteData])

    const handleClick = (id:string, websiteName: string) => {
        sessionStorage.setItem("websiteId", id);
        sessionStorage.setItem("websiteName", websiteName);
        navigate('/expert/website')
    }

  return (
    <>
        <Navbar/>
        <div className='grid md:grid-cols-3 mx-8 my-12 bg:white'>
            {websiteData.map((website, index)=>(
                <div key={website.websiteId} 
                    className='p-3 my-3 mx-4 shadow-md bg-white rounded-xl border-blue-300 cursor-pointer'  
                >
                    <div>
                        <div className="flex justify-between items-center">
                            <h2 className='font-bold text-xl text-blue-500'>{website.websiteName}</h2>
                            <Tooltip title={website.hoverText} arrow>
                                <div className={`p-2 rounded-2xl ${website.phaseColor}`}>{website.phaseText}</div>
                            </Tooltip>
                        </div>
                        <p>{website.baseUrl}</p>
                        <button 
                            className='w-full my-4 py-1 px-2 border-2 border-blue-500 rounded-xl font-bold hover:bg-blue-300'
                                onClick={() => handleClick(website.websiteId, website.websiteName)}
                            >Go To Website
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default withExpertAuth(ExpertDashboard)