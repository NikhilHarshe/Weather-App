import React, { useEffect, useState } from 'react'
import { getMemberDetail } from '../services/opretions/memberApi';
import { useParams } from 'react-router-dom';


const MemberDetails = () => {

    const { memberId } = useParams();
    const [data1, setData1] = useState([]); // Change setData to setData1

    const fetchdata = async () => {
        try {
            const res = await getMemberDetail(memberId);

            console.log("This is event data in Event Box ", res.data);
            setData1(res.data); // Change setData to setData1
            console.log("This is event data in Event Box 3 ", data1);
        } catch (error) {
            console.log("Event data Can not Fetch ", error);
        }
    }

    useEffect(() => {
        fetchdata();
      }, []);

    console.log("This is event data in Event Box 2 ", data1);



    //   const newDate = data?.eventDate.substring(0, 10);

    //   const edithandler = () => {
    //     dispatch(setEvent(data));
    //     dispatch(setEditEvent(true));
    //     navigate(`/event-edite/${data?._id}`);
    //   }
    //   const deletehandler = () => {
    //     // const eventId = data?._id;
    //     const res = deleteEvent(eventId, token)

    //     console.log("res in eventDetails ", res);

    //     if (!res.success){
    //       // toast.success("Event Deleted Successfully");
    //       dispatch(setEvent(null));
    //       navigate("/ShowEvent");
    //     }

    //   }

    return (
        <div className=' w-10/12 flex mx-auto justify-between gap-3 mt-6'>
            <div>
                <p>Home/{data1.accountType}/ <span>{data1.firstName} {data1.lastName} </span> </p>
                <p>{data1.firstName} </p>
            </div>
            <div>
                <img src={data1.image} alt={data1.firstName} width={400} />
            </div>
        </div>
    )
}

export default MemberDetails
