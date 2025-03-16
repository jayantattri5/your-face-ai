import { BACKEND_URL } from "@/app/config";
import { useAuth } from "@clerk/nextjs"
import axios from "axios";
import toast from "react-hot-toast";
export interface TPack {
    id: string;
    name: string;
    imageUrl1: string;
    imageUrl2: string;
    description: string;
}

export function PackCard(props: TPack & {selectedModelId: string}) {
    const { getToken } = useAuth()

    return <div className="border rounded-xl hover:border-red-300 border-2 p-2 cursor-pointer" onClick={async() => {
        toast("Pack generation started successfully")
        const token = await getToken();
        await axios.post(`${BACKEND_URL}/pack/generate`, {
            packId: props.id,
            modelId: props.selectedModelId
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }}>

        <div className="relative flex justify-center gap-4 mb-3">
            <img src={props.imageUrl1} alt="Image 1" className="w-28 h-40 object-cover rounded" />
            <img src={props.imageUrl2} alt="Image 2" className="w-28 h-40 object-cover rounded" />
        </div>

        <div className=" text-xl font-bold pb-2 text-gray-300">
            {props.name}
        </div>

        <div className="text-sm text-gray-300">
            {props.description}
        </div>
    </div>
  }