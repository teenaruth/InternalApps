import React from 'react';

import { data, endpoint } from './data';
import { useState ,useEffect} from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';



const DynamicForm = ({currentItem}) => {
  const [selected, setSelected] = useState(null)
const fieldTypeSchema = data.reduce((schema, field) => {
  
return {...schema, [field.name]: Yup[field.validator]};
}, {});

const fieldDefaults = data.reduce((defaults, field) => {
  
return {...defaults, [field.name]: field.initialValue};
}, {});

const validationSchema = Yup.object({
...fieldTypeSchema,
});

useEffect(() => {
  setSelected(0)
}, [])
const toggle = (i) => {
  if (selected === i) return setSelected(null)
  setSelected(i)
}
var uniqueNames = [];
for(let i = 0; i< data.length; i++){    
    if(uniqueNames.indexOf(data[i].header) === -1){
        uniqueNames.push(data[i].header);        
    }        
}

return(
<>
  <Formik

initialValues={fieldDefaults}

validationSchema={validationSchema}

onSubmit={(values) => {

 console.log(JSON.stringify(values, null, 2));

}}

> 
{({ isSubmitting }) => (
<Form  className="form" >
{/* <div className="container"> */}
  <div>
  {uniqueNames.map((items,i)=>{


return(<section className="question" >
 <div className="title" onClick={() => toggle(i)}>
<h4 className="hd-btn">{items}</h4>

<span>{selected === i ? '-' : '+'}</span>
</div>
<div className={selected === i ? 'content show' : 'content'} > 
{data.filter(item=> item.header==items && item.stream.includes(currentItem)).map(filteredlist=>(
  <>
   <div className="form-row" key={filteredlist.id}>
   <label htmlFor={filteredlist.name} className="form-label">
{filteredlist.label}
</label>
{filteredlist.type=="text" &&
<Field type={filteredlist.type} name={filteredlist.name}  id={filteredlist.id} className="form-input" />}
    

{filteredlist.type=="select" &&   
      <Field as={filteredlist.type} name={filteredlist.name}>
        
{
  endpoint.filter(item=>item.type== filteredlist.label && item.stream==currentItem).map(filterdata=>(
      
  
      <option value={filterdata.value}>
      {filterdata.label}</option>
      
      ))
    }
      </Field>}
  
<ErrorMessage name={filteredlist.name}>

{msg => <div className="error">{msg}</div>}

</ErrorMessage>
 </div>
  </>
))} 
</div> 
</section>
)
}) 
}
  </div>
<button type='submit' className='btn' disabled={isSubmitting}> submit</button>
{/* </div> */}
</Form>
)}
  </Formik>

</>
)

};


export default DynamicForm;