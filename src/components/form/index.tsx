import { Field, Form, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import 'yup-phone-lite' //OPTIMIZE
import styled from '@emotion/styled'
interface InitialValues {
  name: string
  email: string
  phone: string
}

const FormControl = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:0.5rem;
  label {
    width: 200px;
  }
`
const Button = styled.button`
  border: 0.1rem solid;
  padding: 0.25rem 1rem;
  &:hover{
  opacity :0.7;
  }
`

const FieldStyle = styled.input`
  font-weight: normal;
  padding: .25rem;
  border: 2px solid;
  background: #dfdfdf;
  color: inherit;
  &::placeholder {
    color:#848484
  }
`

const DummyForm = () => {

  const initialValues: InitialValues = {
    name: "",
    email: "",
    phone: "",
  }
  const validationSchema = Yup.object({
    name: Yup.string().required('Required field'),
    email: Yup.string().email('Invalid format').required('Required field'),
    phone: Yup.string().phone('IN', 'Phone number is not valid'),
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <FormControl>
          <label htmlFor='name'>Name</label>
          <div>
            <Field name='name' id='name' placeholder='Neptune' type="text" component={FieldStyle} />
            <ErrorMessage name='name' />
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor='email'>Email</label>
          <div>
            <Field name='email' id='email' placeholder='neptune@gma.com' type="email" component={FieldStyle} />
            <ErrorMessage name='email' />
          </div>
        </FormControl>
        <FormControl>
          <label htmlFor='phone'>Phone Number</label>
          <div>
            <Field name='phone' id='phone' placeholder='70455***41' type="tel" component={FieldStyle} />
            <ErrorMessage name='phone' />
          </div>
        </FormControl>
        <Button type='submit'>Submit</Button>
      </Form>
    </Formik>
  )
}

export default DummyForm