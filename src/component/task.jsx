import '../App.css'
const Tasks = ({ task }) => {
    return (
        <div className="btn">
            <button>{task} task listed</button>
        </div>
    )
}

export default Tasks;