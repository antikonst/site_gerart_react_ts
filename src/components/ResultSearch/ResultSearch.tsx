import { useContext } from "react"
import { Context } from "../../context"

export const ResultSearch = () => {

  const { takeHasMore, searchBlock, setSearchBlock } = useContext<any>(Context)

  

  return (
    <>
    {searchBlock}
    </>
  )
}

