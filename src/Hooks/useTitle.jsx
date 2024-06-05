import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - mMarket.com`
    },[title])
}
export default useTitle;