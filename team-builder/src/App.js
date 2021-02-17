import React, { useState, useEffect} from 'react'
import Member from './Member'
import initialMemberList from './MemberList'
import FormData from './Form'

import './App.css';

const initialForm = {
  name:"",
  email:"",
  role:""
}


function App() {
  const [team, setTeam] =useState([])
  const [form,setForm] = useState(initialForm)
  
  useEffect(() => {
    initialMemberList() => res => setTeam(res.data)
    
  }, [])

  const submit = () => {
    setTeam([...team, form])
    setForm(initialForm)
  }

  const update =(name,value)=> {
    setForm({...form, [name]:value})
  }

  return (
    <div className="App">
      <h1>Team Members</h1>

      <FormData form={form} update={update} submit={submit}/>

          {
            team.map(member => {
              return(
                <Member details={member}/>

              )
            })
          } 
          
            

    </div>
  );
}

export default App;
