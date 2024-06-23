import { ConnectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";


export const POST = async(request) => {
    const contactDetails = await request.json()
    try {
        const db =await ConnectDB()
        const contactCollection = db.collection('contact')

        const resp = await contactCollection.insertOne(contactDetails)
        return NextResponse.json({message:'contact post successfully'},{status:200})
    } catch (error) {
        return NextResponse.json({message:'Something wrong'},{status:500})
        
    }
};