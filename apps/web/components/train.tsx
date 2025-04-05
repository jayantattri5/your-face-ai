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
import axios from "axios"
import { BACKEND_URL } from "@/app/config";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import PhotoGuidanceSection from "@/components/Photoguidancesection.";

export default function Train() {
    const {getToken} = useAuth();
    const [zipUrl, setZipUrl] = useState("");
    const [type, setType] = useState("Man");
    const [age, setAge] = useState<string>();
    const [ethinicity, setEthinicity] = useState<string>();
    const [eyeColor, setEyeColor] = useState<string>();
    const [bald, setBald] = useState(false);
    const [name, setName] = useState("")
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

      const token = await getToken();
      const response = await axios.post(`${BACKEND_URL}/ai/training`, input, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
      router.push("/");
    }

  return (
    <div className="flex flex-col items-center justify-left h-screen bg-black text-white">
            <Card className="w-[270px] bg-black text-white border-gray-700">
            <CardHeader>
            <CardTitle className="text-white">Create your model</CardTitle>
            <CardDescription className="text-gray-300">Deploy your new model in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center gap-3">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input 
                      onChange={(e) => setName(e.target.value)} 
                      id="name" 
                      placeholder="Name of the model"
                      className="bg-gray-1000 w-60 text-white border-gray-700" 
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="type" className="text-white">Type</Label>
                    <Select onValueChange={(value) => {
                        setType(value)
                    }}>
                    <SelectTrigger id="type" className="bg-gray-1000 text-white border-gray-700 w-60">
                    <SelectValue placeholder="Select type of the model" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="bg-gray-1000 text-white border-gray-700">
                    <SelectItem value="Man">Man</SelectItem>
                        <SelectItem value="Woman">Woman</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="age" className="text-white">Age</Label>
                    <Input 
                      onChange={(e) => setAge(e.target.value)} 
                      id="age" 
                      placeholder="Age of the model"
                      className="bg-gray-1000 text-white border-gray-700 w-60" 
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="ethinicity" className="text-white">Ethinicity</Label>
                    <Select onValueChange={(value) => {
                        setEthinicity(value)
                    }}>
                    <SelectTrigger id="ethinicity" className="bg-gray-1000 text-white border-gray-700 w-60">
                        <SelectValue placeholder="Select ethinicity of the model" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="bg-gray-1000 text-white border-gray-700">
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
                    <Label htmlFor="eyeclor" className="text-white">Eye Color</Label>
                    <Select onValueChange={(value) => {
                        setEyeColor(value)
                    }}>
                    <SelectTrigger id="eyecolor" className="bg-gray-1000 text-white border-gray-700 w-60">
                        <SelectValue placeholder="Select eyecolor of the model" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="bg-gray-1000 text-white border-gray-700">
                        <SelectItem value="Brown">Brown</SelectItem>
                        <SelectItem value="Blue">Blue</SelectItem>
                        <SelectItem value="Hazel">Hazel</SelectItem>
                        <SelectItem value="Gray">Gray</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name" className="text-white">Bald</Label>
                        <Switch onClick={(e) => {
                            setBald(!bald)
                        }} />
                    </div>
                    
                    {/* Add the photo guidance section right before upload */}
                    <PhotoGuidanceSection />
                    
                    <div className="flex justify-between space-y-1.5">
                        <Upload onUploadDone={(zipUrl) => {
                            setZipUrl(zipUrl)
                        }} />
                    </div>
            </div>
            </CardContent>
            <CardFooter className="flex justify-between">
            <Button 
                variant="default" 
                onClick={() => {
                    router.push("/")
                }}
                className="border-gray-700 text-white hover:bg-gray-950:hover:text-white"
            >
                Cancel
            </Button>
            <Button 
                variant="outline"
                disabled={!zipUrl || !type || !age || !ethinicity || !eyeColor || !name}
                onClick={trainModel}
                className="text-black"
            >
                Create model
            </Button>
            </CardFooter>
        </Card>
      </div>
  );
}