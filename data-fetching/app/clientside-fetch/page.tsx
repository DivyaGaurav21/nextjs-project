'use client'
import React , {useEffect , useState} from 'react'
import Loader from '../components/Loader'
import Users from '../components/Users'

const page = () => {
const [ loading , setLoading ] = useState(false);
const [users , setUsers] = useState([]);
const [skipuser , setSkipuser] = useState(0);

useEffect(() => {
    async function fetchingUser(){
        setLoading(true);
        const data = await fetch(`https://dummyjson.com/users?limit=20&skip=${skipuser}`);
        const userData = await data.json();
        // console.log(userData)
        setUsers(userData.users);
        setLoading(false);
    }
    fetchingUser();
}, [skipuser])


  return (
    <div>
        {loading ?
         <Loader/>
          :
           <Users users= {users} setSkipuser={setSkipuser} skipuser={skipuser}/>
           } 
    </div>
  )
}

export default page