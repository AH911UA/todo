import './todo.scss';


export default function Todo({txt}) {
    return (
        <div className='todo'>
            <p className='todo_desc'> {txt} </p>
        </div>
    )
}