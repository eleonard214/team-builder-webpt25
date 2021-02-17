import React from 'react'


export default function FormData(props) {
    const { form, update, submit } = props
    
    const handleSubmit = event =>{
        event.preventDefault()
        submit()
    }
    
    const handleChange = event => {
        const {name, value} = event.target
        update(name, value)
    }
    
    return (
        <form className='form container' onSubmit={handleSubmit}>
        <div className='form inputs'>

            <label>
                Name
                <input
                    type="text"
                    name="name"
                    placeholder="please type a name..."
                    value={form.name}
                    onchange={handleChange}/>
            </label>

            <label>
                Email
                <input
                    type="email"
                    name="email"
                    placeholder="please type an email..."
                    value={form.email}
                    onChange={handleChange}/>
            </label>

            <label>
                Role
                    <select name="role" value={form.value} onChange={handleChange}>
                        <option value="">--Select a Role--</option>
                        <option value="Junior of Accounts">Junior of Accounts</option>
                        <option value="Junior of Business">Junior of Business</option>
                        <option value="Junior of Costs">Junior of Costs</option>
                        <option value="Junior of Delivery">Junior of Delivery</option>
                        <option value="Junior of Ethics">Junior of Ethics</option>
                        <option value="Junior of Forms">Junior of Forms</option>
                        <option value="Junior of Generalities">Junior of Generalities</option>
                        <option value="Junior of Heads">Junior of Heads</option>
                        <option value="Junior of Idiots">Junior of Idiots</option>
                        <option value="Junior of Juniors">Junior of Juniors</option>
                    </select>
            </label>
        </div>

        <div className="submit">
            <button>Submit</button>
        </div>
    </form>
)
}