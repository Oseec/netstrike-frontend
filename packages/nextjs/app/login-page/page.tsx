import Button from "~~/components/Button";



export default function page () {
    return (
        <div className=" w-full min-h-screen flex flex-col items-center justify-between text-center  pt-12 pb-5 px-4 gap-[12%] " >
            <div className=" h-full min-h-[300px] flex flex-col justify-between items-center  w-full max-w-[504px] ">
                <div  className=" w-full  text-center">
                <span className="flex flex-row items-end justify-center w-full  p-0 gap-2 " ><h1 className="text-[64px] font-medium leading-none p-0 m-0 text-[#46FD25] " >NETSTRIKE</h1><small className="text-[#46FD25] text-2xl font-medium m-0 " >v0.1</small>  </span>
                <h2 className="text-[#46FD25] text-5xl font-medium " >Secure Terminal Login</h2>
                </div>
               <Button/>

            </div>


            <p className="w-full max-w-[1041px] text-[#46FD25] text-xl font-medium mb-5 " >Access to this terminal is restricted under the Secure Operations Act. 
                Unauthorized access will trigger security protocols, including but not 
                limited to system lockdowns, excessive audit logs, and a passive-aggressive IT 
                ticket in your name. Repeat violations may lead to enforced policy reviews 
                and prolonged eye contact from security. Proceed with dignity.</p>
            

                <div className="w-full bg-[#086333]  max-w-[1849px] py-3 px-5  " >
                    <p className="text-[#46FD25] text-2xl font-medium m-0 " >HELP | 96008N1 8N1 | NOR | NS OS 1.1 | VT102 | Online | ttyACM0</p>
            
            </div>
        </div>

        
        
        
    )
}