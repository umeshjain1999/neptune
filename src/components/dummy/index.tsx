import { DummyComponentProps } from './types'

const DummyComponent = ({ title, children }: DummyComponentProps) => {

  return (
    <div>
      <h2>{title}</h2>
      <div className='children'>
        {children}
      </div>
    </div>
  )
}

export default DummyComponent