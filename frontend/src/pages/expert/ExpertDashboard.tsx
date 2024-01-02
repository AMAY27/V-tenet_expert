import React, { useEffect, useState } from 'react'
import { getWebsites } from '../../services/expertServices'
import Navbar from '../../components/expert/Navbar';

interface WebsiteData {
    baseUrl: string;
    description : string;
    websiteName: string;
    phase : string;
    websiteId : string;
    isCompleted : boolean;
    expertIds : [string];
}

const ExpertDashboard : React.FC = () => {
    const [websiteData, setWebsiteData] = useState<WebsiteData[]>([])

    const id  = localStorage.getItem("userId")
    const authToken = localStorage.getItem("authToken")
    const getWebsiteData = async () => {
        setWebsiteData([]);
        if(id && authToken){
            let websites : any = []
            websites = await getWebsites(id, authToken);
            setWebsiteData(websites)  
            console.log(websiteData);
        }
    }

    useEffect(()=>{
        getWebsiteData();
    },[])
  return (
    <>
        <Navbar/>
        <div className='grid md:grid-cols-4 mx-8 my-12'>
            {websiteData.map((website, index)=>(
                <div key={website.websiteId} className='p-3 my-3 mx-4 shadow-md bg-white rounded-xl'>
                    <div><h2 className='font-bold text-md'>{website.websiteName}</h2></div>
                </div>
            ))}
        </div>
    </>
  )
}

export default ExpertDashboard