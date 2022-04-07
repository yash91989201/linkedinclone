import type { NextPage } from 'next'
// importing icons
import {AiFillInfoCircle} from "react-icons/ai"

const News:NextPage = () => {
  return (
    <div className="lg:w-80 hidden xl:block ">
        {/* linkedin news */}
        <div className="p-3 w-full  bg-white dark:bg-dashboardBgDark rounded-lg">
            <p className="flex justify-between items-center">
            <span>LinkedIn News</span>
            <AiFillInfoCircle className="text-lg"/>
            </p>
            <ul className="py-4 w-full space-y-1 text-sm">
                <li>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <p className="p-2">1 hour ago</p>
                </li>
                <li>
                    <p> Natus porro corrupti harum distinctio eveniet. </p>
                    <p className="p-2" >2 hour ago</p>
                </li>
                <li>
                    <p>Recusandae in hic, facere nesciunt quia iusto. </p>
                    <p className="p-2">3 hour ago</p>
                </li>
            </ul>
        </div>
        <img 
            src="/assets/dashboard_promo_img.jpg" 
            alt="" 
            className="w-full my-4 rounded-lg"
        />
    </div>
  )
}

export default News