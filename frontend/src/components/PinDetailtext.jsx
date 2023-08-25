import React, { useEffect, useState } from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { client, urlFor } from '../client';
import MasonryLayout from './MasonryLayout';
// import { pinDetailMorePinQuery, pinDetailQuery } from '../utils/data';
import Spinner from './Spinner';

function PinDetailtext({user}) {
    const { pinId } = useParams();
    const [pins, setPins] = useState();
    const [pinDetail, setPinDetail] = useState(null);
    const [comment, setComment] = useState('');
    const [addingComment, setAddingComment] = useState(false);
    const {pindId}=useParams()
    const fetchPinDetail=()=>{
        let query=pinDetailQuery(pindId)
        if(query){
            client.fetch(query).then((data)=>{
                setPinDetail(query[0])
                if(data[0]){
                    query=pinDetailMorePinQuery(data[0])
                    client.fetch(query).then((res)=>{
                        setPins(res)

                    })
                }

            })
        }
    }

    useEffect(()=>{
        fetchPinDetail()
    },[pinId])

    if(!pinDetail) return <Spinner/>
  
  return (
    <div className='flex xl:flex-row flex-col m-auto bg-white maxw '>
        <div className=' flex justify-center items-center md:items-start flex-initial'>
            <img alt="user-post" className='rounded-full' src={pinDetail?.image && urlFor(pinDetail.image).url()} />

        </div>
        <div className='w-full p-5 xl:min-w-620'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>   
                <a download href={`${pinDetail.image.asset.url}?dl=`}>
                <MdDownloadForOffline/>
                </a>
                </div>
                <a href={pinDetail.destination} target='_blank' rel='noreferrer'></a>
            </div>
            <div>
                <h1> </h1>
            </div>
        </div>
    </div>
  )
}

export default PinDetailtext