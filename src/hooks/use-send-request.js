import axios from "axios";

const useSendRequest = (reqObj,setError,otherFun) => {
        const addTask = async (event) => {
            if(event){
                event.preventDefault();
            }
            try {
                let res = await axios(reqObj)
                console.log(res.data.message);
                setError(false);
                otherFun(res.data);
            } catch (error) {
                setError(true);
            }
        }
        return addTask;
}
export default useSendRequest;