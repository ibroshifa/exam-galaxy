import Image from "next/image";

export default function CoverImage({grade,subject}:{grade:Number,subject:String}){
    return <>
        <div>
            <Image className="rounded-xl" src={`/book_images/${subject.toLocaleLowerCase()}-grade-${grade.toLocaleString()}.jpg`} 
                    alt={`Grade ${grade.toString()} ${subject} textbook coverpage`} width={1000} height={1000}/>
        </div>

    
    </>
}