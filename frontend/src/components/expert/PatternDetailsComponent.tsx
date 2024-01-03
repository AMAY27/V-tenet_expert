import React , {useState}from 'react'
import Comments from './Comments';
import { CommentPost } from '../../services/expertServices';
import { IoMdClose } from "react-icons/io";
import { PatternData, PatternDetailsProps } from '../../types';


const PatternDetailsComponent: React.FC<PatternDetailsProps> = ({isOpen, onClose, patternData, expertId, token}) => {
  const [commentText,  setCommentText] = useState("")
  const [patternObject, setPatternObject] = useState<PatternData>(patternData);
  const handleCommentSubmit = () => {
    const commentObj = CommentPost(patternData.id, patternData.websiteId, expertId, commentText, token)
    console.log(commentObj);  
  }
    if(!isOpen) return null
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
        <div className='bg-white p-8 rounded-lg relative z-30 space-y-4 w-3/5 h-4/5 overflow-y-scroll'>
            {patternData.createdByExpertId === expertId ? (
              <>
              <div className='flex justify-between'>
                <div>
                <label htmlFor="patterntype" className='mb-2 block text-md font-medium'>Pattern Type</label>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-300'>
                  <input 
                    value={patternData.patternType}
                    type='text' 
                    name='patterntype' 
                    id='patterntype' 
                    //onChange={handleChange}
                    className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder="Enter Pattern Type"/>
                </div>
                </div>
                <div className='flex items-start space-x-2 text-2xl'><div className='p-2 hover:bg-blue-200 rounded-lg' onClick={onClose}><IoMdClose/></div></div>
              </div>
              <div className='col-span-half'>
                <label htmlFor="patternlink" className='mb-2 block text-md font-medium'>Link</label>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-300'>
                  <input 
                    value={patternData.detectedUrl}
                    type='text' 
                    name='patternlink' 
                    id='patternlink'
                    //onChange={handleChange} 
                    className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6' placeholder="Enter Link where pattern is detected"/>
                </div>
              </div>
              <div className='col-span-full'>
                <label htmlFor="patterndescription" className='mb-2 block text-md font-medium'>Description</label>
                <textarea 
                  value={patternData.description}
                  name="description" 
                  id="patterndescription"
                  //onChange={handleChange}
                  className='block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-green-300' placeholder='Short description for pattern detection and review'></textarea>
              </div>
              <div className='space-x-7 border-b-2 pb-4 flex justify-start'>
                <button className='bg-blue-300 p-2 rounded-lg' type='submit'>Save Changes</button>
              </div>
              <div>
                <h2 className='font-bold text-lg'>Comments</h2>
                <div>
                  {patternData.comments.map((comment)=>(
                    <Comments review={comment} token={token} expertId={expertId}/>
                  ))}
                  <div>
                  <h2 className='font-bold text-xl text-blue-500'>Add Comments</h2>
                  <div className='col-span-full mt-2'>
                    <textarea 
                      name="description" 
                      id="patterndescription"
                      onChange={(e) => setCommentText(e.target.value)}
                      className='block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-green-300' 
                      placeholder='Add a comment'>
                    </textarea>
                  </div>
                  <button className='col-span-1 bg-blue-300 p-2 rounded-lg hover:bg-blue-500 mt-2' onClick={handleCommentSubmit}>Add Comment</button>
                </div>
                </div>
              </div>
              </>
            ) : (
              <>
                <div className='flex justify-between'>
                  <div className='font-bold text-xl text-blue-500'>{patternData.patternType}</div>
                  <IoMdClose onClick={onClose} className='hover:bg-blue-200 rounded-lg p-2 text-4xl'/>
                </div>
                <div className='flex justify-start'>
                  <div className='font-bold text-md text-blue-500'><h2>Added By - {patternData.expertName}</h2></div>
                </div>
                <div>detected at : {patternData.detectedUrl}</div>
                <div>{patternData.description}</div>
                <div>
                  <h2 className='font-bold text-xl text-blue-500'>Previous feedbacks</h2>
                </div>
                <div>
                {patternData.comments.map((comment)=>(
                  <Comments review={comment} token={token} expertId={expertId}/> 
                  ))}
                </div>
                <div>
                  <h2 className='font-bold text-xl text-blue-500'>Comments</h2>
                  <div className='col-span-full mt-2'>
                    {/* <label htmlFor="patterndescription" className='mb-2 block text-md font-medium'>Add a feedback</label> */}
                    <textarea 
                      name="description" 
                      id="patterndescription"
                      onChange={(e) => setCommentText(e.target.value)}
                      className='block w-full rounded-md border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 focus:ring-2 focus:ring-inset focus:ring-green-300' 
                      placeholder='Add a feedback for the dark pattern'>
                    </textarea>
                  </div>
                  <button className='col-span-1 bg-blue-300 p-2 rounded-lg hover:bg-blue-500 mt-2' onClick={handleCommentSubmit}>Submit</button>
                </div>
                <div className="flex justify-end" >
                  <button className='col-span-1 bg-blue-300 p-2 rounded-lg hover:bg-blue-500 mt-2'>Complete Verification</button>
                </div>
              </>
            )}
        </div>
    </div>
  )
}

export default PatternDetailsComponent