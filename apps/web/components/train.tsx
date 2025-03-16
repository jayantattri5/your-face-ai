"use client";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Upload } from "@/components/ui/upload"
import { useState } from "react"
import { TrainModelInput } from "common/inferred"
import axios  from "axios"
import { BACKEND_URL } from "@/app/config";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import toast from "react-hot-toast"

  
export function Train() {
    const {getToken} = useAuth();
    const [zipUrl, setZipUrl] = useState("");
    const [type, setType] = useState("Man");
    const [age, setAge] = useState<string>();
    const [ethinicity, setEthinicity] = useState<string>();
    const [eyeColor, setEyeColor] = useState<string>();
    const [bald, setBald] = useState(false);
    const [name, setName] = useState("");
    const [modelTraining, setModelTraining] = useState(false);
    const router = useRouter();

    async function trainModel() {
        // Add type here
       const input = {
            zipUrl,
            type,
            age: parseInt(age ?? "0"),
            ethinicity,
            eyeColor,
            bald,
            name
       };

      const token = await getToken()
      setModelTraining(true)
      const response = await axios.post(`${BACKEND_URL}/ai/training`, input, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    setModelTraining(false)
    toast("Model has started to train. It might take around ~20 minutes for the model to train")
    }

  return (
    <div className="flex flex-col items-center justify-left h-screen">
            <Card className="w-[260px]">
            <CardHeader>
            <CardTitle>Create your model</CardTitle>
            <CardDescription>Deploy your new model in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-3">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input onChange={(e) => setName(e.target.value)} id="name" placeholder="Name of the model" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="type">Type</Label>
                    <Select onValueChange={(value) => {
                        setType(value)
                    }}>
                    <SelectTrigger id="type">
                    <SelectValue placeholder="Select type of the model" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                    <SelectItem value="Man">Man</SelectItem>
                        <SelectItem value="Woman">Woman</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="age">Age</Label>
                    <Input onChange={(e) => setAge(e.target.value)} id="age" placeholder="Age of the model" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="ethinicity">Ethinicity</Label>
                    <Select onValueChange={(value) => {
                        setEthinicity(value)
                    }}>
                    <SelectTrigger id="ethinicity">
                        <SelectValue placeholder="Select ethinicity of the model" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        <SelectItem value="White">White</SelectItem>
                        <SelectItem value="Black">Black</SelectItem>
                        <SelectItem value="Asian_American">Asian American</SelectItem>
                        <SelectItem value="East_Asian">East Asian</SelectItem>
                        <SelectItem value="South_East_Asian">South East Asian</SelectItem>
                        <SelectItem value="South_Asian">South Asian</SelectItem>
                        <SelectItem value="Middle_Eastern">Middle Eastern</SelectItem>
                        <SelectItem value="Pacific">Pacific</SelectItem>
                        <SelectItem value="Hispanic">Hispanic</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="eyeclor">Eye Color</Label>
                    <Select onValueChange={(value) => {
                        setEyeColor(value)
                    }}>
                    <SelectTrigger id="eyecolor">
                        <SelectValue placeholder="Select eyecolor of the model" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                        <SelectItem value="Brown">Brown</SelectItem>
                        <SelectItem value="Blue">Blue</SelectItem>
                        <SelectItem value="Hazel">Hazel</SelectItem>
                        <SelectItem value="Gray">Gray</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Bald</Label>
                        <Switch onClick={(e) => {
                            setBald(!bald)
                        }} />
                    </div>
                        <div className="flex flex-col space-y-1.5">
                            <Upload onUploadDone={(zipUrl) => {
                                setZipUrl(zipUrl)
                            }} />
                        </div>
            </div>
            </CardContent>
            <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => {
                router.push("/")
            }}>Cancel</Button>
            <Button 
                disabled={modelTraining || !name || !zipUrl || !type || !age || !ethinicity || !eyeColor } 
                onClick={trainModel}
            >{modelTraining ? "Sending" : "Create model"}</Button>
            </CardFooter>
            </Card>
        </div>
    )
}