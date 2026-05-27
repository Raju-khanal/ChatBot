import { useState } from "react"
import { KEY } from "../API/Api"
import { URL } from "../API/Api"
function SearchBar() {
    const [question, setQuestion] = useState("");
    const [result, setResult] = useState("");
    const handleQuestion = async () => {
        const res = await fetch(`${URL}${KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "contents": [
                    {
                        "role": "user",
                        "parts": [
                            { "text": question }
                        ]
                    }
                ]

            })
        });
        const data = await res.json();
        const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        setResult(JSON.stringify(answer) || "DARLING.... ? I Would like to req to FILl correct Q !");
    }

    return (
        <div className="bg-pink-500 min-w-screen h-screen">
            <div className="flex justify-center flex-col items-center">
                <div className="min-w-100 h-180 text-3xl text-center text-white">
                    <h2 className="text-cyan-500 bg-red-500 w-screen text-bold text-4xl">GEM-raju-v-3.0.1</h2>
                    <div className="h-140 mt-5 w-full align-center bg-zinc-700 overflow-scroll">


                        {result}


                    </div>
                </div>
                <div className="w-75 h-20 bg-zinc-700 rounded-4xl flex">
                    <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} className="w-full h-full rounded-4xl text-white outline-none" placeholder="Stop LUST 😘" />
                    <button onClick={handleQuestion} className="bg-red-500 w-20 text-mauve-200 text-2xl rounded-tr-3xl cursor-pointer active:bg-blue-600 rounded-br-3xl border-none">
                        ASK
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;