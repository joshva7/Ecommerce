import loading from '../assets/loading.gif'
const Loading = () => {
    return (
        <div className='flex justify-center items-center flex-col w-full my-60'>
            <img src={loading} />
            <span >
                Loading...
            </span>
        </div>
    )
}

export default Loading